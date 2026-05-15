param(
  [int]$Port = 5500,
  [string]$Root = (Get-Location).Path
)

$rootFull = [System.IO.Path]::GetFullPath($Root)
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $Port)
$listener.Start()
Write-Host ("Serving {0} at http://localhost:{1}/" -f $rootFull, $Port)

$contentTypes = @{
  "index.html" = "text/html; charset=utf-8"
  "style.css"  = "text/css; charset=utf-8"
  "script.js"   = "application/javascript; charset=utf-8"
  "data.json" = "application/json; charset=utf-8"
  "logo.png"  = "image/png"
  "banner.jpg"  = "image/jpeg"
  "icon.jpeg" = "image/jpeg"
  "placeholder.gif"  = "image/gif"
  "icon.svg"  = "image/svg+xml"
  "favicon.ico"  = "image/x-icon"
  "hero.webp" = "image/webp"
  "README.txt"  = "text/plain; charset=utf-8"
}

function Send-Response {
  param(
    [System.Net.Sockets.NetworkStream]$Stream,
    [int]$StatusCode,
    [string]$StatusText,
    [byte[]]$Body,
    [string]$ContentType = "text/plain; charset=utf-8"
  )

  $headers = "HTTP/1.1 $StatusCode $StatusText`r`n" +
    "Connection: close`r`n" +
    "Content-Type: $ContentType`r`n" +
    ("Content-Length: {0}`r`n" -f $Body.Length) +
    "`r`n"

  $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($headers)
  $Stream.Write($headerBytes, 0, $headerBytes.Length)
  if ($Body.Length -gt 0) {
    $Stream.Write($Body, 0, $Body.Length)
  }
}

while ($true) {
  $client = $null
  try {
    $client = $listener.AcceptTcpClient()
    $stream = $client.GetStream()
    $reader = [System.IO.StreamReader]::new($stream, [System.Text.Encoding]::ASCII, $false, 8192, $true)
    $line = $reader.ReadLine()
    if ([string]::IsNullOrWhiteSpace($line)) {
      $client.Close()
      continue
    }

    $parts = $line.Split(' ')
    $method = $parts[0]
    $rawTarget = if ($parts.Length -ge 2) { $parts[1] } else { "/" }

    while ($true) {
      $h = $reader.ReadLine()
      if ($null -eq $h -or $h -eq "") { break }
    }

    if ($method -ne "GET" -and $method -ne "HEAD") {
      $body = [System.Text.Encoding]::UTF8.GetBytes("Method Not Allowed")
      Send-Response -Stream $stream -StatusCode 405 -StatusText "Method Not Allowed" -Body $body
      $client.Close()
      continue
    }

    $pathPart = $rawTarget.Split('?')[0]
    if ($pathPart -eq "/") { $pathPart = "/index.html" }
    $rel = [System.Uri]::UnescapeDataString($pathPart).TrimStart('/')
    $rel = $rel -replace '/', '\'

    $full = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($rootFull, $rel))
    if (-not $full.StartsWith($rootFull, [System.StringComparison]::OrdinalIgnoreCase)) {
      $body = [System.Text.Encoding]::UTF8.GetBytes("Forbidden")
      Send-Response -Stream $stream -StatusCode 403 -StatusText "Forbidden" -Body $body
      $client.Close()
      continue
    }

    if (-not (Test-Path -LiteralPath $full -PathType Leaf)) {
      $body = [System.Text.Encoding]::UTF8.GetBytes("Not Found")
      Send-Response -Stream $stream -StatusCode 404 -StatusText "Not Found" -Body $body
      $client.Close()
      continue
    }

    $ext = [System.IO.Path]::GetExtension($full).ToLowerInvariant()
    $ct = if ($contentTypes.ContainsKey($ext)) { $contentTypes[$ext] } else { "application/octet-stream" }
    $bytes = if ($method -eq "HEAD") { [byte[]]::new(0) } else { [System.IO.File]::ReadAllBytes($full) }
    Send-Response -Stream $stream -StatusCode 200 -StatusText "OK" -Body $bytes -ContentType $ct
  } catch {
    try {
      if ($client -and $client.Connected) { $client.Close() }
    } catch {}
  } finally {
    try {
      if ($client) { $client.Close() }
    } catch {}
  }
}


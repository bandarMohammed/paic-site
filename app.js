/* ═══════════════════════════════════════════════
   PAIC — App JS
   ═══════════════════════════════════════════════ */

/* ───────────── i18n DICTIONARIES ───────────── */
const I18N = {
  ar: {
    'brand.name': 'PAIC',
    'brand.sub': 'نادي البرمجة والذكاء الاصطناعي',

    'nav.home': 'الرئيسية',
    'nav.offers': 'العروض',
    'nav.about': 'عن النادي',
    'nav.contact': 'تواصل',
    'nav.admin': 'الإدارة',

    'home.badge': 'جامعة الطائف · 2026',
    'home.title1': 'برمجة',
    'home.title2': '. ذكاء اصطناعي',
    'home.title3': '. مستقبل.',
    'home.subtitle': 'نادي البرمجة والذكاء الاصطناعي بجامعة الطائف — مجتمع للمبدعين، يقدم لك خصومات حصرية في أفضل المطاعم والكوفيهات.',
    'home.cta': 'استعرض العروض',
    'home.cta2': 'تعرف علينا',
    'home.stat1': 'شريك',
    'home.stat2': 'خصم للطلاب',
    'home.stat3': 'إبداع',
    'home.featTitle': 'لماذا تنضم لنادينا؟',
    'home.feat1Title': 'خصومات حصرية',
    'home.feat1Desc': 'احصل على خصومات خاصة في أفضل المطاعم والمقاهي حول الجامعة',
    'home.feat2Title': 'ورش وفعاليات',
    'home.feat2Desc': 'ورش عمل دورية في البرمجة والذكاء الاصطناعي',
    'home.feat3Title': 'مجتمع نشط',
    'home.feat3Desc': 'انضم لشبكة من الطلاب الموهوبين والمبدعين',

    'offers.title': 'العروض والخصومات',
    'offers.subtitle': 'خصومات حصرية لطلاب جامعة الطائف عبر شركاء النادي',
    'offers.search': 'ابحث عن مطعم أو كوفي...',
    'offers.all': 'الكل',
    'offers.restaurants': 'مطاعم',
    'offers.cafes': 'كوفيهات',
    'offers.services': 'خدمات',
    'offers.counter': 'عدد الشركاء:',
    'offers.emptyTitle': 'لا توجد نتائج',
    'offers.emptyDesc': 'جرّب كلمات بحث مختلفة أو غيّر الفلتر',
    'offers.viewMap': 'عرض الموقع',
    'offers.openExt': 'فتح في الخرائط',

    'about.title': 'عن النادي',
    'about.subtitle': 'نادي البرمجة والذكاء الاصطناعي - جامعة الطائف',
    'about.missionTitle': 'مهمتنا',
    'about.missionDesc': 'تمكين طلاب جامعة الطائف من إتقان مهارات البرمجة والذكاء الاصطناعي عبر ورش عمل، مشاريع، وفعاليات تجمع المبدعين تحت سقف واحد.',
    'about.visionTitle': 'رؤيتنا',
    'about.visionDesc': 'أن نكون النادي الأول في المنطقة الذي يقود المبادرات التقنية الطلابية.',
    'about.valueTitle': 'قيمنا',
    'about.valueDesc': 'الإبداع، التعاون، التعلم المستمر، والمسؤولية الاجتماعية.',
    'about.activitiesTitle': 'أنشطتنا',
    'about.activitiesDesc': 'ورش عمل، هاكاثونات، محاضرات تقنية، ومسابقات برمجية.',

    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'تابعنا على منصات التواصل الاجتماعي',
    'contact.allTitle': 'جميع حسابات النادي',

    'footer.name': 'نادي البرمجة والذكاء الاصطناعي',
    'footer.uni': 'جامعة الطائف',
    'footer.copy': '© 2026 PAIC · جميع الحقوق محفوظة',

    'modal.loginTitle': 'دخول الإدارة',
    'modal.loginSub': 'أدخل كلمة مرور الإدارة للمتابعة',
    'modal.passPh': 'كلمة المرور',
    'modal.login': 'تسجيل الدخول',
    'modal.cancel': 'إلغاء',
    'modal.save': 'حفظ',
    'modal.update': 'تحديث',
    'modal.addTitle': 'إضافة عرض جديد',
    'modal.editTitle': 'تعديل العرض',
    'modal.openMap': 'افتح في خرائط جوجل',
    'modal.changePassTitle': 'تغيير كلمة المرور',
    'modal.changePassSub': 'للأمان، يجب إدخال كلمة المرور الحالية أولاً',
    'modal.oldPass': 'كلمة المرور الحالية',
    'modal.newPass': 'كلمة المرور الجديدة',
    'modal.confirmPass': 'تأكيد كلمة المرور الجديدة',

    'form.shopName': 'اسم المحل',
    'form.category': 'التصنيف',
    'form.discount': 'كابشن الخصم',
    'form.discountPh': 'مثال: 20% لكل طالب جامعي بشرط إبراز البطاقة',
    'form.mapUrl': 'رابط Google Maps (اختياري)',
    'form.mapQuery': 'اسم المكان للبحث في الخريطة',
    'form.mapQueryPh': 'مثال: شاورما البلد الطائف',
    'form.logo': 'شعار المحل',
    'form.uploadLogo': 'اختر صورة الشعار',

    'fab.add': 'إضافة عرض',
    'fab.pass': 'كلمة المرور',
    'fab.logout': 'خروج',

    'toast.added': 'تمت الإضافة بنجاح',
    'toast.updated': 'تم التحديث بنجاح',
    'toast.deleted': 'تم الحذف',
    'toast.passUpdated': 'تم تحديث كلمة المرور',
    'toast.loggedIn': 'مرحباً، تم تسجيل دخولك',
    'toast.loggedOut': 'تم تسجيل الخروج',
    'err.wrongPass': 'كلمة المرور غير صحيحة',
    'err.passMismatch': 'كلمتا المرور غير متطابقتين',
    'err.passShort': 'كلمة المرور قصيرة جداً (4 أحرف على الأقل)',
    'err.fillAll': 'يرجى تعبئة جميع الحقول',
    'confirm.delete': 'هل أنت متأكد من حذف هذا العرض؟',
  },
  en: {
    'brand.name': 'PAIC',
    'brand.sub': 'Programming & AI Club',

    'nav.home': 'Home',
    'nav.offers': 'Offers',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.admin': 'Admin',

    'home.badge': 'Taif University · 2026',
    'home.title1': 'Code',
    'home.title2': '. AI',
    'home.title3': '. Future.',
    'home.subtitle': 'Programming & AI Club at Taif University — a community for innovators, offering you exclusive discounts at the best restaurants and cafés.',
    'home.cta': 'Browse Offers',
    'home.cta2': 'About Us',
    'home.stat1': 'Partners',
    'home.stat2': 'Student Discount',
    'home.stat3': 'Creativity',
    'home.featTitle': 'Why Join Us?',
    'home.feat1Title': 'Exclusive Discounts',
    'home.feat1Desc': 'Get special discounts at the best restaurants and cafés around campus',
    'home.feat2Title': 'Workshops & Events',
    'home.feat2Desc': 'Regular workshops in programming and artificial intelligence',
    'home.feat3Title': 'Active Community',
    'home.feat3Desc': 'Join a network of talented and creative students',

    'offers.title': 'Offers & Discounts',
    'offers.subtitle': 'Exclusive discounts for Taif University students through club partners',
    'offers.search': 'Search restaurants or cafés...',
    'offers.all': 'All',
    'offers.restaurants': 'Restaurants',
    'offers.cafes': 'Cafés',
    'offers.services': 'Services',
    'offers.counter': 'Partners:',
    'offers.emptyTitle': 'No results found',
    'offers.emptyDesc': 'Try different search terms or filters',
    'offers.viewMap': 'View Location',
    'offers.openExt': 'Open in Maps',

    'about.title': 'About the Club',
    'about.subtitle': 'Programming & Artificial Intelligence Club — Taif University',
    'about.missionTitle': 'Our Mission',
    'about.missionDesc': 'Empowering Taif University students to master programming and AI skills through workshops, projects, and events that bring innovators under one roof.',
    'about.visionTitle': 'Our Vision',
    'about.visionDesc': 'To be the leading club in the region driving student tech initiatives.',
    'about.valueTitle': 'Our Values',
    'about.valueDesc': 'Creativity, collaboration, continuous learning, and social responsibility.',
    'about.activitiesTitle': 'Our Activities',
    'about.activitiesDesc': 'Workshops, hackathons, tech talks, and coding competitions.',

    'contact.title': 'Contact Us',
    'contact.subtitle': 'Follow us on social media',
    'contact.allTitle': 'All Club Accounts',

    'footer.name': 'Programming & AI Club',
    'footer.uni': 'Taif University',
    'footer.copy': '© 2026 PAIC · All rights reserved',

    'modal.loginTitle': 'Admin Login',
    'modal.loginSub': 'Enter the admin password to continue',
    'modal.passPh': 'Password',
    'modal.login': 'Login',
    'modal.cancel': 'Cancel',
    'modal.save': 'Save',
    'modal.update': 'Update',
    'modal.addTitle': 'Add New Offer',
    'modal.editTitle': 'Edit Offer',
    'modal.openMap': 'Open in Google Maps',
    'modal.changePassTitle': 'Change Password',
    'modal.changePassSub': 'For security, please enter your current password',
    'modal.oldPass': 'Current password',
    'modal.newPass': 'New password',
    'modal.confirmPass': 'Confirm new password',

    'form.shopName': 'Shop Name',
    'form.category': 'Category',
    'form.discount': 'Discount Caption',
    'form.discountPh': 'Example: 20% for university students with valid ID',
    'form.mapUrl': 'Google Maps URL (optional)',
    'form.mapQuery': 'Place name for map search',
    'form.mapQueryPh': 'Example: Shawarma Al Balad Taif',
    'form.logo': 'Shop Logo',
    'form.uploadLogo': 'Choose logo image',

    'fab.add': 'Add Offer',
    'fab.pass': 'Password',
    'fab.logout': 'Logout',

    'toast.added': 'Added successfully',
    'toast.updated': 'Updated successfully',
    'toast.deleted': 'Deleted',
    'toast.passUpdated': 'Password updated',
    'toast.loggedIn': 'Welcome, logged in',
    'toast.loggedOut': 'Logged out',
    'err.wrongPass': 'Incorrect password',
    'err.passMismatch': 'Passwords do not match',
    'err.passShort': 'Password too short (min 4 chars)',
    'err.fillAll': 'Please fill all required fields',
    'confirm.delete': 'Are you sure you want to delete this offer?',
  }
};

/* ───────────── STATE ───────────── */
const State = {
  lang: localStorage.getItem('paic_lang') || 'ar',
  theme: localStorage.getItem('paic_theme') || 'dark',
  isAdmin: sessionStorage.getItem('paic_admin') === '1',
  password: localStorage.getItem('paic_pass') || '1234',
  offers: JSON.parse(localStorage.getItem('paic_offers') || 'null'),
  filterCat: '',
  search: '',
  editingId: null,
};

/* Default offers seeded on first load
   map_query: used for embed (search by name in Taif - more accurate than shortlinks)
   map_url: full link to open in Google Maps app */
const DEFAULT_OFFERS = [
  {
    id: 1,
    name_ar: 'نمق',
    name_en: 'Namaq',
    category: 'cafe',
    discount_ar: '20% لكل طالب في الجامعة بشرط إبراز البطاقة الجامعية للمقهى',
    discount_en: '20% off for every university student upon presenting student ID',
    map_query: 'نمق كافيه الطائف',
    map_url: 'https://maps.app.goo.gl/ymo5bEiNV58LkfPU6?g_st=ic',
    logo: 'logos/namaq.jpeg',
  },
  {
    id: 2,
    name_ar: 'بالم',
    name_en: 'Palm',
    category: 'cafe',
    discount_ar: '20% لكل طالب في الجامعة بشرط إبراز البطاقة الجامعية للمقهى',
    discount_en: '20% off for every university student upon presenting student ID',
    map_query: 'بالم كافي الطائف كوبري الصيانة',
    map_url: 'https://maps.app.goo.gl/EsmKAGyysVWsRWzN8?g_st=ic',
    logo: 'logos/palm.jpeg',
  },
  {
    id: 3,
    name_ar: 'شاورما البلد',
    name_en: 'Shawarma Al Balad',
    category: 'restaurant',
    discount_ar: '20% لكل طالب في الجامعة بشرط إبراز البطاقة الجامعية للمطعم',
    discount_en: '20% off for every university student upon presenting student ID',
    map_query: 'مطعم شاورما البلد الطائف',
    map_url: 'https://maps.app.goo.gl/RPHEJoc718f8HP3h6?g_st=ic',
    lat: 21.2896,
    lng: 40.4316,
    logo: 'logos/shawarma.jpeg',
  },
  {
    id: 4,
    name_ar: 'دوار السعادة',
    name_en: 'Dawwar Al Saadah',
    category: 'restaurant',
    discount_ar: '20% لكل طالب في الجامعة بشرط إبراز البطاقة الجامعية للمطعم',
    discount_en: '20% off for every university student upon presenting student ID',
    map_query: 'مطعم دوار السعادة الطائف',
    map_url: 'https://maps.app.goo.gl/wvQGKUUN3kgfBjVi9?g_st=ic',
    lat: 21.4470,
    lng: 40.5013,
    logo: 'logos/dawwar.jpeg',
  },
];

// Version bump: when the seed data changes, bump this to force a refresh
const SEED_VERSION = '4';
const savedVersion = localStorage.getItem('paic_seed_version');

if (!State.offers) {
  // أول مرة - حمّل البيانات الافتراضية
  State.offers = DEFAULT_OFFERS;
  localStorage.setItem('paic_seed_version', SEED_VERSION);
  saveOffers();
} else if (savedVersion !== SEED_VERSION) {
  // تحديث: حدّث العروض الافتراضية الموجودة واحتفظ بإضافات الأدمن
  const defaultIds = DEFAULT_OFFERS.map(o => o.id);
  // احتفظ بالعروض اللي أضافها الأدمن (اللي id حقها مو في الافتراضيات)
  const adminAdded = State.offers.filter(o => !defaultIds.includes(o.id));
  // دمج: الافتراضيات المحدثة + إضافات الأدمن
  State.offers = [...DEFAULT_OFFERS, ...adminAdded];
  localStorage.setItem('paic_seed_version', SEED_VERSION);
  saveOffers();
}

function saveOffers() {
  localStorage.setItem('paic_offers', JSON.stringify(State.offers));
}

/* ───────────── HELPERS ───────────── */
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

function t(key) {
  return I18N[State.lang][key] || key;
}

function applyI18n() {
  $$('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  $$('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  document.documentElement.lang = State.lang;
  document.documentElement.dir = State.lang === 'ar' ? 'rtl' : 'ltr';
  $('#langLabel').textContent = State.lang === 'ar' ? 'EN' : 'ع';
}

function applyTheme() {
  document.documentElement.dataset.theme = State.theme;
  // Update theme icon
  const icon = $('#themeIcon');
  if (State.theme === 'dark') {
    // sun icon
    icon.innerHTML = `<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>`;
  } else {
    // moon icon
    icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
  }
}

function toast(message) {
  const el = $('#toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove('show'), 2400);
}

/* ───────────── ROUTING ───────────── */
function navigate() {
  const hash = location.hash.replace('#/', '') || 'home';
  $$('[data-page]').forEach(p => {
    p.hidden = p.dataset.page !== hash;
  });
  $$('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.route === hash);
  });
  $('#navLinks').classList.remove('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update stats on home
  if (hash === 'home') {
    animateNumber($('#statOffers'), State.offers.length);
  }
  if (hash === 'offers') renderOffers();
}

function animateNumber(el, target) {
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 20));
  const t = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(t); }
    el.textContent = current;
  }, 30);
}

window.addEventListener('hashchange', navigate);

/* ───────────── CATEGORY HELPERS ───────────── */
const STD_CATS = ['restaurant', 'cafe', 'services'];

function getCatLabel(offer) {
  if (offer.category === 'services' && offer.service_type) return offer.service_type;
  if (offer.category === 'restaurant') return t('offers.restaurants');
  if (offer.category === 'cafe') return t('offers.cafes');
  if (offer.category === 'services') return t('offers.services');
  return offer.category; // تصنيف مخصص — يُعرض كما هو
}

function renderCustomFilters() {
  // احذف أي chips مخصصة سابقة
  $$('#filters .filter-chip.custom-cat').forEach(el => el.remove());

  // استخرج التصنيفات المخصصة الموجودة في العروض
  const customCats = [...new Set(
    State.offers.filter(o => !STD_CATS.includes(o.category)).map(o => o.category)
  )];

  const filtersEl = $('#filters');
  customCats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-chip custom-cat';
    btn.dataset.cat = cat;
    btn.textContent = cat;
    if (State.filterCat === cat) btn.classList.add('active');
    btn.addEventListener('click', () => {
      $$('#filters .filter-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      State.filterCat = cat;
      renderOffers();
    });
    filtersEl.appendChild(btn);
  });
}

/* ───────────── OFFERS RENDER ───────────── */
function renderOffers() {
  renderCustomFilters();
  const list = $('#offersList');
  const empty = $('#emptyState');
  const search = State.search.toLowerCase();

  const filtered = State.offers.filter(o => {
    const matchCat = !State.filterCat || o.category === State.filterCat;
    const name = (State.lang === 'ar' ? o.name_ar : o.name_en).toLowerCase();
    const matchSearch = !search || name.includes(search) || o.name_ar.toLowerCase().includes(search) || o.name_en.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });

  $('#counterNum').textContent = filtered.length;

  if (filtered.length === 0) {
    list.innerHTML = '';
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  list.innerHTML = filtered.map((o, i) => {
    const name = State.lang === 'ar' ? o.name_ar : o.name_en;
    const discount = State.lang === 'ar' ? o.discount_ar : o.discount_en;
    const catLabel = getCatLabel(o);
    const logoHtml = o.logo
      ? `<img src="${o.logo}" alt="${name}" class="offer-logo">`
      : `<div class="offer-logo-placeholder">${name.charAt(0)}</div>`;

    return `
      <div class="offer-card" style="animation-delay:${i * 60}ms">
        <div class="offer-logo-wrap">
          ${logoHtml}
          <span class="offer-cat-tag">${catLabel}</span>
        </div>
        <div class="offer-body">
          <h3 class="offer-name">${name}</h3>
          <p class="offer-discount">${discount}</p>
          <div class="offer-actions">
            <button class="offer-btn primary" onclick="openMap(${o.id})">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              ${t('offers.viewMap')}
            </button>
          </div>
          ${State.isAdmin ? `
          <div class="offer-admin">
            <button onclick="editOffer(${o.id})">✎ ${State.lang === 'ar' ? 'تعديل' : 'Edit'}</button>
            <button class="delete" onclick="deleteOffer(${o.id})">🗑 ${State.lang === 'ar' ? 'حذف' : 'Delete'}</button>
          </div>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

/* ───────────── MAP MODAL ───────────── */
window.openMap = function(id) {
  const offer = State.offers.find(o => o.id === id);
  if (!offer) return;
  const name = State.lang === 'ar' ? offer.name_ar : offer.name_en;
  $('#mapModalTitle').textContent = name;

  let embedUrl, mapsLink;
  if (offer.lat && offer.lng) {
    embedUrl = `https://maps.google.com/maps?q=${offer.lat},${offer.lng}&z=17&t=m&output=embed&hl=ar`;
    mapsLink = `https://www.google.com/maps?q=${offer.lat},${offer.lng}`;
  } else {
    const query = offer.map_query || `${offer.name_ar || offer.name_en} الطائف`;
    embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(query)}&hl=ar&z=16&output=embed`;
    mapsLink = offer.map_url || `https://www.google.com/maps/search/${encodeURIComponent(query)}`;
  }
  $('#mapFrame').src = embedUrl;
  $('#mapOpenLink').href = mapsLink;
  openModal('mapModal');
};

/* ───────────── ADMIN ───────────── */
window.editOffer = function(id) {
  const offer = State.offers.find(o => o.id === id);
  if (!offer) return;
  State.editingId = id;
  $('#offerModalTitle').textContent = t('modal.editTitle');
  $('#fName').value = State.lang === 'ar' ? offer.name_ar : offer.name_en;
  const isCustomCat = !STD_CATS.includes(offer.category);
  $('#fCategory').value = isCustomCat ? '_custom' : offer.category;
  $('#fCustomCategory').value = isCustomCat ? offer.category : '';
  $('#fDiscount').value = State.lang === 'ar' ? offer.discount_ar : offer.discount_en;
  $('#fMap').value = offer.map_url || '';
  $('#fMapQuery').value = offer.map_query || '';
  $('#fLat').value = offer.lat || '';
  $('#fLng').value = offer.lng || '';
  $('#fServiceType').value = offer.service_type || '';
  updateCategoryForm();
  if (offer.logo) {
    $('#fLogoPreview').src = offer.logo;
    $('#fLogoPreview').hidden = false;
  } else {
    $('#fLogoPreview').hidden = true;
  }
  openModal('offerModal');
};

window.deleteOffer = function(id) {
  if (!confirm(t('confirm.delete'))) return;
  State.offers = State.offers.filter(o => o.id !== id);
  saveOffers();
  renderOffers();
  toast(t('toast.deleted'));
};

function submitOffer() {
  const name = $('#fName').value.trim();
  const rawCat = $('#fCategory').value;
  const category = rawCat === '_custom' ? $('#fCustomCategory').value.trim() : rawCat;
  const discount = $('#fDiscount').value.trim();
  const mapUrl = $('#fMap').value.trim();
  const mapQuery = $('#fMapQuery').value.trim();
  const lat = parseFloat($('#fLat').value) || null;
  const lng = parseFloat($('#fLng').value) || null;
  const serviceType = category === 'services' ? $('#fServiceType').value.trim() : null;
  const logoSrc = $('#fLogoPreview').hidden ? null : $('#fLogoPreview').src;

  // Require name, discount, category, and AT LEAST one of mapQuery/mapUrl
  if (!name || !discount || !category || (!mapQuery && !mapUrl)) {
    toast(t('err.fillAll'));
    return;
  }

  if (State.editingId) {
    const offer = State.offers.find(o => o.id === State.editingId);
    if (State.lang === 'ar') {
      offer.name_ar = name;
      offer.discount_ar = discount;
    } else {
      offer.name_en = name;
      offer.discount_en = discount;
    }
    offer.category = category;
    offer.map_url = mapUrl;
    offer.map_query = mapQuery || `${name} الطائف`;
    offer.lat = lat;
    offer.lng = lng;
    offer.service_type = serviceType;
    if (logoSrc) offer.logo = logoSrc;
    toast(t('toast.updated'));
  } else {
    const newOffer = {
      id: Date.now(),
      name_ar: name, name_en: name,
      category,
      discount_ar: discount, discount_en: discount,
      map_url: mapUrl,
      map_query: mapQuery || `${name} الطائف`,
      lat,
      lng,
      service_type: serviceType,
      logo: logoSrc,
    };
    State.offers.unshift(newOffer);
    toast(t('toast.added'));
  }

  saveOffers();
  renderOffers();
  closeModal('offerModal');
  State.editingId = null;
}

function openAddOffer() {
  State.editingId = null;
  $('#offerModalTitle').textContent = t('modal.addTitle');
  $('#fName').value = '';
  $('#fCategory').value = 'restaurant';
  $('#fDiscount').value = '';
  $('#fMap').value = '';
  $('#fMapQuery').value = '';
  $('#fLat').value = '';
  $('#fLng').value = '';
  $('#fServiceType').value = '';
  $('#fCustomCategory').value = '';
  updateCategoryForm();
  $('#fLogoPreview').hidden = true;
  $('#fLogoPreview').src = '';
  $('#fLogoFile').value = '';
  openModal('offerModal');
}

function updateCategoryForm() {
  const cat = $('#fCategory').value;
  $('#serviceTypeRow').hidden  = cat !== 'services';
  $('#customCategoryRow').hidden = cat !== '_custom';
}

function extractCoordsFromUrl() {
  const url = prompt(State.lang === 'ar' ? 'الصق رابط Google Maps الكامل هنا:' : 'Paste the full Google Maps URL here:');
  if (!url) return;
  const match = url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
  if (match) {
    $('#fLat').value = match[1];
    $('#fLng').value = match[2];
  } else {
    alert(State.lang === 'ar' ? 'لم يتم العثور على إحداثيات. افتح الموقع في Google Maps، انسخ الرابط من شريط العنوان (يحتوي على @)' : 'No coordinates found. Open the location in Google Maps and copy the URL from the address bar (contains @)');
  }
}

/* ───────────── AUTH ───────────── */
function attemptLogin() {
  const pass = $('#loginPass').value;
  if (pass === State.password) {
    State.isAdmin = true;
    sessionStorage.setItem('paic_admin', '1');
    closeModal('loginModal');
    $('#adminFab').hidden = false;
    $('#loginPass').value = '';
    $('#loginError').textContent = '';
    toast(t('toast.loggedIn'));
    renderOffers();
  } else {
    $('#loginError').textContent = t('err.wrongPass');
  }
}

function logout() {
  State.isAdmin = false;
  sessionStorage.removeItem('paic_admin');
  $('#adminFab').hidden = true;
  $('#fabMenu').classList.remove('active');
  $('#fabMain').classList.remove('active');
  toast(t('toast.loggedOut'));
  renderOffers();
}

function changePassword() {
  const oldP = $('#oldPass').value;
  const newP = $('#newPass').value;
  const confirmP = $('#confirmPass').value;
  const errEl = $('#passError');

  if (oldP !== State.password) {
    errEl.textContent = t('err.wrongPass');
    return;
  }
  if (newP.length < 4) {
    errEl.textContent = t('err.passShort');
    return;
  }
  if (newP !== confirmP) {
    errEl.textContent = t('err.passMismatch');
    return;
  }

  State.password = newP;
  localStorage.setItem('paic_pass', newP);
  $('#oldPass').value = '';
  $('#newPass').value = '';
  $('#confirmPass').value = '';
  errEl.textContent = '';
  closeModal('passModal');
  toast(t('toast.passUpdated'));
}

/* ───────────── MODAL UTILS ───────────── */
function openModal(id) { $('#' + id).classList.add('active'); }
function closeModal(id) { $('#' + id).classList.remove('active'); }

/* ───────────── RESET DATA ───────────── */
function resetData() {
  if (!confirm(State.lang === 'ar' ? 'هل تريد إعادة تعيين جميع البيانات للوضع الافتراضي؟' : 'Reset all data to default?')) return;
  localStorage.removeItem('paic_offers');
  localStorage.removeItem('paic_seed_version');
  location.reload();
}

/* ───────────── INIT ───────────── */
function init() {
  applyTheme();
  applyI18n();
  navigate();
  if (State.isAdmin) $('#adminFab').hidden = false;

  // Theme toggle
  $('#themeBtn').addEventListener('click', () => {
    State.theme = State.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('paic_theme', State.theme);
    applyTheme();
  });

  // Lang toggle
  $('#langBtn').addEventListener('click', () => {
    State.lang = State.lang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('paic_lang', State.lang);
    applyI18n();
    renderOffers();
  });

  // Mobile menu
  $('#menuBtn').addEventListener('click', () => {
    $('#navLinks').classList.toggle('active');
  });

  // Admin button
  $('#adminBtn').addEventListener('click', () => {
    if (State.isAdmin) {
      logout();
    } else {
      openModal('loginModal');
    }
  });

  // Login submit
  $('#loginSubmit').addEventListener('click', attemptLogin);
  $('#loginPass').addEventListener('keydown', e => { if (e.key === 'Enter') attemptLogin(); });

  // FAB
  $('#fabMain').addEventListener('click', () => {
    $('#fabMenu').classList.toggle('active');
    $('#fabMain').classList.toggle('active');
  });
  $('#addOfferBtn').addEventListener('click', () => {
    $('#fabMenu').classList.remove('active');
    $('#fabMain').classList.remove('active');
    openAddOffer();
  });
  $('#changePassBtn').addEventListener('click', () => {
    $('#fabMenu').classList.remove('active');
    $('#fabMain').classList.remove('active');
    openModal('passModal');
  });
  $('#logoutBtn').addEventListener('click', () => {
    $('#fabMenu').classList.remove('active');
    $('#fabMain').classList.remove('active');
    logout();
  });
  $('#resetDataBtn').addEventListener('click', () => {
    $('#fabMenu').classList.remove('active');
    $('#fabMain').classList.remove('active');
    resetData();
  });

  $('#fCategory').addEventListener('change', updateCategoryForm);

  // Extract coords
  $('#extractCoordsBtn').addEventListener('click', extractCoordsFromUrl);

  // Offer submit
  $('#offerSubmit').addEventListener('click', submitOffer);

  // Pass submit
  $('#passSubmit').addEventListener('click', changePassword);

  // Search
  $('#searchInput').addEventListener('input', e => {
    State.search = e.target.value;
    renderOffers();
  });

  // Filters
  $$('#filters .filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('#filters .filter-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      State.filterCat = btn.dataset.cat;
      renderOffers();
    });
  });

  // File upload preview
  $('#fLogoFile').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      $('#fLogoPreview').src = ev.target.result;
      $('#fLogoPreview').hidden = false;
    };
    reader.readAsDataURL(file);
  });

  // Modal close
  $$('[data-close]').forEach(el => {
    el.addEventListener('click', () => {
      el.closest('.modal').classList.remove('active');
    });
  });

  // Close fab menu when clicking outside
  document.addEventListener('click', e => {
    if (!e.target.closest('.admin-fab')) {
      $('#fabMenu').classList.remove('active');
      $('#fabMain').classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', init);

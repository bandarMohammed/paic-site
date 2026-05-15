const SUPABASE_URL = 'https://uopepyolibkddnudibpo.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_8X5gSvWDGEpwmrjyXDHlJg_wupulVJ4';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const DB = {
  async getAll() {
    try {
      const { data, error } = await supabaseClient
        .from('offers')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return Array.isArray(data) ? data : [];
    } catch (err) {
      console.error('DB.getAll failed', err);
      return [];
    }
  },

  async insert(offer) {
    try {
      const { data, error } = await supabaseClient
        .from('offers')
        .insert(offer)
        .select('*')
        .single();
      if (error) throw error;
      return data || null;
    } catch (err) {
      console.error('DB.insert failed', err);
      return null;
    }
  },

  async update(id, updates) {
    try {
      const { data, error } = await supabaseClient
        .from('offers')
        .update(updates)
        .eq('id', id)
        .select('*')
        .single();
      if (error) throw error;
      return data || null;
    } catch (err) {
      console.error('DB.update failed', err);
      return null;
    }
  },

  async delete(id) {
    try {
      const { error } = await supabaseClient
        .from('offers')
        .delete()
        .eq('id', id);
      if (error) throw error;
      return true;
    } catch (err) {
      console.error('DB.delete failed', err);
      return false;
    }
  },

  subscribe(callback) {
    try {
      const channel = supabaseClient
        .channel('offers-realtime')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'offers' },
          payload => callback(payload)
        )
        .subscribe();

      return () => {
        supabaseClient.removeChannel(channel);
      };
    } catch (err) {
      console.error('DB.subscribe failed', err);
      return () => {};
    }
  },
};

window.DB = DB;

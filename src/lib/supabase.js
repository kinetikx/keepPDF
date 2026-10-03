import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || 'https://dywxmadfvkeunyvqxvbm.supabase.co';
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_snxiWLd5tm5yJ4TOZwEppQ_90Aow-tY';

export const supabase = createClient(supabaseUrl, supabaseKey);

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Review {
  id: string;
  patient_name: string;
  rating: number;
  comment: string;
  video_url: string | null;
  is_featured: boolean;
  created_at: string;
}

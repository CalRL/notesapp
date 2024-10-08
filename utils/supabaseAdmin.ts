import { createClient } from "@supabase/supabase-js";

require("dotenv").config();

const supabaseURL: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseApiKey: string = process.env.NEXT_PUBLIC_SUPABASE_API_KEY!;

export const supabase = createClient(supabaseURL, supabaseApiKey);

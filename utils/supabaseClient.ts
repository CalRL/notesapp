import { createClient } from "@supabase/supabase-js";
const fs = require("fs");
require("dotenv").config();

const supabaseApiKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY!;
const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL!;

export const supabase = createClient(supabaseURL, supabaseApiKey);

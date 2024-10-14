import { supabase } from "@/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: `Username (${email}) and password (${password}) are required`,
    });
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }
    return res.status(200).json({ message: "Logged in successfully!" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An unexpected error occured. Please try again later" });
  }
}

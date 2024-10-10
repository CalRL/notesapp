import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/utils/supabaseAdmin";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ message: `Unauthorized method ${req.method}` });
  }

  const { username, email, password } = req.body;

  if (!username && !email && !password) {
    return res.status(400).json({ message: "Missing params" });
  }
  try {
    const { data, error } = await supabase
      .from("users")
      .insert([{ username, email, password }]);

    if (error) {
      console.error(`Error inserting user ${username}`);
      return res
        .status(500)
        .json({ message: `Failed to create user... ${error.message}` });
    }
  } catch (error: any) {
    console.error("Unexpected error: " + error);
    return res.status(500).json({ error: "An unexpected error occured." });
  }
}

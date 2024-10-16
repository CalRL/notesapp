import crypto from "crypto";
import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/utils/supabaseClient";
require("dotenv").config();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        try {
            const { password } = req.body;

            const salt = process.env.NEXT_PUBLIC_SALT;
            if (!salt)
                return res.status(500).json({
                    message: "Salt error... Report this to the developer...",
                });

            const buffer: Buffer = crypto.pbkdf2Sync(
                password,
                salt,
                1000,
                64,
                "sha512"
            );

            const hashString: string = buffer.toString("hex");

            return res.status(200).json({ hashString });
        } catch (error) {
            return res
                .status(500)
                .json({ message: `An unexpected error occured. ${error}` });
        }
    } else if (req.method === "GET") {
        try {
            const { email, toHash } = req.query;
            var password;

            if (!email || !toHash)
                return res.status(400).json({ message: "Missing params" });

            if (typeof toHash !== "string" || typeof email !== "string")
                return res.status(400).json({ message: "Invalid params" });

            const { data, error } = await supabase
                .from("main")
                .select("password")
                .eq("email", email)
                .single();

            if (error || !data)
                return res.status(500).json({
                    message: `Failed to get user info... ${
                        error ? error.message : "User not found"
                    }`,
                });

            const hashedString = hashString(toHash);

            if (hashedString !== password)
                return res
                    .status(400)
                    .json({ message: "Password does not match" });

            return res.status(200).json({ message: "Password matches" });
        } catch (error) {
            return res
                .status(500)
                .json({ message: `An unexpected error occured. ${error}` });
        }
    }
    return res
        .status(405)
        .json({ message: `Method ${req.method} not allowed` });
}

function hashString(string: string): string {
    const salt = process.env.NEXT_PUBLIC_SALT;
    if (!salt) throw new Error("Hash error... Report this to the developer...");

    const buffer: Buffer = crypto.pbkdf2Sync(string, salt, 1000, 64, "sha512");

    return buffer.toString("hex");
}

"use server";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const { email, password, name, phone } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const exitingUser = await getUserByEmail(email);
  if (exitingUser) {
    return { error: "Email already exists" };
  }
  await db.user.create({
    data: {
      name,
      phone,
      email,
      password: hashedPassword,
    },
  });
  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);
  return { success: "Xác nhận tài khoản trong email của bạn!" };
};

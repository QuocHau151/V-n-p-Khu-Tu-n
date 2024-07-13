"use server";
import { db } from "@/lib/db";

export const fetchUser = async () => {
  try {
    const users = await db.user.findMany();
    return users;
  } catch (error) {
    return "failed to fetch user";
  }
};
import { getUserById } from "@/data/user";

export const updateStateUser = async (id: string, newstate: StateUser) => {
  const existingUser = await getUserById(id);
  try {
    if (existingUser) {
      const users = await db.user.update({
        where: { id: existingUser.id },
        data: { state: newstate },
      });
      return users;
    } else {
      return "User not found";
    }
  } catch (error) {
    return "failed to update user";
  }
};

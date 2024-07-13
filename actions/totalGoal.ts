"use server";
import { db } from "@/lib/db";
interface FormData {
  name: string;
  value: string;
}
export const createUserEnergy = async (data: FormData) => {
  try {
    await db.goal.create({
      data: {
        name: data.name,
        value: data.value,
        create_at: new Date(),
      },
    });
    return { success: "Thêm thành công" };
  } catch (error) {
    return { error: "failed to create user" };
  }
};
export const updateUserEnergy = async (id: string, data: FormData) => {
  try {
    await db.goal.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        value: data.value,
        update_at: new Date(),
      },
    });
    return { success: "Cập nhật thành công" };
  } catch (error) {
    return { error: "failed to update user" };
  }
};
export const deleteUserEnergy = async (id: string) => {
  try {
    await db.goal.delete({
      where: {
        id,
      },
    });
    return { success: "Xóa thành công, hãy nhấn lưu lại" };
  } catch (error) {
    return { error: "failed to delete user" };
  }
};
export const fetchUserEnergy = async () => {
  try {
    const goal = await db.goal.findMany();
    return goal;
  } catch (error) {
    return "failed to fetch user";
  }
};

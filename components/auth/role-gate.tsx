"use client";

import { FormError } from "./form-error";
import { useCurrentRole } from "@/hook/use-current-role";
import { logout } from "@/actions/logout";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logout();
      await router.push("/login");
    } catch (error) {
      console.error("Failed to log out:", error);
      // You could also show an error message to the user here
    }
  };
  if (role !== allowedRole) {
    return (
      <>
        <div className="flex flex-col items-center justify-center">
          <FormError message="Bạn không phải Admin của Page" />
          <Button onClick={handleLogout}>Về trang đăng nhập</Button>
        </div>
      </>
    );
  }

  return <>{children}</>;
};

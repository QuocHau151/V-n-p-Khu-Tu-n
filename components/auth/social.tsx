import React from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
export default function Social() {
  const onClick = (provider: "google") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="flex items-center justify-around w-3/4 ">
      <Button
        className="w-1/3 h-12 border-[1px] bg-black bg-opacity-0 hover:bg-red-500 max-md:w-1/2"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="w-8 h-8  max-md:w-6 max-md:h-6" />
      </Button>
    </div>
  );
}

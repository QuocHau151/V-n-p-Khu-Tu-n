import { ErrorCard } from "@/components/auth/error-card";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error",
};
export default function AuthErrorPage() {
  return <ErrorCard />;
}

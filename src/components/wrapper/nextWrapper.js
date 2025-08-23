"use client";
import { SessionProvider } from "next-auth/react";

export default function NextWrapper({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

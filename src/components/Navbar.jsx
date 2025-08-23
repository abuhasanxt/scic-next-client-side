"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Navbar() {
  const { data } = useSession();

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">My Shop</h1>
      <div className="space-x-4">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/products" className="hover:text-gray-300">
          Products
        </Link>
          
        {data?.user && (
          <Link href="/dashboard/add-product" className="hover:text-gray-300">
            Dashboard
          </Link>
        )}

        {data?.user ? (
          <button className="cursor-pointer" onClick={() => signOut()}>
            Sign out
          </button>
        ) : (
          <Link href="/login" className="hover:text-gray-300">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

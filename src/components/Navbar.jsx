"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { data } = useSession();
    const pathname = usePathname();

  const linkClasses = (href) =>
    `hover:text-blue-300 ${pathname === href ? "text-blue-400 underline" : ""}`;

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">My Shop</h1>
      <div className="space-x-4">
        
        <Link href="/" className={linkClasses("/")}>
          Home
        </Link>
        <Link href="/products" className={linkClasses("/products")}>
          Products
        </Link>
          
        {data?.user && (
          <Link href="/dashboard/add-product" className={linkClasses("/dashboard/add-product")}>
            Add Products
          </Link>
        )}

        {data?.user ? (
          <button className="cursor-pointer hover:text-gray-300" onClick={() => signOut()}>
            Sign out
          </button>
        ) : (
          <Link href="/login" className={linkClasses("/login")}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

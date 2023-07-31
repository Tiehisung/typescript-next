"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <header className="sticky top-0 flex">
      <nav className="flex grow gap-2 justify-between py-1 px-2 shadow-sm bg-slate-100 text-gray-800 font-semibold max-md:hidden">
        {links.map((link, index: number) => (
          <Link key={index} href={link.href} className="group">
            <div>{link.title}</div>
            <hr className="h-1 w-full bg-red-200 opacity-0 group-hover:opacity-100 transform transition-opacity duration-500" />
          </Link>
        ))}
      </nav>
      {session ? (
        <div className="flex gap-2">
          <button
            onClick={() => signOut()}
            className="text-red-400 font-semibold shadow-sm shadow-red-500 px-2 rounded"
          >
            Logout
          </button>
          {session.user?.name}
          <Image
            src={session.user?.image || ""}
            alt="user icon"
            height={30}
            width={30}
            priority
          />
        </div>
      ) : (
        <button
          onClick={() => signIn()}
          className="text-green-400 font-semibold shadow-sm shadow-green-500 px-2 rounded"
        >
          Login
        </button>
      )}
    </header>
  );
}

const links = [
  { title: "home", href: "/" },
  { title: "dashboard", href: "/dashboard" },
  { title: "students", href: "/dashboard/students" },
  { title: "staff", href: "/dashboard/staff" },
  { title: "contact", href: "/contact-us" },
];

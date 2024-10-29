import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-slate-800 text-white py-2 px-4">
      <div>
        <Image
          src="/ma.jpeg"
          alt="Logo"
          width={80}
          height={80}
          className="rounded-lg mx-auto"
        />
      </div>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="/">
              <span className="hover:text-lime-300 transition">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/About">
              <span className="hover:text-lime-300 transition">About</span>
            </Link>
          </li>
          <li>
            <Link href="/Education">
              <span className="hover:text-lime-300 transition">Education</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

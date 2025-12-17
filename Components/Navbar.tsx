"use client";
import Link from "next/link";
import { useState } from "react";

import SwitchToggle from "./SwitchToggle";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  if (isDark) document.body.classList.add("dark");
  if (!isDark) document.body.classList.remove("dark");

  return (
    <nav className="flex py-3 justify-around dark:text-gray-100">
      <h1 className="md:text-lg font-bold">Todo App</h1>
      <ul className="flex md:gap-10 gap-4 text-sm md:text-base md:font-semibold">
        <li>
          <Link href="/"> Home </Link>
        </li>
        <li>
          <Link href="#"> Products </Link>
        </li>
        <li>
          <Link href="#"> About </Link>
        </li>
        <li>
          <Link href="#"> Contact </Link>
        </li>

        <li>
          <SwitchToggle isDark={isDark} setIsDark={setIsDark} />
        </li>
      </ul>
    </nav>
  );
}

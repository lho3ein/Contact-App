"use client";
import SwitchToggle from "./SwitchToggle";

export default function Navbar() {
  return (
    <nav className="flex py-3 justify-around dark:text-gray-100">
      <div className="flex space-x-5">
        <h1 className="md:text-lg font-bold">Contact App</h1>
      </div>
      <ul className="flex">
        <li className="">
          <SwitchToggle />
        </li>
      </ul>
    </nav>
  );
}

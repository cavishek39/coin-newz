import Link from "next/link";
import React, { useState } from "react";
import ThemeToggler from "./theme-toggler";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showNavIcon, setShowNavIcon] = useState<boolean>(false);

  const handleNav = () => {
    setShowNavIcon(!showNavIcon);
  };

  return (
    <div className="rounded-div flex h-20 items-center justify-between font-bold">
      <Link href={"/"} className="text-2xl">
        Cryptobase
      </Link>
      <div className="hidden md:block">
        <ThemeToggler />
      </div>
      <div className="hidden md:block">
        <Link href={"/"} className="hover:text:accent p-4">
          Sign in
        </Link>
        <Link
          href={"/"}
          className="ml-2 rounded-2xl bg-button px-5 py-2 text-btnText shadow-lg hover:shadow-2xl"
        >
          Sign up
        </Link>
      </div>
      {/* Menu Icon */}
      <div className="z-10 block cursor-pointer md:hidden" onClick={handleNav}>
        {showNavIcon ? (
          <AiOutlineClose size={20} />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          showNavIcon
            ? "fixed top-20 left-0 z-10 flex h-[90%] w-full flex-col items-center justify-between bg-primary duration-300 ease-in md:hidden"
            : "fixed left-[-100%] top-20 flex h-[90%] flex-col items-center justify-between duration-300 ease-in"
        }
      >
        <ul className="w-full p-4">
          <li className="border-b py-6">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="border-b py-6">
            <Link href={"/"}>Account</Link>
          </li>
          <li className="py-6">
            <ThemeToggler />
          </li>
        </ul>
        <div className="flex w-full flex-col p-4">
          <Link
            href={"/signin"}
            className="my-2 w-full rounded-2xl border border-secondary bg-primary p-3 text-primary shadow-xl"
          >
            Sign in
          </Link>
          <Link
            href={"/signin"}
            className="my-2 w-full rounded-2xl bg-button p-3 text-btnText shadow-xl"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

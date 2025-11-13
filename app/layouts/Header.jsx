"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../public/images/Layer_1.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Projects", path: "/projects" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="py-5">
      <div className="container flex items-center justify-between ">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="logo" width={90} height={40} priority />
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.path ||
              (link.path !== "/" && pathname.startsWith(link.path));

            return (
              <li key={link.title}>
                <Link
                  href={link.path}
                  className={`transition-colors duration-300 text-base leading-6 ${
                    isActive
                      ? "text-brand font-bold"
                      : "text-secondary hover:text-brand"
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
          <li className="ml-4">
            <Link
              href="/"
              className="relative overflow-hidden rounded-[20px] bg-brand py-2 px-6 font-medium text-sm text-white cursor-pointer inline-block group"
            >
              <span className="absolute top-0 left-0 w-0 h-full bg-primary/50 transition-all duration-400 ease-in-out group-hover:w-full"></span>
              <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white inline-block">
                Get a Quote
              </span>
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.path ||
              (link.path !== "/" && pathname.startsWith(link.path));

            return (
              <li key={link.title}>
                <Link
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className={`transition-colors duration-300 ${
                    isActive
                      ? "text-brand font-bold"
                      : "text-secondary hover:text-brand"
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/"
              className="relative overflow-hidden rounded-[20px] bg-brand py-2 px-6 font-medium text-sm text-white cursor-pointer inline-block group"
            >
              <span className="absolute top-0 left-0 w-0 h-full bg-primary/50 transition-all duration-400 ease-in-out group-hover:w-full"></span>
              <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white inline-block">
                Get a Quote
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
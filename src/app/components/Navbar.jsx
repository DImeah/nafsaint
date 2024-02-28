import Link from "next/link";
import React from "react";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/news", label: "News/Events" },
  { href: "/courses", label: "Courses" },
  { href: "/departments", label: "Departments" },
];

const Navbar = () => {
  return (
    <div>
      <>
        <nav className="bg-blue-500 text-white font-bold  p-2 rounded-b-2xl flex justify-evenly">
          <Link
            href="/"
            className="navbar bg-blue-500 text-white border-none hover:normal-case gap-3 text-xl"
          >
            <Image
              src={`/footerIcon.png`}
              alt="NAFSAINT Logo"
              width={50}
              height={50}
            />
            NAFSAINT
          </Link>
          <div className="navbar px-2  max-w-6xl mx-auto flex-col sm:flex-row">
            <ul className="menu menu-horizontal md:ml-8">
              {links.map((link) => {
                return (
                  <li key={link.href}>
                    <Link href={link.href} className="uppercase">
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </>
    </div>
  );
};

export default Navbar;

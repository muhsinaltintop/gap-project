import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  const Menu = [
    { id: 1, name: "About", path: "/" },
    { id: 2, name: "Team", path: "/" },
    { id: 3, name: "Country Profiles", path: "/" },
    { id: 4, name: "Publications", path: "/" },
    { id: 5, name: "GAPs News", path: "/" },
    { id: 6, name: "Contact", path: "/" },
    { id: 7, name: "GAPs News", path: "/" },
  ];
  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <Image src="/gaps_logo.png" alt="Your Logo" width={180} height={0} />

        <ul className="md:flex gap-8 hidden">
          {Menu.map((item, index) => (
            <Link key={index} href={item.path}>
              <li
                className="hover:text-primary cursor:pointer hover:scale-105 transition-all ease-in-out"
                key={item.id}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex gap-1">
        <Button>F</Button>
        <Button>I</Button>
        <Button>X</Button>
        <Button>L</Button>
      </div>
    </div>
  );
}

export default Header;

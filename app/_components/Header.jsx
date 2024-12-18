import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  const Menu = [
    { id: 1, name: "About", path: "https://www.returnmigration.eu/about" },
    { id: 2, name: "Team", path: "https://www.returnmigration.eu/team-gaps" },
    { id: 3, name: "Country Profiles", path: "https://www.returnmigration.eu/country-profiles-gaps" },
    { id: 4, name: "Publications", path: "https://www.returnmigration.eu/publications-gaps" },
    { id: 5, name: "GAPs News", path: "https://www.returnmigration.eu/gaps-news" },
    { id: 6, name: "Contact", path: "https://www.returnmigration.eu/contact-gaps" },
    { id: 7, name: "Blog", path: "https://www.returnmigration.eu/gapsblog" },
    { id: 8, name: "Data Repository", path: "https://data.returnmigration.eu/" }
  ];

  const Social = [
    { id: 1, name: "Twitter", path: "https://x.com/gapsreturns", icon: <Twitter /> },
    { id: 2, name: "LinkedIn", path: "https://www.linkedin.com/company/gaps-return-migration/", icon: <Linkedin /> },
    { id: 3, name: "Facebook", path: "https://www.facebook.com/GAPSRETURNS/", icon: <Facebook /> },
    { id: 4, name: "Youtube", path: "https://www.instagram.com/gapsreturns/", icon: <Youtube /> },
    { id: 5, name: "Instagram", path: "https://www.instagram.com/gapsreturns/", icon: <Instagram /> },
  ];
  return (
    <div
      className="flex items-center justify-between p-4 shadow-sm"
      id="MainContent"
    >
      <div className="flex items-center gap-10">
        <Link href="/">
          <Image src="/gaps_logo.png" alt="Your Logo" width={180} height={100} />
        </Link>

        <ul className="md:flex gap-4 ml-96 hidden">
          {Menu.map((item, index) => (
            <Link key={index} href={item.path}>
              <li
                className="text-primary hover:text-primary-light cursor:pointer hover:scale-105 transition-all ease-in-out text-sm font-bold"
                key={item.id}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex gap-0 mr-20">
        {Social.map((item, index) => (
          <Button key={index} className="bg-transparent text-primary hover:text-primary-light hover:text-white transition-all ease-in-out size-2">
              <Link  href={item.path}>
              {item.icon}
              </Link>
            </Button>
        ))}
      </div>
    </div>
  );
}

export default Header;

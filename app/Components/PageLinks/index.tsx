"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHome } from "react-icons/go";
import { FaLaptopCode } from "react-icons/fa";
import { motion } from "motion/react";

interface IPageLink {
  href: string;
  label: string;
  icon: React.ElementType;
}

const PAGE_LINKS: IPageLink[] = [
  { href: "/", label: "Home", icon: GoHome },
  { href: "/challenges", label: "UI Sandboxes", icon: FaLaptopCode },
];

const PageLinks: React.FunctionComponent = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2 shrink-0">
      {PAGE_LINKS.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <Link key={href} href={href} title={label} aria-label={label}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className={`w-8 h-8 flex items-center justify-center rounded-full border text-sm ${
                isActive
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-500 border-gray-300 hover:border-black hover:text-black"
              }`}
            >
              <Icon />
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
};

export default PageLinks;

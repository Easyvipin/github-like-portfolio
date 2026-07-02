"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHome } from "react-icons/go";
import { FaLaptopCode } from "react-icons/fa";
import { motion, type Variants } from "motion/react";

interface IPageLink {
  href: string;
  label: string;
  icon: React.ElementType;
}

const PAGE_LINKS: IPageLink[] = [
  { href: "/", label: "Home", icon: GoHome },
  { href: "/challenges", label: "UI Sandboxes", icon: FaLaptopCode },
];

const GLASS_CONTAINER =
  "backdrop-blur-xl bg-white/40 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.12)]";

const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      when: "beforeChildren",
      delayChildren: 0.2,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: ({ axis, offset }: { axis: "x" | "y"; offset: number }) => ({
    opacity: 0,
    scale: 0.3,
    x: axis === "x" ? -offset : 0,
    y: axis === "y" ? -offset : 0,
  }),
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 22 },
  },
};

interface IDockItemProps {
  href: string;
  label: string;
  icon: React.ElementType;
  isActive: boolean;
  axis: "x" | "y";
  offset: number;
  size: string;
}

const DockItem: React.FunctionComponent<IDockItemProps> = ({
  href,
  label,
  icon: Icon,
  isActive,
  axis,
  offset,
  size,
}) => (
  <Link href={href} title={label} aria-label={label}>
    <motion.div
      custom={{ axis, offset }}
      variants={itemVariants}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.94 }}
      className={`${size} flex items-center justify-center rounded-full text-base transition-colors duration-300 ${
        isActive
          ? "bg-black/80 text-white backdrop-blur-md shadow-inner"
          : "text-gray-600 hover:bg-white/70 hover:text-black"
      }`}
    >
      <Icon />
    </motion.div>
  </Link>
);

const STEP_VERTICAL = 40;
const STEP_HORIZONTAL = 52;

const PageLinks: React.FunctionComponent = () => {
  const pathname = usePathname();
  const center = (PAGE_LINKS.length - 1) / 2;

  return (
    <>
      {/* Desktop / tablet: vertical dock beside the photo */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`hidden lg:flex flex-col items-center gap-3 p-2 rounded-full shrink-0 ${GLASS_CONTAINER}`}
      >
        {PAGE_LINKS.map(({ href, label, icon }, index) => (
          <DockItem
            key={href}
            href={href}
            label={label}
            icon={icon}
            isActive={pathname === href}
            axis="y"
            offset={(index - center) * STEP_VERTICAL}
            size="w-8 h-8"
          />
        ))}
      </motion.div>

      {/* Mobile: floating bottom navigation bar */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex flex-row items-center gap-4 px-4 py-2 rounded-full ${GLASS_CONTAINER}`}
      >
        {PAGE_LINKS.map(({ href, label, icon }, index) => (
          <DockItem
            key={href}
            href={href}
            label={label}
            icon={icon}
            isActive={pathname === href}
            axis="x"
            offset={(index - center) * STEP_HORIZONTAL}
            size="w-11 h-11"
          />
        ))}
      </motion.div>
    </>
  );
};

export default PageLinks;

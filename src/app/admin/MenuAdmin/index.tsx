"use client";

import clsx from "clsx";
import {
  CircleXIcon,
  FileTextIcon,
  HouseIcon,
  MenuIcon,
  PlusIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export default function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [_, startTransition] = useTransition();

  const navClasses = clsx(
    "bg-slate-900 text-slate-100 rounded-lg",
    "flex flex-col  mb-8",
    "sm:flex-row sm:flex-wrap",
    !isOpen && "h-10",
    !isOpen && "overflow-hidden",
    "sm:overflow-visible sm:h-auto"
  );
  const linkClasses = clsx(
    "[&>svg]:w-4[&>svg]:h-4 px-4",
    "flex items-center justify-start gap-2 cursor-pointer",
    "transition hover:bg-slate-800 rounded-lg",
    "h-10",
    "shrink-0"
  );
  const openCloseBtnClasses = clsx(
    linkClasses,
    "text-blue-200 italic",
    "sm:hidden"
  );

  useEffect(() => {
    startTransition(() => {
      setIsOpen(false);
    });
  }, [pathname]);

  return (
    <nav className={navClasses}>
      <button
        className={openCloseBtnClasses}
        onClick={() => setIsOpen((s) => !s)}
      >
        {!isOpen && (
          <>
            <MenuIcon />
            Menu
          </>
        )}
        {isOpen && (
          <>
            <CircleXIcon />
            Close
          </>
        )}
      </button>
      <a className={linkClasses} href="/" target="_blank">
        <HouseIcon />
        Home
      </a>
      <Link className={linkClasses} href="/admin/post">
        <FileTextIcon />
        Posts
      </Link>
      <Link className={linkClasses} href="/admin/post/new">
        <PlusIcon />
        Create Post
      </Link>
    </nav>
  );
}

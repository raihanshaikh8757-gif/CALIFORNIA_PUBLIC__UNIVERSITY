"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/programs", "Study Programmes"],
  ["/academic-partners", "Academic Partners"],
  ["/library", "Library"],
  ["/certifications", "Certifications"],
  ["/contact", "Contact"],
];

export function Navbar() {
  const { data } = useSession();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#0B1F3A] shadow-lg">
      <div className="bg-white/85 backdrop-blur-md supports-[backdrop-filter]:bg-white/75">
        <div className="mx-auto max-w-6xl px-3 py-1 md:hidden">
          <div className="relative flex items-center justify-center">
            <Image
              src="/branding/cpu-logo-clear.png"
              alt="California Public University logo"
              width={60}
              height={60}
              className="h-[56px] w-[56px] rounded-full object-contain"
              priority
            />
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="absolute right-0 rounded-lg border border-slate-300 bg-white p-1.5 text-[#0B1F3A]"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          <div className="mt-1 text-center">
            <Link href="/" className="text-sm font-black tracking-wide text-[#101827]">
              CALIFORNIA PUBLIC UNIVERSITY
            </Link>
            <p className="text-[9px] font-semibold text-[#2a2a2a]">United States of America</p>
          </div>
          {!data?.user ? (
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Button asChild className="h-8 w-full rounded-md bg-[#0B1F3A] py-0 text-[10px] text-white hover:bg-[#1E3A8A]">
                <Link href="/admission">Online Applications</Link>
              </Button>
              <Button
                asChild
                className={`h-8 w-full rounded-md py-0 text-[10px] text-white ${
                  pathname === "/contact"
                    ? "bg-[#1E3A8A]"
                    : "bg-[#0B1F3A] hover:bg-[#1E3A8A]"
                }`}
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          ) : (
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Button asChild className="h-8 w-full rounded-md bg-[#0B1F3A] py-0 text-[10px] text-white hover:bg-[#1E3A8A]">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button
                className="h-8 w-full rounded-md bg-[#0B1F3A] py-0 text-[10px] text-white hover:bg-[#1E3A8A]"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Logout
              </Button>
            </div>
          )}
        </div>

        <div className="mx-auto hidden max-w-6xl gap-1 px-3 py-0.5 md:grid md:grid-cols-[140px_1fr_200px] md:items-center md:py-0">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/branding/cpu-logo-clear.png"
              alt="California Public University logo"
              width={150}
              height={150}
              className="h-[62px] w-[62px] rounded-full object-contain md:h-[98px] md:w-[98px]"
              priority
            />
          </div>

          <div className="text-center">
            <Link href="/" className="text-lg font-black tracking-wide text-[#101827] md:text-2xl">
              CALIFORNIA PUBLIC UNIVERSITY
            </Link>
            <p className="text-[9px] font-semibold text-[#2a2a2a] md:text-[11px]">United States of America</p>
            <div className="mt-0 flex flex-wrap items-center justify-center gap-1.5 text-[8px] text-[#333] md:text-[10px]">
              <span>contact@cpu-edu.us</span>
              <span>+1 (213) 805-7076</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center md:flex-col md:items-end">
            {!data?.user ? (
              <>
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                <Button asChild className="h-7 w-[148px] rounded-md bg-[#0B1F3A] py-0 text-[10px] text-white hover:bg-[#1E3A8A] md:h-7 md:w-[160px]">
                    <Link href="/admission">Online Applications</Link>
                  </Button>
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.4 }}
                >
                  <Button
                    asChild
                    className={`h-7 w-[148px] rounded-md py-0 text-[10px] text-white md:h-7 md:w-[160px] ${
                      pathname === "/contact"
                        ? "bg-[#1E3A8A]"
                        : "bg-[#0B1F3A] hover:bg-[#1E3A8A]"
                    }`}
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </motion.div>
              </>
            ) : (
              <>
                <Button asChild className="h-7 w-[148px] rounded-md bg-[#0B1F3A] py-0 text-[10px] text-white hover:bg-[#1E3A8A]">
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <Button
                  className="h-7 w-[148px] rounded-md bg-[#0B1F3A] py-0 text-[10px] text-white hover:bg-[#1E3A8A]"
                  onClick={() => signOut({ callbackUrl: "/" })}
                >
                  Logout
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      <nav className="hidden bg-[#0B1F3A] text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center gap-1.5 overflow-x-auto px-3 py-0.5 text-[9px] font-semibold uppercase tracking-wide sm:flex-wrap sm:justify-center sm:overflow-visible">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={`whitespace-nowrap rounded-full border px-3 py-1 transition ${
                pathname === href
                  ? "border-[#f3d475] bg-white/15 text-[#f3d475]"
                  : "border-white/20 hover:border-[#f3d475] hover:bg-white/10 hover:text-[#f3d475]"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-[#0B1F3A] px-3 py-3 text-white md:hidden">
          <div className="grid gap-2">
            {links.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg border px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide ${
                  pathname === href
                    ? "border-[#f3d475] bg-white/15 text-[#f3d475]"
                    : "border-white/20"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
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
  return (
    <header className="sticky top-0 z-50 border-b border-[#0B1F3A] shadow-lg">
      <div className="bg-white/85 backdrop-blur-md supports-[backdrop-filter]:bg-white/75">
        <div className="mx-auto grid max-w-6xl gap-1 px-3 py-0 md:grid-cols-[170px_1fr_210px] md:items-center">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/branding/cpu-logo-clear.png"
              alt="California Public University logo"
              width={150}
              height={150}
              className="h-[132px] w-[132px] rounded-full object-contain"
              priority
            />
          </div>

          <div className="text-center">
            <Link href="/" className="text-2xl font-black tracking-wide text-[#101827] md:text-3xl">
              CALIFORNIA PUBLIC UNIVERSITY
            </Link>
            <p className="text-[11px] font-semibold text-[#2a2a2a] md:text-xs">United States of America</p>
            <div className="mt-0 flex flex-wrap items-center justify-center gap-2 text-[10px] text-[#333] md:text-[11px]">
              <span>contact@cpu-edu.us</span>
              <span>+1 (213) 805-7076</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 md:items-end">
            {!data?.user ? (
              <>
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                <Button asChild className="h-7 w-[172px] rounded-md bg-[#0B1F3A] py-0 text-[11px] text-white hover:bg-[#1E3A8A]">
                    <Link href="/admission">Online Applications</Link>
                  </Button>
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.4 }}
                >
                  <Button
                    asChild
                    className={`h-7 w-[172px] rounded-md py-0 text-[11px] text-white ${
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

      <nav className="bg-[#0B1F3A] text-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide sm:flex-wrap sm:justify-center sm:overflow-visible">
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
    </header>
  );
}

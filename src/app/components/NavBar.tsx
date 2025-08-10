
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Calendar,
  PlusCircle,
  LayoutDashboard,
  Bookmark,
  FileText,
  Info,
  Phone,
  LogIn,
  UserPlus,
  X,
  Menu,
} from "lucide-react";

type NavLink = { href: string; label: string; icon: React.ReactNode };

const navLinks: NavLink[] = [
  { href: "/", label: "Home", icon: <Home size={18} /> },
  { href: "/events", label: "Events", icon: <Calendar size={18} /> },
  { href: "/blog", label: "Blog", icon: <FileText size={18} /> },
  { href: "/about", label: "About", icon: <Info size={18} /> },
  { href: "/contact", label: "Contact", icon: <Phone size={18} /> },
];

const dashboardLinks: NavLink[] = [
  { href: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
  { href: "/bookings", label: "Bookings", icon: <Bookmark size={18} /> },
  { href: "/events/create", label: "Create Event", icon: <PlusCircle size={18} /> },
];

export default function Navbar() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {

    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-slate-900/95 backdrop-blur-md text-slate-100 shadow-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-extrabold select-none"
              aria-label="Planora - Home"
            >
            
              <Calendar size={26} className="text-amber-400" />
              <span className="leading-none">
                <span className="text-sky-300">Plan</span>
                <span className="text-amber-400">ora</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <div className="flex items-center space-x-1">
                {navLinks.map(({ href, label, icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(href)
                        ? "bg-amber-500/20 text-amber-300"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    {icon}
                    {label}
                  </Link>
                ))}
              </div>

              {/* Dashboard group (protected links shown here for logged-in users ideally) */}
              <div className="flex items-center ml-3 space-x-1">
                {dashboardLinks.map(({ href, label, icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(href)
                        ? "bg-emerald-500/20 text-emerald-300"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    {icon}
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Actions / Auth buttons (desktop) */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                href="/login"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md border border-slate-700 text-slate-200 hover:bg-slate-800"
                aria-label="Login"
              >
                <LogIn size={16} />
                Login
              </Link>

              <Link
                href="/signup"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md bg-amber-400 text-slate-900 hover:bg-amber-500"
                aria-label="Sign up"
              >
                <UserPlus size={16} />
                Sign Up
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label="Toggle menu"
                className="p-2 rounded-md text-slate-200 hover:bg-slate-800/60"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        {open && (
          <div className="md:hidden border-t border-slate-800 bg-slate-900/95">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map(({ href, label, icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                    isActive(href)
                      ? "bg-amber-500/20 text-amber-300"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {icon}
                  <span className="text-sm font-medium">{label}</span>
                </Link>
              ))}

              <div className="mt-2 border-t border-slate-800 pt-3">
                {dashboardLinks.map(({ href, label, icon }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                      isActive(href)
                        ? "bg-emerald-500/20 text-emerald-300"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    {icon}
                    <span className="text-sm font-medium">{label}</span>
                  </Link>
                ))}

                <div className="mt-3 flex space-x-2">
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="flex-1 flex items-center gap-2 justify-center px-3 py-2 rounded-md border border-slate-700 text-slate-200 hover:bg-slate-800"
                  >
                    <LogIn size={16} />
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setOpen(false)}
                    className="flex-1 flex items-center gap-2 justify-center px-3 py-2 rounded-md bg-amber-400 text-slate-900 hover:bg-amber-500"
                  >
                    <UserPlus size={16} />
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

     
      <div aria-hidden className="h-16 md:h-16" />
    </header>
  );
}

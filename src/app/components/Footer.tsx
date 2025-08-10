"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Github, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & About */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-extrabold select-none"
              aria-label="Planora - Home"
            >
              <span className="leading-none">
                <span className="text-sky-300">Plan</span>
                <span className="text-amber-400">ora</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400">
              Planora helps you create, manage, and book events with ease.  
              Your go-to platform for organizing and attending meaningful experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-amber-400 transition">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-amber-400 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-amber-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-amber-400 transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-amber-400 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-amber-400" />
                support@planora.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-amber-400" />
                +1 234 567 890
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-amber-400" />
                New York, USA
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <Link href="https://facebook.com" target="_blank" className="hover:text-amber-400">
                <Facebook size={18} />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="hover:text-amber-400">
                <Twitter size={18} />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="hover:text-amber-400">
                <Instagram size={18} />
              </Link>
              <Link href="https://github.com" target="_blank" className="hover:text-amber-400">
                <Github size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-8 pt-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} <span className="text-sky-300">Plan</span>
          <span className="text-amber-400">ora</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

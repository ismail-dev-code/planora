import { Bookmark, PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const dashboardLinks: NavLink[] = [
  { href: "/bookings", label: "Bookings", icon: <Bookmark size={18} /> },
  { href: "/events/create", label: "Create Event", icon: <PlusCircle size={18} /> },
];

export default function Dashboard() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="mb-6">
        Welcome to your dashboard! Here you can manage events, bookings, and more.
      </p>

      {/* Dashboard local nav */}
      <div className="flex space-x-3">
        {dashboardLinks.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-slate-800 text-slate-200 hover:bg-slate-700 transition"
          >
            {icon}
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

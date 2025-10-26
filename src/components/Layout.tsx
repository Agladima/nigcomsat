"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  CloudSun,
  Sprout,
  FileText,
  Users,
  HelpCircle,
  Settings,
  UserPlus,
} from "lucide-react";
import { LuPanelLeftClose, LuPanelLeftOpen } from "react-icons/lu";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const topMenuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Weather Analytics", icon: <CloudSun size={20} /> },
    { name: "Soil Health", icon: <Sprout size={20} /> },
    { name: "Reports", icon: <FileText size={20} /> },
    { name: "Team", icon: <Users size={20} /> },
  ];

  const bottomMenuItems = [
    { name: "Help", icon: <HelpCircle size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-white text-gray-800">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-white text-black transition-all duration-300 flex flex-col justify-between border-r border-gray-200`}
      >
        <div>
          {/* Logo + Collapse Icon */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              {isOpen && (
                <Image
                  src="/logo.png"
                  alt="Company Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              )}
            </div>

            <button
              onClick={toggleSidebar}
              className="text-gray-600 hover:text-blue-600 transition"
            >
              {isOpen ? (
                <LuPanelLeftClose size={26} />
              ) : (
                <LuPanelLeftOpen size={26} />
              )}
            </button>
          </div>

          {/* App Name */}
          {isOpen && (
            <h1
              className="font-bold text-lg px-6 cursor-pointer"
              onClick={toggleSidebar}
            >
              AgriTech
            </h1>
          )}

          {/* Large gap between title and menu */}
          <div className="mt-8" />

          {/* Top Menu */}
          <nav>
            <ul className="space-y-2">
              {topMenuItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-blue-100 cursor-pointer rounded-md mx-2 transition"
                >
                  {item.icon}
                  {isOpen && <span>{item.name}</span>}
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Menu */}
          <nav className="mt-8">
            <ul className="space-y-2">
              {bottomMenuItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-blue-100 cursor-pointer rounded-md mx-2 transition"
                >
                  {item.icon}
                  {isOpen && <span>{item.name}</span>}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Invite Button and User Profile */}
        <div className="p-4">
          <button className="flex items-center justify-center gap-2 w-full bg-white text-black border border-gray-200 py-2 rounded-md hover:bg-blue-100 transition">
            <UserPlus size={18} />
            {isOpen && <span>Invite</span>}
          </button>

          {/* Divider */}
          <div className="border-t border-gray-200 my-4" />

          <div className="flex items-center gap-3">
            <Image
              src="/Logo.png"
              alt="User Avatar"
              width={42}
              height={42}
              className="rounded-full"
            />
            {isOpen && (
              <div>
                <p className="text-sm font-semibold">John Doe</p>
                <p className="text-xs text-gray-500">john@example.com</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto bg-white">{children}</main>
    </div>
  );
}

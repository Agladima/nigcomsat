"use client";

import {
  Search,
  Bell,
  Droplets,
  Wind,
  Eye,
  Gauge,
  Sun,
  CloudRain,
} from "lucide-react";
import { MdWbCloudy, MdSunny } from "react-icons/md";
import { IoRainy } from "react-icons/io5";

export default function WeatherAnalytics() {
  return (
    <div className="p-0 m-0">
      {/* Top Navigation Bar */}
      <div className="flex items-center w-full px-6 py-2 border-b border-gray-100 bg-white">
        {/* Left: Title */}
        <h1 className="text-2xl font-semibold text-gray-900 whitespace-nowrap">
          AgroSense Team
        </h1>

        {/* Center: Search */}
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-1.5 text-gray-500 w-72 mx-auto">
          <Search size={18} className="mr-2 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-full"
          />
        </div>

        {/* Right: Notification + Button */}
        <div className="flex items-center ml-6 space-x-3">
          <button className="p-2 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 transition">
            <Bell size={20} className="text-gray-700" />
          </button>

          <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full font-medium hover:bg-blue-700 transition">
            Run New Test
          </button>
        </div>
      </div>

      {/* Section Heading */}
      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Weather Analytics
        </h2>
        <p className="text-gray-600 mb-6">
          Real-time weather data and forecast for your region.
        </p>

        {/* Main Weather Card */}
        <div className="bg-white border border-gray-100 rounded-xl shadow p-6 flex flex-col lg:flex-row justify-between">
          {/* Left side — main weather info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Current Weather - Oyo, Nigeria
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Last updated: 10 mins ago
            </p>

            {/* Weather icon + info */}
            <div className="flex flex-col items-center justify-center">
              <MdWbCloudy size={60} className="text-gray-400 mb-2" />
              <h1 className="text-5xl font-bold text-gray-900">28°C</h1>
              <p className="text-lg text-gray-600 mt-1">Partly Cloudy</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-gray-200 mx-8"></div>

          {/* Right side — weather details */}
          <div className="flex-1 grid grid-cols-3 gap-6 mt-6 lg:mt-0">
            {/* Top Row */}
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-500 rounded-full text-white">
                <Droplets size={18} />
              </div>
              <div className="text-left">
                <span className="block text-sm font-medium text-gray-600">
                  Humidity
                </span>
                <p className="text-lg font-semibold text-gray-900">68%</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gray-600 rounded-full text-white">
                <Wind size={18} />
              </div>
              <div className="text-left">
                <span className="block text-sm font-medium text-gray-600">
                  Wind
                </span>
                <p className="text-lg font-semibold text-gray-900">12 km/h</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-600 rounded-full text-white">
                <Eye size={18} />
              </div>
              <div className="text-left">
                <span className="block text-sm font-medium text-gray-600">
                  Visibility
                </span>
                <p className="text-lg font-semibold text-gray-900">10 km</p>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-600 rounded-full text-white">
                <Gauge size={18} />
              </div>
              <div className="text-left">
                <span className="block text-sm font-medium text-gray-600">
                  Pressure
                </span>
                <p className="text-lg font-semibold text-gray-900">1013 mb</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2 bg-yellow-500 rounded-full text-white">
                <Sun size={18} />
              </div>
              <div className="text-left">
                <span className="block text-sm font-medium text-gray-600">
                  UV Index
                </span>
                <p className="text-lg font-semibold text-gray-900">7 (High)</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-700 rounded-full text-white">
                <CloudRain size={18} />
              </div>
              <div className="text-left">
                <span className="block text-sm font-medium text-gray-600">
                  Rain Chance
                </span>
                <p className="text-lg font-semibold text-gray-900">20%</p>
              </div>
            </div>
          </div>
        </div>

        {/* 7-Day Forecast Card */}
        <div className="bg-white border border-gray-100 rounded-xl shadow p-6 mt-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            7-Day Weather Forecast
          </h2>
          <p className="text-gray-600 mb-4">
            Detailed weather predictions for the week ahead.
          </p>

          <div className="grid grid-cols-7 gap-4">
            {[
              {
                day: "Mon",
                temp: "28°C",
                rain: "0mm",
                icon: <MdSunny className="text-yellow-500 text-3xl my-2" />,
              },
              {
                day: "Tue",
                temp: "29°C",
                rain: "2mm",
                icon: <MdWbCloudy className="text-gray-500 text-3xl my-2" />,
              },
              {
                day: "Wed",
                temp: "27°C",
                rain: "5mm",
                icon: <MdWbCloudy className="text-gray-500 text-3xl my-2" />,
              },
              {
                day: "Thu",
                temp: "27°C",
                rain: "5mm",
                icon: <IoRainy className="text-blue-500 text-3xl my-2" />,
              },
              {
                day: "Fri",
                temp: "28°C",
                rain: "0mm",
                icon: <MdSunny className="text-yellow-500 text-3xl my-2" />,
              },
              {
                day: "Sat",
                temp: "30°C",
                rain: "0mm",
                icon: <MdSunny className="text-yellow-500 text-3xl my-2" />,
              },
              {
                day: "Sun",
                temp: "29°C",
                rain: "1mm",
                icon: <MdWbCloudy className="text-gray-500 text-3xl my-2" />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-gray-50 rounded-xl py-4 hover:bg-gray-100 transition"
              >
                <p className="text-gray-600 font-medium">{item.day}</p>
                {item.icon}
                <p className="text-gray-900 font-semibold">{item.temp}</p>
                <p className="text-gray-500 text-sm">{item.rain}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

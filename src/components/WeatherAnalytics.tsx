"use client";

import { useState } from "react";
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
import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ComposedChart,
} from "recharts";

export default function WeatherAnalytics() {
  const [activeTab, setActiveTab] = useState("forecast");

  // Forecast Analysis Data
  const tempHumidityData = [
    { day: "Mon", humidity: 28, temp: 25 },
    { day: "Tue", humidity: 32, temp: 24 },
    { day: "Wed", humidity: 31, temp: 23 },
    { day: "Thu", humidity: 32, temp: 30 },
    { day: "Fri", humidity: 24, temp: 31 },
    { day: "Sat", humidity: 32, temp: 24 },
    { day: "Sun", humidity: 32, temp: 25 },
  ];

  const rainfallWindData = [
    { day: "Mon", wind: 7, rain: 0 },
    { day: "Tue", wind: 8, rain: 2 },
    { day: "Wed", wind: 10, rain: 6 },
    { day: "Thu", wind: 12, rain: 12 },
    { day: "Fri", wind: 10, rain: 6 },
    { day: "Sat", wind: 7, rain: 0 },
    { day: "Sun", wind: 9, rain: 2 },
  ];

  // Historical Data
  const historicalData = [
    { day: "Mon", temp: 27, rain: 1 },
    { day: "Tue", temp: 26, rain: 3 },
    { day: "Wed", temp: 28, rain: 0 },
    { day: "Thu", temp: 29, rain: 2 },
    { day: "Fri", temp: 28, rain: 0 },
    { day: "Sat", temp: 27, rain: 4 },
    { day: "Sun", temp: 26, rain: 1 },
  ];

  return (
    <div className="p-0 m-0">
      {/* Top Navigation Bar */}
      <div className="flex items-center w-full px-6 py-2 border-b border-gray-100 bg-white">
        <h1 className="text-2xl font-semibold text-gray-900 whitespace-nowrap">
          AgroSense Team
        </h1>

        <div className="flex items-center bg-gray-100 rounded-full px-3 py-1.5 text-gray-500 w-72 mx-auto">
          <Search size={18} className="mr-2 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-full"
          />
        </div>

        <div className="flex items-center ml-6 space-x-3">
          <button className="p-2 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 transition">
            <Bell size={20} className="text-gray-700" />
          </button>

          <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full font-medium hover:bg-blue-700 transition">
            Run New Test
          </button>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Weather Analytics
        </h2>
        <p className="text-gray-600 mb-6">
          Real-time weather data and forecast for your region.
        </p>

        {/* Main Weather Card */}
        <div className="bg-white border border-gray-100 rounded-xl shadow p-6 flex flex-col lg:flex-row justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Current Weather - Oyo, Nigeria
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Last updated: 10 mins ago
            </p>
            <div className="flex flex-col items-center justify-center">
              <MdWbCloudy size={60} className="text-gray-400 mb-2" />
              <h1 className="text-5xl font-bold text-gray-900">28°C</h1>
              <p className="text-lg text-gray-600 mt-1">Partly Cloudy</p>
            </div>
          </div>

          <div className="hidden lg:block w-px bg-gray-200 mx-8"></div>

          <div className="flex-1 grid grid-cols-3 gap-6 mt-6 lg:mt-0">
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

        {/* Pill-style tabs below the main weather card */}
        <div className="flex space-x-2 bg-gray-100 rounded-full p-1 w-[500px] mt-6">
          <button
            className={`flex-1 text-center px-4 py-2 rounded-full font-medium transition ${
              activeTab === "forecast"
                ? "bg-white text-gray-900 shadow"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("forecast")}
          >
            Forecast Analysis
          </button>
          <button
            className={`flex-1 text-center px-4 py-2 rounded-full font-medium transition ${
              activeTab === "historical"
                ? "bg-white text-gray-900 shadow"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("historical")}
          >
            Historical Data
          </button>
        </div>

        {/* Graphs / Cards */}
        {activeTab === "forecast" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Temperature & Humidity */}
            <div className="bg-white border border-gray-100 rounded-xl shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Temperature & Humidity Trends
              </h3>
              <p className="text-gray-600 mb-4">7-Day Forecast Comparison</p>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart
                  data={tempHumidityData}
                  margin={{ top: 20, right: 40, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="day" tick={{ fill: "#6b7280" }} />
                  <YAxis
                    yAxisId="left"
                    orientation="left"
                    domain={[0, 80]}
                    tick={{ fill: "#2563eb" }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    domain={[0, 40]}
                    tick={{ fill: "#ef4444" }}
                  />
                  <Tooltip />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="humidity"
                    stroke="#2563eb"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="temp"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Rainfall & Wind */}
            <div className="bg-white border border-gray-100 rounded-xl shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Rainfall & Wind Speed
              </h3>
              <p className="text-gray-600 mb-4">Precipitations and Patterns</p>
              <ResponsiveContainer width="100%" height={250}>
                <ComposedChart
                  data={rainfallWindData}
                  margin={{ top: 20, right: 40, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="day" tick={{ fill: "#6b7280" }} />
                  <YAxis
                    yAxisId="left"
                    orientation="left"
                    domain={[0, 12]}
                    tick={{ fill: "#9ca3af" }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    domain={[0, 20]}
                    tick={{ fill: "#2563eb" }}
                  />
                  <Tooltip />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="wind"
                    fill="#d1d5db"
                    stroke="#9ca3af"
                    fillOpacity={0.8}
                  />
                  <Area
                    yAxisId="right"
                    type="monotone"
                    dataKey="rain"
                    fill="#3b82f6"
                    stroke="#2563eb"
                    fillOpacity={0.8}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === "historical" && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Past Week Weather Data
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={historicalData}
                margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" tick={{ fill: "#6b7280" }} />
                <YAxis
                  yAxisId="left"
                  orientation="left"
                  domain={[0, 40]}
                  tick={{ fill: "#ef4444" }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  domain={[0, 10]}
                  tick={{ fill: "#3b82f6" }}
                />
                <Tooltip />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="temp"
                  stroke="#ef4444"
                  strokeWidth={2}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="rain"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}

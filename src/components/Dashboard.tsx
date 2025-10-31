"use client";
import { useState } from "react";
import {
  Search,
  Bell,
  AlertTriangle,
  X,
  Leaf,
  Thermometer,
  Droplets,
  Wind,
  CircleCheck,
} from "lucide-react";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  Legend,
} from "recharts";

export default function Dashboard() {
  const [showAlert, setShowAlert] = useState(true);

  // Soil health data
  const soilData = [
    { name: "Nitrogen", value: 75 },
    { name: "Phosphorus", value: 60 },
    { name: "Potassium", value: 80 },
    { name: "pH Level", value: 70 },
    { name: "Organic Matter", value: 55 },
  ];

  // Weather data
  const weatherData = [
    { day: "Mon", temp: 32, rain: 10 },
    { day: "Tue", temp: 7, rain: 32 },
    { day: "Wed", temp: 6, rain: 30 },
    { day: "Thu", temp: 30, rain: 32 },
    { day: "Fri", temp: 24, rain: 8 },
    { day: "Sat", temp: 4, rain: 30 },
    { day: "Sun", temp: 8, rain: 32 },
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

      {/* Dashboard Main Content */}
      <div className="p-6 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Dashboard Overview
        </h2>
        <p className="text-gray-600 mb-6">
          Real-time insights for your agricultural operations.
        </p>

        {/* Weather Alert Card */}
        {showAlert && (
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 relative shadow-sm">
            <div className="flex-shrink-0">
              <AlertTriangle size={24} className="text-yellow-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-yellow-800">Weather Alert</h3>
              <p className="text-yellow-700 text-sm mt-1">
                Heavy rainfall expected in the next 48 hours. Consider adjusting
                irrigation schedules.
              </p>
            </div>
            <button
              onClick={() => setShowAlert(false)}
              className="absolute top-3 right-3 text-yellow-700 hover:text-yellow-900 transition"
            >
              <X size={18} />
            </button>
          </div>
        )}

        {/* Dashboard Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Soil Health */}
          <div className="bg-white rounded-lg shadow border border-gray-100 p-5 flex flex-col">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Overall Soil Health
              </h3>
              <div className="p-2 bg-green-600 rounded-full">
                <Leaf size={20} className="text-white" />
              </div>
            </div>
            <p className="text-3xl font-bold mt-2 text-gray-900">78%</p>
            <div className="flex items-center text-green-600 mt-2">
              <FaArrowTrendUp className="mr-1" />
              <span className="text-sm font-medium">+5% from last month</span>
            </div>
          </div>

          {/* Temperature */}
          <div className="bg-white rounded-lg shadow border border-gray-100 p-5 flex flex-col">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Current Temperature
              </h3>
              <div className="p-2 bg-red-500 rounded-full">
                <Thermometer size={20} className="text-white" />
              </div>
            </div>
            <p className="text-3xl font-bold mt-2 text-gray-900">28°C</p>
            <div className="flex items-center text-red-500 mt-2">
              <FaArrowTrendDown className="mr-1" />
              <span className="text-sm font-medium">-2°C</span>
            </div>
          </div>

          {/* Soil Moisture */}
          <div className="bg-white rounded-lg shadow border border-gray-100 p-5 flex flex-col">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Avg Soil Moisture
              </h3>
              <div className="p-2 bg-blue-500 rounded-full">
                <Droplets size={20} className="text-white" />
              </div>
            </div>
            <p className="text-3xl font-bold mt-2 text-gray-900">68%</p>
            <div className="flex items-center text-green-600 mt-2">
              <FaArrowTrendUp className="mr-1" />
              <span className="text-sm font-medium">+5%</span>
            </div>
          </div>

          {/* Wind Speed */}
          <div className="bg-white rounded-lg shadow border border-gray-100 p-5 flex flex-col">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Wind Speed
              </h3>
              <div className="p-2 bg-gray-600 rounded-full">
                <Wind size={20} className="text-white" />
              </div>
            </div>
            <p className="text-3xl font-bold mt-2 text-gray-900">12 km/h</p>
            <div className="flex items-center text-gray-600 mt-2">
              <CircleCheck size={16} className="mr-1" />
              <span className="text-sm font-medium">Normal</span>
            </div>
          </div>
        </div>

        {/* --- Graph Cards --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Soil Health Indicators */}
          <div className="bg-white rounded-lg shadow border border-gray-100 p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Soil Health Indicators
            </h3>
            <p className="text-gray-600 mb-4">Current soil nutrient levels</p>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                layout="vertical"
                data={soilData}
                margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  tick={{ fill: "#6b7280" }}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fill: "#6b7280" }}
                  width={120}
                />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill="#22c55e"
                  barSize={20}
                  radius={[4, 4, 4, 4]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* 7-Day Weather Forecast */}
          <div className="bg-white rounded-lg shadow border border-gray-100 p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              7-Day Weather Forecast
            </h3>
            <p className="text-gray-600 mb-4">
              Temperature and rainfall prediction
            </p>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart
                data={weatherData}
                margin={{ top: 20, right: 40, left: 40, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" tick={{ fill: "#6b7280" }} />
                <YAxis
                  yAxisId="left"
                  orientation="left"
                  domain={[0, 32]}
                  tick={{ fill: "red" }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  domain={[0, 32]}
                  tick={{ fill: "blue" }}
                />
                <Tooltip />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="temp"
                  stroke="#ef4444"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="rain"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex justify-end mt-2 space-x-4">
              <span className="text-blue-600 font-medium">Rainfall (mm)</span>
              <span className="text-red-600 font-medium">Temp (°C)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

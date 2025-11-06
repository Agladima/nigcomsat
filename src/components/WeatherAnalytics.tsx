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
import { MdWbCloudy } from "react-icons/md";
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

  const forecastDays = [
    {
      day: "Mon",
      icon: <Sun className="text-yellow-400" size={28} />,
      temp: "28°C",
      condition: "Cloudy",
    },
    {
      day: "Tue",
      icon: <MdWbCloudy className="text-gray-500" size={28} />,
      temp: "30°C",
      condition: "Sunny",
    },
    {
      day: "Wed",
      icon: <MdWbCloudy className="text-gray-500" size={28} />,
      temp: "25°C",
      condition: "Rainy",
    },
    {
      day: "Thu",
      icon: <CloudRain className="text-blue-400" size={28} />,
      temp: "31°C",
      condition: "Sunny",
    },
    {
      day: "Fri",
      icon: <Sun className="text-yellow-400" size={28} />,
      temp: "27°C",
      condition: "Windy",
    },
    {
      day: "Sat",
      icon: <Sun className="text-yellow-400" size={28} />,
      temp: "29°C",
      condition: "Cloudy",
    },
    {
      day: "Sun",
      icon: <MdWbCloudy className="text-gray-500" size={28} />,
      temp: "26°C",
      condition: "Rainy",
    },
  ];

  return (
    <div className="p-0 m-0 w-[90%] mx-auto">
      {/* Top Navigation Bar */}
      <div className="flex items-center w-full px-6 py-2 border-b border-gray-200 bg-white">
        <h1 className="text-2xl font-semibold text-gray-900 whitespace-nowrap">
          AgroSense Team
        </h1>

        <div className="flex items-center bg-gray-100 rounded-full px-3 py-1.5 text-gray-500 w-72 mx-auto border border-gray-200">
          <Search size={18} className="mr-2 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-full"
          />
        </div>

        <div className="flex items-center ml-6 space-x-3">
          <button className="p-2 bg-gray-100 rounded-full border border-gray-300 hover:bg-gray-200 transition">
            <Bell size={20} className="text-gray-700" />
          </button>

          <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full font-medium hover:bg-blue-700 transition border border-blue-700">
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
        <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col lg:flex-row justify-between">
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
            {[
              {
                icon: <Droplets size={18} />,
                label: "Humidity",
                value: "68%",
                color: "bg-blue-500",
              },
              {
                icon: <Wind size={18} />,
                label: "Wind",
                value: "12 km/h",
                color: "bg-gray-600",
              },
              {
                icon: <Eye size={18} />,
                label: "Visibility",
                value: "10 km",
                color: "bg-green-600",
              },
              {
                icon: <Gauge size={18} />,
                label: "Pressure",
                value: "1013 mb",
                color: "bg-purple-600",
              },
              {
                icon: <Sun size={18} />,
                label: "UV Index",
                value: "7 (High)",
                color: "bg-yellow-500",
              },
              {
                icon: <CloudRain size={18} />,
                label: "Rain Chance",
                value: "20%",
                color: "bg-blue-700",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div
                  className={`p-2 ${item.color} rounded-full text-white border border-gray-700`}
                >
                  {item.icon}
                </div>
                <div className="text-left">
                  <span className="block text-sm font-medium text-gray-600">
                    {item.label}
                  </span>
                  <p className="text-lg font-semibold text-gray-900">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7-Day Forecast Section */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            7-Day Weather Forecast{" "}
          </h3>
          <p className="text-gray-600 mb-4">
            Detailed weather predictions for the week ahead{" "}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 ">
            {forecastDays.map((day, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-50 rounded-lg py-4 hover:bg-gray-100 transition border border-gray-200"
              >
                <span className="text-sm font-semibold text-gray-800 mb-2">
                  {day.day}
                </span>
                {day.icon}
                <span className="text-lg font-bold text-gray-900 mt-2 ">
                  {day.temp}
                </span>
                <span className="text-sm text-gray-600 ">{day.condition}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pill Tabs */}
        <div className="flex space-x-2 bg-gray-100 rounded-full p-1 w-[500px] mt-6 border border-gray-200">
          {["forecast", "historical"].map((tab) => (
            <button
              key={tab}
              className={`flex-1 text-center px-4 py-2 rounded-full font-medium transition ${
                activeTab === tab
                  ? "bg-white text-gray-900 border border-gray-300"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "forecast" ? "Forecast Analysis" : "Historical Data"}
            </button>
          ))}
        </div>

        {/* Forecast Analysis */}
        {activeTab === "forecast" && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              {/* Temperature & Humidity */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
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

              {/* Rainfall & Wind Speed */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Rainfall & Wind Speed
                </h3>
                <p className="text-gray-600 mb-4">
                  Precipitations and Patterns
                </p>
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

            {/* Agricultural Recommendations */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Agricultural Recommendations
              </h3>
              <p className="text-gray-600 mb-4">Weather-based farming advice</p>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">
                    Rainfall Alert
                  </h4>
                  <p className="text-gray-600">
                    Heavy rainfall expected on Thursday (12mm). Consider
                    postponing irrigation and ensure proper drainage in
                    low-lying fields.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-semibold text-gray-800">High UV Index</h4>
                  <p className="text-gray-600">
                    UV index is high (7). Ensure workers have adequate sun
                    protection. Consider scheduling outdoor work for early
                    morning or late afternoon.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">
                    Optimal Conditions
                  </h4>
                  <p className="text-gray-600">
                    Friday to Sunday shows ideal conditions for pesticide
                    application with moderate wind speeds and no rainfall
                    expected.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Historical Data */}
        {activeTab === "historical" && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              {/* Rainfall & Wind Speed */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Rainfall & Wind Speed
                </h3>
                <p className="text-gray-600 mb-4">
                  Precipitation and Wind Patterns
                </p>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart
                    data={[
                      { month: "Jan", rain: 20 },
                      { month: "Feb", rain: 30 },
                      { month: "Mar", rain: 70 },
                      { month: "Apr", rain: 100 },
                      { month: "May", rain: 140 },
                      { month: "Jun", rain: 200 },
                      { month: "Jul", rain: 280 },
                      { month: "Aug", rain: 280 },
                      { month: "Sep", rain: 210 },
                      { month: "Oct", rain: 70 },
                      { month: "Nov", rain: 30 },
                      { month: "Dec", rain: 20 },
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" tick={{ fill: "#6b7280" }} />
                    <YAxis
                      domain={[0, 280]}
                      tick={{ fill: "#3b82f6" }}
                      orientation="left"
                    />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="rain"
                      fill="#3b82f6"
                      stroke="#2563eb"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Temperature Variation */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Temperature Variation
                </h3>
                <p className="text-gray-600 mb-4">
                  Average Monthly Temperatures
                </p>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart
                    data={[
                      { month: "Jan", temp: 26 },
                      { month: "Feb", temp: 26 },
                      { month: "Mar", temp: 28 },
                      { month: "Apr", temp: 26 },
                      { month: "May", temp: 24 },
                      { month: "Jun", temp: 26 },
                      { month: "Jul", temp: 26 },
                      { month: "Aug", temp: 26 },
                      { month: "Sep", temp: 27 },
                      { month: "Oct", temp: 24 },
                      { month: "Nov", temp: 26 },
                      { month: "Dec", temp: 26 },
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" tick={{ fill: "#6b7280" }} />
                    <YAxis
                      domain={[20, 32]}
                      tick={{ fill: "#ef4444" }}
                      orientation="left"
                    />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="temp"
                      stroke="#ef4444"
                      strokeWidth={2}
                      dot={{ r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Agricultural Recommendations */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Agricultural Recommendations
              </h3>
              <p className="text-gray-600 mb-4">Weather-based farming advice</p>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">
                    Rainfall Alert
                  </h4>
                  <p className="text-gray-600">
                    Heavy rainfall expected on Thursday (12mm). Consider
                    postponing irrigation and ensure proper drainage in
                    low-lying fields.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-semibold text-gray-800">High UV Index</h4>
                  <p className="text-gray-600">
                    UV index is high (7). Ensure workers have adequate sun
                    protection. Consider scheduling outdoor work for early
                    morning or late afternoon.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">
                    Optimal Conditions
                  </h4>
                  <p className="text-gray-600">
                    Friday to Sunday shows ideal conditions for pesticide
                    application with moderate wind speeds and no rainfall
                    expected.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

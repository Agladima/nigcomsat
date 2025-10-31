"use client";

import { useState } from "react";
import { Search, Bell, Sprout, CheckCircle2 } from "lucide-react";
import { FaArrowTrendUp } from "react-icons/fa6";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

export default function SoilHealth() {
  const [activeTab, setActiveTab] = useState("nutrient");

  const propertyInsights = [
    {
      color: "green",
      title: "pH Level (6.5)",
      desc: "Slightly acidic to neutral. Ideal for most crops grown in your region. Supports good nutrient availability.",
    },
    {
      color: "blue",
      title: "Organic Matter (3.2%)",
      desc: "Good organic content. Improves soil structure, water retention, and nutrient availability. Consider adding compost to increase further.",
    },
    {
      color: "green",
      title: "Moisture (68%)",
      desc: "Optimal moisture level for most crops. Good water retention without waterlogging. Adjust irrigation as needed based on crop type.",
    },
    {
      color: "green",
      title: "Temperature (24°C)",
      desc: "Within the optimal range. Supports healthy root activity, nutrient uptake, and microbial functions. Maintain consistent temperature through mulching and proper irrigation.",
    },
    {
      color: "blue",
      title: "Electrical Conductivity (1.2 dS/m)",
      desc: "Close to the optimal range. Indicates good salinity balance for nutrient absorption. Monitor periodically to prevent salt buildup, especially in irrigated fields.",
    },
    {
      color: "green",
      title: "Bulk Density (1.3 g/cm³)",
      desc: "Within the ideal range for most agricultural soils. Promotes good root penetration, air circulation, and water movement. Maintain by minimizing soil compaction and incorporating organic matter regularly.",
    },
  ];
  const propertyInsight = [
    {
      color: "blue",
      title: "Positive Trend",
      desc: "Nitrogen and Potassium levels have shown consistent improvement over the past 6 months. Continue current fertilization schedule.",
    },
    {
      color: "blue",
      title: "Stable Performance",
      desc: "Phosphorus levels have remained relatively stable. Monitor closely and consider supplementation if crop demands increase.",
    },
    {
      color: "orange",
      title: "Recommendation",
      desc: "Based on current trends, plan for nitrogen supplementation in 2-3 months before planting season. Consider organic matter addition to improve soil structure.",
    },
  ];

  // Nutrient breakdown data
  const nutrientBreakdown = [
    {
      nutrient: "Nitrogen (N)",
      current: 75,
      optimal: 80,
      unit: "kg/ha",
      status: "sufficient",
      statusColor: "text-green-600",
      bgColor: "bg-green-500",
    },
    {
      nutrient: "Phosphorus (P)",
      current: 60,
      optimal: 70,
      unit: "kg/ha",
      status: "needs monitoring",
      statusColor: "text-yellow-600",
      bgColor: "bg-yellow-500",
    },
    {
      nutrient: "Potassium (K)",
      current: 80,
      optimal: 85,
      unit: "kg/ha",
      status: "needs monitoring",
      statusColor: "text-yellow-600",
      bgColor: "bg-yellow-500",
    },
    {
      nutrient: "Calcium (Ca)",
      current: 70,
      optimal: 75,
      unit: "kg/ha",
      status: "sufficient",
      statusColor: "text-green-600",
      bgColor: "bg-green-500",
    },
    {
      nutrient: "Magnesium (Mg)",
      current: 30,
      optimal: 70,
      unit: "kg/ha",
      status: "critical",
      statusColor: "text-red-600",
      bgColor: "bg-red-500",
    },
    {
      nutrient: "Sulfur (S)",
      current: 40,
      optimal: 50,
      unit: "kg/ha",
      status: "sufficient",
      statusColor: "text-green-600",
      bgColor: "bg-green-500",
    },
  ];

  // Nutrient trend data for the 6 months
  const trendData = [
    { month: "Jan", Nitrogen: 76, Phosphorus: 70, Potassium: 60 },
    { month: "Feb", Nitrogen: 77, Phosphorus: 70, Potassium: 64 },
    { month: "Mar", Nitrogen: 78, Phosphorus: 70, Potassium: 65 },
    { month: "Apr", Nitrogen: 79, Phosphorus: 70, Potassium: 60 },
    { month: "May", Nitrogen: 78, Phosphorus: 70, Potassium: 55 },
    { month: "Jun", Nitrogen: 77, Phosphorus: 70, Potassium: 59 },
  ];

  return (
    <div className="p-0 m-0">
      {/* Top Navigation Bar */}
      <div className="flex items-center w-full px-6 py-2 border-b border-gray-100 bg-white">
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

      {/* Main Section */}
      <div className="p-6 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Soil Health Management
        </h2>
        <p className="text-gray-600 mb-6">
          Comprehensive soil analysis and nutrient management.
        </p>

        {/* Two Key Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {/* Overall Soil Health */}
          <div className="bg-white rounded-2xl shadow border border-gray-100 p-5 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Overall Soil Health
              </h3>
              <div className="p-2 bg-green-600 rounded-full">
                <Sprout size={20} className="text-white" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold text-gray-900">78%</p>
              <div className="flex items-center text-green-600 mt-2">
                <FaArrowTrendUp className="mr-1" />
                <span className="text-sm font-medium">+5% from last month</span>
              </div>
            </div>
          </div>

          {/* Nutrient Status */}
          <div className="bg-white rounded-2xl shadow border border-gray-100 p-5 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Nutrient Status
              </h3>
              <div className="p-2 bg-blue-600 rounded-full">
                <CheckCircle2 size={20} className="text-white" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold text-gray-900">5/6</p>
              <span className="text-sm text-blue-600 mt-2 block">
                Nutrients in optimal range
              </span>
            </div>
          </div>
        </div>

        {/* Unified Tabs */}
        <div className="flex justify-start mb-8">
          <div className="flex bg-gray-100 rounded-full p-1 shadow-sm w-full max-w-md">
            {[
              { id: "nutrient", label: "Nutrient Levels" },
              { id: "properties", label: "Soil Properties" },
              { id: "trends", label: "Nutrient Trends" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-5 py-2 text-sm font-medium rounded-full transition ${
                  activeTab === tab.id
                    ? "bg-white text-gray-900 shadow"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* === Nutrient Levels === */}
        {activeTab === "nutrient" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* --- MACRO-NUTRIENT ANALYSIS --- */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Macro-Nutrient Analysis
              </h2>
              <p className="text-gray-600 mb-8">Current vs Optimal Levels</p>

              <ResponsiveContainer width="100%" height={350}>
                <BarChart
                  data={[
                    { name: "Nitrogen (N)", Current: 75, Optimal: 80 },
                    { name: "Phosphorus (P)", Current: 60, Optimal: 70 },
                    { name: "Potassium (K)", Current: 80, Optimal: 85 },
                    { name: "Calcium (Ca)", Current: 70, Optimal: 75 },
                    { name: "Magnesium (Mg)", Current: 30, Optimal: 70 },
                    { name: "Sulfur (S)", Current: 40, Optimal: 50 },
                  ]}
                  margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                  />
                  <YAxis
                    domain={[0, 100]}
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                    label={{
                      value: "%",
                      angle: -90,
                      position: "insideLeft",
                      fill: "#6b7280",
                    }}
                  />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="Current"
                    fill="#22c55e"
                    barSize={18}
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="Optimal"
                    fill="#ef4444"
                    barSize={18}
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* --- SOIL HEALTH RADAR --- */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Soil Health Radar
              </h2>
              <p className="text-gray-600 mb-8">Overall Health Indicators</p>

              <ResponsiveContainer width="100%" height={400}>
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  data={[
                    { metric: "Nitrogen", value: 78 },
                    { metric: "Moisture", value: 68 },
                    { metric: "Organic Matter", value: 72 },
                    { metric: "pH", value: 65 },
                    { metric: "Potassium", value: 80 },
                    { metric: "Phosphorus", value: 70 },
                  ]}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="metric" tick={{ fill: "#6b7280" }} />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    tick={{ fill: "#6b7280" }}
                  />
                  <Radar
                    name="Soil Health"
                    dataKey="value"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.4}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* --- NUTRIENT BREAKDOWN SECTION --- */}
            <div className="bg-white rounded-2xl shadow-lg p-8 col-span-1 lg:col-span-2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Nutrient Breakdown
              </h2>
              <p className="text-gray-600 mb-8">
                Soil health insights and recommendations
              </p>

              <div className="space-y-6">
                {[
                  {
                    color: "green",
                    title: "Nitrogen (N)",
                    desc: "Current: 75 kg/ha | Optimal: 80 kg/ha",
                    status: "Nutrient level sufficient",
                  },
                  {
                    color: "yellow",
                    title: "Phosphorus (P)",
                    desc: "Current: 60 kg/ha | Optimal: 70 kg/ha",
                    status: "Nutrient level needs monitoring",
                  },
                  {
                    color: "yellow",
                    title: "Potassium (K)",
                    desc: "Current: 80 kg/ha | Optimal: 85 kg/ha",
                    status: "Nutrient level needs monitoring",
                  },
                  {
                    color: "green",
                    title: "Calcium (Ca)",
                    desc: "Current: 70 kg/ha | Optimal: 75 kg/ha",
                    status: "Nutrient level sufficient",
                  },
                  {
                    color: "red",
                    title: "Magnesium (Mg)",
                    desc: "Current: 30 kg/ha | Optimal: 70 kg/ha",
                    status: "Nutrient level critical",
                  },
                  {
                    color: "green",
                    title: "Sulfur (S)",
                    desc: "Current: 40 kg/ha | Optimal: 50 kg/ha",
                    status: "Nutrient level sufficient",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <span
                      className={`w-1 self-stretch rounded-sm ${
                        item.color === "green"
                          ? "bg-green-500"
                          : item.color === "yellow"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    ></span>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.desc}</p>
                        </div>
                        <span
                          className={`text-sm font-medium ${
                            item.color === "green"
                              ? "text-green-600"
                              : item.color === "yellow"
                              ? "text-yellow-600"
                              : "text-red-600"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Soil Properties */}
        {activeTab === "properties" && (
          <div>
            {/* Property Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {[
                {
                  title: "pH Level",
                  range: "6.0 - 7.0",
                  value: "6.5",
                  color: "bg-green-500",
                  label: "Optimal",
                  status: "Within Range",
                  textColor: "text-green-600",
                },
                {
                  title: "Organic Matter",
                  range: "3.0 - 5.0%",
                  value: "3.2%",
                  color: "bg-blue-500",
                  label: "Good",
                  status: "Close to Optimal",
                  textColor: "text-blue-600",
                },
                {
                  title: "Moisture",
                  range: "60 - 80%",
                  value: "68%",
                  color: "bg-green-500",
                  label: "Optimal",
                  status: "Within Range",
                  textColor: "text-green-600",
                },
                {
                  title: "Temperature",
                  range: "20 - 30°C",
                  value: "24°C",
                  color: "bg-green-500",
                  label: "Optimal",
                  status: "Within Range",
                  textColor: "text-green-600",
                },
                {
                  title: "Electrical Conductivity",
                  range: "0 - 2 dS/m",
                  value: "1.2 dS/m",
                  color: "bg-blue-500",
                  label: "Good",
                  status: "Close to Optimal",
                  textColor: "text-blue-600",
                },
                {
                  title: "Bulk Density",
                  range: "1.1 - 1.4 g/cm³",
                  value: "1.3 g/cm³",
                  color: "bg-green-500",
                  label: "Optimal",
                  status: "Within Range",
                  textColor: "text-green-600",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 shadow rounded-2xl p-5 pt-8 pb-6 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Optimal Range: {item.range}
                    </p>
                    <p className="text-xl font-bold text-gray-900 mt-8">
                      {item.value}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center space-x-2">
                      <span
                        className={`w-3 h-3 rounded-full ${item.color}`}
                      ></span>
                      <span className="text-sm text-gray-700">
                        {item.label}
                      </span>
                    </div>

                    <span className={`text-sm font-medium ${item.textColor}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Big Card with Insights */}
            <div className="bg-white rounded-2xl shadow-lg p-8 w-[95%] mx-auto mt-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Soil Property Guidelines
              </h2>
              <p className="text-gray-600 mb-8">
                Soil health indicators breakdown and insights
              </p>

              <div className="space-y-8">
                {propertyInsights.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <span
                      className={`w-1 self-stretch rounded-sm ${
                        item.color === "green" ? "bg-green-500" : "bg-blue-500"
                      }`}
                    ></span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Nutrient Trends */}
        {activeTab === "trends" && (
          <div>
            {/* --- GRAPH CARD --- */}
            <div className="bg-white rounded-2xl shadow-lg p-8 w-[95%] mx-auto mt-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                6-Month Nutrient Trends
              </h2>
              <p className="text-gray-600 mb-8">
                Changes in soil nutrient levels over time
              </p>

              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" tick={{ fill: "#6b7280" }} />
                  <YAxis
                    domain={[0, 100]}
                    tick={{ fill: "#6b7280" }}
                    label={{
                      value: "%",
                      angle: -90,
                      position: "insideLeft",
                      fill: "#6b7280",
                    }}
                  />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="Nitrogen"
                    stroke="#f97316"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Phosphorus"
                    stroke="#22c55e"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Potassium"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* --- SEPARATE INSIGHT CARD --- */}
            <div className="bg-white rounded-2xl shadow-lg p-8 w-[95%] mx-auto mt-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Trend Analysis & Insights
              </h2>
              <p className="text-gray-600 mb-8">
                AI-powered recommendations based on historical data
              </p>

              <div className="space-y-8">
                {propertyInsight.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <span
                      className={`w-1 self-stretch rounded-sm ${
                        item.color === "orange"
                          ? "bg-orange-500"
                          : item.color === "blue"
                          ? "bg-blue-500"
                          : "bg-gray-400"
                      }`}
                    ></span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

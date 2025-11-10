"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import SoilHealthForm from "./tests/SoilHealthForm";
import CropYieldForm from "./tests/CropYieldForm";
import PestActivityForm from "./tests/PestActivityForm";
import WeatherAnalysisForm from "./tests/WeatherAnalysisForm";

interface RunNewTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RunNewTestModal({
  isOpen,
  onClose,
}: RunNewTestModalProps) {
  const [selectedTestType, setSelectedTestType] = useState(""); // For test type radio buttons
  const [selectedState, setSelectedState] = useState(""); // For state dropdown
  const [selectedArea, setSelectedArea] = useState(""); // For farm area dropdown
  const [isStateOpen, setIsStateOpen] = useState(false);
  const [isAreaOpen, setIsAreaOpen] = useState(false);

  const states = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
    "FCT (Abuja)",
  ];

  const farmAreas = [
    "5 - 10 Hectares",
    "10 - 20 Hectares",
    "20 - 50 Hectares",
    "50 - 100 Hectares",
    "Above 100 Hectares",
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-opacity-40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-4xl mx-4 z-10 overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="bg-[#F0F8FF] flex justify-between items-center px-6 py-4 rounded-t-2xl">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Run a Test Analysis
            </h2>
            <p className="text-gray-600 text-sm">
              Configure your test parameters and generate real-time insights for
              your research.
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 bg-white">
          {/* Test Type */}
          <div className="mb-6">
            <label className="block text-gray-800 font-medium mb-2">
              Test Type <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4 flex-nowrap overflow-x-auto">
              {[
                "Soil Health Analysis",
                "Crop Yield Analysis",
                "Pest Activity",
                "Weather Analysis",
              ].map((type) => (
                <label
                  key={type}
                  className={`flex items-center gap-2 cursor-pointer border rounded-full px-4 py-2 transition ${
                    selectedTestType === type
                      ? "border-black text-black"
                      : "border-gray-300 hover:border-black text-gray-700"
                  }`}
                >
                  <span className="whitespace-nowrap">{type}</span>
                  <input
                    type="radio"
                    name="testType"
                    value={type}
                    className={`w-4 h-4 ml-2 border-gray-700 text-black focus:ring-0 accent-black ${
                      selectedTestType === type
                        ? "checked:text-black checked:border-black"
                        : ""
                    }`}
                    checked={selectedTestType === type}
                    onChange={() => setSelectedTestType(type)}
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Conditional Test Form */}
          <div className="mt-6">
            {selectedTestType === "Soil Health Analysis" && <SoilHealthForm />}
            {selectedTestType === "Crop Yield Analysis" && <CropYieldForm />}
            {selectedTestType === "Pest Activity" && <PestActivityForm />}
            {selectedTestType === "Weather Analysis" && <WeatherAnalysisForm />}
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-800 font-medium mb-2 mt-4">
              Location <span className="text-red-500">*</span>
            </label>

            {/* State & Farm Area Dropdowns in 1 row */}
            <div className="flex gap-4">
              {/* State Dropdown */}
              <div className="relative w-1/2">
                <button
                  onClick={() => setIsStateOpen(!isStateOpen)}
                  className="w-full border border-gray-300 rounded-full px-3 py-2 text-left flex justify-between items-center hover:border-black"
                >
                  {selectedState || "State"}
                  <ChevronDown className="text-gray-500" size={18} />
                </button>
                {isStateOpen && (
                  <ul className="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-40 overflow-y-auto z-20">
                    {states.map((state) => (
                      <li
                        key={state}
                        className="px-3 py-2 hover:bg-[#E0F1FF] cursor-pointer"
                        onClick={() => {
                          setSelectedState(state);
                          setIsStateOpen(false);
                        }}
                      >
                        {state}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Farm Area Dropdown */}
              <div className="relative w-1/2">
                <button
                  onClick={() => setIsAreaOpen(!isAreaOpen)}
                  className="w-full border border-gray-300 rounded-full px-3 py-2 text-left flex justify-between items-center hover:border-black"
                >
                  {selectedArea || "Farm Area"}
                  <ChevronDown className="text-gray-500" size={18} />
                </button>
                {isAreaOpen && (
                  <ul className="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-40 overflow-y-auto z-20">
                    {farmAreas.map((area) => (
                      <li
                        key={area}
                        className="px-3 py-2 hover:bg-[#E0F1FF] cursor-pointer"
                        onClick={() => {
                          setSelectedArea(area);
                          setIsAreaOpen(false);
                        }}
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-4 bg-white">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#E0F1FF] text-gray-700 font-medium hover:bg-[#cfe6ff] transition"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#0060B6] text-white font-medium hover:bg-[#004f93] transition"
          >
            Run Test
          </button>
        </div>
      </div>
    </div>
  );
}

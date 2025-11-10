"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const WeatherAnalysisForm = () => {
  const timeRanges = ["Next 7 days", "Next 30 days", "Next 60 days"];
  const [selectedTimeRange, setSelectedTimeRange] = useState("");
  const [isTimeOpen, setIsTimeOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <h2>
        Time Range <span className="text-red-500">*</span>
      </h2>

      <div className="relative w-full">
        <button
          onClick={() => setIsTimeOpen(!isTimeOpen)}
          className="w-full border border-gray-300 rounded-full px-3 py-2 text-left flex justify-between items-center hover:border-black"
        >
          {selectedTimeRange || "Select Time Range"}
          <ChevronDown className="text-gray-500" size={18} />
        </button>

        {isTimeOpen && (
          <ul className="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-40 overflow-y-auto z-20">
            {timeRanges.map((range) => (
              <li
                key={range}
                className="px-3 py-2 hover:bg-[#E0F1FF] cursor-pointer"
                onClick={() => {
                  setSelectedTimeRange(range);
                  setIsTimeOpen(false);
                }}
              >
                {range}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default WeatherAnalysisForm;

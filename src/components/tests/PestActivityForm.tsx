"use client";

import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

const PestActivityForm = () => {
  const cropTypes = [
    "Maize",
    "Rice",
    "Wheat",
    "Soybean",
    "Cassava",
    "Yam",
    "Tomato",
  ];
  const [selectedCrops, setSelectedCrops] = useState<string[]>([]);
  const [isCropOpen, setIsCropOpen] = useState(false);

  const toggleCrop = (crop: string) => {
    if (selectedCrops.includes(crop)) {
      setSelectedCrops(selectedCrops.filter((c) => c !== crop));
    } else {
      setSelectedCrops([...selectedCrops, crop]);
    }
  };

  const removeCrop = (crop: string) => {
    setSelectedCrops(selectedCrops.filter((c) => c !== crop));
  };

  return (
    <div className="flex flex-col gap-4">
      <h2>
        Crop Type <span className="text-red-500">*</span>
      </h2>

      <div className="relative w-full">
        <button
          onClick={() => setIsCropOpen(!isCropOpen)}
          className="w-full border border-gray-300 rounded-full px-3 py-2 text-left flex flex-wrap items-center gap-2 hover:border-black min-h-[40px]"
        >
          {selectedCrops.length > 0
            ? selectedCrops.map((crop) => (
                <span
                  key={crop}
                  className="flex items-center bg-gray-100 border border-gray-300 rounded-full px-2 py-1 text-sm gap-1"
                >
                  {crop}
                  <X
                    size={14}
                    className="cursor-pointer hover:text-black"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeCrop(crop);
                    }}
                  />
                </span>
              ))
            : "Select Crop Type"}
          <ChevronDown className="text-gray-500 ml-auto" size={18} />
        </button>

        {isCropOpen && (
          <ul className="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-40 overflow-y-auto z-20">
            {cropTypes.map((crop) => (
              <li
                key={crop}
                className="px-3 py-2 hover:bg-[#E0F1FF] cursor-pointer flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  checked={selectedCrops.includes(crop)}
                  onChange={() => toggleCrop(crop)}
                  className="w-4 h-4 accent-black border-black"
                />
                <span>{crop}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PestActivityForm;

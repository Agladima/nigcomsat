"use client";
import { useState } from "react";

const SoilHealthForm = () => {
  const options = [
    "pH Level",
    "NPK",
    "Moisture",
    "Temperature",
    "Organic Matter",
  ];

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div>
      <h2 className=" mb-2 ">
        Test Parameters <span className="text-red-500">*</span>
      </h2>

      <div className="flex flex-wrap gap-4 mb-4">
        {options.map((option) => (
          <label
            key={option}
            className={`flex items-center gap-2 cursor-pointer border rounded-full px-4 py-2 transition ${
              selectedOptions.includes(option)
                ? "border-black text-black"
                : "border-gray-300 text-gray-700 hover:border-black"
            }`}
          >
            <input
              type="checkbox"
              className="w-4 h-4 border-black focus:ring-0 accent-black"
              checked={selectedOptions.includes(option)}
              onChange={() => toggleOption(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SoilHealthForm;

import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const DonorFilterSidebar = ({
  onBloodTypeChange,
  selectedBloodType,
  onStatusChange,
  selectedStatus,
  onPriceChange,
  selectedPriceRange,
}) => {
  const bloodTypes = ["Blood Donors", "Sperm Donors", "Kidney Donors", "Spare parts"];
  const statuses = ["Alphabetical Order", "Rating", "Price", "Near by"];
  const [priceRange, setPriceRange] = useState([0, 50000]);

  const handlePriceChange = (value) => {
    setPriceRange(value);
    if (onPriceChange) {
      onPriceChange(value);
    }
  };

  return (
    <aside className="w-full bg-white rounded-lg p-6 border border-gray-200 space-y-6">
      {/* Donor Types Filter */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Donor Types</h3>
        <ul className="space-y-3">
          {bloodTypes.map((type) => (
            <li key={type}>
              <label className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
                <Checkbox
                  checked={selectedBloodType.includes(type)}
                  onCheckedChange={() => onBloodTypeChange(type)}
                  className="rounded-sm data-[state=checked]:bg-[#92BDF6] data-[state=checked]:border-[#92BDF6]"
                />
                <span className="text-sm text-gray-700">{type}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-gray-200" />

      {/* Sort By Filter */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Sort By</h3>
        <ul className="space-y-3">
          {statuses.map((status) => (
            <li key={status}>
              <label className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
                <Checkbox
                  checked={selectedStatus.includes(status)}
                  onCheckedChange={() => onStatusChange(status)}
                  className="rounded-sm data-[state=checked]:bg-[#92BDF6] data-[state=checked]:border-[#92BDF6]"
                />
                <span className="text-sm text-gray-700">{status}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-gray-200" />

      {/* Price Slider */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Price</h3>
        <Slider
          defaultValue={priceRange}
          onValueChange={handlePriceChange}
          max={50000}
          step={1000}
          className="mb-4 [&_.Range]:bg-amber-300"
        />
        <div className="flex justify-between text-xs text-gray-600">
          <span>NGN 0</span>
          <span>NGN 50,000</span>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Near By Filter */}
      <div>
        <label className="flex items-center gap-3 cursor-pointer">
          <Checkbox className="rounded-sm" />
          <span className="text-sm text-gray-700">Near by</span>
        </label>
      </div>
    </aside>
  );
};

export default DonorFilterSidebar;

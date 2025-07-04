import React from 'react';
import { Filter } from 'lucide-react';

interface FilterDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ 
  value, 
  onChange, 
  options, 
  placeholder = "Filter by..." 
}) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Filter className="h-5 w-5 text-gray-400" />
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full pl-10 pr-8 py-2 border border-gray-300 rounded-lg leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
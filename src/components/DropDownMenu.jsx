import { useState } from "react";

export default function StatusDropdown({ selectedStatus, onStatusChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const statusOptions = ["All", "Alive", "Dead", "unknown"];

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="status-menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedStatus || "Status"}
          <svg
            className={`-mr-1 h-5 w-5 text-gray-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="status-menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {statusOptions.map((status) => (
              <button
                key={status}
                className={`block w-full px-4 py-2 text-left text-sm ${
                  selectedStatus === (status === "All" ? "" : status)
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700"
                }`}
                role="menuitem"
                tabIndex={-1}
                onClick={() => {
                  onStatusChange(status === "All" ? "" : status);
                  setIsOpen(false);
                }}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";

interface CategoryModalProps {
  categories: string[]; 
  onCategoryChange?: (category: string) => void; 
  defaultCategory?: string; 
  title?: string; 
}

const RadioModal: React.FC<CategoryModalProps> = ({
  title,
  categories,
  onCategoryChange,
  defaultCategory = "Date",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsOpen(false);
    onCategoryChange?.(category); 
  };

  const toggleModal = () => setIsOpen(!isOpen);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <div className="relative inline-block">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-fade-white font-Manrope">{title}:</span>
          <button
            onClick={toggleModal}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-fade-blue transition-colors"
            aria-expanded={isOpen}
            aria-controls="category-modal"
          >
            <span className="font-Manrope">{selectedCategory}</span>
            <ChevronDown className="w-4 h-4 text-fade-white" />
          </button>
        </div>

        {isOpen && (
          <div
            id="category-modal"
            role="dialog"
            aria-modal="true"
            className="fixed top-64 md:top-16 inset-0 bg-black/60 z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <div
              onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
              className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-fade-black text-center">
                  Select Date
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-4 md:space-y-6">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className={`w-full px-4 py-3 text-center hover:bg-fade-blue/40 transition-colors rounded-lg ${
                      selectedCategory === category
                        ? "text-fade-white bg-fade-blue-100"
                        : "text-fade-black"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RadioModal;


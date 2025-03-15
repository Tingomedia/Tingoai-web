import React, { useState, useEffect } from "react";
import tunnel from "/tunnel.svg";
import RHeader from "../../layouts/radio/general/RHeader";
import RFotter from "../../layouts/radio/general/RFotter";
import NewsCard from "../../components/cards/NewsCard";
import { programDb } from "../../db";
import RadioModal from "./RadioModal";
import { calculateDateRange, formatDateTime } from "../../utils/helpers";

const ITEMS_PER_PAGE = 6;

const NewsWeather: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Today");
  const [filteredPrograms, setFilteredPrograms] = useState<typeof programDb>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categories = [
    "Today",
    "Yesterday",
    "1 week ago",
    "2 weeks ago",
    "1 month ago",
    "1 year ago",
    "2 years ago",
    "5 years ago",
  ];

  
  useEffect(() => {
    const range = calculateDateRange(selectedCategory);

    if (range) {
      const filtered = programDb.filter((program) => {
        const programDate = new Date(program.timeStamp);
        return programDate >= range[0] && programDate <= range[1];
      });
      setFilteredPrograms(filtered);
    } else {
      setFilteredPrograms(programDb); // Show all programs if no range
    }
    setCurrentPage(1); // Reset to the first page when category changes
  }, [selectedCategory]);

  // Paginate filtered programs
  const paginatedPrograms = filteredPrograms.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredPrograms.length / ITEMS_PER_PAGE);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="">
      <div
        className="w-full min-h-screen bg-radioprimary relative"
        style={{
          backgroundImage: `url(${tunnel})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <RHeader />
        <div className="relative container mx-auto flex flex-col justify-center items-center w-full h-full text-white gap-8 text-center z-10 pt-[180px] py-20">
          <h1 className="font-Poppins text-[40px] md:text-[56px] font-semibold md:leading-[67px] text-center mb-20">
            News & Weather
          </h1>
          <RadioModal
            title="Date"
            categories={categories}
            onCategoryChange={handleCategoryChange}
            defaultCategory="Today"
          />
          <div className="w-full md:w-11/12 lg:w-10/12 2xl:w-9/12 mx-auto grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-8 gap-y-10 place-items-center">
            {paginatedPrograms.map((program, index) => (
              <NewsCard
                key={index}
                title={program.title}
                artist={program.artist}
                airingTime={formatDateTime(program.timeStamp)}
                coverImage={program.coverImage}
              />
            ))}
          </div>
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-4 py-2 rounded-full bg-white text-radioprimary hover:bg-radiosecondary hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <span className="text-white">
                Page {currentPage} of {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-4 py-2 rounded-full bg-white text-radioprimary hover:bg-radiosecondary hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
      <RFotter />
    </div>
  );
};

export default NewsWeather;

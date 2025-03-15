import React, { useState, useEffect } from "react";
import tunnel from "/tunnel.svg";
import PlaylistCard from "../../components/cards/PlaylistCard";
import { playlistData } from "../../db";
import RadioModal from "./RadioModal";
import { calculateDateRange } from "../../utils/helpers";
import RFotter from "../../layouts/radio/general/RFotter";
import RHeader from "../../layouts/radio/general/RHeader";

const ITEMS_PER_PAGE = 6;

const Playlist: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Today");
  const [filteredData, setFilteredData] = useState<typeof playlistData>([]);
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

  // Calculate the filtered data based on the selected category
  useEffect(() => {
    const range = calculateDateRange(selectedCategory);
    if (range) {
      const filtered = playlistData.filter((track) => {
        const trackDate = new Date(track.timeStamp);
        return trackDate >= range[0] && trackDate <= range[1];
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(playlistData);
    }
    setCurrentPage(1); // Reset to the first page when category changes
  }, [selectedCategory]);

  // Paginate the filtered data
  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
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
            Playlists
          </h1>
          <RadioModal
            title="Date"
            categories={categories}
            onCategoryChange={handleCategoryChange}
            defaultCategory="Today"
          />
          <div className="w-full md:w-11/12 lg:w-10/12 2xl:w-9/12 mx-auto grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-8 gap-y-10 place-items-center">
            {paginatedData.map((track) => (
              <PlaylistCard
                key={track.id}
                artist={track.artist}
                status={track.status}
                airingTime={track.airingTime}
                coverImage={track.coverImage}
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
    </>
  );
};

export default Playlist;

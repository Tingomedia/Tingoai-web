import React, { useState, useEffect } from "react";
import ProductCard from "../../cards/ProductCard";
import { Product, productsDb2 } from "../../../db";
import CategoryModal from "./CategoryDropdown";

const ProductGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const productsPerPage = 6;

  const categories = [
    "All",
    "Generative AI",
    "AI Education",
    "AI Food Security",
    "AI Life Sciences",
    "AI Call Centre",
    "AI Telemedicine",
    "Compliance",
    "Customised Enterprise AI",
  ];


  // Effect to update filteredProducts based on selectedCategory
  useEffect(() => {
    const allProducts = selectedCategory === "All"
      ? productsDb2.flatMap((category) => category.products)
      : productsDb2.find((cat) => cat.category === selectedCategory)?.products || [];

    setFilteredProducts(allProducts);
    setCurrentPage(1); // Reset to first page when category changes
  }, [selectedCategory]);

  // Effect to manage pagination when currentPage changes
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    console.log("Selected Category:", category);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="container mx-auto px-4 md:px-[5%] 2xl:px-[8%]">
      <CategoryModal
        title="Category"
        categories={categories}
        onCategoryChange={handleCategoryChange}
        defaultCategory="All"
      />
      
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center ">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product: Product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              imageSrc={product.imageSrc}
              tryItLink={product.tryItLink}
              demoLink={product.demoLink}
              tag={product.tag}
              lightIcon={product.lightIcon || ""}
            />
          ))
        ) : (
          <p className="text-center col-span-full">No products found for this category.</p>
        )}
      </div>

      {/* Pagination Controls */}
      {selectedCategory === "All" && totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-16">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;

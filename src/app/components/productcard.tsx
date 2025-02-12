'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import CardText from "./card";
import { client } from "@/sanity/lib/client";

// Define the Product type
type Product = {
  quantity: number;
  stock: number;

  price: number;
  id: string;
  title: string;
  description: string;
  productImage: string; // The image field from Sanity
};

export default function ProductCard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8; // Number of products per page
  const [totalProducts, setTotalProducts] = useState(0);
  const totalPages = Math.ceil(totalProducts / pageSize);

  // Fetch products with pagination
  useEffect(() => {
    const getProducts = async () => {
      try {
        const start = (currentPage - 1) * pageSize;

        // Fetch total product count
        const total = await client.fetch(`count(*[_type == "product"])`);
        setTotalProducts(total);

        // Fetch paginated products
        const query = `*[_type == "product"] | order(_createdAt desc) [${start}...${start + pageSize}]{
          _id,
          title,
          description,
          price,
          "productImage": productImage.asset->url
        }`;

        const data: Product[] = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, [currentPage]); // ✅ Refetch when page changes

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1124px] py-[80px] flex flex-col gap-[40px]">
        
        {/* Text Section */}
        <div className="w-full flex flex-col gap-[10px] justify-center items-center">
          <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {products.length > 0 ? (
            products.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} passHref>
                <div className="w-[238px] h-[615px] mx-auto cursor-pointer">
                  <div className="w-full h-full">
                    <div className="w-[239px]">
                      <Image
                        src={product.productImage || "/images/filter.png"} // Fallback image
                        alt={product.title}
                        width={500}
                        height={500}
                        className="object-cover aspect-square"
                      />
                    </div>
                    <CardText
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      image={product.productImage || "/images/default-product-image.png"} id={product.id} quantity={product.quantity} stock={product.stock}                    />
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-500">Loading products...</p>
          )}
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center items-center gap-4 mt-6">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-6 py-3 rounded-lg bg-gray-800 text-white ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
            }`}
          >
            Previous
          </button>

          {/* Page Info */}
          <span className="text-gray-700 text-lg">
            Page {currentPage} of {totalPages}
          </span>

          {/* Next Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-6 py-3 rounded-lg bg-gray-800 text-white ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

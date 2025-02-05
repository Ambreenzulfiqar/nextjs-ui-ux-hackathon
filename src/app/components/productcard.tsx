'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

import CardText from "./card";
import { client } from "@/sanity/lib/client";

// Define the Product type
type Product = {
  price: string;
  _id: string;
  title: string;
  description: string;
  productImage: string; // The image field from Sanity
};

export default function ProductCard() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data: Product[] = await client.fetch(
          `*[_type == "product"]{
            _id,
            title,
            description,
            price,
            "productImage":productImage.asset->url  // Ensure this path is correct
          }`
        );
        console.log(data); // Inspect the fetched data
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="w-full left-0 flex justify-center">
      <div className="w-[1124px] py-[80px] flex flex-col gap-[80px]">
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
              <div key={product._id} className="w-[238px] h-[615px] mx-auto">
                <div className="w-full h-full">
                  <div className="w-[239px] ">
                    {/* Make sure the imageUrl is valid */}
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
                    Price={product.price} // Correct prop name for price
                    image={product.productImage || "/images/default-product-image.png"} // Fallback if imageUrl is missing
                  />
                </div>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
}



import {  Grid, List } from 'lucide-react';
import React from 'react'
import Icons from '../components/icons';
import { Button } from '@/components/ui/button';
import ShopCard from '../components/ShopCard';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import ProductCard from '../components/productGrid';

const items = [
  { imageUrl: "/images/item1.png", title: "Cloths", itemCount: 5 },
  { imageUrl: "/images/hero1.jpg", title: "Cloths", itemCount: 5 },
  { imageUrl: "/images/item3.png", title: "Cloths", itemCount: 5 },
  { imageUrl: "/images/item4.png", title: "Cloths", itemCount: 5 },
  { imageUrl: "/images/item2.png", title: "Cloths", itemCount: 5 },
];

const shop = () => {
 
  
    return (
      <main className="min-h-screen p-6 max-w-6xl mx-auto">
        <div className="container mx-auto bg-[#fafafa]">
          <div className='flex items-center justify-between'>
          <h1 className="text-xl font-bold mb-6">Shop</h1>
          <h2 className='font-bold'>Home &gt; <span className='font-normal'>Shop</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {items.map((item, index) => (
              <ShopCard
                key={index}
                imageUrl={item.imageUrl}
                title={item.title}
                itemCount={item.itemCount}
              />
            ))}
          </div>
         
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 my-10">
          {/* Left Section: Showing results */}
          <p className="text-center md:text-left">Showing all 12 results</p>

          {/* Middle Section: View options */}
          <div className="flex gap-x-4 items-center">
            <p>Views</p>
            <Grid className="w-6 h-6 cursor-pointer" />
            <List className="w-6 h-6 cursor-pointer" />
          </div>

          {/* Right Section: Buttons */}
          <div className="flex gap-4 flex-wrap justify-center">
            <Button className="bg-[#23A6F0]">Popularity</Button>
            <Button className="bg-[#23A6F0]">Filter</Button>
          </div>
        </div>

        <Icons/>

        <div className='my-10 flex items-center justify-between'>
        <h1 className="text-2xl font-bold">Bandage</h1>
        <div className='flex gap-x-4 items-center'>
          <FaFacebook className='fill-current text-[#23A6F0]'/>
          <FaInstagram className=' text-[#23A6F0]'/>
          <FaTwitter className='fill-current text-[#23A6F0]'/>
        </div>
        </div>
        <ProductCard/>

      </main>
  )
}

export default shop
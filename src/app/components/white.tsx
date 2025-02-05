import Image from "next/image";

export default function White() {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-center h-auto md:h-[682px] px-4 md:px-0">
      <div className="w-full md:w-[704px] h-auto md:h-[682px] flex items-center justify-center">
        <Image 
          src={"/images/asian-woman.png"} 
          alt="asian couple" 
          width={500} 
          height={500} 
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4 space-y-4 text-center md:text-left">
        <h2 className="text-lg md:text-xl font-semibold">SUMMER 2020</h2>
        <h3 className="text-2xl md:text-4xl font-bold w-full md:w-[375px]">Part of the Neural Universe</h3>
        <p className="w-full md:w-[375px] text-base md:text-xl">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <button className="w-[156px] h-[52px] bg-green-500 text-white">BUY NOW</button>
          <button className="w-[156px] h-[52px] text-green-500 border-2 border-green-500">BUY NOW</button>
        </div>
      </div>
    </div>
  );
}

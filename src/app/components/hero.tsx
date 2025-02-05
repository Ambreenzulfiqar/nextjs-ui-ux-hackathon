import Image from "next/image";

export default function Hero() {
  return (
    <div className="max-w-[1439px] mx-auto border relative overflow-hidden">
      <div className="w-full h-[716px]">
        <Image src={"/images/hero1.jpg"} alt="women" height={500} width={500} className="object-cover w-full h-full" />
      </div>

      {/* Content Overlay */}
      <div className="absolute flex flex-col justify-center left-4 sm:left-10 md:left-16 lg:left-[100px] top-10 sm:top-16 md:top-24 lg:top-[100px] items-start gap-6 px-4 sm:px-6 md:px-8 lg:px-16 z-10">
        <h5 className="font-Montserrat font-semibold text-sm sm:text-base leading-6 text-white">
          SUMMER 2020
        </h5>
        <h1 className="font-Montserrat font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[58px] leading-tight text-white max-w-[600px]">
          NEW COLLECTION
        </h1>
        <h4 className="font-Montserrat font-normal text-base sm:text-lg md:text-xl lg:text-[20px] leading-6 text-white max-w-[500px]">
          We know how large objects will act, but things on a small scale.
        </h4>
        <button className="w-full sm:w-[221px] h-[62px] rounded-md px-6 sm:px-[40px] py-3 sm:py-[15px] bg-[#2DC071] text-white text-lg sm:text-xl lg:text-[24px] font-Montserrat leading-6 justify-center">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

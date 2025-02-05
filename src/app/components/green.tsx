import Image from "next/image";
import greenman from "../../../public/images/shop-hero-2-png-picture-1.png";

export default function GreenDiv() {
  return (
    <div className="w-full max-w-[1440px] h-[709px] rounded-[5px] bg-[#23856D] mt-[-130px] border flex justify-center items-center px-4 md:px-0 overflow-hidden">
      <div className="w-full max-w-[1440px] h-[709px] flex justify-center items-center">
        <div className="w-full max-w-[1036px] h-auto md:h-[711px] flex flex-col md:flex-row gap-[40px] md:gap-[80px] items-center py-[60px] md:py-[112px]">
          <div className="w-full max-w-[509px] flex flex-col gap-[20px] md:gap-[30px] text-center md:text-left">
            <h4 className="text-[20px] leading-[30px] text-white font-Montserrat font-normal">SUMMER 2020</h4>
            <h1 className="text-[32px] md:text-[58px] leading-[40px] md:leading-[80px] text-white font-Montserrat font-bold">Vita Classic Product</h1>
            <p className="text-[14px] leading-[20px] text-white font-Montserrat font-medium max-w-[341px] mx-auto md:mx-0">
              We know how large objects will act, We know how are objects will act, We know
            </p>
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[34px] justify-center md:justify-start items-center">
              <h3 className="text-[24px] leading-[32px] text-white font-Montserrat font-bold">$16.48</h3>
              <button className="w-[184px] h-[52px] rounded-[5px] px-[40px] bg-[#2DC071] py-[15px] flex items-center justify-center gap-[10px]">
                <h1 className="text-[14px] leading-[22px] text-white font-Montserrat">ADD TO CART</h1>
              </button>
            </div>
          </div>
          <div className="w-full max-w-[443px] h-auto md:h-[685px] flex justify-center overflow-hidden">
            <Image src={greenman} alt="picman" width={500} height={500} className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Editors() {
  return (
    <div className="w-full flex justify-center py-2 bg-[#f5f5f5]">
      <div className="max-w-[1050px] w-full h-auto flex flex-col gap-6 bg-[#FAFAFA] p-10">
        {/* Title Section */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-Montserrat font-semibold text-2xl leading-8">
            EDITOR’S PICK
          </h3>
          <p className="max-w-[347px] text-center text-sm leading-5 text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>
        {/* Images Section */}
        <div className="w-full flex flex-col md:flex-row gap-6">
          {/* Men Image */}
          <div className="relative w-full md:w-[510px] h-[500px]">
            <Image
              src={"/images/filter.png"}
              alt="men"
              className="w-full h-full object-cover rounded-md"
              width={500}
              height={500}
            />
            <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 shadow-md font-Montserrat font-bold text-[#252B42] text-lg hover:bg-gray-100">
              MEN
            </button>
          </div>
          {/* Women Image */}
          <div className="relative w-full md:w-[240px] h-[500px]">
            <Image
              src={"/images/filter1.png"}
              alt="women"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
            <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 shadow-md">
              <h2 className="font-Montserrat font-bold text-lg text-[#252B42]">WOMEN</h2>
            </button>
          </div>
          {/* Accessories and Kids */}
          <div className="w-full md:w-[240px] h-auto flex flex-col gap-6">
            {/* Accessories Image */}
            <div className="relative w-full h-[242px]">
              <Image
                src={"/images/filter2.png"}
                alt="div1"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
              <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 shadow-md">
                <h2 className="font-Montserrat font-bold text-lg text-[#252B42]">ACCESSORIES</h2>
              </button>
            </div>
            {/* Kids Image */}
            <div className="relative w-full h-[242px]">
              <Image
                src={"/images/filter3.png"}
                alt="div2"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
              <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 shadow-md">
                <h2 className="font-Montserrat font-bold text-lg text-[#252B42]">KIDS</h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

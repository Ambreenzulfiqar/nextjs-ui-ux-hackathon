import Image from "next/image";

// Define the props type for CardText
type CardTextProps = {
  title: string;
  description: string;
  Price: string;
 
  image: string;
};

const CardText: React.FC<CardTextProps> = ({ title, description, Price, image }) => {
  return (
    <div className="w-[239px] h-[188px] py-[25px] px-[25px] flex flex-col items-center justify-center gap-[10px]">
      <h5 className="w-full font-Montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
        {title} {/* Use dynamic title */}
      </h5>
      <p className="w-full line-clamp-1 font-Montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373]">
        {description} {/* Use dynamic description */}
      </p>
      <div className="w-full px-[3px] py-[5px] flex justify-center gap-[5px]">
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD]">
          {Price} {/* Use dynamic price */}
        </h5>
        
       
      </div>
      <div className="w-[82.2px] h-[16px] flex justify-center">
        <Image src={"/images/product-colors.png"} alt="product colors" width={500} height={500} />
      </div>
    </div>
  );
};

export default CardText;

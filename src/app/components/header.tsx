
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa"

export default function BlueHeader() {
  return (
    <div className="lg:block hidden w-[1437px] h-[58px] bg-[#252B42]">
      <div className="flex justify-between items-center w-full h-full px-[24px]">
        {/* Left section: Contact Info */}
        <div className="flex gap-[10px]">
          <button className="flex items-center gap-[5px] p-[10px] text-white">
            <FaPhone/>
            <span className="font-Montserrat font-semibold text-[14px]"> (225) 555-0118</span>
          </button>
          <button className="flex items-center gap-[5px] p-[10px] text-white rounded-[5px]">
            <FaEnvelope/>
            <span className="font-Montserrat text-[14px]">michelle.rivera@example.com</span>
          </button>
        </div>

        {/* Center section: Follow Us */}
        <h6 className="font-Montserrat font-semibold text-[14px] text-white">
          Follow Us and get a chance to win 80% off
        </h6>

        {/* Right section: Social Icons */}
        <div className="flex gap-[10px] items-center">
          <h6 className="font-Montserrat text-[14px] text-white">Follow Us:</h6>
          <div className="flex gap-[10px] text-white">
           <FaInstagram/>
           <FaYoutube/>
            <FaFacebook/>
            <FaTwitter/>
          </div>
        </div>
      </div>
    </div>
  );
}

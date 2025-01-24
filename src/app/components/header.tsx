import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";

export default function BlueHeader() {
  return (
    <div className="w-full h-[58px] bg-[#252B42]">
      <div className="flex flex-wrap justify-between items-center w-full h-full px-[24px]">
        {/* Left section: Contact Info */}
        <div className="flex gap-[10px] mb-2 sm:mb-0">
          <button className="flex items-center gap-[5px] p-[10px] text-white">
            <FaPhone />
            <span className="font-Montserrat font-semibold text-[14px]"> (225) 555-0118</span>
          </button>
          <button className="flex items-center gap-[5px] p-[10px] text-white rounded-[5px]">
            <FaEnvelope />
            <span className="font-Montserrat text-[14px]">michelle.rivera@example.com</span>
          </button>
        </div>

        {/* Center section: Follow Us */}
        <h6 className="font-Montserrat font-semibold text-[14px] text-white mb-2 sm:mb-0 text-center sm:text-left w-full sm:w-auto">
          Follow Us and get a chance to win 80% off
        </h6>

        {/* Right section: Social Icons */}
        <div className="flex gap-[10px] items-center mb-2 sm:mb-0">
          <h6 className="font-Montserrat text-[14px] text-white sm:mr-[10px]">Follow Us:</h6>
          <div className="flex gap-[10px] text-white">
            <FaInstagram />
            <FaYoutube />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
}

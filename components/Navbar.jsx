import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      className="max-w-full h-[114px] absolute
        lg:w-[1171px] lg:h-[114px] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:top-[35px]  
        md:w-[688px] md:h-[134px] md:top-[25px]  // Medium screens
        sm:w-[343px] sm:h-[60px] sm:top-[30px]  // Small screens
      "
    >
      {/* Email */}
      <div
        className="flex items-center justify-center gap-[18px] h-[24px] w-[183px] absolute top-0 left-0 
          max-md:hidden  z-50 // Hide on small screens
        "
      >
        <Image
          src="/icons/Mail.svg"
          alt="Mail"
          height={14}
          width={14}
          className="h-[14px] w-[14px]"
          priority
        />
        <p className="h7 text-white w-auto align-top text-left">
          Info@youremail.com
        </p>
      </div>

      {/* Phone details */}
      <div
        className="flex items-center justify-center gap-[18px] h-[24px] w-[145px] absolute top-0 left-[230px]
          max-md:hidden // Hide on small screens
        "
      >
        <Image
          src="/icons/Phone.svg"
          alt="Phone"
          height={14}
          width={14}
          className="h-[14px] w-[14px] object-cover"
          priority
        />
        <p className="h7 text-white w-auto align-top text-left">
          (480) 555-0103
        </p>
      </div>

      {/* Navbar Links */}
      <div
        className="absolute left-0   w-full flex items-center align-top text-left font-semibold text-[var(--grey-color)]
          lg:w-[1170px] lg:h-[90px] lg:top-[18px]// Large screens
          md:w-[688px] md:h-[90px] md:top-[41px] // Medium screens
          sm:w-[343px] sm:h-[40px] sm:top-[0px] // Small screens
        "
      >
        {/* Home Link */}
        <h6
          className="z-20 w-auto absolute left-[52px] bottom-[28px] text-dynamic-h6
          lg:block
            sm:hidden // Hide on small screens
          "
        >
          <Link href="/">HOME</Link>
        </h6>

        {/* About Link */}
        <h6
          className="z-20 w-auto absolute left-[155px] bottom-[28px] text-dynamic-h6
          lg:block
            sm:hidden   // Hide on small screens
          "
        >
          <Link href="/">ABOUT</Link>
        </h6>

        {/* Features Link */}
        <h6
          className="z-20 w-auto absolute left-[266px] bottom-[28px] text-dynamic-h6
          lg:block  
          sm:hidden   // Hide on small screens
          "
        >
          <Link href="/">FEATURES</Link>
        </h6>

        {/* Navbar Logo */}
        <div
          className="z-30 absolute  flex justify-center items-center lg:left-1/2 lg:transform lg:-translate-x-1/2 
            md:left-1/2 md:transform md:-translate-x-1/2// Medium screens
            sm:w-[100px] sm:h-[60px] sm:left-1/2 sm:transform sm:-translate-x-1/2 // Small screens
            md:w-[200px]   md:h-[90px]  // Medium screens
            lg:h-[90px]  lg:w-[200px]    "
        >
          <div
            className="z-30 bg-white absolute rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] 
             lg:w-[200px]   lg:h-[90px]  // Large screens
               md:w-[200px]   md:h-[90px]  // Medium screens
              sm:w-[100px] sm:h-[60px] // Small screens
            "
          ></div>

          <Image
            src="/MainLogo.svg"
            alt="Appolly Logo"
            height={28}
            width={167}
            className="absolute z-30 
            lg:w-[167px] lg:h-[28px] lg:top-[31px] lg:left-[16px]     
            md:w-[167px] md:h-[28px] md:top-[31px] md:left-[17px]     
            sm:w-[79px] sm:h-[12px] sm:left-[10px] sm:top-[24px] // Small screens
            "
            priority
          />
        </div>

        {/* Screenshot Link */}
        <h6
          className="z-50 w-auto absolute left-[728px] bottom-[28px] text-dynamic-h6
          lg:block  
          sm:hidden  // Hide on small screens
          "
        >
          <Link href="/">SCREENSHOT</Link>
        </h6>

        {/* Blog Link */}
        <h6
          className="z-50  w-auto absolute left-[906px] bottom-[28px] text-dynamic-h6
          lg:block 
          sm:hidden // Hide on small screens
          "
        >
          <Link href="/">BLOG</Link>
        </h6>

        {/* Download Button */}
        <div
          className="flex items-center justify-center text-center z-20 rounded-[5px] absolute right-[5px] 
          lg:w-[158px] lg:h-[50px] 
          md:w-[158px] md:h-[50px] 
          sm:h-[34px] sm:w-[76px] // Small screens
          "
        >
          <Link
            href="/"
            className="w-auto  z-50 text-white       
             absolute  flex align-top   
               lg:top-[12px] lg:right-[15px]  lg:text-dynamic-h6 lg:leading-[30px]
               md:top-[12px] md:right-[15px]  md:text-dynamic-h6 md:leading-[30px]
              sm:right-[6px] sm:top-[12px]  sm:text-dynamic-h9 sm:leading-auto 
              "
          >
            DOWNLOAD
          </Link>

          <div
            className="absolute bg-[var(--royal-color)] 
             lg:w-[158px] lg:h-[50px] lg:rounded-[5px]
             md:w-[158px] md:h-[50px] md:rounded-[5px]
            sm:h-[34px] sm:w-[76px]  sm:rounded-[3px] // Small screens
            "
          ></div>
        </div>

        {/* Nav Background Shadow */}
        <div
          className="w-full h-[60px] bg-white absolute z-0 rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
          lg:h-[60px]
          md:h-[60px]
          sm:h-[40px] // Small screens
          "
        ></div>

        {/* Mobile Menu Button */}
        <Image
          src="/icons/Menu.svg"
          alt="Menu button"
          height={24}
          width={24}
          className="z-30 absolute lg:hidden block h-[24px] w-[24px]
              md:left-[18px] md:top-[33px] 
              sm:left-[9px] sm:top-[8px] // Small screens 
          "
        />
      </div>

      {/* Social Media Icons */}
      <div
        className="flex gap-[30px] items-center w-[162px] h-[18px] absolute right-[7px] top-[3px]
          max-md:hidden  // Hide on small screens
        "
      >
        <Link href="/">
          <Image
            src="/icons/Facebook.svg"
            alt="Facebook"
            height={15}
            width={8}
            className="h-[14px] w-[14px]"
            priority
          />
        </Link>
        <Link href="/">
          <Image
            src="/icons/Instagram.svg"
            alt="Instagram"
            height={15}
            width={15}
            className="h-[15px] w-[15px]"
            priority
          />
        </Link>
        <Link href="/">
          <Image
            src="/icons/Twitter.svg"
            alt="Twitter"
            height={12}
            width={15}
            className="h-[12px] w-[15px]"
            priority
          />
        </Link>
        <Link href="/">
          <Image
            src="/icons/Youtube.svg"
            alt="Youtube"
            height={12}
            width={15}
            className="h-[12px] w-[15px]"
            priority
          />
        </Link>
      </div>
    </nav>
  );
}

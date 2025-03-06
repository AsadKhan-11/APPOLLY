import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav
      className=" w-[1171px] h-[114px] absolute left-[136px] top-[35px]
    max-md:w-[688px] max-md:h-[134px] max-md:left-[40px]
    max-sm:w-[343px] max-sm:h-[60px] max-sm:left-[16px] max-sm:top-[30px]
    
    "
    >
      <div
        className="flex items-center justify-center gap-[18px] h-[24px] w-[182px] absolute top-0 left-0
max-sm:hidden        "
      >
        {/* Email */}
        <Image
          src="/icons/Mail.svg"
          alt="Mail"
          height={14}
          width={14}
          className="h-[14px] w-[14px] "
          priority
        />
        <p className="h7 text-white w-auto align-top text-left">
          Info@youremail.com
        </p>
      </div>

      {/* Phone details */}
      <div
        className="flex items-center justify-center gap-[18px] h-[24px] w-[145px] absolute top-0 left-[230px]
      max-sm:hidden"
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
        className="absolute left-[0px] bottom-[0px] h-[90px] w-[1170px] flex items-center align-top text-left font-semibold text-[var(--grey-color)]
      max-md:w-[688px]  max-sm:w-[343px] max-sm:h-[40px] max-sm:left-[16px]  max-sm:top-[40px]   "
      >
        <h6
          className="z-20 w-auto absolute left-[52px] bottom-[28px]
         max-md:hidden"
        >
          <Link href="/" className="w-auto">
            HOME
          </Link>
        </h6>
        <h6
          className="z-20 w-auto  absolute left-[155px] bottom-[28px] 
        max-md:hidden"
        >
          <Link href="/" className="">
            ABOUT
          </Link>
        </h6>
        <h6
          className="z-20 w-auto absolute left-[266px] bottom-[28px]  
        max-md:hidden"
        >
          <Link href="/" className="">
            FEATURES
          </Link>
        </h6>

        {/* Navbar logo */}
        <div
          className="z-30 h-[90px] w-[200px] absolute left-[485px] flex justify-center items-center
       max-md:left-[240px]    
        max-sm:w-[100px] max-sm:h-[60px] max-sm:left-[122px] "
        >
          <div
            className="z-20 h-[90px] w-[200px] bg-white absolute 
        rounded-[5px]  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
            max-sm:w-[100px] max-sm:h-[60px]    "
          ></div>

          <Image
            src="MainLogo.svg"
            alt="Appolly Logo"
            height={28}
            width={167}
            className="absolute left-[16px] top-[31px] z-30 h-[28px] w-[167px] 
                max-sm:w-[79px] max-sm:h-[12px] max-sm:left-[10px] max-sm:top-[24px]
"
            priority
          />
        </div>

        <h6
          className="z-20 w-auto absolute left-[728px] bottom-[28px]
        max-md:hidden "
        >
          <Link href="/" className="">
            SCREENSHOT
          </Link>
        </h6>
        <h6
          className="z-20 w-auto absolute left-[906px] bottom-[28px] 
        max-md:hidden"
        >
          <Link href="/" className="">
            BLOG
          </Link>
        </h6>
        <div
          className="flex items-center justify-center z-20 rounded-[5px] w-[158px] h-[50px] absolute right-[5px]
        max-sm:h-[34px] max-sm:w-[76px]"
        >
          <h6
            className="flex items-center justify-center  w-auto z-30 text-white  
          align-top text-left 
          "
          >
            <Link
              href="/"
              className=" absolute right-[16px] top-[12px]  w-auto flex align-top text-left leading-[30px] font-normal 
             max-sm:left-[12px] max-sm:top-[6px] max-sm:text-[10px] "
            >
              DOWNLOAD
            </Link>
          </h6>
          <div
            className=" absolute w-[158px] h-[50px] bg-[var(--royal-color)] rounded-[5px]
          max-sm:h-[34px] max-sm:w-[76px]"
          ></div>
        </div>

        {/* Nav background shadow */}
        <div
          className="w-[1170px] h-[60px] bg-white absolute z-0 rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
        max-md:w-[688px]  
           max-sm:w-[343px] max-sm:h-[40px] 

        "
        ></div>
        {/* Mobile Menu Button */}
        <Image
          src="/icons/Menu.svg"
          alt="Menu button"
          height={24}
          width={24}
          className="z-30 absolute md:hidden block h-[24px] w-[24px] 
          max-md:left-[18px] 
 max-sm:left-[9px] max-sm:top-[8px]
"
        />
      </div>

      {/* Social Media Icons */}
      <div
        className="flex gap-[30px] items-center w-[162px] h-[18px] absolute left-[1001px] top-[3px] 
      max-md:left-[526px] max-sm:hidden"
      >
        <Link
          href="/"
          className="w-[18px] h-[18px] flex items-center justify-center"
        >
          <Image
            src="/icons/Facebook.svg"
            alt="Facebook"
            height={15}
            width={8}
            className="h-[14px] w-[14px] "
            priority
          />
        </Link>
        <Link
          href="/"
          className="w-[18px] h-[18px] flex items-center justify-center"
        >
          <Image
            src="/icons/Instagram.svg"
            alt="Instagram"
            height={15}
            width={15}
            className="h-[15px] w-[15px] "
            priority
          />
        </Link>
        <Link
          href="/"
          className="w-[18px] h-[18px] flex items-center justify-center"
        >
          {" "}
          <Image
            src="/icons/Twitter.svg"
            alt="Twitter"
            height={12}
            width={15}
            className="h-[12px] w-[15px] "
            priority
          />
        </Link>
        <Link
          href="/"
          className="w-[18px] h-[18px] flex items-center justify-center"
        >
          <Image
            src="/icons/Youtube.svg"
            alt="Youtube"
            height={12}
            width={15}
            className="h-[12px] w-[15px] "
            priority
          />
        </Link>
      </div>
    </nav>
  );
}

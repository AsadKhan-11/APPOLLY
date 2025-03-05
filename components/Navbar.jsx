import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="w-[1171px] h-[114px] absolute left-[135px] top-[35px] ">
      <div className="flex items-center justify-center gap-[18px] h-[24px] w-[183px] absolute top-0 left-0">
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
      <div className="flex items-center justify-center gap-[18px] h-[24px] w-[145px] absolute top-0 left-[230px]">
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

      <div className="absolute left-[0px] bottom-[0px] h-[90px] w-[1170px] flex items-center align-top text-left font-semibold text-[var(--grey-color)] ">
        <h6 className="z-20 w-auto absolute left-[52px] bottom-[28px] flex items-center justify-center">
          <Link href="/" className="w-auto">
            HOME
          </Link>
        </h6>
        <h6 className="z-20 w-auto  absolute left-[155px] bottom-[28px] flex items-center justify-center">
          <Link href="/" className="">
            ABOUT
          </Link>
        </h6>
        <h6 className="z-20 w-auto absolute left-[266px] bottom-[28px] flex items-center justify-center">
          <Link href="/" className="">
            FEATURES
          </Link>
        </h6>
        <div
          className="z-20 h-[90px] w-[200px] bg-white absolute 
        left-[485px] rounded-[5px] flex justify-center items-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        >
          <Image
            src="MainLogo.svg"
            alt="Appolly Logo"
            height={28}
            width={167}
            className=" h-[28px] w-[167px] "
            priority
          />
        </div>

        <h6 className="z-20 w-auto absolute left-[728px] bottom-[28px] flex items-center justify-center">
          <Link href="/" className="">
            SCREENSHOT
          </Link>
        </h6>
        <h6 className="z-20 w-auto absolute left-[906px] bottom-[28px] flex items-center justify-center">
          <Link href="/" className="">
            BLOG
          </Link>
        </h6>
        <div className="flex items-center justify-center z-20 rounded-[5px] w-[158px] h-[50px] absolute right-[5px]">
          <h6
            className=" w-auto z-30 text-white  
          align-top text-left 
          "
          >
            <Link
              href="/"
              className="w-auto flex align-top text-left leading-[30px] font-normal font-feature-settings-[\'liga\']"
            >
              DOWNLOAD
            </Link>
          </h6>
          <div className=" absolute w-[158px] h-[50px] bg-[var(--royal-color)] rounded-[5px] "></div>
        </div>

        {/* Nav background */}
        <div className="w-[1170px] h-[60px]  bg-white absolute z-0 rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"></div>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-[30px] items-center w-[162px] h-[18px] absolute right-[7px] top-0 ">
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

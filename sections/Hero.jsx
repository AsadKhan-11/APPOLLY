import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <section
      className="relative w-[1440px] h-[1024px] overflow-hidden  mx-auto 
    max-md:w-[768px]
    max-sm:w-[375px]     max-sm:h-[1227px]

    "
    >
      {/* Background Image */}
      <Image
        src="/Background-Image.svg"
        alt="Background"
        fill
        className=" z-0  object-cover"
        priority
      />

      {/* Navbar*/}
      <Navbar />

      {/* Hero Section Typography */}
      <div
        className="absolute w-[620px] h-[535px] left-[135px] top-[321px] bg-transparent flex flex-col justify-center
      max-md:w-[391px] max-md:h-[381px] max-md:top-[414px] max-md:left-[40px]
       max-sm:w-[343px] max-sm:h-[358px] max-sm:top-[188px] max-sm:left-[16px]"
      >
        <h2
          className=" w-auto font-bold text-left align-text-top z-20 left-[30px] leading-[130%] absolute top-[91px] right-[73px] text-[var(--royal-color)]
        max-md:left-[18px] max-md:top-[47px] max-md:leading-[47.3px]
        max-sm:w-[262px] max-sm:h-[71px] max-sm:left-[2px] max-sm:top-[50px]  "
        >
          A GREAT APP MAKES YOUR LIFE BETTER
        </h2>
        <h6
          className="h7 w-[487px] h-[66px] text-left align-text-top z-20 left-[30px] absolute top-[235px] leading-6 text-[var(--silver-color)]
        max-md:left-[18px] max-md:top-[148px]
        max-sm:w-[293px] max-sm:h-[66px] max-sm:left-[2px] max-sm:top-[139px] "
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </h6>
        <h5
          className="w-auto text-left align-text-top z-20 left-[30px] absolute top-[353px] font-semibold text-[var(--grey-color)]
        max-md:left-[18px] max-md:top-[237px] 
        max-sm:left-[2px] max-sm:top-[235px]"
        >
          DOWNLOAD APP NOW
        </h5>
        <div
          className="w-[314px] h-[47px] flex gap-3.5 z-20 absolute left-[30px]  top-[396px] 
        max-md:left-[18px] max-md:top-[290px] 
        max-sm:w-[228px] max-sm:h-[34.13px] max-sm:left-[2px] max-sm:top-[283.44px] "
        >
          <Image
            src="Google.svg"
            alt="Google-Image"
            width={149}
            height={47}
            className="w-[149px] h-[47px]  max-sm:w-[108.19px] max-sm:h-[34.13px]"
            priority
          />
          <Image
            src="App.svg"
            alt="App-Image"
            width={151}
            height={45}
            className="w-[151px] h-[45px] max-sm:w-[109.64px] max-sm:h-[32.68px]"
            priority
          />
        </div>
        <div
          className="w-[570px] h-[432px] absolute  bg-white z-10
        max-md:w-[356px] max-md:h-[318px]
        max-sm:w-[323px] max-sm:h-[318px] max-sm:top-[20px] max-sm:right-[20px]"
        ></div>

        {/* Hero Section border */}

        <div
          className="w-[570px] h-[535px] absolute right-[0px] border-[18px] text-[var(--stroke-color)]
        max-md:w-[375px] max-md:h-[381px]
        max-sm:w-[323px] max-sm:h-[358px] border-[10px]  "
        ></div>
      </div>

      {/* Hero Section Phone Image */}
      <Image
        src="Phone-Image.svg"
        alt="Phone-Image"
        width={646}
        height={725}
        className="absolute w-[646px] h-[725px] left-[836px] top-[216px] object-fill
        max-md:w-[378px] max-md:h-[423px] max-md:left-[478px] max-md:top-[380px]
        max-sm:w-[466px] max-sm:h-[521px] max-sm:left-[55px] max-sm:top-[586px]"
        priority
      />
    </section>
  );
}

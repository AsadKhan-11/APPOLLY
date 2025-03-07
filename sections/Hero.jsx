import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Hero() {
  return (
    <section
      className="relative max-w-full h-[1024px] overflow-hidden mx-auto flex justify-center
    lg:max-w-full lg:h-[1024px] 
    md:max-w-[100%] md:h-[1024px]
    sm:max-w-[100%] sm:h-[1227px]"
    >
      {/* Background Image */}
      <Image
        src="/Background-Image.svg"
        alt="Background"
        fill
        className="z-0 absolute object-cover"
        priority
      />

      {/* Navbar*/}
      <Navbar />

      {/* Hero Section Typography */}
      <div
        className="absolute bg-transparent flex flex-col justify-center
        lg:w-[620px] lg:h-[535px] lg:top-[321px] lg:left-[9.37%]
        md:w-[391px] md:h-[381px] md:top-[414px] md:left-[5.20%]
        sm:w-[343px] sm:h-[358px] sm:top-[188px] sm:left-[4.2%]"
      >
        <h2
          className="  text-left align-text-top z-20 left-[30px] absolute  text-[var(--royal-color)]
          

          lg:w-auto lg:left-[2.08%] lg:top-[91px] lg:leading-[130%] lg:text-dynamic-h2 lg:font-bold
          md:w-auto  md:left-[2.3%] md:top-[47px] md:leading-[47.3px] md:text-dynamic-h4 md:font-bold
          sm:w-[262px] sm:h-[71px] sm:left-[2.3%] sm:top-[50px] sm:leading-[37.5px] sm:text-dynamic-h5 sm:font-semibold"
        >
          A GREAT APP MAKES YOUR LIFE BETTER
        </h2>

        <h1
          className="h7  text-left align-text-top z-20 left-[30px] absolute top-[235px] leading-6 text-[var(--silver-color)]
          lg:left-[2.08%] lg:top-[235px] lg:w-[487px] lg:h-[66px] lg:text-dynamic-h7
          md:left-[1.8%] md:top-[148px]  md:w-[330px] md:h-[66px] md:text-dynamic-h7
          sm:h-[66px] sm:left-[2.3%] sm:top-[139px] sm:w-[293px] sm:text-dynamic-h7"
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </h1>
        <h1
          className="h5 w-auto text-left align-text-top z-20  absolute  font-semibold text-[var(--grey-color)]
          lg:left-[2.08%] lg:top-[353px] lg:w-[314px] lg:h-[47px] lg:text-dynamic-h5
          md:left-[1.8%] md:top-[237px] md:text-[var(--font-size-h6)] md:w-[314px] md:h-[47px] md:text-dynamic-h6  
          sm:left-[2.3%] sm:top-[235px] sm:text-[var(--font-size-h6)] md:w-[228px] md:h-[34.13px] sm:text-dynamic-h6"
        >
          DOWNLOAD APP NOW
        </h1>
        <div
          className="w-[314px] h-[47px] flex gap-3.5 z-20 absolute left-[30px] top-[396px] 
          lg:left-[2.08%] lg:top-[396px] lg:w-[314px] lg:h-[47px]
           md:left-[2.3%] md:top-[290px] 
          sm:w-[228px] sm:h-[34.13px] sm:left-[2.3%] sm:top-[283.44px]"
        >
          <Image
            src="Google.svg"
            alt="Google-Image"
            width={149}
            height={47}
            className="w-[149px] h-[47px] sm:w-[108.19px] sm:h-[34.13px]"
            priority
          />
          <Image
            src="App.svg"
            alt="App-Image"
            width={151}
            height={45}
            className="w-[151px] h-[45px] sm:w-[109.64px] sm:h-[32.68px]"
            priority
          />
        </div>
        <div
          className=" absolute bg-white z-10 left-[0px]
          lg:w-[570px] lg:h-[432px]  lg:top-[51px]
          md:w-[356px] md:h-[318px]  md:top-[33px]
          sm:w-[323px] sm:h-[318px]  sm:top-[20px]"
        ></div>

        {/* Hero Section border */}

        <div
          className=" absolute right-0 border-[var(--stroke-color)]
          lg:w-[570px] lg:h-[535px] lg:border-[18px]
          md:w-[375px] md:h-[381px] md:border-[18px]
          sm:w-[323px] sm:h-[358px] border-[10px]"
        ></div>
      </div>

      {/* Hero Section Phone Image */}
      <Image
        src="Phone-Image.svg"
        alt="Phone-Image"
        width={646}
        height={725}
        className="absolute   object-fill 
         lg:w-[646px] lg:h-[725px] lg:left-[61.0%] lg:top-[216px] // Large screens
    md:w-[378px] md:h-[423px] md:left-[63.3%] md:top-[380px] // Medium screens
    sm:w-[466px] sm:h-[521px] sm:left-[14.7%] sm:top-[586px] // Small screens"
        priority
      />
    </section>
  );
}

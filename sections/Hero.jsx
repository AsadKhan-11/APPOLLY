import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <section
      className="relative w-[1440px] h-[1024px] overflow-hidden   
    max-md:w-[864px]"
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
      max-md:w-[391px] max-md:h-[381px] max-md:top-[414px] max-md:left-[40px] "
      >
        <h4
          className=" w-auto font-bold text-left align-text-top z-20 left-[30px] leading-[130%] absolute top-[91px] right-[73px] text-[var(--royal-color)]
        max-md:left-[18px] max-md:top-[47px] max-md:leading-[47.3px]"
        >
          A GREAT APP MAKES YOUR LIFE BETTER
        </h4>
        <h6
          className="h7 w-[487px] h-[66px] text-left align-text-top z-20 left-[30px] absolute top-[235px] leading-6 text-[var(--silver-color)]
        max-md:left-[18px] max-md:top-[148px]"
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </h6>
        <h5
          className="w-auto text-left align-text-top z-20 left-[30px] absolute top-[353px] font-semibold text-[var(--grey-color)]
        max-md:left-[18px] max-md:top-[237px]"
        >
          DOWNLOAD APP NOW
        </h5>
        <div
          className="w-[314px] h-[47px] flex gap-3.5 z-20 absolute left-[30px]  top-[396px] 
        max-md:left-[18px] max-md:top-[290px]"
        >
          <Image
            src="Google.svg"
            alt="Google-Image"
            width={149}
            height={47}
            className="w-[149px] h-[47px] "
            priority
          />
          <Image
            src="App.svg"
            alt="App-Image"
            width={151}
            height={45}
            className="w-[151px] h-[45px] "
            priority
          />
        </div>
        <div
          className="w-[570px] h-[432px] absolute  bg-white z-10
        max-md:w-[356px] max-md:h-[318px]"
        ></div>
        <div
          className="w-[570px] h-[535px] absolute right-[0px] border-[18px] text-[var(--stroke-color)]
        max-md:w-[375px] max-md:h-[381px]"
        ></div>
      </div>

      {/* Hero Section Phone Image */}
      <Image
        src="Phone-Image.svg"
        alt="Phone-Image"
        width={646}
        height={725}
        className="absolute w-[646px] h-[725px] left-[836px] top-[216px] object-fill
        max-md:w-[378px] max-md:h-[423px] max-md:left-[443px] max-md:top-[380px]"
        priority
      />
    </section>
  );
}

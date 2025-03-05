import Image from "next/image";
export default function Home() {
  return (
    <section className="relative w-[1525px] h-[1024px]  ">
      <Image
        src="/Background-Image.svg"
        alt="Background"
        fill
        className="absolute top-0 left-0 -z-10 w-[1440px] h-[1024px] object-cover"
        priority
      />
      <div className="absolute w-[620px] h-[535px] left-[135px] top-[321px] bg-transparent flex flex-col justify-center ">
        <h2 className="w-auto  font-bold text-left align-text-top z-20 left-[30px] leading-[130%] absolute top-[91px] right-[73px] text-[var(--royal-color)]">
          A GREAT APP MAKES YOUR LIFE BETTER
        </h2>
        <h6 className="h7 w-[487px] h-[66px] text-left align-text-top z-20 left-[30px] absolute top-[235px] leading-6 text-[var(--silver-color)]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </h6>
        <h5 className="w-auto text-left align-text-top z-20 left-[30px] absolute top-[353px] font-semibold ">
          DOWNLOAD APP NOW
        </h5>
        <div className="w-[314px] h-[47px] flex gap-3.5 z-20 left-[30px] absolute top-[396px]">
          <Image
            src="Google.svg"
            alt="Google-Image"
            width={149}
            height={47}
            className=" "
            priority
          />
          <Image
            src="App.svg"
            alt="App-Image"
            width={149}
            height={47}
            className=" "
            priority
          />
        </div>
        <div className="w-[570px] h-[432px] absolute  bg-white z-10"></div>
        <div className="w-[570px] h-[535px] absolute right-[0px] border-[18px] text-[var(--stroke-color)]"></div>
      </div>

      <Image
        src="Phone-Image.svg"
        alt="Phone-Image"
        width={646}
        height={725}
        className="absolute w-[646px] h-[725px] left-[879px] top-[216px] "
        priority
      />
    </section>
  );
}

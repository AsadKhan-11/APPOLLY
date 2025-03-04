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
      <div className="absolute w-[620px] h-[535px] left-[135px] top-[321px] bg-transparent z-20 ">
        <h2
          className="w-auto  font-bold leading-tight absolute left-[165px] top-[412px] text-left align-text-top"
          style={{ color: "royalblue" }}
        >
          A GREAT APP MAKES YOUR LIFE BETTER
        </h2>
        <h6 className="h7 w-[487px] h-[66px] absolute left-[165px] top-[566px] text-left align-text-top">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </h6>
        <h5 className="w-auto absolute left-[165px] top-[674px] font-medium text-left align-text-top">
          DOWNLOAD APP NOW
        </h5>
        <div className="w-[314px] h-[47px] flex gap-3.5 absolute left-[165px] top-[717px]">
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
      </div>
      <div className="w-[570px] h-[432px] absolute left-[135px] top-[372px] bg-white z-10"></div>
      <div
        className="w-[570px] h-[535px] absolute left-[185px] top-[321px] border-[18px] "
        style={{
          borderColor: "#7572ff",
          inset: "inside",
        }}
      ></div>

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

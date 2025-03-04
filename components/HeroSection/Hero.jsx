import Image from "next/image";
export default function Home() {
  return (
    <section className="relative w-[1525px] h-[1024px] mx-auto bg-[url('/Background-Image.svg')]">
      <div className="w-[620px] h-[535px] absolute left-[135px] top-[321px] bg-transparent z-20 ">
        <h2 className="w-auto h-auto" style={{ color: "royalblue" }}>
          A GREAT APP MAKES YOUR LIFE BETTER
        </h2>
        <h6 className="h7">A GREAT APP MAKES YOUR LIFE BETTER</h6>
        <h5>DOWNLOAD APP NOW</h5>
        <div className="w-[314] h-[47] flex gap-3.5">
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
        className="w-[570px] h-[535px] absolute left-[185px] top-[321px] border-18 "
        style={{
          borderColor: "#7572ff",
          borderPosition: "inside",
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

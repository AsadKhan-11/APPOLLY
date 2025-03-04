import Image from "next/image";
export default function Home() {
  return (
    <section className="relative w-[1525px] h-[1024px] mx-auto bg-[url('/Background-Image.svg')] bg-contain bg-no-repeat bg-center">
      <Image
        src="Phone-Image.svg"
        alt="Phone-Image"
        width={646}
        height={725}
        className="absolute w-[646px] h-[725px]"
        style={{ right: "0px", top: "216px" }}
      />
    </section>
  );
}

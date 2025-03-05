import Hero from "@/components/HeroSection/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="w-[1440px] mx-auto flex flex-col items-center ">
      <Hero />
      <Navbar />
    </div>
  );
}

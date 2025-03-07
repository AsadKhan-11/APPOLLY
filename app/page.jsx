import Hero from "@/sections/Hero";
import About from "@/sections/About";

export default function Home() {
  return (
    <div
      className="relative w-full max-w-[1900px]  h-[1024px] mx-auto   
  lg:w-full lg:h-[1024px] 
    md:w-[100%] md:h-[1024px]
    sm:w-[100%] sm:h-[1227px]"
    >
      {/* Hero Section  */}
      <Hero />
      {/* About Section */}
      <About />
    </div>
  );
}

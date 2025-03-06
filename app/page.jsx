import Hero from "@/sections/Hero";
import About from "@/sections/About";

export default function Home() {
  return (
    <div
      className="w-[1440px] overflow-hidden 
    max-md:w-[864px]"
    >
      {/* Hero Section  */}
      <Hero />
      {/* About Section */}
      <About />
    </div>
  );
}

import Hero from "@/sections/Hero";
import About from "@/sections/About";

export default function Home() {
  return (
    <div
      className="w-[1440px] overflow-x-hidden mx-auto
    max-md:w-[768px]
    max-sm:w-[375px]"
    >
      {/* Hero Section  */}
      <Hero />
      {/* About Section */}
      <About />
    </div>
  );
}

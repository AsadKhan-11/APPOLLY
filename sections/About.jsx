import Image from "next/image";
import FeatureBox from "../components/FeatureBox";
export default function About() {
  return (
    <section
      className=" w-[1144px] h-[774px] absolute top-[1144px] left-[161px]
     max-md:h-[569px] max-md:w-[689px] max-md:left-[39px] 
     max-sm:h-[935px] max-sm:w-[343px] max-sm:left-[16px] max-sm:top-[1287px] max-sm:flex max-sm:flex-col  
    "
    >
      <h4
        className="w-auto text-center font-bold leading-[47.3px] absolute left-[426px] text-[var(--grey-color)]
      max-md:left-[213px] 
      max-sm:w-[209px] max-sm:h-[38px] max-sm:left-[67px]
      "
      >
        ABOUT OUR APP
      </h4>
      <h6
        className="h7 w-[601px] h-[70px] absolute left-[258px] top-[66px] align-top text-center text-[var(--silver-color)]
      max-md:w-[450px] max-md:left-[120px] max-md:top-[66px]
      max-sm:left-[22px] max-sm:top-[56px] max-sm:w-[300px] max-sm:h-[70px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet
        etiam tincidunt rhoncus.
      </h6>
      <Image
        src="Smartphone.svg"
        alt="Smartphone image"
        height={526}
        width={385}
        priority
        className="z-30 h-[526px] w-[385px] absolute top-[196px] 
        max-md:top-[210px] max-md:w-[238px] max-md:h-[324px]
        max-sm:w-[238px] max-sm:h-[359px] max-sm:left-[53px] max-sm:top-[166px]"
      />
      <Image
        src="Ellipse.svg"
        alt="Ellipse "
        height={71}
        width={212}
        priority
        className="z-10 absolute left-[64px] bottom-[30px] w-[212px] h-[71px] rounded-full 
        max-md:bottom-[0px] max-md:left-[0px] 
        max-md:left-[53px] max-md:top-[454px]"
      />
      <FeatureBox
        top={{ default: 196, md: 196 }}
        title="CREATIVE DESIGN"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         "
      />
      <FeatureBox
        top={{ default: 396, md: 226 }}
        title="EASY TO USE"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         "
      />
      <FeatureBox
        top={{ default: 596, md: 240 }}
        title="BEST USER EXPERIENCE"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         "
      />
    </section>
  );
}

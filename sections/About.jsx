import Image from "next/image";
import FeatureBox from "../components/FeatureBox";

export default function About() {
  return (
    <section
      className="absolute  left-1/2 transform -translate-x-1/2  
        lg:top-[1144px]   lg:w-[1144px] lg:h-[774px]  
        md:w-[689px] md:h-[569px] md:top-[1144px] 
        sm:w-[343px] sm:h-[935px] sm:top-[1287px]"
    >
      {/* Section Title */}
      <h4
        className="absolute  text-left align-top 
         text-[var(--grey-color)] 
 lg:text-dynamic-h4 lg-leading-[47.3px] lg:font-bold lg:left-[426px]
                md:text-dynamic-h4 md-leading-[47.3px] md:font-bold md:left-[213px]

                        sm:text-dynamic-h5 sm-leading-[37.5px] sm:font-semibold sm:left-[67px]

        "
      >
        ABOUT OUR APP
      </h4>

      {/* Description */}
      <h6
        className="absolute  left-1/2 transform -translate-x-1/2 text-center  
         text-[var(--silver-color)]  text-dynamic-h7 
         lg:w-[601px] lg:h-[70px] lg:top-[66px] 
        md:w-[450px] md:h-[70px] md-top-[66px]
        sm:w-[300px] sm:h-[70px] sm:top-[56px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae. Est tellus vitae, nullam lobortis enim.
      </h6>

      {/* Smartphone Image */}
      <Image
        src="Smartphone.svg"
        alt="Smartphone image"
        height={526}
        width={385}
        priority
        className="absolute  z-30
        lg:w-[385px] lg:h-[526px] lg:top-[196px] lg:left-[0]
        
        md:w-[238px] md:h-[359px] md:top-[210px] md:left-[0]  
        sm:w-[238px] sm:h-[324px] sm:top-[166px] sm:left-[14.1%]"
      />

      {/* Ellipse Background */}
      <Image
        src="Ellipse.svg"
        alt="Ellipse"
        height={71}
        width={212}
        priority
        className="absolute  w-[212px] h-[71px]  z-0
         lg:left-[5.13%] lg:bottom-[30px]  rounded-full 
        
        md:bottom-0 md:left-0  
        sm:left-[14.1%]  sm:bottom-[420px]
        "
      />

      {/* Featue Boxes */}

      <div
        className={` absolute  bg-white 
        lg:right-[0px] lg:top-196px] lg:w-[570px] lg:h-[160px]  
      md:w-[391px] md:top-[196px] md:h-[110px] md:right-[0px] 
      sm:w-[343px] sm:top-[565px] sm:h-[110px] sm:right-[0px] `}
      >
        <Image
          src="/icons/Checkbox.svg"
          alt="Checkbox"
          height={24}
          width={24}
          priority
          className=" absolute 
        lg:h-[24px] lg:w-[24px] lg:left-[18px] lg:top-[30px]
        md:top-[18px] md:left-[19px]
        sm:left-[19px] sm:top-[18px]"
        />

        <h6
          className="w-auto align-top text-left text-[var(--grey-color)] font-semibold absolute  leading-[30px]
      
        lg:left-[60px] lg:top-[30px] lg:text-dynamic-h6
        md:left-[61px] md:top-[18px] md:text-dynamic-h6
        sm:left-[61px] sm:top-[18px] sm:text-dynamic-h7

      "
        >
          CREATIVE DESIGN
        </h6>
        <h6
          className="h7 text-left align-top w-[491px] h-[67px] text-[var(--silver-color)] font-normal
    absolute  
    w-auto lg:left-[59px] lg:bottom-[21px] lg:text-dynamic-h7 lg:leading-[24px]
    md:left-[61px] md:bottom-[10px] md:w-[300px] md:h-[49px] md:text-dynamic-h7 md:leading-[24px]
    sm:w-[266px] sm:h-[49px] sm:bottom-[10px] sm:left-[61px] sm:text-dynamic-h7 sm:leading-[24px]
    "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </h6>
        <div
          className=" shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] absolute rounded-[10px]
     lg:right-[0px] lg:top-[0px] lg:w-[570px] lg:h-[160px]  
      md:w-[391px]  md:h-[110px] md:top-[0px]  md:right-[0px] 
      sm:w-[343px] sm:top-[0px] sm:h-[110px] sm:right-[0px] "
        ></div>
      </div>
      <div
        className={` absolute  bg-white 
        lg:right-[0px] lg:w-[570px] lg:h-[160px] lg:top-[396px]  
      md:w-[391px] md:h-[110px] md:right-[0px] md:top-[326px]
      sm:w-[343px] sm:h-[110px] sm:right-[0px] sm:top-[695px] `}
      >
        <Image
          src="/icons/Checkbox.svg"
          alt="Checkbox"
          height={24}
          width={24}
          priority
          className=" absolute 
        lg:h-[24px] lg:w-[24px] lg:left-[18px] lg:top-[30px]
        md:top-[18px] md:left-[19px]
        sm:left-[19px] sm:top-[18px]"
        />

        <h6
          className="w-auto align-top text-left text-[var(--grey-color)] font-semibold absolute  leading-[30px]
      
        lg:left-[60px] lg:top-[30px] lg:text-dynamic-h6
        md:left-[61px] md:top-[18px] md:text-dynamic-h6
        sm:left-[61px] sm:top-[18px] sm:text-dynamic-h7

      "
        >
          EASY TO USE{" "}
        </h6>
        <h6
          className="h7 text-left align-top w-[491px] h-[67px] text-[var(--silver-color)] font-normal
    absolute  
    w-auto lg:left-[59px] lg:bottom-[21px] lg:text-dynamic-h7 lg:leading-[24px]
    md:left-[61px] md:bottom-[10px] md:w-[300px] md:h-[49px] md:text-dynamic-h7 md:leading-[24px]
    sm:w-[266px] sm:h-[49px] sm:bottom-[10px] sm:left-[61px] sm:text-dynamic-h7 sm:leading-[24px]
    "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </h6>
        <div
          className=" shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] absolute rounded-[10px]
      lg:right-[0px] lg:w-[570px] lg:h-[160px] lg:top-[0]
      md:w-[391px] md:h-[110px] md:right-[0px] 
      sm:w-[343px] sm:h-[110px] sm:right-[0px]"
        ></div>
      </div>
      <div
        className={` absolute  bg-white 
        lg:right-[0px] lg:w-[570px] lg:h-[160px]  lg:top-[596px]
      md:w-[391px] md:h-[110px] md:right-[0px] md:top-[456px] 
      sm:w-[343px] sm:h-[110px] sm:right-[0px] sm:top-[825px] `}
      >
        <Image
          src="/icons/Checkbox.svg"
          alt="Checkbox"
          height={24}
          width={24}
          priority
          className=" absolute 
        lg:h-[24px] lg:w-[24px] lg:left-[18px] lg:top-[30px]
        md:top-[18px] md:left-[19px]
        sm:left-[19px] sm:top-[18px]"
        />

        <h6
          className="w-auto align-top text-left text-[var(--grey-color)] font-semibold absolute  leading-[30px]
      
        lg:left-[60px] lg:top-[30px] lg:text-dynamic-h6
        md:left-[61px] md:top-[18px] md:text-dynamic-h6
        sm:left-[61px] sm:top-[18px] sm:text-dynamic-h7

      "
        >
          BEST USER EXPERIENCE{" "}
        </h6>
        <h6
          className="h7 text-left align-top w-[491px] h-[67px] text-[var(--silver-color)] font-normal
    absolute  
    w-auto lg:left-[59px] lg:bottom-[21px] lg:text-dynamic-h7 lg:leading-[24px]
    md:left-[61px] md:bottom-[10px] md:w-[300px] md:h-[49px] md:text-dynamic-h7 md:leading-[24px]
    sm:w-[266px] sm:h-[49px] sm:bottom-[10px] sm:left-[61px] sm:text-dynamic-h7 sm:leading-[24px]
    "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </h6>
        <div
          className=" shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] absolute rounded-[10px]
      lg:right-[0px] lg:w-[570px] lg:h-[160px] lg:top-[0px]
      md:w-[391px] md:h-[110px] md:right-[0px] md:top-[0px]
      sm:w-[343px] sm:h-[110px] sm:right-[0px] sm:top-[0px]"
        ></div>
      </div>

      {/* Feature Boxes */}
      {/* Could not figure out how to set dynamic values
       <FeatureBox
        top={{ default: 196, md: 196, sm: 220 }}
        title="CREATIVE DESIGN"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <FeatureBox
        top={{ default: 396, md: 226, sm: 440 }}
        title="EASY TO USE"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <FeatureBox
        top={{ default: 596, md: 240, sm: 660 }}
        title="BEST USER EXPERIENCE"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      /> */}
    </section>
  );
}

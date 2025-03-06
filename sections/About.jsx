import Image from "next/image";
import FeatureBox from "../components/FeatureBox";
export default function About() {
  return (
    <section className="w-[1144px] h-[774px] absolute top-[1144px] left-[161px]">
      <h4 className="w-auto text-center font-bold leading-[47.3px] absolute left-[426px] text-[var(--grey-color)]">
        ABOUT OUR APP
      </h4>
      <h6 className="h7 w-[601px] h-[70px] absolute left-[258px] top-[66px] align-top text-center text-[var(--silver-color)]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet
        etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac
        nunc libero urna, feugiat.
      </h6>
      <Image
        src="Smartphone.svg"
        alt="Smartphone image"
        height={526}
        width={385}
        priority
        className="z-30 h-[526px] w-[385px] absolute top-[196px]"
      />
      <Image
        src="Ellipse.svg"
        alt="Ellipse "
        height={71}
        width={212}
        priority
        className="z-10 absolute left-[74px] top-[678px] w-[212px] h-[71px] rounded-full"
      />
      <FeatureBox
        top={196}
        title="CREATIVE DESIGN"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
          Faucibus amet etiam tincidunt rhoncus, ullamcorper velit."
      />
      <FeatureBox
        top={396}
        title="EASY TO USE"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
         Faucibus amet etiam tincidunt rhoncus, ullamcorper velit."
      />
      <FeatureBox
        top={596}
        title="BEST USER EXPERIENCE"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
          Faucibus amet etiam tincidunt rhoncus, ullamcorper velit."
      />
    </section>
  );
}

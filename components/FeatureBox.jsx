import Image from "next/image";
export default function FeatureBox({ title, description, top }) {
  return (
    <div
      className={`w-[570px] h-[160px] absolute left-[574px] bg-white 
        max-md:w-[391px] max-md:h-[110px] max-md:left-[298px]
         top-[${top.default}px] md:top-[${top.md}px] `}
    >
      <Image
        src="/icons/Checkbox.svg"
        alt="Checkbox"
        height={24}
        width={24}
        priority
        className="h-[24px] w-[24px] absolute left-[18px] top-[30px]
        max-md:top-[18px] "
      />

      <h6
        className="w-auto align-top text-left text-[var(--grey-color)] font-semibold absolute left-[59px] top-[30px] leading-[30px]
      max-md:left-[61px] max-md:top-[18px] "
      >
        {title}
      </h6>
      <h6
        className="h7 text-left align-top w-[491px] h-[67px] text-[var(--silver-color)] font-normal
    absolute left-[59px] bottom-[21px] 
    max-md:left-[61px] max-md:bottom-[10px] max-md:w-[300px] max-md:h-[49px]
    "
      >
        {description}
      </h6>
      <div
        className="w-[570px] h-[160px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] absolute rounded-[10px]
      max-md:w-[391px] max-md:h-[110px]"
      ></div>
    </div>
  );
}

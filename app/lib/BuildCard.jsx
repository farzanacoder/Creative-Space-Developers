import Image from "next/image";

const BuildCard = ({ image, title, decripton, buildIcon }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm">
      <div className="relative hover:scale-105 duration-300 cursor-pointer">
        <Image src={image} alt="image" className="w-full " />
        <Image
          src={buildIcon}
          alt="buildicon"
          className="absolute bottom-6 left-6 z-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.4)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.3)] opacity-90"></div>
      </div>
      <div className="p-6">
        <h4 className="font-semibold text-brand text-xl leading-7 pb-4">
          {title}
        </h4>
        <p className="text-secondary leading-[150%]">{decripton}</p>
      </div>
    </div>
  );
};

export default BuildCard;
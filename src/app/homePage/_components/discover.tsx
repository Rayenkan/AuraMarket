import Image from "next/image";
import DiscoverImg from "@/assets/DiscoverImg.png";
const Discover = () => {
  return (
    <div className="relative flex items-center justify-end">
      <Image
        src={DiscoverImg}
        className="!w-full h-[716px] "
        alt={""}
        width={1440}
        height={716}
      />
      <div className="absolute flex flex-col justify-center w-[843px] h-[443px] bg-[#fff3e3] mt-10 mr-20 p-16 ">
        <p className="text-black font-medium text-lg">new arrival</p>
        <p className="text-[#B88E2F] font-bold text-[52px] w-[60%] ">
          {" "}
          Discover our new collection
        </p>
        <p className=" text-black font-medium text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <div className="items-end flex mt-8">
          <div className="h-[74px] w-[222px] bg-[#B88E2F] flex items-center justify-center">
            <p className="text-white font-bold text-base">Buy Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Discover;

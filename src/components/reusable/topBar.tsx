"use client"
import Image from "next/image";
import img from "@/app/favicon.ico";
import useRouteState from "@/customHooks/useChangeRoutes";
import AccountIcon from "@/app/homePage/svgs/accountIcon";
import CartIcon from "@/app/homePage/svgs/CartIcon";
import { SearchIcon, HeartIcon } from "lucide-react";

const TopBar = () => {
  const { pushRoute } = useRouteState()
  return (
    <div className="flex items-center justify-between w-full h-[100px] px-12 bg-white " >
      <div className="flex flex-row items-center text-black gap-2 [&>*]:cursor-pointer" onClick={()=>pushRoute("/homePage")} >
        <Image src={img} alt={""} height={12} width={50} />
        <p className="font-bold text-[34px]">AuraMarket</p>
      </div>
      <div className="flex flex-row items-center gap-16 [&>*]:cursor-pointer">
        <p className="text-black font-medium text-base " onClick={()=>pushRoute("/homePage")}>Home</p>
        <p className="text-black font-medium text-base" onClick={()=>pushRoute("/Shop")}>Shop</p>
        <p className="text-black font-medium text-base" onClick={()=>pushRoute("/AboutUs")}>About</p>
        <p className="text-black font-medium text-base" onClick={()=>pushRoute("/Contact")}>Contact</p>
      </div>
      <div className="flex flex-row items-center gap-12 [&>*]:cursor-pointer">
        <AccountIcon />
        <SearchIcon />
        <HeartIcon />
        <CartIcon />
      </div>
    </div>
  );
};
export default TopBar;

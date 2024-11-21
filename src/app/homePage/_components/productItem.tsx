import { Button } from "@/components/ui/button";
import { ArrowLeftRight, Share } from "lucide-react";
import Image from "next/image";
import HeartIcon from "../_svgs/heartIcon";
import useRouteState from "@/customHooks/useChangeRoutes";
import { ProductItemType } from "@/lib/types";

export default function ProductItem({
  id,
  image,
  title,
  description,
  price,
  discount,
}: ProductItemType) {
  const { pushRoute } = useRouteState();

  return (
    <div
      className="relative flex flex-col rounded-xl justify-start w-[285px] h-[446px]  transition duration-200 cursor-pointer"
      onClick={() => pushRoute(`/products/${id}`)}
    >
      <Image
        className="h-[301px] w-[285px]"
        src={image}
        alt={title}
        width={285}
        height={301}
      />
      <div className="p-4 space-y-2 text-black">
        <p className="font-semibold text-2xl line-clamp-1">{title}</p>
        <p className="text-gray-400 font-medium line-clamp-1">{description}</p>
        <p className="font-semibold text-[20px]">${price.toFixed(2)}</p>
      </div>
      <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-white bg-opacity-70 flex flex-col items-center justify-center transition-opacity duration-200">
        <Button
          variant={"default"}
          className="h-[48px] w-[202px] text-[#B88E2F] bg-white rounded-none mb-4"
        >
          Add to cart
        </Button>
        <div className="flex flex-row items-center space-x-6 [&>*]:cursor-pointer ">
          <div className="flex items-center space-x-1">
            <Share size={20} />
            <span>Share</span>
          </div>
          <div className="flex items-center space-x-1">
            <ArrowLeftRight size={20} />
            <span>Compare</span>
          </div>
          <div className="flex items-center space-x-1">
            <HeartIcon />
            <span>Like</span>
          </div>
        </div>
      </div>
      {discount && (
        <div className="absolute top-5 left-5 bg-red-200 text-black px-2 py-1 text-sm font-semibold">
          {discount}% OFF
        </div>
      )}
    </div>
  );
}

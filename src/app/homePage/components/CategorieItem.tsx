"use client";
import useRouteState from "@/customHooks/useChangeRoutes"
import Image from "next/image"

type categorieItemProps ={
    imgUrl :string,
    categorieName :string,
    link : string
}
const CategorieItem =({imgUrl ,categorieName , link}:categorieItemProps)=>{
    const { pushRoute } = useRouteState()

    return (
        <div className="flex flex-col items-center cursor-pointer" onClick={()=>pushRoute(link)}>
            <Image className="mb-6 bg-yellow-50 w-[381px] h-[480px]" width={381} height={480} src={imgUrl} alt={""}/>
            <p className="font-semibold">{categorieName}</p>
        </div>
    )
}
export default CategorieItem;
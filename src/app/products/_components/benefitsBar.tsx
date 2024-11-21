import { Award, ShieldCheck, Truck, Headset } from "lucide-react"; // Import icons
import BenefitsItem from "./benefitsItem";

const BenefitsBar = () => {
  return (
    <div className="flex items-center justify-center space-x-10 w-full h-[244px] bg-[#faf3ea] my-12">
      {BENEFITS.map((item, index) => (
        <BenefitsItem key={index} {...item} />
      ))}
    </div>
  );
};

const BENEFITS = [
  {
    Icon: Award,
    Title: "High Quality",
    Description: "Crafted from top materials",
  },
  {
    Icon: ShieldCheck,
    Title: "Warranty Protection",
    Description: "Over 2 Years",
  },
  {
    Icon: Truck,
    Title: "Free Shipping",
    Description: "Order over $150",
  },
  {
    Icon: Headset,
    Title: "24 / 7 Support",
    Description: "Dedicated support",
  },
];

export default BenefitsBar;

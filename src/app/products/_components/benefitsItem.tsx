type BenefitsItemProps = {
    Icon: React.ComponentType; // This ensures you pass a valid React component
    Title: string; // Use lowercase `string`
    Description: string; // Use lowercase `string`
  };
  
  const BenefitsItem = ({ Icon, Title, Description }: BenefitsItemProps) => {
    return (
      <div className="w-[328px] h-[70px] flex items-center justify-center flex-row space-x-2" >
        <div className="[&>*]:size-12">
          <Icon  /> 
        </div>
        <div className="ml-4 flex items-start justify-start flex-col">
          <p className="text-lg font-semibold">{Title}</p>
          <p className="text-gray-400">{Description}</p>
        </div>
      </div>
    );
  };
  
  export default BenefitsItem;
  
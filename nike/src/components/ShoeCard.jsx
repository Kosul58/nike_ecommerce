import React from "react";

const ShoeCard = ({ imageURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imageURL.bigShoe) {
      changeBigShoeImage(imageURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl 
    ${
      bigShoeImg === imageURL.bigShoe
        ? "border-coral-red"
        : "border-coral-transparent"
    } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 max-[650px]:w-24 max-[400px]:w-16">
        <img
          src={imageURL.bigShoe}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;

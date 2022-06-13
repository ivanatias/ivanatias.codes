import React from "react";
import Image from "next/image";

const Skill = ({ skillImage, skillText }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="relative w-10 h-10 2xl:w-12 2xl:h-12">
        <Image src={skillImage} layout="fill" objectFit="contain" alt="Skill" />
      </div>
      <p className="text-black dark:text-gray-300 text-xs 2xl:text-sm underline">
        {skillText}
      </p>
    </div>
  );
};

export default Skill;

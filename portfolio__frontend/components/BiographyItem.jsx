import React from "react";

export const BioYear = ({ children }) => {
  return (
    <span className="font-bold text-sm 2xl:text-base text-pink-800 dark:text-pink-600">
      {children}
    </span>
  );
};

export const BioDescription = ({ children }) => {
  return (
    <p className="text-ellipsis text-black dark:text-gray-300 text-base 2xl:text-lg">
      {children}
    </p>
  );
};

const BiographyItem = ({ year, desc }) => {
  return (
    <div className="flex gap-3">
      <BioYear>{year}</BioYear>
      <BioDescription>{desc}</BioDescription>
    </div>
  );
};

export default BiographyItem;

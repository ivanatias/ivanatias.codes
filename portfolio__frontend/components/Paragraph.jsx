import React from "react";

const Paragraph = ({ children, textIndent }) => {
  return (
    <p
      className={`text-black dark:text-gray-300 ${textIndent} text-base 2xl:text-lg text-justify`}
    >
      {children}
    </p>
  );
};

export default Paragraph;

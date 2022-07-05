import React from "react";
import Refractor from "react-refractor";

//Languages
import javascript from "refractor/lang/javascript";
import typescript from "refractor/lang/typescript";
import jsx from "refractor/lang/jsx";
import tsx from "refractor/lang/tsx";
import css from "refractor/lang/css";
import sass from "refractor/lang/sass";
import scss from "refractor/lang/scss";
import batch from "refractor/lang/batch";
import json from "refractor/lang/json";

//Register languages
Refractor.registerLanguage(javascript);
Refractor.registerLanguage(typescript);
Refractor.registerLanguage(jsx);
Refractor.registerLanguage(tsx);
Refractor.registerLanguage(css);
Refractor.registerLanguage(sass);
Refractor.registerLanguage(scss);
Refractor.registerLanguage(batch);
Refractor.registerLanguage(json);

const CustomCode = ({ value }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-[-28px]">
        <div className="tracking-tighter flex-1 text-black italic dark:text-gray-100 text-base 2xl:text-lg">
          {value?.codeFilename}
        </div>
        <div className="uppercase font-semibold py-1 text-black dark:text-gray-100 text-base 2xl:text-lg">
          {value?.code?.language}
        </div>
      </div>
      <Refractor
        language={value?.code?.language}
        value={value?.code?.code}
        className="max-h-[450px]"
        inline={value?.isInline}
      />
    </>
  );
};

export default CustomCode;

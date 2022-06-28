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
import xml from "refractor/lang/xml-doc";

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
Refractor.registerLanguage(xml);

const CustomCode = ({ value }) => {
  return (
    <div className="w-full xxs:max-w-[280px] xs:max-w-[335px] prevsm:max-w-[460px] sm:max-w-[600px] md:max-w-full mx-auto">
      <div className="bg-pink-900 mb-[-8px] py-1 px-2 text-white w-fit text-base 2xl:text-lg rounded-t">
        {value?.codeFilename}
      </div>
      <Refractor language={value?.code?.language} value={value?.code?.code} />
    </div>
  );
};

export default CustomCode;

import React from "react";
import { socialLinks } from "../constants/socialLinks";

const Social = () => {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((item) => (
        <a
          className="text-2xl text-pink-800 dark:text-pink-600"
          key={item.name}
          href={item.path}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="sr-only">{item.name}</span>
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;

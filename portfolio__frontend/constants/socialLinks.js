import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

export const socialLinks = [
  {
    path: "https://github.com/ivanatias",
    icon: <AiFillGithub />,
    name: "Github",
  },
  {
    path: "https://www.linkedin.com/in/ivandatiasr/",
    icon: <AiFillLinkedin />,
    name: "Linkedin",
  },
  {
    path: "https://stackoverflow.com/users/17195992/ivanatias",
    icon: <BsStackOverflow />,
    name: "Stackoverflow",
  },
  {
    path: "https://instagram.com/ivanatias",
    icon: <AiOutlineInstagram />,
    name: "Instagram",
  },
];

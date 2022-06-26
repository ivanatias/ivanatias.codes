import { MdPerson } from "react-icons/md";

export default {
  name: "biography",
  title: "Biography",
  type: "document",
  icon: MdPerson,
  fields: [
    {
      name: "year",
      title: "year",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
  ],
};

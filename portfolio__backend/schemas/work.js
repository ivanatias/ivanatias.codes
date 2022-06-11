export default {
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "overview",
      title: "Overview",
      type: "string",
    },
    {
      name: "thumbNail",
      title: "Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "stack",
      title: "Stack",
      type: "array",
      of: [{ type: "technology" }],
    },
    {
      name: "projectUrl",
      title: "Project Url",
      type: "string",
    },
    {
      name: "githubUrl",
      title: "Github Url",
      type: "string",
    },
    {
      name: "additionalImages",
      title: "Additional Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, //
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
  ],
};

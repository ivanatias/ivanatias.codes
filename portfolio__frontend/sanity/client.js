import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "uaj0umn5",
  dataset: "production",
  apiVersion: "2022-06-09",
  useCdn: true,
});

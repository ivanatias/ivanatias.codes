import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { codeInput } from "@sanity/code-input";
import schemas from "./schemas/schema";

export default defineConfig({
  title: "Ivan Atias personal website content manager",
  projectId: "uaj0umn5",
  dataset: "production",
  plugins: [deskTool(), visionTool(), codeInput()],
  tools: (prev) => {
    return import.meta.env.DEV === true
      ? prev
      : prev.filter((tool) => tool.name !== "vision");
  },
  schema: {
    types: schemas,
  },
});

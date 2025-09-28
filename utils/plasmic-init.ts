import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "2acAsWPTmkcRkdqSKDtVPg",  // ID of a project you are using
      token: "PAjxrH206TKWTapeCaQ7kWcNG1keSKL6X9UnmrSVz74Op3lsNsnsiN5ERu7F70UVo6nh5LDa5L4yEAiX7Cg"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})

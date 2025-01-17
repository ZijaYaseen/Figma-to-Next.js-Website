import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schema";
 

export const SanityConfig = defineConfig({
    name:"default",
    title:"Blogs",
    projectId:"9s61l08g",
    dataset:"production",
    plugins:[structureTool(), visionTool()],
    basePath:"/studio",
    schema : {
        types : schemaTypes
    }
})
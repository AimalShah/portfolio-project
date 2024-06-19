import { createClient } from "@sanity/client"

export const projectData = createClient({
   projectId: "rya62nsk", 
   dataset: "production", 
   apiVersion: "2024-03-11",
   useCdn: false, 
})

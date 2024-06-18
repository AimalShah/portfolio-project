import { createClient } from "@sanity/client"

export const client = createClient({
   projectId: "ckjh9htg", 
   dataset: "production", 
   apiVersion: "2024-03-11",
   useCdn: false, 
})

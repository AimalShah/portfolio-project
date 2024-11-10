import { Link } from "react-router-dom";
import { Button } from "./ui/button";


export default function ProjectCard({image , title , id} : {image : any; title : any; id : any;}) {
  return (
    <div
    className="space-y-2 max-w-80 rounded-lg border cursor-pointer pb-2"
   
    >
        <div className="w-80 rounded-lg overflow-hidden">
            <img src={image} alt="" className="w-full object-cover"/>
        </div>
        <div className="p-2 space-y-2">
            <h1 className="text-lg">{title.toUpperCase()}</h1>
        <Link to={`/projects/${id}`}>
        <Button
         id={id}
         variant={"secondary"}
         >
          See Project
        </Button>
          </Link>
        </div>
    </div>
  )
}
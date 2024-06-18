

export default function ProjectCard({image , title} : {image : string; title : string;}) {
  return (
    <div
    className="space-y-2 max-w-80 rounded-lg border">
        <div className="w-80 rounded-lg overflow-hidden">
            <img src={image} alt="" className="w-full object-cover"/>
        </div>
        <div className="p-2 space-y-2">
            <h1 className="text-lg ">{title}</h1>
        </div>
    </div>
  )
}
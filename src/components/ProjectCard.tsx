
export default function ProjectCard({image , title} : {image : string; title : string;}) {
  return (
    <div className="space-y-2 max-w-80 rounded-lg">
        <div className="w-80 rounded-lg overflow-hidden border">
            <img src={image} alt="" className="w-full object-cover"/>
        </div>
        <div className="">
            <h1 className="text-2xl font-semibold">{title}</h1>
        </div>
    </div>
  )
}

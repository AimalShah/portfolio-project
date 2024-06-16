import ProjectCard from "@/components/ProjectCard";
export default function ProjectsSec ({url , projects} : {url : string; projects : number[];}) {
    return (
      <div className="lg:mt-20 mt-0 space-y-10 lg:text-start text-center">
      <div>
      <h1 className="text-6xl font-bold">Projects</h1>
      <p className="lg:w-[60%] lg:p-0 p-2 mt-4 text-[#737373]"> I strive to push the boundaries of design, crafting visually compelling narratives that leave a lasting impression. Explore these works to witness how I merge innovation with meticulous attention to detail, aiming always to exceed expectations and inspire through every pixel and line..</p>
      </div>
      <div className="flex flex-wrap gap-4 lg:justify-start justify-center">
      {
        projects.map((project : number) =>(
          <ProjectCard image={url} title="Project Name" key={project}/>
        ))
      }
      </div>
    </div>
    )
  }
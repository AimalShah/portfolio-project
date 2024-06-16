import ProjectCard from "@/components/ProjectCard";
import Hero from "./Hero";

const projects = [1,2,3,4]

export default function Home() {
  const url = "https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhcGhpY3MlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
  return (
    <div className="max-w-6xl mx-auto">
        <Hero/>
        <div className="my-20 space-y-10 lg:text-start text-center">
          <div>
          <h1 className="text-6xl font-bold">Projects</h1>
          <p className="lg:w-[60%] lg:p-0 p-2 mt-4 text-[#737373]"> I strive to push the boundaries of design, crafting visually compelling narratives that leave a lasting impression. Explore these works to witness how I merge innovation with meticulous attention to detail, aiming always to exceed expectations and inspire through every pixel and line..</p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-start justify-center">
          {
            projects.map((project : number) =>(
              <ProjectCard image={url} title="Project Name"/>
            ))
          }
          </div>
        </div>
    </div>
  )
}

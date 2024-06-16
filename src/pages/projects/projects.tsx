import ProjectCard from "@/components/ProjectCard"
import ContactInfo from "../about/ContactInfo"

const arr = [1,2,3,4,5,6,7,8]
const url = "https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhcGhpY3MlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"

export default function Projects() {
    return (
        <div className="max-w-6xl mx-auto lg:mt-40 mt-14 lg:p-0 p-2 space-y-6">
            <h1 className="lg:text-6xl text-3xl lg:text-start text-center lg:max-w-3xl font-semibold">Things I’ve made trying to put my dent in the universe.</h1>
            <p className="font-thin text-[#737373] lg:text-justify text-center">I bring over two and a half years of continuous experience as a documentary video editor. My editing workflow utilizes industry-standard tools such as Premiere Pro, After Effects, and Photoshop, along with the latest AI-powered editing software. I specialize in crafting compelling documentaries through the use of motion graphics, special effects, and sound design. My goal is to elevate each project, ensuring a captivating and polished final product. If you're looking for exceptional video editing that brings your vision to life, feel free to get in touch!
            </p>
            <div className="flex flex-wrap gap-10 lg:justify-start justify-center">
                {
                    arr.map((e : number) => (
                        <ProjectCard image={url} title="Project Name" key={e}/>
                    ))
                }
            </div>

            <ContactInfo />
        </div>
    )
}

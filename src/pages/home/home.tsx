import ArticleSec from "./ArticleSec";
import Hero from "./Hero";
import ProjectsSec from "./ProjectSec";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook ,faWhatsapp , faLinkedin , faTwitterSquare ,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const projects = [1,2,3,4]


export default function Home() {
  const url = "https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhcGhpY3MlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
  return (
    <div className="max-w-6xl mx-auto">
        <Hero/>
       <ProjectsSec projects={projects} url={url} />
       <div className="flex gap-4 lg:flex-row flex-col">
       <ArticleSec />
       <div className="w-full flex items-center lg:p-0 p-2">
        <div className="dark:bg-[#737373]/10 bg-primary-foreground light:border lg:w-full w-full p-4 rounded-xl lg:m-0 box-border">
          <h1 className="text-3xl font-semibold mb-4">Contact</h1>
          <div className='flex justify-center flex-col gap-4 h-full lg:text-left text-center'>
           <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faFacebook} className='size-6 text-[#737373] border-2 rounded-full p-1 hover:border-primary' />
          <p className="text-sm font-semibold text-[#737373]">Facebook</p>
          </div> 
          <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faTwitterSquare} className='size-6 text-[#737373] border-2 rounded-full p-2  hover:border-primary' />
          <p className="text-sm font-semibold text-[#737373]">Twitter</p>
          </div>
          <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faInstagram} className='size-6 text-[#737373] border-2 rounded-full p-2  hover:border-primary' />
          <p className="text-sm  font-semibold text-[#737373]">Instagram</p>
          </div>
          <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faWhatsapp} className='size-6 text-[#737373] border-2 rounded-full p-2  hover:border-primary' />
          <p className="text-sm  font-semibold text-[#737373]">Whatsapp</p>
          </div>
          <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faLinkedin} className='size-6 text-[#737373] border-2 rounded-full p-2  hover:border-primary' />
          <p className="text-sm  font-semibold text-[#737373]">Linkedin</p>
          </div>
          <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faEnvelope} className='size-6 text-[#737373] border-2 rounded-full p-2  hover:border-primary' />
          <p className="text-sm font-semibold text-[#737373]">info@khalidzarar.com</p>
          </div>
        </div>
       </div>
       </div>
       </div>
    </div>
  )
}

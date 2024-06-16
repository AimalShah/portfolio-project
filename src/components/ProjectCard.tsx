import Tilt from 'react-parallax-tilt'
import { Button } from './ui/button';

export default function ProjectCard({image , title} : {image : string; title : string;}) {
  return (
    <Tilt
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    glareEnable
    glareMaxOpacity={0.08}
    perspective={1000}
    className="space-y-2 max-w-80 rounded-lg bg-[#737373]/10">
        <div className="w-80 rounded-lg overflow-hidden">
            <img src={image} alt="" className="w-full object-cover"/>
        </div>
        <div className="p-2 space-y-2">
            <h1 className="text-lg ">{title}</h1>
            <Button className='' size={'sm'} variant={'secondary'}>Show Project</Button>
        </div>
    </Tilt>
  )
}
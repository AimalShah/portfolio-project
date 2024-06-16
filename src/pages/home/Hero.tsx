import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
export default function Hero() {
  return (
    <div className="max-w-6xl h-screen flex lg:flex-row justify-between gap-4 mx-auto">
      <div className="lg:mt-40 mt-10 lg:text-left text-center space-y-6 max-w-2xl">
          <div className="flex lg:justify-start items-center gap-4 justify-center">
            <img src="https://reactfolio.tharindu.dev/logo.png" alt="" 
            className="w-20 rounded-full"
            />
          </div>
          <div className="space-y-6">
            <h1 className="lg:text-6xl text-3xl  font-bold">
            Redefining Design with Passion and Precision
            </h1>
            <p className="lg:text-justify font-thin text-[#737373] lg:p-0 px-4 text-center">
            As a graphic designer, I transform ideas into visually stunning realities that captivate and inspire. With a passion for creativity and a meticulous eye for detail, I craft designs that tell compelling stories and elevate brands. My portfolio reflects my journey of blending innovation with aesthetics, showcasing a diverse range of projects that highlight my dedication to the art of design. Explore my work to see how I bring imagination to life through the power of visual communication.
            </p>
          </div>
        <div className='space-x-6 lg:text-left text-center'>
          <FontAwesomeIcon icon={faFacebook} className='size-8 text-[#737373]' />
          <FontAwesomeIcon icon={faTwitter} className='size-8 text-[#737373]' />
          <FontAwesomeIcon icon={faInstagram} className='size-8 text-[#737373]' />
          <FontAwesomeIcon icon={faWhatsapp} className='size-8 text-[#737373]' />

        </div>
        </div>
        <div className="mt-40 w-10/12 lg:flex items-center justify-center  hidden">
          <img src="https://reactfolio.tharindu.dev/homepage.jpg" alt=""  className="w-80 rounded-lg rotate-3 border  border-white"/>
        </div>
    </div>
  )
}

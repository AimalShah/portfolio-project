import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook ,faWhatsapp , faTwitter ,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactInfo() {
  return (
    <div className="bg-[#737373]/10 lg:w-full w-full p-4 rounded-xl lg:m-0 box-border">
    <div className='flex justify-center flex-col gap-4 h-full lg:text-left text-center'>
     <div className="flex gap-2 items-center">
    <FontAwesomeIcon icon={faFacebook} className='size-6 text-[#737373]' />
    <p className="text-sm font-semibold text-[#737373]">Facebook</p>
    </div> 
    <div className="flex gap-2 items-center">
    <FontAwesomeIcon icon={faTwitter} className='size-6 text-[#737373]' />
    <p className="text-sm font-semibold text-[#737373]">Twitter</p>
    </div>
    <div className="flex gap-2 items-center">
    <FontAwesomeIcon icon={faInstagram} className='size-6 text-[#737373]' />
    <p className="text-sm  font-semibold text-[#737373]">Instagram</p>
    </div>
    <div className="flex gap-2 items-center">
    <FontAwesomeIcon icon={faWhatsapp} className='size-6 text-[#737373]' />
    <p className="text-sm  font-semibold text-[#737373]">Whatsapp</p>
    </div>
    <div className="flex gap-2 items-center">
    <FontAwesomeIcon icon={faEnvelope} className='size-6 text-[#737373]' />
    <p className="text-sm font-semibold text-[#737373]">info@khalidzarar.com</p>
    </div>
  </div>
 </div>
  )
}

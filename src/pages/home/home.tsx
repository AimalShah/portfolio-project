import ArticleSec from "./ArticleSec";
import Hero from "./Hero";
import ProjectsSec from "./ProjectSec";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Services from "../about/services";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <Hero />
      <Services/>
      <ProjectsSec />
      <div className="flex gap-4 lg:flex-row flex-col">
        <ArticleSec />
        <div className="w-full flex items-center lg:p-0 p-2">
          <div className="dark:bg-[#737373]/10 bg-primary-foreground light:border lg:w-full w-full p-4 rounded-xl lg:m-0 box-border">
            <h1 className="text-3xl font-semibold mb-4">Contact</h1>
            <div className="flex justify-center flex-col gap-4 h-full lg:text-left text-center">
              <div className="flex gap-2 items-center">
                <a href="https://www.facebook.com/profile.php?id=100075852368955&mibextid=JRoKGi">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="size-6 text-[#737373] border-2 rounded-full p-1 hover:border-primary"
                  />
                </a>
                <p className="text-sm font-semibold text-[#737373]">Facebook</p>
              </div>
              <div className="flex gap-2 items-center">
                <a href="https://www.instagram.com/video_editorkz/">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="size-6 text-[#737373] border-2 rounded-full p-2  hover:border-primary"
                  />
                </a>
                <p className="text-sm  font-semibold text-[#737373]">
                  Instagram
                </p>
              </div>
              <div className="flex gap-2 items-center">
               <a  href="https://wa.me/923009053716?text=Hello%20there!"> 
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="size-6 text-[#737373] border-2 rounded-full p-2  hover:border-primary"
                />
                </a>
                <p className="text-sm  font-semibold text-[#737373]">
                  Whatsapp
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <a href="https://www.linkedin.com/in/muhammad-khalid-zarar-00647528b/">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="size-6 text-[#737373] border-2 rounded-full p-2  hover:border-primary"
                  />
                </a>
                <p className="text-sm  font-semibold text-[#737373]">
                  Linkedin
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="size-6 text-[#737373] border-2 rounded-full p-2  hover:border-primary"
                />
                <p className="text-sm font-semibold text-[#737373]">
                  info@khalidzarar.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

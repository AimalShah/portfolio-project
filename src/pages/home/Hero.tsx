import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitterSquare , faInstagram , faWhatsapp , faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function Hero() {
  return (
    <div className="max-w-6xl flex lg:flex-row justify-between gap-4 mx-auto">
      <div className="lg:mt-40 mt-10 lg:text-left text-center space-y-6 max-w-2xl mx-auto">
        <div className="flex lg:justify-start items-center gap-4 justify-center">
          <img
            src="https://reactfolio.tharindu.dev/logo.png"
            alt=""
            className="w-20 rounded-full"
          />
        </div>
        <div className="space-y-6">
          <h1 className="lg:text-6xl text-3xl font-bold">
          Transforming Raw Footage into Art with Passion and Skill
          </h1>
          <p className="lg:text-justify font-light dark:text-[#737373] lg:p-0 px-4 text-center">
            As a video editor, I transform raw footage into visually stunning
            narratives that captivate and inspire. With a passion for creativity
            and a meticulous eye for detail, I craft videos that tell compelling
            stories and elevate brands. My portfolio reflects my journey of
            blending innovation with aesthetics, showcasing a diverse range of
            projects that highlight my dedication to the art of video editing.
            Explore my work to see how I bring imagination to life through the
            power of visual storytelling.
          </p>
        </div>
        <div className="space-x-6 lg:text-left text-center">
          <a href="https://www.facebook.com/profile.php?id=100075852368955&mibextid=JRoKGi">
          <FontAwesomeIcon
            icon={faFacebook}
            className="size-6 text-[#737373] border-4 rounded-full p-2  hover:border-primary"
            />
          </a>
          <FontAwesomeIcon
            icon={faInstagram}
            className="size-6 text-[#737373] border-4 rounded-full p-2 hover:border-primary"
          />
          <a href="https://www.instagram.com/video_editorkz/">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="size-6 text-[#737373] border-4 rounded-full p-2 hover:border-primary"
            />
          </a>
          <a  href="https://wa.me/923009053716?text=Hello%20there!">
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="size-6 text-[#737373] border-4 rounded-full p-2 hover:border-primary"
          />
          </a>
        </div>
      </div>
      <div className="mt-40 w-10/12 lg:flex items-center justify-center md:hidden hidden">
        <img
          src="https://utfs.io/f/bcabfcb5-d9e2-4afe-aca6-5abb61c37717-cmsm2n.jpg"
          alt=""
          className="dark:saturate-0 dark:hover:saturate-50 w-80 rounded-lg rotate-3 border  border-white"
        />
      </div>
    </div>
  );
}

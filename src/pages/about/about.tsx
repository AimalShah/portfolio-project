import ContactInfo from "./ContactInfo";


export default function About() {
  return (
    <div className="max-w-6xl mx-auto flex lg:flex-row flex-col gap-8 lg:mt-40 mt-14 ">
      <div className="flex items-center justify-center">
        <img src="https://utfs.io/f/bcabfcb5-d9e2-4afe-aca6-5abb61c37717-cmsm2n.jpg" 
        className="size-20 rounded-full lg:hidden saturate-0"
        alt="" />
      </div>
      <div className="max-w-2xl space-y-4 lg:p-0 p-2">  
        <h1 className="text-3xl lg:text-start text-center lg:text-6xl font-semibold">I'm Khalid Zarar. I live in Pakistn , Where I design the future</h1>
        <p className="font-thin text-[#737373] lg:text-justify text-center ">I'm Muhammad Khalid Zarar, a documentary video editor with over two and a half years of continuous experience in the field. My editing workflow utilizes industry-standard tools such as Premiere Pro, After Effects, and Photoshop, along with the latest AI-powered editing software. I specialize in crafting compelling documentaries through the use of motion graphics, special effects, and sound design. If you're looking for exceptional video editing that elevates your project, feel free to get in touch!</p>
      </div>
      <div className="flex-grow w-full space-y-8 flex flex-col items-center">
        <img src="https://utfs.io/f/bcabfcb5-d9e2-4afe-aca6-5abb61c37717-cmsm2n.jpg" 
        alt=""
        className="lg:w-80 w-60 rounded-lg rotate-3 border  border-white lg:block hidden hover:saturate-50 saturate-0" />
        <ContactInfo />
       </div>
    </div>
  )
}

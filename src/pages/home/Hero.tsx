

export default function Hero() {
  return (
    <div className="max-w-6xl h-screen flex lg:flex-row justify-between gap-4 mx-auto">
      <div className="lg:mt-40 mt-10 lg:text-left text-center space-y-6 max-w-2xl">
          <div className="flex lg:justify-start justify-center">
            <img src="https://reactfolio.tharindu.dev/logo.png" alt="" 
            className="w-20 rounded-full"
            />
          </div>
          <div className="space-y-6">
            <h1 className="lg:text-6xl text-3xl  font-bold">
              Full-stack web and <br /> mobile app developer, and amateur astronaut.
            </h1>
            <p className="lg:text-justify font-thin text-[#737373] lg:p-0 px-4 text-center">
            I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.
            </p>
          </div>
        <div></div>
        </div>
        <div className="mt-40 w-10/12 lg:flex items-center justify-center  hidden">
          <img src="https://reactfolio.tharindu.dev/homepage.jpg" alt=""  className="w-80 rounded-lg rotate-3 border  border-white"/>
        </div>
    </div>
  )
}

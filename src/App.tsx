import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"
import Index from "./components/preLoader";
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          // const LocomotiveScroll = (await import('locomotive-scroll')).default
          // const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    <>
      <AnimatePresence mode='wait'>
        {isLoading && <Index />}
      </AnimatePresence>
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  )
}

export default App

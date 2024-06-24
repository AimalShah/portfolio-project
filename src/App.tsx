import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { Outlet , useLocation } from "react-router-dom"
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from "./components/preLoader";

function ScrollToTop() {
  const {pathname} = useLocation()
  useEffect(() => {
    window.scrollTo(0,0)
  } , [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
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
        {isLoading && <Preloader />}
      </AnimatePresence>
    <ScrollToTop/>
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  )
}

export default App

import { RouterProvider , createBrowserRouter , createRoutesFromElements , Route, } from 'react-router-dom'
import Home from './pages/home/home'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Blogs from './pages/blogs/blogs'
import NotFound from './pages/404'
import Projects from './pages/projects/projects'
import App from './App'
import SingleBlog from './pages/blogs/singleBlogPage'
import SingleProject from './pages/projects/singleProject'

export default function Router() {
    const router =  createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/' element={<App/>}>
        <Route path='' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='blogs' element={<Blogs/>} /> 
        <Route path='blogs/:id' element={<SingleBlog/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='projects' element={<Projects/>} />
        <Route path='projects/:id' element={<SingleProject/>} />
        </Route>
        <Route path='*' errorElement element={<NotFound/>} />
        </>
    )
    )

    return <RouterProvider router={router} />
}
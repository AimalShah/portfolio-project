import { ArticleCard } from "@/components/ArticleCard"
import { Separator } from "@/components/ui/separator"
import { useEffect, useState } from "react"
import { client } from "@/sanity/config"

export default function Blogs() {
  const [blogs, setBlogs] = useState([])
const [loading , setLoading] = useState<boolean>(true)
useEffect(() => {
  client.fetch(`*[_type == "post"] { slug , _id , publishedAt , title ,body } `)
    .then((data) => {
      setLoading(false)
      setBlogs(data)
      console.log("blogs : " + blogs)
    })
    .catch(err => console.log(err))
}, [])
if(loading) {
  return (<div className="grid place-items-center font-lg h-screen">
        <div className="size-20 rounded-full border-t-white border-r-white border-2 animate-spin">
        </div>
      </div>)
}
  return (
   <div className="lg:mt-40 mt-10 max-w-6xl mx-auto lg:p-0 p-4">
      <div className="flex gap-4 flex-wrap">
      {
      blogs.map((blog : any) => (
        <div key={blog._id} className="max-w-lg lg:min-w-[30rem] min-w-40">
        <ArticleCard title={blog.title} time={blog.publishedAt} body={blog.body.slice(0,1)} slug={blog.slug.current} />
        <Separator/>
        </div>
      ))
     }
      </div>
    </div>
  )
}

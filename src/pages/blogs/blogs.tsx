import { ArticleCard } from "@/components/ArticleCard"
import { Separator } from "@/components/ui/separator"
import { useEffect, useState } from "react"
import { client } from "@/sanity/config"

export default function Blogs() {
  const [blogs, setBlogs] = useState([])
const [loading , setLoading] = useState<boolean>(true)
useEffect(() => {
  client.fetch(`*[_type == "post"] { slug , _id , publishedAt , title ,body ,  mainImage {
  ...,
  asset->
}} `)
    .then((data) => {
      setLoading(false)
      setBlogs(data)
      console.log("blogs : " + blogs)
    })
    .catch(err => console.log(err))
}, [])
if(loading) {
  return <div className="max-w-xl mt-10 font-lg">Loading</div>
}
  return (
   <div className="mt-40 max-w-6xl mx-auto">
      <div className="flex gap-4 flex-wrap">
      {
      blogs.map((blog : any) => (
        <div key={blog._id} className="max-w-lg min-w-[30rem]">
        <ArticleCard title={blog.title} time={blog.publishedAt} body={blog.body.slice(0,1)} slug={blog.slug.current} />
        <Separator/>
        </div>
      ))
     }
      </div>
    </div>
  )
}

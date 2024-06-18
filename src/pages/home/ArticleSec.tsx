import { ArticleCard } from "@/components/ArticleCard"
import { Separator } from "@/components/ui/separator"
import { useEffect, useState } from "react"
import { client } from "@/sanity/config"


export default function ArticleSec() {
  const [blogs, setBlogs] = useState([])
  const [loading , setLoading] = useState<boolean>(true)
  useEffect(() => {
    client.fetch(`*[_type == "post"] { slug , _id , publishedAt , title ,body} `)
      .then((data) => {
        setLoading(false)
        setBlogs(data.splice(0,2))
        console.log("blogs : " + blogs)
      })
      .catch(err => console.log(err))
  }, [])
  if(loading) {
    return (
      <div className="lg:w-[38rem] flex justify-center items-center">
        <div className="size-10 rounded-full border-t-white border-r-white border-2 animate-spin" />
      </div>
    )
  }
  return (
    <div className="max-w-xl mt-10">
     {
      blogs.map((blog : any) => (
        <div key={blog._id}>
        <ArticleCard title={blog.title} time={blog.publishedAt} body={blog.body.slice(0,1)} slug={blog.slug.current} />
        <Separator/>
        </div>
      ))
     }
    </div>
  )
}

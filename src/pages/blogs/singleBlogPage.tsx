import { client } from "@/sanity/config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { PortableText } from "@portabletext/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
type Data = {
  title: string;
  body: any;
  slug: any;
  mainImage: any;
  publishedAt: any;
}
export default function SingleBlog() {
  const { id } = useParams();
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    client.fetch(`*[_type == "post" && slug.current == "${id}"][0] { _id, title, body, slug, publishedAt }`)
      .then((res) => {
        console.log(res)
        setData(res)
      })
      .catch(err => console.log(err))
  }, [])

  if (data === null) {
    return (
    <div className="grid place-items-center font-lg h-screen">
      <div className="size-20 rounded-full border-t-white border-r-white border-2 animate-spin" />
    </div>
    )
  }
  return (
    <div className="max-w-6xl mx-auto mt-20">
      <header className="pt-6 xl:pb-6 px-4 lg:px-0" >
        <div className="space-y-1 text-center">
          <div className="space-y-10">
            <div>
              <p className="text-base font-medium leading-6 text-teal-500">
                {data.publishedAt}
              </p>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl text-center  sm:leading-10 md:text-5xl md:leading-14">
              {data.title}
            </h1>
          </div>
        </div>
      </header>

      <div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none lg:px-0 px-5  pb-8 pt-10 dark:prose-invert prose-lg lg:text-start text-justify">
            <PortableText
              value={data.body}
            />
          </div>
        </div>
      </div>
      <div>
        <Link to={"/blogs"}>
          <Button variant={"outline"} size={"lg"}>
            Go Back
          </Button>
        </Link>
      </div>
    </div>
  )
}

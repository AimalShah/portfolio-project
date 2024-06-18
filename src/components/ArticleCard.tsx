import { Link } from "react-router-dom"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {PortableText} from '@portabletext/react'

export function ArticleCard({title , time , body , slug} : {title : string; time : string; body : any; slug : any;}) {
    return(
        <div className="space-y-4 hover:bg-[#737373]/20 rounded-lg my-5 p-2">
            <div className="border-l-2 ps-2 text-[#737373]">
                {time}
            </div>
            <div className="space-y-2">
                <h1 className="text-lg font-semibold">{title}</h1>
                <p className="text-wrap truncate text-sm text-[#737373]">
                    <PortableText
                    value={body}
                    />
                </p>
            </div>
            <div>
                <Link to={`/blogs/${slug}`} className="flex gap-2 items-center p-2" >
                Read Article
                <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>
        </div>
    )
}
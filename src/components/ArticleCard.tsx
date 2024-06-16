import { Link } from "react-router-dom"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function ArticleCard() {
    return(
        <div className="space-y-4 hover:bg-[#737373]/20 rounded-lg my-5 p-2">
            <div className="border-l-2 ps-2 text-[#737373]">
                5 may 2024
            </div>
            <div className="space-y-2">
                <h1 className="text-lg font-semibold">Heading</h1>
                <p className="truncate text-nowrap text-sm text-[#737373]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur, nam modi quibusdam veniam minima possimus molestias, similique velit repellat quam placeat. Quam ut consequuntur iusto quae, dolorum consequatur iure?</p>
            </div>
            <div>
                <Link to={"/"} className="flex gap-2 items-center">
                Read Article
                <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>
        </div>
    )
}
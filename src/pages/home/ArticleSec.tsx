import { ArticleCard } from "@/components/ArticleCard"
import { Separator } from "@/components/ui/separator"


export default function ArticleSec() {
  return (
    <div className="max-w-xl">
      <ArticleCard/>
      <Separator/>
      <ArticleCard />
    </div>
  )
}

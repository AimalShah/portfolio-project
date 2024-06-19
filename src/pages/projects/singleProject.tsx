import { useEffect} from "react";
import { useParams } from "react-router-dom";
import useYouTubeVideo from "@/utils/utils"; 
import { projectData } from "@/sanity/project"; 

export default function SingleProject() {
    const { id } = useParams<{ id: string }>(); 
    const { data, loading, error, getVideoDetails } = useYouTubeVideo();

    useEffect(() => {
        // Fetch project data based on id
        projectData.fetch(`*[_type == "Projects" && _id == "${id}"][0] { YotubeUrl }`)
            .then((res) => {
                const youtubeUrl = res.YotubeUrl;
                if (youtubeUrl) {
                    getVideoDetails(youtubeUrl);
                } else {
                    throw new Error("YouTube URL not found");
                }
            })
            .catch((err) => {
                console.error("Error fetching project data:", err);
            });
    }, [id]); 

    if (loading) {
        return <div>Fetching Data....</div>;
    }

    if (error) {
        return <div>{error.message}</div>; 
    }

    return (
        <div className="max-w-6xl mx-auto lg:mt-40 mt-10 space-y-10 p-4">
            <div className="relative pb-9/16">
                {data && (
                    <iframe
                    className="w-full mb-10 z-0"
                        width="1200"
                        height="400"
                        src={`https://www.youtube.com/embed/${data.id}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
        </div>
    );
}

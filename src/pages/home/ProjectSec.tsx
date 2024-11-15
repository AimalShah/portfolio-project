import ProjectCard from "@/components/ProjectCard";
import { projectData } from "@/sanity/project";
import useYouTubeVideo from "@/utils/utils";
import { useState, useEffect } from "react";
export default function ProjectsSec() {
  // @ts-ignore
  const { data, error, loading, getVideoDetails } = useYouTubeVideo();
  // @ts-ignore
  const [urls, setUrls] = useState<any>([]);
  const [projects, setProjects] = useState<any>(null);

  useEffect(() => {
    // Fetch project URLs
    projectData
      .fetch(`*[_type == "Projects"]`)
      .then((res) => {
        setUrls(res);
        // Map over URLs to get video details
        const fetchDetails = res.map(async (url: any) => {
          const details = await getVideoDetails(url.YotubeUrl);
          return { ...url, videoDetails: details };
        });

        // Wait for all video details to be fetched and set projects state
        Promise.all(fetchDetails)
          .then((results) => {
            setProjects(results);
          })
          .catch((err) => {
            console.log(err)
            alert(err);
          });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="lg:mt-20 mt-20 space-y-10 lg:text-start text-center ">
      <div>
        <h1 className="text-6xl font-bold">Projects</h1>
        <p className="lg:w-[60%] lg:p-0 p-2 mt-4 dark:text-[#737373] font-normal">
          {" "}
          I strive to push the boundaries of design, crafting visually
          compelling narratives that leave a lasting impression. Explore these
          works to witness how I merge innovation with meticulous attention to
          detail, aiming always to exceed expectations and inspire through every
          pixel and line..
        </p>
      </div>
      <div className="flex flex-wrap gap-10 lg:justify-start justify-center">
       {projects &&(
        projects.map((project : any , index : any) => {
          const title = project.videoDetails?.snippet?.title || "Untitled Project";
          const imageUrl = project.videoDetails?.snippet?.thumbnails?.high?.url ||
            "https://via.placeholder.com/150"; 

          return(
            <ProjectCard
              image={imageUrl}
              title={title}
              id={project._id}
              key={index}
            />
          )
        })
       )} 
        {error && <div>{error}</div>}
      </div>
    </div>
  );
}

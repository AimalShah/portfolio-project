import ProjectCard from "@/components/ProjectCard";
import ContactInfo from "../about/ContactInfo";
import { useEffect, useState } from "react";
import useYouTubeVideo from "@/utils/utils";
import { projectData } from "@/sanity/project";

export default function Projects() {
    // @ts-ignore
  const { data, error, loading, getVideoDetails } = useYouTubeVideo();
    // @ts-ignore
  const [urls, setUrls] = useState<any>([]);
  const [projects, setProjects] = useState<any>([]);

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
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto lg:mt-40 mt-14 lg:p-0 p-2 space-y-6">
      <h1 className="lg:text-6xl text-3xl lg:text-start text-center lg:max-w-4xl font-semibold">
        Things I’ve made trying to put my dent in the universe.
      </h1>
      <p className="font-light dark:text-[#737373] lg:text-justify text-center">
        I bring over two and a half years of continuous experience as a
        documentary video editor. My editing workflow utilizes industry-standard
        tools such as Premiere Pro, After Effects, and Photoshop, along with the
        latest AI-powered editing software. I specialize in crafting compelling
        documentaries through the use of motion graphics, special effects, and
        sound design. My goal is to elevate each project, ensuring a captivating
        and polished final product. If you're looking for exceptional video
        editing that brings your vision to life, feel free to get in touch!
      </p>
      <div className="flex flex-wrap gap-10 lg:justify-start justify-center">
        {loading ? (
          <div>Loading...</div>
        ) : (
          projects.map((project: any, index: number) => (
            <ProjectCard
              image={project.videoDetails.snippet.thumbnails.high.url}
              title={project.videoDetails.snippet.title}
              key={index}
              id={project._id}
            />
          ))
        )}
        {error && <div>{error}</div>}
      </div>
      <ContactInfo />
    </div>
  );
}

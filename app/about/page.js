import SocialMediaCard from "./SocialMediaCard";
import BioCard from "./BioCard";
import WorkCard from "./WorkCard";

export default function About() {
  return (
    <>
      <div className="flex gap-5 min-w-0">
        <div className="basis-2/3">
          <BioCard />
          <WorkCard />
        </div>
        <div className="basis-1/3">
          <SocialMediaCard />
        </div>
      </div>
    </>
  );
}

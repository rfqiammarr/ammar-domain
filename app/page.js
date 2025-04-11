import ImgCard from "./Home/imgCard";
import BioCard from "./Home/BioCard";
import ProjectCard from "./Home/ProjectCard";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-3">Hello!👋 I&apos;m Rifqi Ammar Ramadhan a Software developer</h2>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-10">from Indonesia</h2>
        <ImgCard />
        <div className="mt-6">
          <BioCard />
        </div>
      </div>
      <div className="gap-5 min-w-0 mt-20 py-15 px-14 w-full bg-gradient-to-r from-gray-50 from-15% via-sky-100 to-gray-50">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-3">My Project</h2>

        <div className="flex flex-row c items-start gap-5 mt-15 mb-20">
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className="flex justify-center">
          <button type="button" className="text-gray-900 border border-gray-500 hover:bg-black hover:text-white focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-1xl px-5 py-3 text-center">
            View More
          </button>
        </div>
      </div>
    </>
  );
}

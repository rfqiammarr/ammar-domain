import ImgCard from "./Home/imgCard";
import BioCard from "./Home/BioCard";

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
    </>
  );
}

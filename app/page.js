"use client";
import ImgCard from "./Home/imgCard";
import BioCard from "./Home/BioCard";
import ProjectCard from "./Home/ProjectCard";
import { InteractiveHoverButton } from "../components/magicui/interactive-hover-button";
import { Flex, Text, Card } from "@radix-ui/themes";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 max-w-7xl mx-auto py-8 md:py-12">
      <div className="text-center space-y-3 mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white">
          Hello!👋 I&apos;m Rifqi Ammar Ramadhan
        </h2>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white">
          a Software developer from Indonesia
        </h2>
      </div>
      
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
        <ImgCard />
      </div>
      
      <div className="w-full mt-6 md:mt-10">
        <BioCard />
      </div>
      
      <div className="mt-8 md:mt-12">
        <InteractiveHoverButton>
          See My Project 🚀
        </InteractiveHoverButton>
      </div>
    </main>
  );
}

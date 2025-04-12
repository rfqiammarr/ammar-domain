"use client";
import ImgCard from "./Home/imgCard";
import BioCard from "./Home/BioCard";
import ProjectCard from "./Home/ProjectCard";
import { InteractiveHoverButton } from "../components/magicui/interactive-hover-button";
import { Flex, Text, Card } from "@radix-ui/themes";

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

      {/* <hr className="border-t border-gray-400 my-30" /> */}

      <div className="gap-5 min-w-0 mt-30 ">
        <h2 className="ml-14 text-2xl font-semibold text-gray-700 dark:text-white">My Project</h2>
        <div className="flex flex-row justify-center items-start gap-5 mt-15 mb-5">
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className="flex justify-center">
          <InteractiveHoverButton>View More</InteractiveHoverButton>
        </div>
      </div>

      {/* <hr className="border-t border-gray-400 my-30" /> */}

      <div className="min-w-0 mt-25">
        <h2 className="ml-25 text-2xl font-semibold text-gray-700 dark:text-white">Blog</h2>
        <div className="flex justify-center">
          <Flex direction="column" gap="6" maxWidth="900px">
            <Card variant="surface">
              <Text as="div" size="5" weight="bold">
                Quick start Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, laudantium?
              </Text>
              <Text as="div" color="gray" size="3">
                Start building your next project in minutes Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, fuga. Lorem ipsum dolor sit amet.
              </Text>
              <Text as="div" color="gray" size="3">
                Start building your next project in minutes Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, fuga. Lorem ipsum dolor sit amet.
              </Text>
            </Card>
            <Card variant="surface">
              <Text as="div" size="5" weight="bold">
                Quick start Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, laudantium?
              </Text>
              <Text as="div" color="gray" size="3">
                Start building your next project in minutes Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, fuga. Lorem ipsum dolor sit amet.
              </Text>
              <Text as="div" color="gray" size="3">
                Start building your next project in minutes Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, fuga. Lorem ipsum dolor sit amet.
              </Text>
            </Card>
            <Card variant="surface">
              <Text as="div" size="5" weight="bold">
                Quick start Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, laudantium?
              </Text>
              <Text as="div" color="gray" size="3">
                Start building your next project in minutes Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, fuga. Lorem ipsum dolor sit amet.
              </Text>
              <Text as="div" color="gray" size="3">
                Start building your next project in minutes Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, fuga. Lorem ipsum dolor sit amet.
              </Text>
            </Card>
          </Flex>
        </div>
        <div className="flex justify-center mt-7">
          <InteractiveHoverButton>View More</InteractiveHoverButton>
        </div>
        {/* <hr className="border-t border-gray-400 my-30" /> */}
      </div>
    </>
  );
}

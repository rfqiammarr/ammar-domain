"use client";
import ImgCard from "./Home/imgCard";
import BioCard from "./Home/BioCard";
import ProjectCard from "./Home/ProjectCard";
import { InteractiveHoverButton } from "../components/magicui/interactive-hover-button";
import { Flex, Text, Card } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const featuredProject = {
    title: "HRIS System for PT Pertamina",
    description: "A comprehensive Human Resource Information System built with .NET Core and React, handling employee data, attendance, payroll, and performance management.",
    image: "/img/projects/highlight.jpg",
    tags: ["C#", ".NET Core", "React", "SQL Server"],
    github: "https://github.com/yourusername/hris-pertamina",
    demo: "https://hris-pertamina.com"
  };

  const latestPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js 14",
      excerpt: "Learn how to build modern web applications with Next.js 14, the latest version of the React framework.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Building Scalable APIs with .NET Core",
      excerpt: "Discover best practices for creating robust and scalable APIs using .NET Core and Entity Framework.",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Backend Development"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Hello!👋 I&apos;m Rifqi Ammar Ramadhan
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 dark:text-gray-300">
            a Software developer from Indonesia
          </h2>
        </div>
        
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
            <ImgCard />
          </div>
          
          <div className="w-full">
            <BioCard />
          </div>
        </div>

        {/* Featured Project Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Project</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64 md:h-80">
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {featuredProject.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {featuredProject.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {featuredProject.description}
              </p>
              <div className="flex gap-4">
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  View on GitHub
                </a>
                <a
                  href={featuredProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Posts Section */}
        <section className="mt-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Latest Posts</h2>
            <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
              View all posts
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {latestPosts.map((post) => (
              <article key={post.id} className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date} · {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group-hover:translate-x-1"
                  >
                    Read more
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-8 text-center">
          <Link href="/projects">
            <InteractiveHoverButton>
              Explore More Projects 📂
            </InteractiveHoverButton>
          </Link>
        </div>
      </div>
    </main>
  );
}

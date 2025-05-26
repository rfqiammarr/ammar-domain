"use client";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Here are some of my recent works
          </p>
        </div>

        {/* Highlighted Project */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-96">
              <Image
                src="/img/projects/highlight.jpg"
                alt="Highlighted Project"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  Featured
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                  Web Development
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                HRIS System for PT Pertamina
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                A comprehensive Human Resource Information System developed for PT Pertamina&rsquo;s non-ERP needs. 
                Built with .NET, C#, and MS SQL Server, this system streamlines HR processes and improves efficiency.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                  .NET
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                  C#
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                  MS SQL Server
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                  Blazor
                </span>
              </div>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/rifqiammar/hris-pertamina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View on GitHub
                </Link>
                <Link
                  href="/projects/hris-pertamina"
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/img/projects/project1.jpg"
                alt="Project 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                .NET Project Template Generator V.1
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A full-stack e-commerce platform built with React and Node.js
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                  Node.js
                </span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/img/projects/project2.jpg"
                alt="Project 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Task Management App
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A productivity app for managing tasks and projects
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                  Vue.js
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                  Firebase
                </span>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/img/projects/project3.jpg"
                alt="Project 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Weather Dashboard
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Real-time weather information dashboard
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                  API
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 
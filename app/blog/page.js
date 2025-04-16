"use client";
import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with Next.js 14",
      excerpt: "Learn how to build modern web applications with Next.js 14, the latest version of the React framework.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Web Development",
      image: "/img/blog/nextjs.jpg"
    },
    {
      id: 2,
      title: "Building Scalable APIs with .NET Core",
      excerpt: "Discover best practices for creating robust and scalable APIs using .NET Core and Entity Framework.",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Backend Development",
      image: "/img/blog/dotnet.jpg"
    },
    {
      id: 3,
      title: "Modern CSS Techniques You Should Know",
      excerpt: "Explore the latest CSS features and techniques that can help you build better user interfaces.",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "Frontend Development",
      image: "/img/blog/css.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Thoughts, stories and ideas about software development
          </p>
        </div>

        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.id}`} className="block">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {post.date} · {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </main>
  );
} 
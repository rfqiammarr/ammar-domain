import Link from "next/link";

const footer = () => {
  return (
    <>
      <footer className="rounded-lg m-4 dark:bg-gray-800 text-center mt-8">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <Link href="/">
              <p className="hover:underline"> </p>© 2025 Rifqi Ammar Ramadhan
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link href="/">
                <p className="hover:underline me-4 md:me-6">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="hover:underline me-4 md:me-6">About</p>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <p className="hover:underline me-4 md:me-6">Blog</p>
              </Link>
            </li>
            <li>
              <Link href="/project">
                <p className="hover:underline">Project</p>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default footer;

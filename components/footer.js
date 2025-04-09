import Link from "next/link";

const footer = () => {
  return (
    <>
      <footer className="m-4 dark:bg-gray-800 text-center mt-8">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://rifqiammarramadhan.com/" className="hover:underline">
              Rifqi Ammar Ramadhan
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="/" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <Link href="/about">
                <a className="hover:underline me-4 md:me-6">About</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className="hover:underline me-4 md:me-6">Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/project">
                <a className="hover:underline">Project</a>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default footer;

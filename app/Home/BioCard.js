import Image from "next/image";

const BioCard = () => {
  return (
    <div className="w-full max-w-5xl p-10 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
       <div className="flex-1">
         <p className="tracking-wide text-xl font-normal text-gray-700 dark:text-gray-400 mb-4 justify-center">
          I&apos;m Building scalable, efficient, and secure applications with cutting-edge technologies. Combining expertise in .NET, TypeScript, NextJs, Python, Blazor, VB.NET, Postgre and MS SQL Server to create innovative and impactful
          solutions.
        </p>
        <SocialMediaBox />
      </div>
    </div>
  );
};

const SocialMediaBox = () => {
  return (
    <div className="flex justify-center gap-4 md:gap-6 mt-4 md:mt-6">
      <a 
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200" 
        href="https://www.instagram.com/rfqiammarr/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <svg 
          className="w-7 h-7 md:w-8 md:h-8 text-gray-700 dark:text-white" 
          aria-hidden="true" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <a 
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200" 
        href="https://www.linkedin.com/in/rifqi-ammar-ramadhan-118a802a9/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <svg 
          className="w-7 h-7 md:w-8 md:h-8 text-gray-800 dark:text-white" 
          aria-hidden="true" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
            clipRule="evenodd"
          />
          <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
        </svg>
      </a>
    </div>
  );
};

export default BioCard;

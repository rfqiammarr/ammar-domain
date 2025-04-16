"use client";
import Image from 'next/image';

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 max-w-7xl mx-auto py-8 md:py-12">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-12">
          About Me
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative aspect-square w-full max-w-md mx-auto">
            <Image
              src="/img/profile/photo_Ammar.jpg"
              alt="Rifqi Ammar Ramadhan"
              fill
              className="rounded-lg object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Who Am I?
            </h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6">
              I am a passionate Software Developer with expertise in building scalable and efficient applications. 
              My journey in software development has been driven by a constant desire to learn and implement 
              cutting-edge technologies to solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                .NET
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                Python
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                PostgreSQL
              </span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                React
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
              Work Experience
            </h3>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400">
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                <div className="space-y-2">
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    .NET Developer
                  </h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    PT. Sigma Cipta Utama • December 2024 - Present
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Building .NET-based applications using C#, VB.NET, MS SQL Server, Blazor, and Syncfusion</li>
                    <li>Developing HRIS solutions for PT Pertamina&rsquo;s non-ERP needs</li>
                    <li>Implementing robust and scalable enterprise applications</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400">
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                <div className="space-y-2">
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Backend Developer
                  </h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    PT. Arlita Persada Indonesia • April 2024 - December 2024
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Developed backend systems using JavaScript, Python, and C# with PostgreSQL</li>
                    <li>Implemented API development and maintenance using Postman</li>
                    <li>Utilized ExpressJs, NodeJs, Odoo, Bootstrap, and Sequelize in development</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400">
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                <div className="space-y-2">
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Data Engineer
                  </h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    MahakaX (Placement in Bank Artha Graha International) • January 2024 - April 2024
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Managed ETL processes using Python, DBeaver, and SQL</li>
                    <li>Analyzed and transformed data using Pandas, Pyspark, and Jupyter Notebook</li>
                    <li>Worked with large datasets and spreadsheets for data processing</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400">
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                <div className="space-y-2">
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Full-Stack Developer
                  </h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    PT. Code Development Indonesia • September 2023 - December 2023
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Developed APIs and web applications using JavaScript, ExpressJs, NodeJs, ReactJS, and Redux</li>
                    <li>Managed database operations with PostgreSQL</li>
                    <li>Implemented version control using Git and GitHub</li>
                    <li>Utilized Trello for project management</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400">
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                <div className="space-y-2">
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Freelance Data Entry
                  </h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    PT. Kimia Farma • March 2022 - September 2023
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Input COVID-19 vaccination data into centralized web-based database</li>
                    <li>Managed patient information including names, vaccine types, and residential areas</li>
                    <li>Ensured data accuracy and integrity during transfer from Excel to system</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
              Education
            </h3>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-green-500 dark:border-green-400">
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-green-500 dark:bg-green-400 rounded-full"></div>
                <div className="space-y-2">
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Bachelor&rsquo;s Degree in Computer System
                  </h4>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    Gunadarma University • September 2015 - May 2020
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Studied both hardware and software aspects of computing</li>
                    <li>Gained hands-on experience with embedded systems and IoT</li>
                    <li>Worked with computer networking, Arduino, and various hardware components</li>
                    <li>Developed understanding of software-hardware interaction</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
              What I Do
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                  Full-Stack Development
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Building end-to-end applications using .NET, JavaScript, and modern frameworks.
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                  Data Engineering
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Processing and analyzing data using Python, SQL, and data science tools.
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                  Problem Solving
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Analyzing complex problems and implementing effective solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

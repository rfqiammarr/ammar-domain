const WorkCard = () => {
  return (
    <div className="mt-8 w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">My Journey</h5>
      <div className="flex items-center justify-between mb-4">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 2024 – Present</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">.NET Developer</h3>
            <h4 className="mt-2 text-sm font-semibold text-gray-500 dark:text-gray-400">PT. Sigma Cipta Utama</h4>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              My role involves building .NET-based applications—leveraging C#, VB.NET, MS SQL Server, Blazor, and Syncfusion to support non-ERP HRIS needs for PT Pertamina.
            </p>
          </li>

          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2024 – December 2024</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Backend Developer</h3>
            <h4 className="mt-2 text-sm font-semibold text-gray-500 dark:text-gray-400">PT. Arlita Persada Indonesia</h4>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Developing and supporting backend systems using JavaScript, Python, and C# PostgreSQL. API development and maintenance using Postman and implementing tech stacks including ExpressJs, NodeJs, Odoo, Bootstrap, and Sequelize.
            </p>
          </li>

          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2024 – April 2024</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Data Engineer</h3>
            <h4 className="mt-2 text-sm font-semibold text-gray-500 dark:text-gray-400">MahakaX (Placement in Bank Artha Graha International)</h4>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Responsible for ETL processes using Python, DBeaver, and SQL. Analyzing and transforming data using Pandas, Pyspark, and Jupyter Notebook and working with large datasets and spreadsheets for data processing.
            </p>
          </li>

          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2023 – December 2023</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Full-Stack Developer</h3>
            <h4 className="mt-2 text-sm font-semibold text-gray-500 dark:text-gray-400">PT. Code Development Indonesia</h4>
            <div className="mt-1 mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              <ul className="list-disc list-inside space-y-1">
                <li>Supporting and developing APIs and web applications</li>
                <li>Utilizing Postman for API testing, Postgres for database management</li>
                <li>Programming in JavaScript, using ExpressJs, NodeJs, ReactJS, Redux, and Bootstrap</li>
                <li>Using Git, GitHub, and Trello for version control and project management</li>
              </ul>
            </div>
          </li>

          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022 – September 2023</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Freelance Data Entry</h3>
            <h4 className="mt-2 text-sm font-semibold text-gray-500 dark:text-gray-400">PT. Kimia Farma</h4>
            <p className="mt-1 mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              I was responsible for inputting COVID-19 vaccination data into a centralized web-based database. The data included details such as patient names, vaccine types, residential areas, and affiliated companies. My role involved
              accurately transferring information from Excel spreadsheets to the system while ensuring proper categorization and data integrity.
            </p>
          </li>

          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2015 – May 2020</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor Degree, Computer System</h3>
            <h4 className="mt-2 text-sm font-semibold text-gray-500 dark:text-gray-400">Gunadarma University</h4>
            <p className="mt-1 mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              I studied Computer Systems at Gunadarma University, where I explored both hardware and software aspects of computing. During my studies, I gained hands-on experience with embedded systems, IoT, computer networking, Arduino,
              and various hardware components, which helped me build a solid understanding of how software interacts with physical devices.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default WorkCard;

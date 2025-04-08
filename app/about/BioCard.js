const BioCard = () => {
  return (
    <div className="w-full max-w-5xl p-10 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="flex-1">
        <h2 className="text-5xl font-semibold text-gray-900 dark:text-white mb-10 text-center">I'm Rifqi Ammar Ramadhan a Software developer from Indonesia</h2>
        <div className="">
          <p className="tracking-wide text-xl/8 font-normal text-gray-700 dark:text-gray-400 mb-4">
            Hello! 👋 I’m Ammar, a Software Developer based in Bekasi 🇮🇩. I specialize in .NET development, and over the years I've built solid experience with technologies like C#, Blazor, MS SQL Server, PostgreSQL, VB.NET, Next.js,
            Python, and JavaScript. Always eager to learn, solve real-world problems, and build clean, scalable software.
          </p>
          <p className="tracking-wide text-xl/8 font-normal text-gray-700 dark:text-gray-400 mb-4">
            I currently work in a hybrid setup (remote and in-office) as a Software Developer at{" "}
            <a className="underline text-emerald-700 hover:text-blue-500" href="https://www.scu.co.id/">
              PT. Sigma Cipta Utama
            </a>
            , a subsidiary of{" "}
            <a className="underline text-emerald-700 hover:text-blue-500" href="https://www.elnusa.co.id/">
              PT Elnusa Tbk
            </a>
            . My role involves building .NET-based applications—leveraging C#, VB.NET, MS SQL Server, Blazor, and Syncfusion—to support non-ERP HRIS needs for{" "}
            <a className="underline text-emerald-700 hover:text-blue-500" href="https://www.elnusa.co.id/">
              PT Pertamina
            </a>
            .
          </p>
          <p className="tracking-wide text-xl/8 font-normal text-gray-700 dark:text-gray-400 mb-4">
            I’m always open to collaboration, learning from others, or exploring exciting new opportunities. If you’re working on something meaningful—or just want to connect—feel free to reach out! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioCard;

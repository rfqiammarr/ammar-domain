export const company = {
  name: "Radantix",
  domain: "radantix.com",
  tagline: "Hi, I'm Ammar",
  description:
    "I build applications that scale — web apps, APIs, and cloud-ready systems, shipped under Radantix from idea to production.",
};

export const services = [
  {
    title: "Web Applications",
    description:
      "Modern, responsive product interfaces built with Nuxt.js, Next.js, and Blazor — fast, accessible, and ready to grow.",
  },
  {
    title: "Backend & APIs",
    description:
      "Secure .NET and Node.js services with clean architecture, authentication, and integrations that stay maintainable.",
  },
  {
    title: "Cloud & Delivery",
    description:
      "Azure-ready deployments, CI/CD pipelines, and observability so your product ships reliably and keeps running.",
  },
];

export const approach = [
  {
    step: "01",
    title: "Discover",
    description: "Clarify goals, users, and constraints so the right thing gets built from day one.",
  },
  {
    step: "02",
    title: "Build",
    description: "Ship in focused iterations with clean code, solid architecture, and continuous feedback.",
  },
  {
    step: "03",
    title: "Launch",
    description: "Deploy with confidence — monitored, documented, and ready for the next milestone.",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["JavaScript", "TypeScript", "Nuxt.js", "Next.js", "Redux", "Blazor"],
  },
  {
    title: "Backend",
    items: [".NET", "C#", "ASP.NET Core", "Node.js", "Express", "Python", "REST APIs"],
  },
  {
    title: "Data & Cloud",
    items: ["PostgreSQL", "MS SQL Server", "MongoDB", "Redis", "Azure", "AWS", "Docker"],
  },
  {
    title: "DevOps & More",
    items: ["CI/CD", "Kafka", "RabbitMQ", "ML.NET", "Jest"],
  },
];

export const skills = skillGroups.flatMap((group) => group.items);

export const projects = [
  {
    slug: "Hotel Management",
    title: "Hotel Management Frontend",
    description: "Hotel management frontend with Vite and JavaScript, ISR, and API routes integration.",
    tech: ["Vite", "JavaScript", "Nuxt.js", "CI/CD"],
    imageUrl: "/img/Project/HotelManagementFrontend/1.png",
    images: [
      "/img/Project/HotelManagementFrontend/1.png",
      "/img/Project/HotelManagementFrontend/2.png",
      "/img/Project/HotelManagementFrontend/3.png",
    ],
    demoUrl: "https://stayhub-client.vercel.app",
    repoUrl: "https://github.com/rfqiammarr/stayhub-client",
  },
  {
    slug: "realtime-dashboard",
    title: "Realtime Monitoring Dashboard",
    description: "Interactive dashboard built with Blazor and SignalR, caching with Redis, and background jobs.",
    tech: ["Blazor", ".NET", "SignalR", "Redis", "Docker"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    ],
    demoUrl: "https://example.com/realtime-dashboard",
    repoUrl: "https://github.com/ammar/realtime-dashboard",
  },
  {
    slug: "mlnet-fraud",
    title: "Fraud Detection Service",
    description: "ML.NET model service with Python preprocessing, streaming events via Kafka, exposing gRPC/REST endpoints.",
    tech: ["ML.NET", "C#", "Python", "Kafka", "gRPC"],
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
    ],
    demoUrl: "https://example.com/mlnet-fraud",
    repoUrl: "https://github.com/ammar/mlnet-fraud",
  },
  {
    slug: "data-pipeline",
    title: "Data Pipeline Service",
    description: "Reliable data ingestion with RabbitMQ and PostgreSQL, containerized with Docker and observed with Grafana.",
    tech: ["Node.js", "RabbitMQ", "PostgreSQL", "Docker", "DevOps"],
    imageUrl: "https://images.unsplash.com/photo-1551281049-5a02727c622d?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551281049-5a02727c622d?q=80&w=1200&auto=format&fit=crop",
    ],
    demoUrl: "https://example.com/data-pipeline",
    repoUrl: "https://github.com/ammar/data-pipeline",
  },
];

export const founder = {
  name: "Rifqi Ammar Ramadhan",
  shortName: "Ammar",
  role: "Software Engineer",
  photo: "/img/Hero/photo_Ammar.jpg",
  bio: "I'm Ammar. I build clean, scalable web apps with Nuxt.js and .NET under Radantix — turning complex problems into simple, reliable products.",
  highlights: [
    {
      step: "01",
      title: "Clarify",
      description: "Align on goals and constraints first, so every build starts with a clear direction.",
    },
    {
      step: "02",
      title: "Simplify",
      description: "Prefer clean architecture and maintainable code over complexity that slows teams down.",
    },
    {
      step: "03",
      title: "Ship",
      description: "Deliver in focused iterations, then refine with real feedback from production.",
    },
  ],
};

export const contact = {
  email: "rifqiammarramadhan103@gmail.com",
  linkedin: "https://www.linkedin.com/in/rifqi-ammar-ramadhan-118a802a9/",
  github: "https://github.com/rfqiammarr",
  instagram: "https://www.instagram.com/rfqiammarr/",
  twitter: "https://twitter.com/rfqiammarr",
};

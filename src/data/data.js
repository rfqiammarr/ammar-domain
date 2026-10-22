export const company = {
  name: "Danzi",
  domain: "radantix.com",
  tagline: "Hi, I'm Danzi",
  description: "I build web apps, APIs, and cloud systems — taking ideas from the first sketch all the way to production. I focus on clean code, thoughtful design, and software that's built to last.",
};

export const services = [
  {
    title: "Web Applications",
    description: "Fast, responsive interfaces with Nuxt.js, Next.js, and Blazor.",
  },
  {
    title: "Backend & APIs",
    description: "Secure, maintainable services with .NET and Node.js.",
  },
  {
    title: "Cloud & Delivery",
    description: "Azure deployments, CI/CD, and monitoring that keep things running.",
  },
];

export const approach = [
  {
    step: "01",
    title: "Discover",
    description: "Understand the goal, the users, and the limits.",
  },
  {
    step: "02",
    title: "Build",
    description: "Ship in small iterations with clean code.",
  },
  {
    step: "03",
    title: "Launch",
    description: "Deploy, monitor, and keep improving.",
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
    description: "Hotel management frontend with ISR and API route integration.",
    tech: ["Vite", "JavaScript", "Nuxt.js", "CI/CD"],
    imageUrl: "/img/Project/HotelManagementFrontend/1.png",
    images: ["/img/Project/HotelManagementFrontend/1.png", "/img/Project/HotelManagementFrontend/2.png", "/img/Project/HotelManagementFrontend/3.png"],
    demoUrl: "https://stayhub-client.vercel.app",
    repoUrl: "https://github.com/rfqiammarr/stayhub-client",
  },
  {
    slug: "realtime-dashboard",
    title: "Realtime Monitoring Dashboard",
    description: "Live dashboard with Blazor and SignalR, Redis caching, and background jobs.",
    tech: ["Blazor", ".NET", "SignalR", "Redis", "Docker"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"],
    demoUrl: "https://example.com/realtime-dashboard",
    repoUrl: "https://github.com/ammar/realtime-dashboard",
  },
  {
    slug: "mlnet-fraud",
    title: "Fraud Detection Service",
    description: "ML.NET model fed by Kafka events, served over gRPC and REST.",
    tech: ["ML.NET", "C#", "Python", "Kafka", "gRPC"],
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop"],
    demoUrl: "https://example.com/mlnet-fraud",
    repoUrl: "https://github.com/ammar/mlnet-fraud",
  },
  {
    slug: "data-pipeline",
    title: "Data Pipeline Service",
    description: "Data ingestion with RabbitMQ and PostgreSQL, running in Docker and monitored with Grafana.",
    tech: ["Node.js", "RabbitMQ", "PostgreSQL", "Docker", "DevOps"],
    imageUrl: "https://images.unsplash.com/photo-1551281049-5a02727c622d?q=80&w=1200&auto=format&fit=crop",
    images: ["https://images.unsplash.com/photo-1551281049-5a02727c622d?q=80&w=1200&auto=format&fit=crop"],
    demoUrl: "https://example.com/data-pipeline",
    repoUrl: "https://github.com/ammar/data-pipeline",
  },
];

export const founder = {
  name: "Rifqi Ammar Ramadhan",
  shortName: "Danzi",
  role: "Software Engineer",
  photo: "/img/Hero/photo_Ammar.jpg",
  bio: "I'm a software engineer who builds clean, scalable web apps with React.js and .NET. I work across the stack — from responsive interfaces to secure APIs and cloud deployments on Azure. I care about simple, maintainable code and products that feel effortless to use. My goal is always the same: turn complex problems into reliable software that's ready for production.",
  highlights: [
    {
      step: "01",
      title: "Clarify",
      description: "Agree on goals and constraints before writing code.",
    },
    {
      step: "02",
      title: "Simplify",
      description: "Choose clean, maintainable code over clever complexity.",
    },
    {
      step: "03",
      title: "Ship",
      description: "Release in small steps and improve with real feedback.",
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

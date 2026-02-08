import {
  UploadIcon,
  ZapIcon,
  VideoIcon,
  CodeIcon,
  SmartphoneIcon,
  ServerIcon,
  SearchIcon,
  ShieldIcon,
  BarChartIcon,
  UsersIcon,
  PaletteIcon,
  CloudIcon,
  TestTubeIcon,
  MessageSquareIcon,
  SettingsIcon,
  GlobeIcon,
  DatabaseIcon,
} from "lucide-react";

export const featuresData = [
  {
    icon: <UsersIcon className="w-6 h-6" />,
    title: "Discovery & Strategy",
    desc: "We analyze your business goals, competitors, and users to define a clear product roadmap and digital strategy.",
  },
  {
    icon: <PaletteIcon className="w-6 h-6" />,
    title: "UI / UX Design",
    desc: "Intuitive, user-focused designs that improve usability, engagement, and conversion rates across platforms.",
  },
  {
    icon: <CodeIcon className="w-6 h-6" />,
    title: "Web Development",
    desc: "High-performance, responsive websites built with modern frameworks and SEO-friendly architecture.",
  },
  {
    icon: <SmartphoneIcon className="w-6 h-6" />,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications for Android and iOS with smooth UX and scalability.",
  },
  {
    icon: <ServerIcon className="w-6 h-6" />,
    title: "Backend & API Development",
    desc: "Secure, scalable backend systems with REST and GraphQL APIs designed for long-term growth.",
  },
  {
    icon: <DatabaseIcon className="w-6 h-6" />,
    title: "Database Architecture",
    desc: "Efficient database design, optimization, and migration for reliable and high-speed data handling.",
  },
  {
    icon: <CloudIcon className="w-6 h-6" />,
    title: "Cloud & DevOps",
    desc: "Cloud infrastructure, CI/CD pipelines, containerization, and scalable deployment solutions.",
  },
  {
    icon: <SearchIcon className="w-6 h-6" />,
    title: "SEO & Digital Marketing",
    desc: "Search optimization, content strategy, and digital campaigns to increase visibility and traffic.",
  },
  {
    icon: <ShieldIcon className="w-6 h-6" />,
    title: "Cybersecurity",
    desc: "Security audits, penetration testing, data protection, and compliance with industry standards.",
  },
  {
    icon: <BarChartIcon className="w-6 h-6" />,
    title: "Data Analytics & BI",
    desc: "Business intelligence dashboards and analytics to turn data into actionable insights.",
  },
  {
    icon: <TestTubeIcon className="w-6 h-6" />,
    title: "QA & Testing",
    desc: "Automated and manual testing to ensure reliability, performance, and bug-free releases.",
  },
  {
    icon: <MessageSquareIcon className="w-6 h-6" />,
    title: "AI & Chatbot Solutions",
    desc: "AI-powered chatbots, workflow automation, and intelligent systems for smarter operations.",
  },
  {
    icon: <VideoIcon className="w-6 h-6" />,
    title: "E-commerce Solutions",
    desc: "Custom e-commerce platforms with secure payments, inventory systems, and integrations.",
  },
  {
    icon: <UploadIcon className="w-6 h-6" />,
    title: "CMS Development",
    desc: "Custom and headless CMS solutions for scalable content management and publishing.",
  },
  {
    icon: <GlobeIcon className="w-6 h-6" />,
    title: "SaaS Product Development",
    desc: "End-to-end SaaS solutions including MVPs, subscriptions, dashboards, and scaling strategies.",
  },
  {
    icon: <SettingsIcon className="w-6 h-6" />,
    title: "Maintenance & Support",
    desc: "Ongoing support, monitoring, updates, and performance optimization after launch.",
  },
  {
    icon: <ZapIcon className="w-6 h-6" />,
    title: "Digital Transformation",
    desc: "Modernizing legacy systems and automating workflows to drive digital growth.",
  },
];
export const plansData = [
  {
    id: "starter",
    name: "Startup",
    price: "$4,999",
    desc: "Ideal for MVPs and early-stage startups",
    billing: "Project-based",
    features: [
      "MVP or basic website/app",
      "UI/UX design (up to 5 screens)",
      "Responsive layout",
      "Basic SEO setup",
      "3 months support",
      "1 revision cycle",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "$9,999",
    desc: "For growing businesses and startups",
    billing: "Monthly / Project",
    popular: true,
    features: [
      "Everything in Startup",
      "Custom web or mobile app",
      "Advanced UI/UX design",
      "Backend & API development",
      "Cloud deployment",
      "SEO & performance optimization",
      "6 months priority support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$24,999+",
    desc: "Scalable solutions for large organizations",
    billing: "Custom contract",
    features: [
      "Everything in Growth",
      "Dedicated development team",
      "Full-stack architecture",
      "Advanced cloud & DevOps",
      "AI / ML integrations",
      "Enterprise-grade security",
      "24/7 dedicated support",
      "Custom SLA & roadmap",
    ],
  },
];

export const faqData = [
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on scope. MVPs take 4–8 weeks, mid-scale projects 2–4 months, and enterprise solutions 4–8+ months.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "We work with React, Next.js, Node.js, Python, React Native, Flutter, AWS, Docker, and modern cloud stacks.",
  },
  {
    question: "How do you ensure quality?",
    answer:
      "Through agile development, code reviews, automated testing, QA processes, and continuous client feedback.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we offer flexible support plans including maintenance, monitoring, and feature enhancements.",
  },
  {
    question: "Can you collaborate with in-house teams?",
    answer:
      "Absolutely. We integrate smoothly with existing teams using tools like Slack, Jira, and Git.",
  },
];

export const technologiesData = [
  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Python",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Django",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    name: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Firebase",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Docker",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Kubernetes",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
  {
    name: "GraphQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },

  {
    name: "WordPress",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
];

export const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Web Development", url: "/services" },
      { name: "Mobile Apps", url: "/services" },
      { name: "UI/UX Design", url: "/services" },
      { name: "Digital Marketing", url: "/services" },
      { name: "Cloud Solutions", url: "/services" },
      { name: "AI/ML Development", url: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", url: "/" },
      { name: "Our Work", url: "/" },
      { name: "Careers", url: "/" },
      { name: "Blog", url: "/" },
      { name: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", url: "/" },
      { name: "Terms of Service", url: "/" },
      { name: "Cookie Policy", url: "/" },
      { name: "GDPR Compliance", url: "/" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Twitter", url: "/" },
      { name: "LinkedIn", url: "/" },
      { name: "GitHub", url: "/" },
      { name: "Dribbble", url: "/" },
      { name: "Behance", url: "/" },
    ],
  },
];

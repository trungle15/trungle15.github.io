import { ParabolLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { decodeFormState } from "next/dist/server/app-render/entry-base";
import { Description } from "@radix-ui/react-dialog";

export const RESUME_DATA = {
  name: "Trung Le",
  initials: "TL",
  location: "Grinnell, IA",
  locationLink: "https://www.google.com/maps/place/Grinnell",
  about:
    "Grinnell '25. Data Scientist & ML Engineer. Currently playing around with Transformers and LLMs.",
  summary: "I am proficient in Python and ML tools.",
  avatarUrl:
    "https://media.licdn.com/dms/image/C5603AQFgxpUFw7RTLQ/profile-displayphoto-shrink_800_800/0/1651910104349?e=1721260800&v=beta&t=Nb8c1r2MaVwz81rXdVdwKwEuH5YYQRN_y9WxTk6IWGE",
  personalWebsiteUrl: "https://trungle15.github.io/",
  contact: {
    email: "letrung@grinnell.edu",
    tel: null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/trungle15",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/thanhtrung-le/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Grinnell College",
      degree:
        "Bachelor's Degree in Computer Science and Economics with a concentration in Statistics",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Nobious Automation",
      link: "https://nobious.com",
      badges: ["Grinnell, IA"],
      title: "Data Scientist / AI Engineer",
      logo: ParabolLogo,
      start: "2022",
      end: null,
      description: [
        "I led development of end-to-end construction cost forecasting system on AWS Sagemaker, utilizing embedding model and Transfomers. ",
        "Technologies: AWS Sagemaker, AWS Bedrock, Microsoft SQL Server, Scikit-Learn, PyTorch, HuggingFace.",
      ],
    },
    {
      company: "Grinnell College, Department of Statistics",
      link: "https://grinnell.edu",
      badges: ["Grinnell, IA"],
      title: "ML Research Assistant",
      start: "2022",
      end: "2023",
      description: null,
    },
    {
      company: "Galaxy FinX",
      link: "https://galaxyfinx.com/",
      badges: ["Remote"],
      title: "Product Data Analyst",
      start: "2022",
      end: "2023",
      description: null,
    },
    {
      company: "Boston Consulting Group",
      link: "https://bcg.com",
      badges: ["Remote"],
      title: "Business Analyst Intern",
      start: "2022",
      end: "2023",
      description: null,
    },
  ],
  frameworks: [
    "PyTorch",
    "LangChain",
    "HuggingFace",
    "Node.js",
    "Next.js",
    "MSSQL",
    "Flask",
  ],
  languages: [
    "Python",
    "C/C++",
    "Java",
    "R",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "Bash",
  ],
  technologies: ["AWS", "Docker", "Linux", "REST APIs"],
  projects: [
    {
      title: "TSC for Cannabis-impaired Driving",
      techStack: ["Python", "Fast.ai", "PyTorch"],
      description:
        "Application of deep learning methods to detect cannabis-impaired driving from mechanical inputs",
      link: {
        label: "github.com",
        href: "https://remiller1450.github.io/TRB24_slides.pdf",
      },
    },
  ],
} as const;

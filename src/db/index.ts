// Nav
import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineCog,
} from "react-icons/hi2";
import { MdOutlineDashboard } from "react-icons/md";
import { RiShieldUserLine } from "react-icons/ri";
import {
  PiBuildings,
} from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";

export const superUserNavdata = [
  { path: "/dashboard", label: "Dashboard", icon: MdOutlineDashboard },
  { path: "/contact", label: "Contact", icon: RiShieldUserLine },
  { path: "/organizations", label: "Organizations", icon: PiBuildings },
  {
    path: "/reports",
    label: "Reports",
    icon: HiOutlineDocumentText,
  },
  {
    path: "/analytics",
    label: "Analytics",
    icon: IoStatsChart,
  },
  {
    path: "/audit",
    label: "Audit Trail",
    icon: HiOutlineClipboardDocumentCheck,
  },
];
import { SiGoogleclassroom } from "react-icons/si";
import { BsCartCheck } from "react-icons/bs";
import { FaRegWindowRestore } from "react-icons/fa6";
export const adminNavData = [
  { path: "/admin/members", label: "Members", icon: FaPeopleGroup },
  { path: "/admin/classes", label: "Classes", icon: SiGoogleclassroom },
  { path: "/admin/orders", label: "Orders", icon: BsCartCheck },
  { path: "/admin/stores", label: "Stores", icon: FaRegWindowRestore },
  { path: "/admin/settings", label: "Settings",icon:  HiOutlineCog,},
  { path: "/admin/employees", label: "Employees", icon: HiOutlineUsers },
];

// import img1 from "../assets/images/productImg.svg";
import cardImage from "../assets/images/old_tingo/card-amage.png";
import gptIcon from "../assets/icons/gpticon.png";
import radio from "../assets/icons/radioIcon.png";
import tvIcon from "../assets/icons/tvIcon.png";
import express from "../assets/icons/expressIcon.png";
import blockchain from "../assets/icons/blockchainIcon.png";
import community from "../assets/icons/communityIcon.png";
import lightIcon from "../assets/icons/lightning.png";
import game from "../assets/icons/game.png";
import assistant from "../assets/icons/assistant.png";



export type Product = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  tryItLink: string;
  demoLink: string;
  tag: boolean;
  lightIcon?: string;
};

// db
export const productsDb: Product[] = [
  {
    id: 1,
    title: "TingoGPT",
    description: "Unleash AI creativity - Generate text, voice, videos and images instantly!",
    imageSrc: gptIcon,
    lightIcon: lightIcon,
    tryItLink: "/gpt-home",
    demoLink: "/gpt-home",
    tag: true
  },
  {
    id: 2,
    title: "Tingo AI Radio",
    description: "Your AI curated music and podcast experience.",
    imageSrc: radio,
    lightIcon: lightIcon,
    tryItLink: "/radio",
    demoLink: "/radio",
    tag: true
  },
  {
    id: 3,
    title: "Tingo AI TV",
    description: "Next-generation entertainment, powered by AI",
    imageSrc: tvIcon,
    lightIcon: lightIcon,
    tryItLink: "/tingotv",
    demoLink: "/tingotv",
    tag: false
  },
  {
    id: 4,
    title: "Tingo Express",
    description: "Fast, reliable deliveries - Anytime, anywhere",
    imageSrc: express,
    lightIcon: lightIcon,
    tryItLink: "/tingoexp",
    demoLink: "/tingoexp",
    tag: false
  },
  {
    id: 5,
    title: "Tingo Blockchain",
    description: "Seamless crypto transactions for the modern world.",
    imageSrc: blockchain,
    lightIcon: lightIcon,
    tryItLink: "/tingoblockchain",
    demoLink: "/tongoblockchain",
    tag: false
  },
  {
    id: 6,
    title: "Tingo Community",
    description: "A thriving hub for users to connect, learn and grow in the AI and blockchain space.",
    imageSrc: community,
    lightIcon: lightIcon,
    tryItLink: "/tingocom",
    demoLink: "/tingocom",
    tag: false
  },
];


export type Products = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  tryItLink: string;
  demoLink: string;
  tag?: boolean;
  lightIcon?: string;
};

export const tingoProductsDb: Products[] = [
  {
    id: 1,
    title: "TingoGPT",
    description: "Unleash AI creativity - Generate text, voice, videos and images instantly!",
    imageSrc: gptIcon,
    lightIcon: lightIcon,
    tryItLink: "/studio",
    demoLink: "/studio",
    tag: true,
  },
  {
    id: 2,
    title: "Tingo AI Radio",
    description: "Your AI curated music and podcast experience.",
    imageSrc: radio,
    lightIcon: lightIcon,
    tryItLink: "/text-to-speech",
    demoLink: "/text-to-speech",
    tag: true,
  },
  {
    id: 3,
    title: "Tingo AI TV",
    description: "Next-generation entertainment, powered by AI",
    imageSrc: tvIcon,
    lightIcon: lightIcon,
    tryItLink: "/text-to-speech",
    demoLink: "/text-to-speech",
    tag: false,
  },
  {
    id: 4,
    title: "Tingo Express",
    description: "Fast, reliable deliveries - Anytime, anywhere",
    imageSrc: express,
    lightIcon: lightIcon,
    tryItLink: "/text-to-speech",
    demoLink: "/text-to-speech",
    tag: false,
  },
  {
    id: 5,
    title: "Tingo Blockchain",
    description: "Seamless crypto transactions for the modern world.",
    imageSrc: blockchain,
    lightIcon: lightIcon,
    tryItLink: "/text-to-speech",
    demoLink: "/text-to-speech",
    tag: false,
  },
  {
    id: 6,
    title: "Tingo Community",
    description: "A thriving hub for users to connect, learn and grow in the AI and blockchain space.",
    imageSrc: community,
    lightIcon: lightIcon,
    tryItLink: "/text-to-speech",
    demoLink: "/text-to-speech",
    tag: false,
  },
  {
    id: 7,
    title: "Tingo AI Games",
    description: "AI-powered gaming that adapts to your playstyle.",
    imageSrc: game,
    lightIcon: lightIcon,
    tryItLink: "/text-to-speech",
    demoLink: "/text-to-speech",
    tag: false,
  },
  {
    id: 8,
    title: "Tingo AI Agent",
    description: "A smart and digital assistant for seamless automation",
    imageSrc: assistant,
    lightIcon: lightIcon,
    tryItLink: "/text-to-speech",
    demoLink: "/text-to-speech",
    tag: false,
  },
];



export type ProductCategory = {
  category: string;
  products: Product[];
};

export const productsDb2: ProductCategory[] = [
  {
    category: "Generative AI",
    products: [
      {
        id: 1,
        title: "Tingo AI Studio",
        description: "Generate cool music instrumentals using our text-to-instrumental model.",
        imageSrc: cardImage,
        lightIcon: lightIcon,
        tryItLink: "/studio",
        demoLink: "/studio",
        tag: true,
      },
      // {
      //   id: 3,
      //   title: "Text to speech model",
      //   description: "Summarize long articles and documents with AI.",
      //   imageSrc: img1,
      //   tryItLink: "/studio",
      //   demoLink: "/studio",
      //   tag: "Coming Soon",
      // },
    ],
  },
  
];

// musics

import mus1 from "../assets/music/jazz1.mp3";
import mus2 from "../assets/music/jazzy-slow-background.mp3";
import mus3 from "../assets/music/smooth-jazz.mp3";
import mus4 from "../assets/music/Asake_-_Peace_Be_Unto_You_Instrumental_.mp3";
import mus5 from "../assets/music/asake-active-instrumental.mp3";
import mus6 from "../assets/music/victony-ft-asake-stubborn_instrumental.mp3";



export const musicList: string[] = [mus4, mus5, mus6, mus1, mus2, mus3];


// radio
import fem from "../assets/images/old_tingo/fem.jpg"
import sungba from "../assets/images/old_tingo/sungba.jpg"
import essence from "../assets/images/old_tingo/essence.jpg"
import koroba from "../assets/images/old_tingo/Tiwa-Savage-Koroba-1.jpg"
import lastlast from "../assets/images/old_tingo/last-last.jpg"
import pbuy from "../assets/images/old_tingo/pbuy.jpeg"
interface Track {
  id: number;
  title: string;
  artist: string;
  status: "Active" | "Upcoming" | "Ended";
  airingTime: string; // e.g., "09:12 WAT"
  coverImage: string;
  timeStamp: string;
}

export const playlistData: Track[] = [
  // Today: At least 4 items
  {
    id: 1,
    title: "Fem",
    artist: "Davido",
    status: "Active",
    airingTime: "09:30 WAT",
    coverImage: fem,
    timeStamp: "2024-11-23T09:30:00Z", // Today
  },
  {
    id: 2,
    title: "Sungba (Remix)",
    artist: "Asake ft. Burna Boy",
    status: "Upcoming",
    airingTime: "11:15 WAT",
    coverImage: sungba,
    timeStamp: "2024-11-23T11:15:00Z", // Today
  },
  {
    id: 3,
    title: "Essence",
    artist: "Wizkid ft. Tems",
    status: "Ended",
    airingTime: "13:00 WAT",
    coverImage: essence,
    timeStamp: "2024-11-23T13:00:00Z", // Today
  },
  {
    id: 4,
    title: "Koroba",
    artist: "Tiwa Savage",
    status: "Active",
    airingTime: "15:45 WAT",
    coverImage: koroba,
    timeStamp: "2024-11-23T15:45:00Z", // Today
  },

  // Yesterday: At least 2 items
  {
    id: 5,
    title: "Last Last",
    artist: "Burna Boy",
    status: "Ended",
    airingTime: "17:00 WAT",
    coverImage: lastlast,
    timeStamp: "2024-11-22T17:00:00Z", // Yesterday
  },
  {
    id: 6,
    title: "Monalisa",
    artist: "Lojay & Sarz",
    status: "Ended",
    airingTime: "19:30 WAT",
    coverImage: pbuy,
    timeStamp: "2024-11-22T19:30:00Z", // Yesterday
  },

  // 1 Week Ago: At least 2 items
  {
    id: 7,
    title: "Peace Be Unto You (PBUY)",
    artist: "Asake",
    status: "Active",
    airingTime: "10:30 WAT",
    coverImage: pbuy,
    timeStamp: "2024-11-16T10:30:00Z", // 1 Week Ago
  },
  {
    id: 8,
    title: "For My Hand",
    artist: "Burna Boy ft. Ed Sheeran",
    status: "Upcoming",
    airingTime: "12:00 WAT",
    coverImage: sungba,
    timeStamp: "2024-11-16T12:00:00Z", // 1 Week Ago
  },

  // 2 Weeks Ago: At least 2 items
  {
    id: 9,
    title: "Infinity",
    artist: "Olamide ft. Omah Lay",
    status: "Ended",
    airingTime: "08:30 WAT",
    coverImage: essence,
    timeStamp: "2024-11-09T08:30:00Z", // 2 Weeks Ago
  },
  {
    id: 10,
    title: "Don't Rush",
    artist: "Young T & Bugsey",
    status: "Active",
    airingTime: "18:00 WAT",
    coverImage: koroba,
    timeStamp: "2024-11-09T18:00:00Z", // 2 Weeks Ago
  },

  // 1 Month Ago: At least 2 items
  {
    id: 11,
    title: "Joro",
    artist: "Wizkid",
    status: "Ended",
    airingTime: "20:00 WAT",
    coverImage: lastlast,
    timeStamp: "2024-10-23T20:00:00Z", // 1 Month Ago
  },
  {
    id: 12,
    title: "No Wahala",
    artist: "1da Banton",
    status: "Upcoming",
    airingTime: "22:00 WAT",
    coverImage: pbuy,
    timeStamp: "2024-10-23T22:00:00Z", // 1 Month Ago
  },

  // 1 Year Ago: At least 2 items
  {
    id: 13,
    title: "Ameno Amapiano",
    artist: "Goya Menor",
    status: "Ended",
    airingTime: "09:00 WAT",
    coverImage: fem,
    timeStamp: "2023-11-23T09:00:00Z", // 1 Year Ago
  },
  {
    id: 14,
    title: "Love Nwantiti",
    artist: "CKay",
    status: "Active",
    airingTime: "14:30 WAT",
    coverImage: sungba,
    timeStamp: "2023-11-23T14:30:00Z", // 1 Year Ago
  },

  // 2 Years Ago: At least 2 items
  {
    id: 15,
    title: "High",
    artist: "Adekunle Gold ft. Davido",
    status: "Upcoming",
    airingTime: "07:00 WAT",
    coverImage: essence,
    timeStamp: "2022-11-23T07:00:00Z", // 2 Years Ago
  },
  {
    id: 16,
    title: "Peru",
    artist: "Fireboy DML",
    status: "Ended",
    airingTime: "21:00 WAT",
    coverImage: koroba,
    timeStamp: "2022-11-23T21:00:00Z", // 2 Years Ago
  },

  // 5 Years Ago: At least 2 items
  {
    id: 17,
    title: "Ye",
    artist: "Burna Boy",
    status: "Ended",
    airingTime: "10:00 WAT",
    coverImage: lastlast,
    timeStamp: "2019-11-23T10:00:00Z", // 5 Years Ago
  },
  {
    id: 18,
    title: "Ojuelegba",
    artist: "Wizkid",
    status: "Active",
    airingTime: "16:00 WAT",
    coverImage: pbuy,
    timeStamp: "2019-11-23T16:00:00Z", // 5 Years Ago
  },
];

import rad1 from "../assets/images/old_tingo/ai-radio-presenter.jpg";
import rad2 from "../assets/images/old_tingo/radioproduction940x529.jpg";

export const programDb = [
  // Today: 4 items
  {
    id: 1,
    title: "Morning News",
    artist: "AI Radio",
    airingTime: "07:00 WAT",
    coverImage: rad1,
    timeStamp: "2024-11-23T07:00:00Z", // Today
  },
  {
    id: 2,
    title: "Weather Update",
    artist: "AI Radio",
    airingTime: "09:00 WAT",
    coverImage: rad2,
    timeStamp: "2024-11-23T09:00:00Z", // Today
  },
  {
    id: 3,
    title: "Tech Trends",
    artist: "AI Innovations",
    airingTime: "12:00 WAT",
    coverImage: rad1,
    timeStamp: "2024-11-23T12:00:00Z", // Today
  },
  {
    id: 4,
    title: "Evening News",
    artist: "AI Radio",
    airingTime: "19:00 WAT",
    coverImage: rad2,
    timeStamp: "2024-11-23T19:00:00Z", // Today
  },

  // Yesterday: 2 items
  {
    id: 5,
    title: "Sports Highlights",
    artist: "AI Radio",
    airingTime: "20:00 WAT",
    coverImage: rad2,
    timeStamp: "2024-11-22T20:00:00Z", // Yesterday
  },
  {
    id: 6,
    title: "Market Update",
    artist: "AI Financial",
    airingTime: "15:00 WAT",
    coverImage: rad1,
    timeStamp: "2024-11-22T15:00:00Z", // Yesterday
  },

  // 1 Week Ago: 2 items
  {
    id: 7,
    title: "Tech Talk",
    artist: "AI Innovations",
    airingTime: "10:00 WAT",
    coverImage: rad1,
    timeStamp: "2024-11-16T10:00:00Z", // 1 Week Ago
  },
  {
    id: 8,
    title: "Health Tips",
    artist: "AI Health",
    airingTime: "14:00 WAT",
    coverImage: rad2,
    timeStamp: "2024-11-16T14:00:00Z", // 1 Week Ago
  },

  // 1 Month Ago: 2 items
  {
    id: 9,
    title: "Monthly Recap",
    artist: "AI Radio",
    airingTime: "18:00 WAT",
    coverImage: rad1,
    timeStamp: "2024-10-23T18:00:00Z", // 1 Month Ago
  },
  {
    id: 10,
    title: "World News",
    artist: "AI Global",
    airingTime: "21:00 WAT",
    coverImage: rad2,
    timeStamp: "2024-10-23T21:00:00Z", // 1 Month Ago
  },

  // 1 Year Ago: 2 items
  {
    id: 11,
    title: "Year in Review",
    artist: "AI Radio",
    airingTime: "08:00 WAT",
    coverImage: rad1,
    timeStamp: "2023-11-23T08:00:00Z", // 1 Year Ago
  },
  {
    id: 12,
    title: "Future Trends",
    artist: "AI Innovations",
    airingTime: "13:00 WAT",
    coverImage: rad2,
    timeStamp: "2023-11-23T13:00:00Z", // 1 Year Ago
  },

  // 2 Years Ago: 2 items
  {
    id: 13,
    title: "AI Revolution",
    artist: "AI Radio",
    airingTime: "11:00 WAT",
    coverImage: rad1,
    timeStamp: "2022-11-23T11:00:00Z", // 2 Years Ago
  },
  {
    id: 14,
    title: "Economic Insights",
    artist: "AI Financial",
    airingTime: "16:00 WAT",
    coverImage: rad2,
    timeStamp: "2022-11-23T16:00:00Z", // 2 Years Ago
  },

  // 5 Years Ago: 2 items
  {
    id: 15,
    title: "AI Milestones",
    artist: "AI Radio",
    airingTime: "09:30 WAT",
    coverImage: rad1,
    timeStamp: "2019-11-23T09:30:00Z", // 5 Years Ago
  },
  {
    id: 16,
    title: "Digital Transformation",
    artist: "AI Innovations",
    airingTime: "17:30 WAT",
    coverImage: rad2,
    timeStamp: "2019-11-23T17:30:00Z", // 5 Years Ago
  },
];

import prod1 from "../assets/images/old_tingo/genai.jpeg"
import prod2 from "../assets/images/old_tingo/education.jpeg"
import prod3 from "../assets/images/old_tingo/agric.jpeg"
import prod4 from "../assets/images/old_tingo/call_center.jpeg"
import prod5 from "../assets/images/old_tingo/data_center.jpeg"
import prod6 from "../assets/images/old_tingo/compliance.jpeg"
import prod7 from "../assets/images/old_tingo/financial.jpeg"
import prod8 from "../assets/images/old_tingo/life_science.jpeg"
import prod9 from "../assets/images/old_tingo/telemed.jpeg"
import prod10 from "../assets/images/old_tingo/ai_radio.png"



export const ourProductsDb = [
  {
    id: 1,
    title: "Generative AI: The Engine of Creativity and Efficiency",
    description:
      "Our generative AI isn’t just about automation — it’s about inspiration. Whether you’re brainstorming marketing campaigns, generating original content, or crafting hyper-personalized user experiences, Tingo AI’s generative technology enables you to create smarter and faster. By leveraging natural language processing and advanced algorithms, we give businesses the tools to innovate at scale, eliminate creative bottlenecks, and stay ahead of the competition.",
    coverImage: prod1,
  },
  {
    id: 2,
    title: "AI Radio: The Future of Entertainment Is Here",
    description:
      "Tingo AI Radio is more than a technical achievement; it’s a cultural moment. Broadcasting live on 102.5 FM, it’s the world’s first AI-powered radio station with on-air personalities and DJs driven entirely by AI. These digital hosts curate playlists, engage with audiences, and deliver real-time updates with human-like charm and wit. The result? An experience that feels as personal as it is groundbreaking. AI Radio isn’t just entertainment reimagined — it’s proof of AI’s limitless potential to transform media and communication.",
    coverImage: prod10,
  },
  {
    id: 3,
    title: "AI Education: Empowering Lifelong Learners",
    description:
      "Education isn’t one-size-fits-all, and neither is Tingo AI’s approach to learning. We leverage AI to provide tailored curriculums, personalized learning paths, and real-time feedback for students and professionals alike. Whether it’s upskilling a workforce or helping rural learners access quality education, our platforms break down traditional barriers to learning, ensuring that knowledge is accessible and adaptable to everyone’s needs.",
    coverImage: prod2,
  },
  {
    id: 4,
    title: "Food Security: Feeding the Future",
    description:
      "The challenge of global food security demands innovative solutions, and Tingo AI is rising to the occasion. By analyzing weather patterns, soil quality, and crop health data, our AI tools help farmers increase yields, optimize water usage, and reduce waste. Beyond production, our solutions streamline food distribution networks to ensure resources reach those who need them most. From farm to table, Tingo AI is working to create a world where hunger becomes a problem of the past.",
    coverImage: prod3,
  },
  {
    id: 5,
    title: "Life Sciences: Advancing Healthcare and Beyond",
    description:
      "In the life sciences, the difference between data and actionable insight can save lives. Tingo AI’s advanced data analytics accelerate drug discovery, enhance diagnostic accuracy, and enable predictive healthcare models. Our tools empower researchers and healthcare providers to identify solutions faster, personalize treatments, and tackle complex medical challenges with unprecedented precision. It’s AI for a healthier, more resilient future.",
    coverImage: prod8,
  },
  {
    id: 6,
    title: "Call Centre Solutions: Intelligent Conversations, Happier Customers",
    description:
      "Customer service is the heartbeat of any business, and Tingo AI’s call center solutions ensure yours is always beating strong. Our AI agents don’t just handle routine queries — they learn from every interaction, providing increasingly accurate and empathetic responses. The result? Shorter wait times, higher customer satisfaction, and cost-effective operations. Whether you need 24/7 support or multi-language capabilities, Tingo AI ensures every conversation leaves a positive impression.",
    coverImage: prod4,
  },
  {
    id: 7,
    title: "AI Data Centres: Powering the Future of AI",
    description:
      "Data is the foundation of the modern economy, and Tingo AI’s state-of-the-art data centers ensure your AI operations are built on solid ground. Designed for scalability, security, and energy efficiency, our facilities support everything from training machine learning models to storing critical enterprise data. By prioritizing reliability and sustainability, Tingo AI is setting a new standard for data infrastructure.",
    coverImage: prod5,
  },
  {
    id: 8,
    title: "Financial Inclusion: Banking for Everyone",
    description:
      "Financial systems often leave millions behind, but Tingo AI is rewriting the script. Our solutions provide unbanked and underserved communities with tools for microloans, savings, and financial education. By leveraging mobile technology and AI-driven insights, we’re opening doors to economic opportunities for individuals and businesses alike. With Tingo AI, financial inclusion isn’t just a goal — it’s a reality.",
    coverImage: prod7,
  },
  {
    id: 9,
    title: "Compliance: Stay Ahead of the Curve",
    description:
      "Regulatory compliance is a moving target, but Tingo AI makes it manageable. Our AI-driven compliance tools monitor ever-changing regulations, analyze risks, and generate reports to keep your business on the right side of the law. By automating these complex processes, we save you time, reduce costs, and give you the peace of mind to focus on growth.",
    coverImage: prod6,
  },
  {
    id: 10,
    title: "Telemedicine: Healthcare at Your Fingertips",
    description:
      "Tingo AI’s telemedicine platform is revolutionizing access to healthcare. From video consultations to remote monitoring, our technology connects patients with doctors no matter where they are. By integrating AI-driven diagnostics and predictive analytics, we enable faster, more accurate care while reducing the burden on traditional healthcare systems. In a world where health is everything, Tingo AI is making sure care is just a click away.",
    coverImage: prod9,
  },
  // {
  //   id: 11,
  //   title: "Customized Enterprise AI: Your Vision, Our Expertise",
  //   description:
  //     "No challenge is too complex, and no solution is too ambitious. Tingo AI works hand-in-hand with businesses to create customized AI solutions tailored to their unique needs. From workflow optimization to predictive analytics and beyond, we design tools that integrate seamlessly into your operations. Together, we’ll turn your vision into reality and give your business the competitive edge it deserves.",
  //   coverImage: prod1,
  // },
];

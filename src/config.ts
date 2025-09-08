// src/config.ts

export const SITE = {
  title: "OpenSourceDay 2025",
  shortTitle: "OSD2025",
  description:
    "OpenSourceDay is all about giving back to the open source projects, sharpening your skills, and celebrating all things open source. Join us for a day!",
  website: "https://opensourceweekend.org",
  ogImage: "/images/OSWBlack.png",
  icon: "/icons/OSDLogo.svg"
};

export const BRANDING = {
  logos: {
    main: "/icons/OSDLogo.svg",
    mainNoText: "/icons/OSDLogoNoText.svg",
    fullWhite: "/icons/OSWFullWhite.svg",
    fullBlack: "/icons/OSWFullBlack.svg",
    white: "/icons/OSWWhite.svg",
    black: "/icons/OSWBlack.svg"
  },
  colors: {
    primary: "#22c55e",
    secondary: "#16a34a",
    dark: "#15803d",
    light: "#dcfce7"
  }
};

export const EVENT = {
  name: "Open Source Day 2025",
  shortName: "OSD2025",
  date: "October 05, 2025",
  location: "Tech Convention Center, San Jose",
  tagline:
    "Join the largest open source developer conference of the year. Learn, network, and contribute to the future of technology.",
  description:
    "Open Source Day 2025 is a community-driven event celebrating the power of open source software. Join developers, maintainers, and enthusiasts for a day of learning, collaboration, and innovation.",
  stats: {
    expectedAttendees: "500+",
    speakers: "5+",
    workshops: "15+",
    sponsors: "20+"
  }
};

export const NAVIGATION = {
  items: [
    { name: "Home", href: "/" },
    { name: "Speakers", href: "/speakers" },
    { name: "Venue", href: "/venue" },
    { name: "Tickets", href: "/tickets" },
    { name: "Past Events", href: "/past-events" },
    { name: "Schedule", href: "/schedule" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Team", href: "/team" }
  ],
  cta: {
    text: "Register Now",
    url: "https://konfhub.com/open-source-day-2025"
  }
};

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/OSWeekend",
  twitter: "https://twitter.com/OSWeekend",
  instagram: "https://instagram.com/OSWeekend",
  linkedin: "https://www.linkedin.com/company/open-source-weekend/",
  medium: "https://medium.com/@opensourceweekend",
  github: "https://github.com/opensourceweekend",
  discord: "https://discord.gg/opensourceweekend"
};

export const CONTACT = {
  title: "Contact Us",
  email: "info@opensourceweekend.com",
  phone: "+91 123456789",
  address: {
    venue: "TBA",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India"
  },
  emergencyPhone: "+1 (555) 998-0000"
};

export const HERO = {
  title: {
    part1: "PEN",
    part2: "SOURCE",
    part3: "DAY",
    year: "2025"
  },
  subtitle:
    "Join us for a day of learning, networking, and celebrating open source innovation. Connect with developers, contribute to projects, and shape the future of technology.",
  buttons: {
    primary: {
      text: "Register Now",
      url: "https://konfhub.com/open-source-day-2025"
    },
    secondary: {
      text: "Learn More",
      url: "/about"
    }
  }
};

export const ABOUT = {
  title: "About Open Source Day",
  description:
    "Open Source Day 2025 is a community-driven event celebrating the power of open source software. Join developers, maintainers, and enthusiasts for a day of learning, collaboration, and innovation.",
  features: [
    {
      title: "Learn & Contribute",
      description:
        "Discover new technologies, learn best practices, and get hands-on experience contributing to real open source projects.",
      icon: "check"
    },
    {
      title: "Connect",
      description:
        "Network with fellow developers, open source maintainers, and tech enthusiasts from the Indian tech community.",
      icon: "users"
    },
    {
      title: "Celebrate",
      description:
        "Celebrate the achievements of the open source community and discover exciting new projects and opportunities.",
      icon: "star"
    }
  ]
};

export const SPEAKERS = [
  {
    name: "Chavda Rohit",
    title: "Lead Developer at GitHub",
    bio: "Open source advocate and maintainer of popular JavaScript libraries",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    talk: "The Future of Open Source Collaboration"
  },
  {
    name: "Marcus Rodriguez",
    title: "CTO at DevCorp",
    bio: "Expert in cloud infrastructure and container orchestration",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    talk: "Scaling Open Source Projects"
  },
  {
    name: "Dr. Aisha Patel",
    title: "AI Research Scientist",
    bio: "Leading researcher in machine learning and AI ethics",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    talk: "AI in Open Source: Opportunities and Challenges"
  },
  {
    name: "James Wilson",
    title: "Founder of OpenTech",
    bio: "Serial entrepreneur and open source evangelist",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    talk: "Building Sustainable Open Source Communities"
  },
  {
    name: "Lisa Zhang",
    title: "Security Engineer at CyberSafe",
    bio: "Cybersecurity expert specializing in open source security",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    talk: "Security Best Practices in Open Source"
  },
  {
    name: "David Kumar",
    title: "DevOps Architect",
    bio: "Infrastructure automation and CI/CD pipeline expert",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    talk: "Modern DevOps with Open Source Tools"
  }
];

export const TICKETS = [
  {
    name: "Regular Ticket",
    price: "₹199",
    originalPrice: null,
    description:
      "Full-access to conference. Lunch. Keynotes, Panels. OSD Goodies.",
    features: [
      "Full-access to conference",
      "Lunch",
      "Keynotes, Panels",
      "OSD Goodies"
    ],
    popular: false,
    available: true,
    konfhubUrl:
      "https://konfhub.com/checkout/open-source-day-2025?ticketId=56800"
  },
  {
    name: "Community Fan",
    price: "₹999",
    originalPrice: null,
    description:
      "For all our community people who constantly support us and create a vibrant community.",
    features: [
      "Full-access to conference",
      "Lunch",
      "Keynotes, Panels",
      "OSD Goodies",
      "Super Fan Goodies",
      "Digital Certificate"
    ],
    popular: true,
    available: true,
    konfhubUrl:
      "https://konfhub.com/checkout/open-source-day-2025?ticketId=56805"
  },
  {
    name: "Supporter Ticket",
    price: "₹1,999",
    originalPrice: null,
    description:
      "For all our community people who constantly support us and create a vibrant community.",
    features: [
      "Full-access to conference",
      "Lunch",
      "Keynotes, Panels",
      "OSD Goodies",
      "Supporter Exclusive goodies",
      "Digital Certificate"
    ],
    popular: false,
    available: true,
    konfhubUrl:
      "https://konfhub.com/checkout/open-source-day-2025?ticketId=56803"
  },
  {
    name: "Silver Ticket",
    price: "₹4,999",
    originalPrice: null,
    description:
      "For all our community people who constantly support us and create a vibrant community.",
    features: [
      "Full-access to conference",
      "Lunch",
      "Keynotes, Panels",
      "OSD Goodies",
      "Silver Ticket Exclusive goodies",
      "Digital Certificate",
      "Shout out during the event",
      "Shout-out on Social Media",
      "Networking Dinner with Speakers, sponsors, organizers and some special industry invitees"
    ],
    popular: false,
    available: true,
    konfhubUrl:
      "https://konfhub.com/checkout/open-source-day-2025?ticketId=56804"
  },
  {
    name: "Golden Ticket",
    price: "₹9,999",
    originalPrice: null,
    description:
      "For all our community people who constantly support us and create a vibrant community. This Ticket would be considered as a Donation which could be claimed in 80G & 12AA Tax Exemption.",
    features: [
      "Full-access to conference",
      "Lunch",
      "Keynotes, Panels",
      "OSD Goodies",
      "Golden Ticket Exclusive goodies",
      "Digital Certificate",
      "Networking Dinner with Speakers , sponsors , organizers and some special industry invitees",
      "Shout-out on Social Media",
      "Shout out during the event",
      "Appreciation Memento from OSD"
    ],
    popular: false,
    available: true,
    konfhubUrl:
      "https://konfhub.com/checkout/open-source-day-2025?ticketId=56806"
  },
  {
    name: "Micro Sponsor (Pack of 3 Golden Ticket)",
    price: "₹29,999",
    originalPrice: null,
    description:
      "Pack of 3 tickets with company branding and networking. Sponsorship considered as a Donation which could be claimed in 80G & 12AA Tax Exemption.",
    features: [
      "Full-access to conference",
      "Lunch",
      "Keynotes, Panels",
      "OSD Goodies",
      "Golden Ticket Exclusive goodies",
      "Digital Certificate",
      "Networking Dinner with Speakers , sponsors , organizers and some special industry invitees",
      "Company Branding at relevant places",
      "Shout-out during the event",
      "Appreciation Memento from OSD"
    ],
    popular: false,
    available: true,
    konfhubUrl:
      "https://konfhub.com/checkout/open-source-day-2025?ticketId=56807"
  }
];

export const VENUE = {
  name: "Tech Convention Center",
  address: "1234 Innovation Drive, San Jose, CA 95110",
  description:
    "Join us at a premium venue in the heart of the tech hub, designed for collaboration and innovation in the Indian tech ecosystem.",
  capacity: "500+ attendees across multiple halls",
  facilities: [
    "Main auditorium with 300 seats",
    "3 workshop rooms (50 seats each)",
    "Networking lounge and exhibition area",
    "High-speed WiFi throughout",
    "Professional A/V equipment",
    "Accessible facilities"
  ],
  transport: {
    parking: "Free parking available. Exit 12A from Highway 101",
    publicTransit: "VTA Light Rail - Convention Center Station (2 min walk)",
    airport: "25 minutes from San Jose Airport (SJC)"
  }
};

export const FOOTER = {
  description:
    "Open Source Day 2025 - A community-driven event celebrating open source innovation. Join developers, maintainers, and enthusiasts for learning and collaboration.",
  quickLinks: [
    { name: "Speakers", href: "/speakers" },
    { name: "Schedule", href: "/schedule" },
    { name: "Venue", href: "/venue" },
    { name: "Tickets", href: "/tickets" },
    { name: "Past Events", href: "/past-events" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Code of Conduct", href: "/code-of-conduct" }
  ],
  copyright: "© {year} OpenSource Weekend. All rights reserved.",
  credits: "Made with ❤️ by the OSW community"
};

export const META = {
  defaultTitle: "Open Source Day 2025 - Celebrate Innovation",
  titleTemplate: "%s | Open Source Day 2025",
  description:
    "Join the largest open source developer conference of the year. Learn, network, and contribute to the future of technology.",
  keywords: [
    "open source",
    "conference",
    "developers",
    "technology",
    "innovation",
    "community"
  ],
  author: "OpenSource Weekend",
  twitterCard: "summary_large_image"
};

export const SPONSORS = [
  {
    name: "Acme Labs",
    tier: "Platinum",
    logo: "https://placehold.co/200x80?text=Acme+Labs&bg=0d9488&color=ffffff",
    website: "https://acme.example"
  },
  {
    name: "DevTools Inc",
    tier: "Gold",
    logo: "https://placehold.co/200x80?text=DevTools&bg=16a34a&color=ffffff",
    website: "https://devtools.example"
  },
  {
    name: "Cloudify",
    tier: "Silver",
    logo: "https://placehold.co/200x80?text=Cloudify&bg=0f172a&color=ffffff",
    website: "https://cloudify.example"
  },
  {
    name: "OpenSource Community",
    tier: "Community",
    logo: "https://placehold.co/200x80?text=Community&bg=64748b&color=ffffff",
    website: "https://community.example"
  }
];

export const COMMUNITY_PARTNERS = [
  {
    name: "DevOops 1",
    logo: "/partners/DevOops-Sticker_Logo-V2-1_page-0001.jpg",
    website: "#"
  },
  { name: "HashicorpUG", logo: "/partners/HashicorpUG.jpg", website: "#" },
  {
    name: "Cloud native",
    logo: "/partners/CNCG Blue.png",
    website: "#"
  },
  { name: "gdg", logo: "/partners/gdg.png", website: "#" },
  {
    name: "Gdg Rajkot",
    logo: "/partners/GDG cloud rajkot SVG.svg",
    website: "#"
  },
  {
    name: "THM",
    logo: "/partners/THM logo Black Long.png",
    website: "#"
  },
  {
    name: "grafana",
    logo: "/partners/Grafana Ahmedabad.png",
    website: "#"
  },
  {
    name: "adc",
    logo: "/partners/ADC with White BG - Ahmedabad Developer Club.jpg",
    website: "#"
  },
  {
    name: "Fluter Flow vadodara",
    logo: "/partners/Fluter Flow vadodara.svg",
    website: "#"
  },
  {
    name: "gdg cloud gandhinagar copy",
    logo: "/partners/gdg cloud gandhinagar copy.jpg",
    website: "#"
  },
  {
    name: "GDG Surat",
    logo: "/partners/GDG Surat.png",
    website: "#"
  },
  {
    name: "gujarat jug - full logo",
    logo: "/partners/gujarat jug - full logo.svg",
    website: "#"
  }
];

// Simple tier grouping for display on Home and Sponsors page.
export const SPONSOR_TIERS = {
  gold: [
    { name: "OSCF", logo: "/icons/OSCF.png", website: "#" },
    { name: "OSW", logo: "/icons/OSDLogo.svg", website: "#" },
    { name: "OSW", logo: "/icons/OSWFullBlack.svg", website: "#" }
  ],
  silver: [
    { name: "OSCF", logo: "/icons/OSCF.png", website: "#" },
    { name: "OSW", logo: "/icons/OSDLogo.svg", website: "#" },
    { name: "OSW", logo: "/icons/OSWFullBlack.svg", website: "#" }
  ],
  bronze: [
    { name: "OSCF", logo: "/icons/OSCF.png", website: "#" },
    { name: "OSW", logo: "/icons/OSDLogo.svg", website: "#" },
    { name: "OSW", logo: "/icons/OSWFullBlack.svg", website: "#" }
  ]
};

// Add a few extra online sponsor logos for demo
export const EXTRA_SPONSORS = [
  {
    name: "Stripe",
    logo: "https://placehold.co/200x80?text=Stripe&bg=0ea5a4&color=ffffff",
    website: "https://stripe.com"
  },
  {
    name: "Netlify",
    logo: "https://placehold.co/200x80?text=Netlify&bg=0f172a&color=ffffff",
    website: "https://netlify.com"
  },
  {
    name: "Vercel",
    logo: "https://placehold.co/200x80?text=Vercel&bg=111827&color=ffffff",
    website: "https://vercel.com"
  }
];

export const TEAM = {
  advisory: [
    {
      name: "Dr. Aisha Patel",
      role: "AI Research Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "James Wilson",
      role: "Founder of OpenTech",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ],
  mentors: [
    {
      name: "Lisa Zhang",
      role: "Security Engineer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ],
  core: [
    {
      name: "Chavda Rohit",
      role: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    }
  ],
  volunteers: [
    {
      name: "Community Volunteer",
      role: "Volunteer",
      image: "/icons/OSDLogoNoText.svg"
    }
  ]
};

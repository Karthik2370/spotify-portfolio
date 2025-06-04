// src/data.js

export const aboutMeData = {
  name: "Karthik Nambiar",
  location: "Mumbai, India",
  education: "B Tech in Computer Engineering",
  roles: "Frontend Developer • UI/UX Designer • Data Scientist"
};

export const educationData = [
  {
    year: "2024",
    institution: "Ramrao Adik Institute of Technology",
    details: "B.Tech in Computer Engineering (Major: Data Science) • CGPA: 9.42/10"
  },
  {
    year: "2021",
    institution: "Pace Junior Science College",
    details: "12th Grade • Percentage: 90%"
  },
  {
    year: "2019",
    institution: "Bunt Sanghas S M Shetty High School",
    details: "10th Grade • Percentage: 82.40%"
  }
];

export const leadershipData = [
  {
    year: "2022",
    organization: "CSI-RAIT",
    role: "Technical Team",
    location: "Navi Mumbai, India",
    period: "June 2022 – February 2023",
    description: "Managed essential tasks including handling workshops and events in college."
  },
  {
    year: "2021",
    organization: "ISA-RAIT",
    role: "Event Head",
    location: "Navi Mumbai, India",
    period: "June 2021 – December 2021",
    description: "Managed an Educational event for Techfest 2021 which was awarded the most creative event of Techfest 2021."
  }
];

export const experienceData = [
  {
    id: "immensphere",
    title: "Immensphere",
    description: "Web Developer Intern • Jun 2022 – Jul 2022 • Remote",
    techStack: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: "cognifyz",
    title: "Cognifyz Technologies",
    description: "Data Science Intern • Jun 2024 – Jul 2024 • Remote",
    techStack: ["Python", "Google Colab"]
  },
  {
    id: "codsoft",
    title: "CodSoft",
    description: "UI/UX Designer • Jul 2024 – Aug 2024 • Remote",
    techStack: ["Figma", "Canva"]
  },
  {
    id: "delight-logistics",
    title: "Delight Logistics",
    description: "Software Developer • Jan 2025 - Mar 2025 • On-Site",
    techStack: ["Python", "Google Appscript", "React", "Next.js", "Firebase", "Tailwind", "SEO"]
  },
  {
    id: "pfep",
    title: "PFEPL",
    description: "Frontend Developer • Mar 2025 - Jul 2025 • On-Site",
    techStack: ["Figma", "Framer", "Spline", "React", "Vite", "CSS"]
  }
];

export const projectData = [
  {
    id: "weather-forecast",
    title: "Weather Prediction",
    description: "Jul 2022",
    imageUrl: "/images/weather.jpg",
    longDescription: "A responsive weather forecasting website that provides real-time weather data and forecasts using the OpenWeather API. Features include current weather conditions, 5-day forecasts, and location-based weather updates.",
    techStack: ["HTML", "EJS", "JavaScript", "CSS", "OpenWeather API"],
    githubLink: "https://github.com/Karthik2370/Weather-Forecast-Website",
    hostedLink: "#"
  },
  {
    id: "detour",
    title: "DeTOUR Website",
    description: "Jan 2023",
    imageUrl: "/images/detour.jpg",
    longDescription: "A comprehensive city tourism platform that helps users plan their trips by providing curated lists of attractions, local restaurants, and popular destinations. The website uses a custom JSON API to serve location-specific data.",
    techStack: ["HTML", "CSS", "Custom JSON API", "Heroku"],
    githubLink: "https://github.com/Karthik2370/DETOUR-Tourist-App",
    hostedLink: "#"
  },
  {
    id: "pneumonia",
    title: "Pneumonia Detection",
    description: "Jun 2023",
    imageUrl: "/images/pneumonia.jpg",
    longDescription: "A deep learning model that analyzes chest X-ray images to detect signs of pneumonia. Built using CNN layers and ResNet50 architecture, achieving high accuracy in classification. The model was trained on a dataset of chest X-rays.",
    techStack: ["Python", "TensorFlow", "CNN", "Google Colab"],
    githubLink: "https://github.com/Karthik2370/Pneumonia-Detction-using-Xray-images",
    hostedLink: "#"
  },
  {
    id: "stock-prediction",
    title: "Stock Prediction",
    description: "Jan 2024",
    imageUrl: "/images/stock.jpg",
    longDescription: "A machine learning model that analyzes news headlines to predict stock market trends. Uses Natural Language Processing and Random Forest Classifier to process text data and make predictions based on sentiment analysis.",
    techStack: ["Python", "BoW", "Google Colab"],
    githubLink: "https://github.com/Karthik2370/Stock-Prediction-model",
    hostedLink: "#"
  },
  {
    id: "deepfake",
    title: "Deepfake Detection",
    description: "Jul 2024",
    imageUrl: "/images/deepfake.jpg",
    longDescription: "An AI model designed to detect deepfake videos and images of celebrities. Combines CNN for image analysis and Random Forest for classification, trained on a diverse dataset of authentic and manipulated media.",
    techStack: ["Python", "Random Forest", "Google Colab", "CNN"],
    githubLink: "https://github.com/Karthik2370/DeepFake-detction-using-CNN",
    hostedLink: "#"
  },
  {
    id: "ocr-scanner",
    title: "OCR Scanner",
    description: "Jan 2025",
    imageUrl: "/images/ocr.jpg",
    longDescription: "An automated document processing system that extracts text from invoices and bills using OCR technology. Features include PDF processing, data extraction, and export to structured formats. Built with a user-friendly Streamlit interface.",
    techStack: ["Python", "Tesseract", "Py2PDF", "Pillow", "Pandas", "Streamlit"],
    githubLink: "https://github.com/Karthik2370/pdf-job-number-automation",
    hostedLink: "https://karthik-delightlogistics.streamlit.app"
  },
  {
    id: "cbx-tracker",
    title: "CBX Tracker",
    description: "Feb 2025",
    imageUrl: "/images/cbx.jpg",
    longDescription: "A real-time shipment tracking system for internal logistics operations. Features include live tracking, status updates, and delivery notifications. Built with Next.js and Firebase for real-time data synchronization.",
    techStack: ["Next.js", "Tailwind", "Firebase", "Vercel"],
    githubLink: "#",
    hostedLink: "cbx-tracker.vercel.app"
  },
  {
    id: "fun-login",
    title: "Fun Login Form",
    description: "Feb 2025",
    imageUrl: "/images/login.jpg",
    longDescription: "An interactive login form with engaging animations and transitions. Features a dynamic button that responds to user interaction with playful effects, demonstrating modern CSS animations and React state management.",
    techStack: ["React", "CSS", "Vite"],
    githubLink: "https://github.com/Karthik2370/fun-form",
    hostedLink: "hacker-form.vercel.app"
  },
  {
    id: "synapse",
    title: "Synapse",
    description: "Mar 2025",
    imageUrl: "/images/synapse.jpg",
    longDescription: "A modern services hub website featuring 3D animations and a minimalist dark UI. Integrates Spline for 3D elements and Framer Motion for smooth transitions. Includes a SQL database for dynamic content management.",
    techStack: ["React", "Vite", "CSS", "Spline", "Figma", "Framer", "SQL"],
    githubLink: "#",
    hostedLink: "pfepl-hub.vercel.app"
  },
  {
    id: "auto-login",
    title: "Auto Login Bot",
    description: "Mar 2025",
    imageUrl: "/images/bot.jpg",
    longDescription: "An automated login system that securely stores and manages credentials for frequently visited websites. Uses Selenium for browser automation and features a Tkinter GUI for user interaction and credential management.",
    techStack: ["Python", "Selenium", "Chrome Driver", "Tkinter"],
    githubLink: "#",
    hostedLink: "#"
  },
  {
    id: "tender",
    title: "Tender System",
    description: "Apr 2025",
    imageUrl: "/images/tender.jpg",
    longDescription: "A web-based tender management system for government projects. Features include tender listing, bid submission, and project tracking. Built with React and features a clean, intuitive interface for easy navigation.",
    techStack: ["React", "Vite", "CSS"],
    githubLink: "#",
    hostedLink: "pfepl-tender.vercel.app"
  },
  {
    id: "animal-morph",
    title: "Animal Morph",
    description: "May 2025",
    imageUrl: "/images/morph.jpg",
    longDescription: "An interactive web application that demonstrates CSS polygon animations by morphing basic shapes into animal silhouettes. Features smooth transitions and responsive design, showcasing advanced CSS animation techniques.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Karthik2370/Animal-Morph",
    hostedLink: "animal-morph.vercel.app"
  },
  {
    id: "theme-switcher",
    title: "Theme Switcher",
    description: "May 2025",
    imageUrl: "/images/theme.jpg",
    longDescription: "A theme switching component with three distinct animation styles: scan, default, and radial transitions. Demonstrates different approaches to theme switching animations while maintaining smooth performance.",
    techStack: ["React", "Vite", "CSS"],
    githubLink: "https://github.com/Karthik2370/Theme-Switcher",
    hostedLink: "theme-karthik.vercel.app"
  },
  {
    id: "geo-inventory",
    title: "Geo-inventory",
    description: "May 2025",
    imageUrl: "/images/geo.jpg",
    longDescription: "A geographical inventory management system that visualizes project locations across India. Integrates OpenEarth and Leaflet for map visualization, with real-time data updates and interactive project markers.",
    techStack: ["React", "Vite", "CSS", "OpenEarth", "Leaflet", "Esri"],
    githubLink: "#",
    hostedLink: "geo-inventory.vercel.app"
  }
];

export const certificationData = [
  {
    id: "harvard",
    title: "Harvard (HBS)",
    description: "Business Analytics • Jan 2023",
    details: [
      "Advanced data analysis techniques",
      "Business intelligence tools"
    ]
  },
  {
    id: "udemy-aiml",
    title: "Udemy",
    description: "Master AIML Projects • Mar 2023",
    details: [
      "Machine learning fundamentals",
      "AI model development"
    ]
  },
  {
    id: "udemy-uiux",
    title: "Udemy",
    description: "UI/UX Designing • Jun 2023",
    details: [
      "User interface design principles",
      "User experience optimization"
    ]
  },
  {
    id: "teachnook",
    title: "IIT Bhuvneshwar",
    description: "Web Development Bootcamp • Sep 2023",
    details: [
      "Full-stack development",
      "Modern web technologies"
    ]
  },
  {
    id: "cisco",
    title: "Cisco",
    description: "Networking and Cybersecurity • Dec 2023",
    details: [
      "Network security protocols",
      "System administration"
    ]
  },
  {
    id: "aws",
    title: "AWS",
    description: "Cloud Partitioning • Feb 2024",
    details: [
      "Cloud architecture",
      "Serverless applications"
    ]
  },
  {
    id: "udemy-webdev",
    title: "Udemy",
    description: "Angela Yu Web Dev • Apr 2024",
    details: [
      "Full-stack web development",
      "Modern frameworks and tools"
    ]
  }
]; 
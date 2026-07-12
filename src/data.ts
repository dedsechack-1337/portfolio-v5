export const profile = {
  name: "Amit Roy",
  roles: [
    "Cybersecurity Engineer",
    "Ethical Hacker",
    "Penetration Tester",
    "IoT & AI Security Specialist",
  ],
  location: "Ashoknagar, West Bengal, India",
  email: "amitroy9091988431@gmail.com",
  phone: "+91 9091988431",
  socials: {
    github: "https://github.com/dedsechack-1337",
    linkedin: "https://linkedin.com/in/dedsechaack1337",
    leetcode: "https://leetcode.com/u/amitroy1337",
    youtube: "https://youtube.com/@arproduction8597",
  },
  summary:
    "CEH-certified Ethical Hacker and Cybersecurity Engineer with 1+ years of hands-on experience across Web Application & Network Penetration Testing, reverse engineering, malware analysis, AI-driven security tooling, and IoT/embedded systems security. Self-taught polyglot programmer in 28+ languages with a strong mathematical foundation — excelling in algorithm design, cryptography, and AI/ML modelling. Builder of open-source security tools (SIEM, SOC tooling, phishing detection, malware AI). First-Prize CTF winner. Passionate about offensive security, IoT/electronics, and AI-integrated threat defence.",
};

export const stats = [
  { label: "CTF 1st Prize", value: "Aug 2022" },
  { label: "Public Repos", value: "33" },
  { label: "Languages Learned", value: "28+" },
  { label: "Certifications", value: "12+" },
];

export const skillGroups = [
  {
    title: "Security Domains",
    items: [
      "Web App Pentesting (OWASP Top 10)", "Network Pentesting", "Reverse Engineering",
      "Malware Analysis", "Digital Forensics", "SOC Operations", "Cryptography",
      "Vulnerability Analysis", "Social Engineering & OSINT", "Steganography",
      "Blockchain Security", "AI Security", "Cyber Laws",
    ],
  },
  {
    title: "Offensive & Defensive Tooling",
    items: [
      "Metasploit", "Burp Suite", "Nmap", "Wireshark", "OWASP ZAP", "Aircrack-ng",
      "Nikto", "SQLMap", "Hydra", "John the Ripper", "Ghidra", "IDA Pro",
      "Volatility", "Snort", "Splunk", "YARA Rules", "Kali Linux", "ParrotOS",
    ],
  },
  {
    title: "Networking & Infrastructure",
    items: [
      "TCP/IP", "Switching & Routing (CCNA)", "Linux Administration",
      "Windows Server 2019/2022", "Firewall & IDS/IPS", "VPN", "DNS/DHCP",
      "Linux Network Services",
    ],
  },
  {
    title: "Cloud & Virtualisation",
    items: [
      "Cloud Security", "Virtualisation Technology", "Windows Server Management",
      "Security Audit & Compliance", "Digital Watermarking",
    ],
  },
  {
    title: "AI / ML",
    items: [
      "Machine Learning", "Neural Networks", "NLP for Threat Detection",
      "Anomaly Detection", "AI-powered Malware Classification", "TensorFlow", "scikit-learn",
    ],
  },
  {
    title: "Languages & Frameworks",
    items: [
      "Python", "Java", "Go", "C", "C++", "JavaScript", "TypeScript", "Assembly",
      "Kotlin", "Rust", "React", "Next.js", "Vite", "Django", "Flask", "Node.js",
      "Tailwind CSS", "Vue.js",
    ],
  },
  {
    title: "DevSecOps / DevOps",
    items: [
      "CI/CD Security (GitHub Actions, Jenkins)", "SAST / DAST Integration",
      "Container Security (Docker)", "Infrastructure as Code Security",
      "Shift-Left Security", "Secure SDLC", "Ansible", "Kubernetes",
    ],
  },
  {
    title: "IoT, Electronics & Microcontrollers",
    items: [
      "Arduino", "ESP32", "STM32", "Raspberry Pi", "nRF52", "RP2040", "PIC", "8051",
      "RFID/NFC Systems", "IoT Firmware Analysis & Exploitation", "Embedded C & Assembly",
      "Circuit Design", "VLSI Chip Designing", "FPGA",
    ],
  },
];

export const projects = [
  {
    name: "soc-copilot",
    stack: ["Python", "LangChain", "Ollama", "RAG"],
    description:
      "Local-first AI threat-hunting assistant that translates analyst natural-language queries into Sigma and YARA detection rules, auto-validated via pySigma and yara-python before returning results.",
    detail:
      "RAG-powered MITRE ATT&CK mapping across 697 techniques via ChromaDB + Ollama embeddings, driven by a LangChain/LangGraph tool-calling agent with a Streamlit chat interface.",
    severity: "critical",
  },
  {
    name: "PhoenixSIEM",
    stack: ["TypeScript", "Self-Learning AI", "SOC"],
    description:
      "Self-learning SIEM platform that ingests multi-source logs, detects anomalies, and surfaces prioritised alerts — cutting SOC alert fatigue by auto-filtering false positives.",
    detail:
      "Bridges SOC Management, AI in Cyber Security, and Virtualisation Technology into a full-stack production security product.",
    severity: "critical",
  },
  {
    name: "AI-NIDPS (Sentry)",
    stack: ["Python", "Scapy", "ML/DL", "Network Security"],
    description:
      "AI-powered network intrusion detection system with live packet capture — classifies DoS, DDoS, Port Scan, Brute Force & Botnet traffic via RandomForest, XGBoost, LightGBM and a PyTorch model.",
    detail:
      "Flask-based SOC-style dashboard with live flow logs, attack breakdown charts, and PDF report export — staged to upgrade from synthetic data to real CICIDS2017 / UNSW-NB15 datasets without a rewrite.",
    severity: "high",
  },
  {
    name: "malware-guardAI",
    stack: ["Python", "AI/ML", "Malware Analysis"],
    description:
      "AI-powered engine that classifies and dissects malicious binaries using ML, delivering automated threat reports and reducing manual analysis effort.",
    detail:
      "Automates static and dynamic analysis pipelines, directly applying AI in Cyber Security and Data Security & Analytics coursework to a production tool.",
    severity: "high",
  },
  {
    name: "PhishguardAI",
    stack: ["Python", "NLP", "Threat Intelligence"],
    description:
      "Real-time phishing URL and email detector using NLP and heuristics to catch zero-day campaigns before credential exposure occurs.",
    detail:
      "Applies AI in Cyber Security and Cryptography & Network Security — an end-to-end AI-driven threat intelligence pipeline.",
    severity: "medium",
  },
  {
    name: "network_scanner",
    stack: ["Python", "Network Reconnaissance"],
    description:
      "Full-featured subnet/host scanner that fingerprints services, detects open ports and OS signatures, and outputs structured JSON for SIEM ingestion.",
    detail:
      "Applies Data Security & Analytics and Network Security Essentials to automate real-world reconnaissance workflows.",
    severity: "medium",
  },
  {
    name: "RFID Cloner",
    stack: ["Arduino", "C", "Hardware / IoT Security"],
    description:
      "Custom-built RFID cloning device (125kHz EM4100 & MIFARE Classic) demonstrating physical access-control vulnerabilities — used in live security awareness demos.",
    detail:
      "Final-year college project reflecting IoT Security and Cyber Security Law & IPR, built to demonstrate real-world hardware attack surfaces.",
    severity: "low",
  },
];

export const experience = [
  {
    org: "Indian Cyber Security Solutions",
    tag: "ISO 27001 & 9001:2015",
    period: "2019 – 2020",
    role: "Cybersecurity Intern — Ethical Hacking Division",
    points: [
      "Performed web application pentests (OWASP Top 10) and network pentests using Metasploit & Nmap — produced risk-rated vulnerability reports with remediation roadmaps.",
      "Won 1st Prize in the company CTF Competition (Aug 2022); earned CEHP and CCNA through their ISO-accredited programme.",
    ],
  },
  {
    org: "Brainware University, Kolkata",
    tag: "IT Cell",
    period: "2024 (6 Months)",
    role: "IT Cell Intern — Cybersecurity",
    points: [
      "Conducted internal vulnerability assessments; deployed Wireshark & Snort for real-time anomaly detection.",
      "Delivered security awareness workshops to 100+ staff on phishing, social engineering, and incident response.",
    ],
  },
  {
    org: "Brainware University",
    tag: "Ref: BWU/REG/ELS/STD/01042024/08",
    period: "Apr – Aug 2024",
    role: "Earn While You Learn — Technical Staff",
    points: [
      "Competitively selected from a limited cohort for a paid technical support role within the university IT department.",
      "Performance evaluated monthly by department supervisors.",
    ],
  },
];

export const education = [
  {
    school: "Brainware University, Barasat, Kolkata",
    meta: "Roll: 23010348145 · Reg: 23013003403",
    period: "2023 – Present",
    degree: "BSc (Honours) — Advanced Networking & Cyber Security (ANCS)",
    detail: "6th Sem SGPA: 9.50 (90.50%) · Overall till 6th Sem: 82.38%",
    specialisations: ["AI/ML", "Cryptography", "SOC Management", "Windows Server", "Cloud Security", "Digital Forensics", "IoT Security"],
  },
  {
    school: "Ashoknagar Boys Secondary School",
    meta: "WB State Council of Technical & Vocational Education · Roll: 221079114013",
    period: "2022 – 2023",
    degree: "Higher Secondary — Engineering & Technology (Vocational, ETCM)",
    detail: "79.60% · Grade A",
    specialisations: [],
  },
  {
    school: "Ashoknagar Boys Secondary School",
    meta: "WBBSE · Roll: 204301B",
    period: "2014 – 2015",
    degree: "Secondary Examination (Madhyamik Pariksha)",
    detail: "457 / 700 · Overall Grade: A",
    specialisations: [],
  },
];

export const syllabus = [
  { sem: "Sem 1", title: "Foundations", items: "Computer Networks · PC Maintenance · Fundamentals of Electronics · Computer Peripherals & OS" },
  { sem: "Sem 2", title: "Linux & Security Basics", items: "Linux Administration · Cyber Security Lab · Principles of Programming · Security Overview" },
  { sem: "Sem 3", title: "Network Security & Pentesting", items: "Switching & Routing · Vulnerability Analysis & Penetration Testing · Information Security Management" },
  { sem: "Sem 4", title: "Web Security & Databases", items: "Windows Server Administration · Web Application Penetration Testing · Database Management System" },
  { sem: "Sem 5", title: "Advanced Networking", items: "Network Security Essentials · Linux Network Service Management · Blockchain & Cryptocurrency · Digital Watermarking & Steganography" },
  { sem: "Sem 6", title: "AI/ML & SOC", items: "Windows Server Management · Security Operations Center Management · AI & Machine Learning · Cryptography & Network Security" },
  { sem: "Sem 7", title: "Cloud, Forensics & IoT (Hons)", items: "Security Audit & Compliances · Cloud Security · Digital Forensics · IoT Security" },
  { sem: "Sem 8", title: "AI Security & Cyber Law (Hons)", items: "Data Security & Analytics · AI in Cyber Security · Virtualisation Technology · Cyber Security Law & IPR" },
];

export const certifications = [
  { name: "Certified Ethical Hacking Professional (CEHP)", issuer: "Indian Cyber Security Solutions", meta: "No. ICSS369034002019 · Nov 2019", files: ["/certificates/CEHP-Certificate.jpg", "/certificates/CEHP-Gradesheet.jpg"] },
  { name: "CCNA — Cisco Certified Network Associate", issuer: "Indian Cyber Security Solutions", meta: "No. ICSS36903292019 · Feb 2019 · Grade A", files: ["/certificates/CCNA-Certificate.jpg", "/certificates/CCNA-Gradesheet.jpg"] },
  { name: "Practical Ethical Hacking — Complete Course", issuer: "TCM Security", meta: "11 Nov 2020", files: ["/certificates/TCM-Practical-Ethical-Hacking.pdf"] },
  { name: "Ethical Hacking — Industrial Training (O+)", issuer: "ISOEH (EC-Council Accredited)", meta: "Reg: ISOEH/EH/24/1670 · Jul–Aug 2024", files: [] },
  { name: "Network Pen Testing — Level 1 (O+)", issuer: "ISOEH (EC-Council Accredited)", meta: "Reg: ISOEH/NP/25/1843 · Jan 2025", files: [] },
  { name: "IT-SMART — Distinction", issuer: "APLL Learning Solutions", meta: "Cert No. 1790437 · Oct 2017", files: [] },
  { name: "Cyber Hygiene Practices", issuer: "MeitY — ISEA, Govt of India", meta: "No. MeitY/ISEA/WCHP/023098 · 20 Oct 2022", files: ["/certificates/MeitY-ISEA-Cyber-Hygiene.pdf"] },
  { name: "TryHackMe — Advent of Cyber 2025", issuer: "TryHackMe · 24 Challenges Completed", meta: "THM-AQA6PIKKLL · 7 Jan 2026", files: ["/certificates/TryHackMe-Advent-of-Cyber-2025.pdf"] },
  { name: "Ethical Hacking — Megamind", issuer: "Nikistian Media", meta: "Certificate of Participation · 8 Jan 2023", files: [] },
  { name: "Getting Started with AI", issuer: "IBM SkillsBuild · Credly Badge", meta: "PLAN-E624C2604060 · 10 Aug 2025", files: ["/certificates/IBM-Getting-Started-With-AI.pdf"] },
  { name: "Journey to Cloud — Envisioning Your Solution", issuer: "IBM SkillsBuild", meta: "Badge 7a4e22af-2136-4b8f-9e44-e30b0655f34a · 16 Aug 2025", files: ["/certificates/IBM-Journey-to-Cloud.pdf"] },
  { name: "AI Doc Retrieval Lab (IBM Granite & Docling)", issuer: "Adobe Learning Manager", meta: "ALM-COURSE_3946473 · 16 Aug 2025", files: [] },
  { name: "Web Hacking / Penetration Testing", issuer: "Udemy · Zaid Sabih, zSecurity", meta: "UC-694a5e76-b171-4470-8f46-6bed8e8596d5 · 7 Aug 2022", files: ["/certificates/Udemy-Web-Hacking-Pentesting.pdf"] },
];

export const achievements = [
  {
    title: "1st Prize — CTF Competition",
    org: "Indian Cyber Security Solutions",
    date: "14 Aug 2022",
    detail: "Won first place in a competitive CTF among professional cybersecurity practitioners.",
    file: "/certificates/CTF-1st-Prize-ICSS.jpg",
  },
  {
    title: "Kolkata Police & IEMLabs Hackathon 2022",
    org: "Netaji Indoor Stadium, Kolkata",
    date: "29 Jul 2022",
    detail: "Competed in a city-level hackathon co-organised by Kolkata Police and IEMLabs.",
    file: null,
  },
  {
    title: "BrainCon 2024 — TechFusion",
    org: "Brainware University (IIC, MoE)",
    date: "18 May 2024",
    detail: "Selected and recognised for commendable performance at the MoE Innovation Council event.",
    file: null,
  },
  {
    title: "Brainware-CTF (CyberYami / BCC)",
    org: "Brainware Cyber Club",
    date: "30 Nov 2023",
    detail: "Earned Certificate of Appreciation from CyberYami & Brainware Cyber Club.",
    file: "/certificates/Brainware-CTF-CyberYami.png",
  },
];

export const collegeActivities = [
  { title: "SecCom 2025", detail: "Expert Talk · Participation Certificate", period: "31 Oct – 1 Nov 2025" },
  { title: "Freshers 2025", detail: "Volunteer Certificate · Celebration", period: "13 Oct – 29 Nov 2025" },
  { title: "HR Spark 2025", detail: "Seminar · Participation Certificate", period: "8 Feb 2025" },
  { title: "SecCom 2024", detail: "Celebration · Participation Certificate", period: "28–29 Nov 2024" },
  { title: "Freshers Welcome 2024", detail: "Celebration · Participation Certificate", period: "1–7 Oct 2024" },
  { title: "TechFusion 2024 (BrainCon)", detail: "Intercollege Tech Challenge · Participation", period: "18 May 2024" },
  { title: "Annual Sports 2024", detail: "Cricket Tournament (Boys) · Participation", period: "27 Feb – 20 Apr 2024" },
  { title: "National Science Day", detail: "Workshop — Penetration Testing & Bug Bounty", period: "29 Feb 2024" },
  { title: "SecCom 2023 — Seminar", detail: "Computer Security Day · Celebration-Seminar", period: "30 Nov – 1 Dec 2023" },
  { title: "SecCom 2023 — Competition", detail: "Computer Security Day · Competition", period: "30 Nov – 1 Dec 2023" },
  { title: "Linux Administration Trends", detail: "Seminar · Modern Trends in Linux Administration", period: "19 Aug 2023" },
];

export const softSkills = [
  "Analytical Thinking", "Rapid Self-Learning", "Problem Solving", "Communication", "Adaptability",
  "Decision Making", "Multi-tasking", "Attention to Detail", "Team Collaboration", "Creative Thinking",
];

export const interests = [
  { icon: "guitar", title: "Guitar & Music", detail: "Self-taught guitarist sharing performances on YouTube (@arproduction8597)." },
  { icon: "waveform", title: "EDM Production & DJ", detail: "Composes original EDM tracks and mixes using DAWs; passionate about synthesis and live mixing." },
  { icon: "cpu", title: "Electronics & IoT Tinkering", detail: "Builds custom hardware with Arduino, STM32, nRF52, ESP32 & Raspberry Pi — RFID tools, sensor networks, embedded systems." },
];

export const languages = [
  { name: "Bengali", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Conversational" },
];

export const otherHighlights = [
  "33 public repositories on GitHub; 5+ actively maintained open-source cybersecurity tools with community recognition.",
  "Self-taught in 28+ programming languages — avg. 21–30 days per language; spans systems, data science, and mobile domains.",
  "Selected for Brainware University Earn While You Learn Scheme (2024) — limited merit cohort for academic & technical excellence.",
];

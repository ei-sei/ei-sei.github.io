// Portfolio Projects Data Model
export const projectsData = [
  {
    id: 1,
    title: "Simple Flask REST API",
    shortDescription:
      "RESTful API for user management built with Flask, Flask-RESTful, and SQLite database.",
    fullDescription:
      "A lightweight, well-structured REST API demonstrating best practices in Python backend development. Features complete CRUD operations for user management, input validation, error handling, and JSON serialization using SQLAlchemy ORM with SQLite database.",
    technologies: ["Flask", "Flask-RESTful", "SQLAlchemy", "SQLite", "Python"],
    features: [
      "RESTful API endpoints for user management",
      "SQLite database integration with SQLAlchemy ORM",
      "Full CRUD operations (Create, Read, Update, Delete)",
      "Input validation and comprehensive error handling",
      "JSON serialization with Flask-RESTful marshalling",
      "User model with unique constraints",
      "Clean separation of concerns",
      "Easy database initialization script",
    ],
    challenges:
      "Implementing proper error handling, validating user input, managing database relationships, and creating a maintainable API structure.",
    solutions:
      "Used Flask-RESTful for request/response marshalling, implemented validation decorators, leveraged SQLAlchemy ORM for database operations, and structured endpoints with resource-based routing.",
    githubUrl: "https://github.com/ei-sei/simple-flask-api",
    liveUrl: "http://127.0.0.1:5000",
    images: [
      "/images/flask-api-screenshot.png",
      "/images/flask-api-screenshot2.png",
    ],
    thumbnail: "/images/flask-api-screenshot.png",
  },
  {
    id: 2,
    title: "Linux Lab Notebook",
    shortDescription:
      "Hands-on Linux command-line documentation covering system administration, troubleshooting, OverTheWire wargames, and cross-distribution workflows on Fedora and Ubuntu.",
    fullDescription:
      "A comprehensive lab notebook documenting practical Linux skills across multiple distributions. Covers system administration tasks on Fedora 43 (local) and Ubuntu 22.04 (AWS EC2), including user management, file permissions, process monitoring, package management, and network diagnostics. Also includes OverTheWire Bandit wargame challenges for hands-on security practice. Organized into challenges, capstone projects, and wargame solutions.",
    technologies: ["Linux", "Bash", "Fedora", "Ubuntu", "AWS EC2", "SELinux"],
    features: [
      "User and group account management",
      "File permissions and ownership configuration",
      "Process management and monitoring",
      "Package management with dnf and apt",
      "Log file analysis using grep and awk",
      "System resource performance monitoring",
      "Network troubleshooting and diagnostics",
      "OverTheWire Bandit wargame challenges",
      "Cross-distribution workflows (RHEL/Fedora and Debian/Ubuntu)",
    ],
    challenges:
      "Working across different Linux distributions with varying package managers, firewall tools, and security models while building consistent administration practices and tackling security-focused wargame challenges.",
    solutions:
      "Documented distribution-specific approaches side by side, practiced on both local Fedora and cloud-based Ubuntu environments, completed OverTheWire Bandit challenges to strengthen command-line security skills, and organized learnings into structured materials for quick lookup.",
    githubUrl: "https://github.com/ei-sei/DevOps/tree/linux-lab-notebook",
    liveUrl: "",
    images: [
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800",
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400",
  },
  {
    id: 3,
    title: "Penetration Testing: Metasploitable Report",
    shortDescription:
      "Comprehensive penetration testing engagement against a Metasploitable VM, documenting two critical exploits achieving full root access.",
    fullDescription:
      "A professional penetration testing report documenting a security assessment against a Metasploitable virtual machine in an isolated VirtualBox lab environment. Demonstrates the full attack lifecycle from reconnaissance and vulnerability scanning to exploitation and post-compromise activities, resulting in complete system compromise with root privileges.",
    technologies: ["Kali Linux", "Metasploit", "Nmap", "Nessus", "VirtualBox"],
    features: [
      "Network reconnaissance and port enumeration with Nmap",
      "Vulnerability assessment and scanning with Nessus",
      "Apache Tomcat AJP exploitation (CVE-2020-1938, CVSS 9.8)",
      "OpenSSH weak RNG brute force (CVE-2008-0166, CVSS 7.8)",
      "Post-exploitation and persistence techniques",
      "Credential compromise and backdoor account creation",
      "Professional report with findings and remediation steps",
      "Isolated lab environment setup with VirtualBox",
    ],
    challenges:
      "Identifying exploitable vulnerabilities across multiple services, chaining exploits to escalate from service-level to root access, and documenting findings in a professional report format.",
    solutions:
      "Used Nmap and Nessus for thorough enumeration and vulnerability discovery, leveraged Metasploit Framework for reliable exploit delivery, escalated privileges through weak credential brute forcing, and documented the entire methodology with evidence and remediation recommendations.",
    githubUrl: "https://github.com/ei-sei/pentest-metasploitable-report",
    liveUrl: "",
    images: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
  },
  {
    id: 4,
    title: "Nginx, EC2 & Cloudflare DNS",
    shortDescription:
      "Deployed an Nginx web server on AWS EC2 with a custom domain configured via Cloudflare DNS, covering networking fundamentals from OSI model to cloud architecture.",
    fullDescription:
      "A hands-on DevOps project documenting the deployment of an Nginx web server on an AWS EC2 instance with a custom domain routed through Cloudflare DNS. Accompanied by comprehensive networking reference material covering the full spectrum from OSI and TCP/IP models to cloud networking patterns, container networking, and real-world diagnostic techniques.",
    technologies: ["AWS EC2", "Nginx", "Cloudflare", "DNS", "Linux", "Bash"],
    features: [
      "Nginx web server deployment on AWS EC2",
      "Custom domain configuration with Cloudflare DNS",
      "OSI and TCP/IP model analysis",
      "IP addressing, subnetting, and CIDR notation",
      "TCP, UDP, HTTP/HTTPS, SSH, DNS, and DHCP protocols",
      "AWS security groups and network ACLs",
      "NAT, port forwarding, and load balancing",
      "Network diagnostics with ping, traceroute, dig, ss, and tcpdump",
      "Docker and Kubernetes container networking",
    ],
    challenges:
      "Configuring DNS propagation through Cloudflare, securing the EC2 instance with appropriate security groups, and understanding the full networking stack from L1 to L7.",
    solutions:
      "Set up Cloudflare as the authoritative DNS provider with correct A records pointing to the EC2 public IP, configured AWS security groups to allow HTTP/HTTPS/SSH traffic, and documented networking fundamentals as reference material alongside the lab.",
    githubUrl: "https://github.com/ei-sei/DevOps/tree/networking",
    liveUrl: "",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400",
  },
  {
    id: 5,
    title: "Docker, Flask & Redis",
    shortDescription:
      "Multi-container web application with Flask and Redis visit counter, orchestrated with Docker Compose and load balanced via Nginx.",
    fullDescription:
      "A hands-on Docker lab documenting containerization fundamentals through a practical multi-container project. Builds a Flask web app that tracks page visits using Redis with AOF persistence, orchestrated via Docker Compose with an Nginx reverse proxy and horizontal scaling. Accompanied by six detailed notes covering Docker setup, core concepts, Dockerfiles, networking, volumes, and best practices.",
    technologies: [
      "Docker",
      "Docker Compose",
      "Flask",
      "Redis",
      "Nginx",
      "Python",
    ],
    features: [
      "Multi-container orchestration with Docker Compose",
      "Flask web app with Redis visit counter",
      "Redis AOF persistence across container restarts",
      "Nginx reverse proxy and load balancing",
      "Horizontal scaling with docker compose --scale",
      "Environment variable configuration via .env",
      "Custom Docker networking between containers",
      "Comprehensive notes on Docker fundamentals",
    ],
    challenges:
      "Configuring container-to-container networking, ensuring Redis data persistence across restarts, and setting up Nginx as a reverse proxy for multiple scaled Flask instances.",
    solutions:
      "Used Docker Compose networks for inter-container communication, enabled Redis AOF persistence for durability, configured Nginx upstream load balancing, and used environment variables to keep configuration flexible.",
    githubUrl: "https://github.com/ei-sei/DevOps/tree/docker-lab",
    liveUrl: "",
    images: [
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800",
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400",
  },
  {
    id: 6,
    title: "Quote Generator",
    shortDescription:
      "Containerized Flask app that serves random Stoic quotes with Redis-backed visit and quote request counters, deployed on AWS EC2 (brsti.uk).",
    fullDescription:
      "A Dockerized web application that delivers random Stoic quotes via a Flask API, backed by Redis for persistent visit and quote counters. Orchestrated with Docker Compose, fronted by an Nginx reverse proxy, and deployable to AWS EC2 with Redis AOF persistence ensuring data survives container restarts.",
    technologies: [
      "Python",
      "Flask",
      "Redis",
      "Nginx",
      "Docker",
      "Docker Compose",
      "AWS EC2",
    ],
    features: [
      "Random Stoic quote generation from a JSON dataset",
      "Global quote request counter stored in Redis",
      "Home page visitor tracking via Redis",
      "Redis AOF persistence with named Docker volumes",
      "Nginx reverse proxy configuration",
      "Multi-container orchestration with Docker Compose",
      "AWS EC2 cloud deployment support",
      "Environment variable configuration via .env",
    ],
    challenges:
      "Ensuring Redis data persists across container restarts, configuring Nginx as a reverse proxy for Flask, and deploying the multi-container stack to AWS EC2 with correct security group rules.",
    solutions:
      "Enabled Redis AOF with named Docker volumes for durability, configured Nginx upstream to proxy requests to Flask, and set up EC2 security groups to expose port 80 while keeping Redis internal to the Docker network.",
    githubUrl: "https://github.com/ei-sei/quotes",
    liveUrl: "",
    images: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
  },
];

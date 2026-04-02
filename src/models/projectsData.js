// Portfolio Projects Data Model — Sheikh Khaled Ahmed (github.com/ei-sei)
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
      "Containerized Flask app that serves random quotes with Redis-backed visit and quote request counters, deployed on AWS EC2 (https://brsti.uk/).",
    fullDescription:
      "A Dockerized web application that delivers random quotes via a Flask API, backed by Redis for persistent visit and quote counters. Orchestrated with Docker Compose, fronted by an Nginx reverse proxy, and deployable to AWS EC2 with Redis AOF persistence ensuring data survives container restarts.",
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
      "Random quote generation from a JSON dataset",
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
    images: ["/images/quote.png"],
    thumbnail: "/images/quote.png",
  },
  {
    id: 7,
    title: "AWS VPC & Networking",
    shortDescription:
      "Custom VPC with public/private subnets, bastion host access, NAT Gateway, and CloudWatch monitoring on AWS.",
    fullDescription:
      "An AWS infrastructure lab demonstrating how to build a custom Virtual Private Cloud with segregated public and private subnets, a bastion host for secure SSH access, NAT Gateway for private subnet egress, and CloudWatch Agent integration for monitoring. Covers security groups, route tables, IAM roles, and SSH agent forwarding through a jump server.",
    technologies: [
      "AWS VPC",
      "AWS EC2",
      "Internet Gateway",
      "NAT Gateway",
      "Security Groups",
      "Route Tables",
      "CloudWatch",
      "IAM",
    ],
    features: [
      "Custom VPC with 10.0.0.0/16 CIDR block",
      "Segregated public (10.0.1.0/24) and private (10.0.2.0/24) subnets",
      "Internet Gateway for public subnet access",
      "NAT Gateway with Elastic IP for private subnet egress",
      "Bastion host pattern with SSH agent forwarding",
      "Security groups restricting SSH and HTTP to specific IPs",
      "CloudWatch Agent for metrics and log collection",
      "IAM roles with CloudWatchAgentServerPolicy",
    ],
    challenges:
      "Configuring separate route tables for public and private subnets, implementing secure bastion host access with SSH agent forwarding, and setting up CloudWatch Agent with correct IAM permissions.",
    solutions:
      "Created distinct route tables directing public traffic through IGW and private traffic through NAT Gateway, configured SSH agent forwarding for secure key management across the bastion hop, and attached IAM roles with CloudWatchAgentServerPolicy to EC2 instances for monitoring.",
    githubUrl:
      "https://github.com/ei-sei/DevOps/tree/aws/lab/vpc-and-networking",
    liveUrl: "",
    images: ["/images/vpc-networking-architecture.png"],
    thumbnail: "/images/vpc-networking-architecture.png",
  },
  {
    id: 8,
    title: "AWS Application Load Balancer",
    shortDescription:
      "Highly available web infrastructure on AWS using an Application Load Balancer distributing traffic across multi-AZ EC2 instances, with HTTPS termination and Auto Scaling.",
    fullDescription:
      "An AWS infrastructure lab that deploys a scalable, fault-tolerant web application behind an Application Load Balancer. EC2 instances are deployed across multiple Availability Zones in private subnets, with the ALB in public subnets routing HTTP/HTTPS traffic. Extends the base setup with ACM-provisioned HTTPS, automatic HTTP-to-HTTPS redirect, Auto Scaling Groups for dynamic capacity, and CloudFlare DNS for custom domain management. Session Manager replaces the need for a bastion host or SSH key management.",
    technologies: [
      "AWS EC2",
      "Application Load Balancer",
      "Target Groups",
      "AWS Certificate Manager",
      "Auto Scaling Groups",
      "Security Groups",
      "IAM",
      "Systems Manager",
      "CloudFlare DNS",
    ],
    features: [
      "Multi-AZ EC2 deployment behind an internet-facing ALB",
      "Target Group health checks ensuring traffic only reaches healthy instances",
      "Security groups enforcing ALB-only access to EC2 instances",
      "HTTPS termination via ACM with automatic HTTP-to-HTTPS redirect",
      "Auto Scaling Group with min 2, max 4 instances for dynamic capacity",
      "Session Manager for secure shell access without SSH keys or bastion host",
      "Custom domain integration via CloudFlare DNS",
      "User data scripts serving differentiated HTML for traffic distribution verification",
    ],
    challenges:
      "Enforcing that EC2 instances only accept traffic from the ALB and not directly from the internet, provisioning and validating ACM certificates, and configuring Auto Scaling alongside the ALB target group.",
    solutions:
      "Layered security groups so only the ALB security group is whitelisted on EC2 instances, validated ACM certificates via DNS, and configured the Auto Scaling Group to register new instances automatically into the ALB target group.",
    githubUrl:
      "https://github.com/ei-sei/DevOps/tree/aws/lab/02-application-load-balancer",
    liveUrl: "",
    images: [
      "https://raw.githubusercontent.com/ei-sei/DevOps/aws/assets/02-lab/ALB-architecture.png",
    ],
    thumbnail:
      "https://raw.githubusercontent.com/ei-sei/DevOps/aws/assets/02-lab/ALB-architecture.png",
  },
  {
    id: 9,
    title: "S3, CloudFront & CDN Deployment",
    shortDescription:
      "Production-grade static website hosted on S3, distributed globally via CloudFront CDN with HTTPS, custom domain, security headers, and a GitHub Actions CI/CD pipeline.",
    fullDescription:
      "An AWS infrastructure lab deploying a static website through a full production pipeline: S3 for object storage, CloudFront for global edge caching and HTTPS delivery, ACM for SSL/TLS certificates, and Cloudflare DNS for custom domain management. Extended with GitHub Actions for automated S3 syncing and cache invalidation on every push, CloudFront Functions for injecting security headers (HSTS, X-Frame-Options, XSS protection) at the edge, and Lambda@Edge for clean URL rewriting without exposing file structure.",
    technologies: [
      "Amazon S3",
      "Amazon CloudFront",
      "AWS Certificate Manager",
      "CloudFront Functions",
      "Lambda@Edge",
      "IAM",
      "GitHub Actions",
      "Cloudflare DNS",
    ],
    features: [
      "Static website hosting via S3 with public access and custom error pages",
      "CloudFront distribution across global edge locations with HTTPS",
      "ACM SSL/TLS certificate with DNS validation via Cloudflare",
      "Automatic HTTP-to-HTTPS redirect on CloudFront",
      "GitHub Actions CI/CD pipeline for automated S3 sync and cache invalidation",
      "Security headers (HSTS, X-Frame-Options, X-Content-Type-Options) via CloudFront Functions",
      "Clean URL rewriting via Lambda@Edge (e.g. /about → /about/index.html)",
      "Scoped IAM service user for GitHub Actions with least-privilege S3 and CloudFront permissions",
    ],
    challenges:
      "ACM certificates must be provisioned in us-east-1 to work with CloudFront regardless of where other infrastructure lives. Cache staleness after deployments required automated invalidation. Clean URLs needed edge-level request rewriting without modifying the origin.",
    solutions:
      "Explicitly provisioned the ACM certificate in us-east-1, triggered CloudFront cache invalidation at the end of every GitHub Actions workflow, and used Lambda@Edge to intercept and rewrite extension-less requests before CloudFront served content.",
    githubUrl:
      "https://github.com/ei-sei/DevOps/tree/aws/lab/03-s3-cloudfront-route53",
    liveUrl: "",
    images: [
      "https://raw.githubusercontent.com/ei-sei/DevOps/aws/assets/03-lab/architecture.png",
      "https://raw.githubusercontent.com/ei-sei/DevOps/aws/assets/03-lab/test3.png",
    ],
    thumbnail:
      "https://raw.githubusercontent.com/ei-sei/DevOps/aws/assets/03-lab/architecture.png",
  },
];

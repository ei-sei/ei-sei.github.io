// Portfolio Projects Data Model
export const projectsData = [
  {
    id: 1,
    title: "AWS Infrastructure Automation",
    shortDescription:
      "Automated cloud infrastructure deployment using Terraform and AWS CloudFormation with CI/CD pipelines.",
    fullDescription:
      "This project demonstrates enterprise-grade infrastructure as code practices, automating the deployment of scalable AWS resources. It includes VPC configuration, auto-scaling groups, load balancers, and RDS databases with full backup and disaster recovery strategies.",
    technologies: ["AWS", "Terraform", "CloudFormation", "CI/CD", "Python"],
    features: [
      "Infrastructure as Code with Terraform modules",
      "Automated VPC and networking setup",
      "RDS multi-AZ database deployment",
      "Auto-scaling EC2 instances with load balancing",
      "CloudWatch monitoring and alerts",
      "Automated backup and disaster recovery",
      "Cost optimization and resource tagging",
    ],
    challenges:
      "Managing state files securely, handling environment differences, ensuring zero-downtime deployments, and optimizing cloud costs.",
    solutions:
      "Implemented remote Terraform state with S3 + DynamoDB locking, used environment-specific workspaces, deployed blue-green infrastructure, and implemented automated resource tagging for cost allocation.",
    githubUrl: "https://github.com",
    liveUrl: "https://aws-project.example.com",
    images: [
      "https://images.unsplash.com/photo-1664575197917-681e8a7a1db2?w=800",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    ],
    thumbnail: "https://images.unsplash.com/photo-1664575197917-681e8a7a1db2?w=400",
  },
  {
    id: 2,
    title: "Kubernetes Deployment Pipeline",
    shortDescription:
      "Complete CI/CD pipeline for containerized microservices using Docker, Kubernetes, and Jenkins.",
    fullDescription:
      "End-to-end deployment pipeline that automates building, testing, and deploying Docker containers to Kubernetes clusters. Includes automated scaling, health checks, rolling updates, and comprehensive monitoring.",
    technologies: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Helm"],
    features: [
      "Multi-stage Docker builds for optimization",
      "Jenkins pipeline with automated testing",
      "GitOps workflow with ArgoCD",
      "Kubernetes namespaces and RBAC",
      "Helm charts for application packaging",
      "Horizontal Pod Autoscaling (HPA)",
      "Service mesh integration with Istio",
      "Ingress configuration and SSL/TLS",
    ],
    challenges:
      "Managing container registry security, handling database migrations in K8s, ensuring pod resource limits, and debugging distributed systems issues.",
    solutions:
      "Integrated Harbor private registry with vulnerability scanning, implemented init containers for DB migrations, used resource quotas and LimitRanges, and deployed distributed tracing with Jaeger.",
    githubUrl: "https://github.com",
    liveUrl: "https://k8s-project.example.com",
    images: [
      "https://images.unsplash.com/photo-1617694712202-cd5a6d26c1f0?w=800",
      "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800",
    ],
    thumbnail: "https://images.unsplash.com/photo-1617694712202-cd5a6d26c1f0?w=400",
  },
  {
    id: 3,
    title: "Cloud Monitoring Dashboard",
    shortDescription:
      "Real-time monitoring dashboard for multi-cloud infrastructure using CloudWatch, Prometheus, and Grafana.",
    fullDescription:
      "Comprehensive observability solution aggregating metrics, logs, and traces from multiple cloud providers. Custom-built dashboard with real-time alerts, performance analytics, and automated incident response.",
    technologies: [
      "Grafana",
      "Prometheus",
      "CloudWatch",
      "Python",
      "InfluxDB",
    ],
    features: [
      "Real-time metrics visualization",
      "Custom alert rules and notifications",
      "Log aggregation and analysis",
      "Distributed tracing",
      "Performance dashboards",
      "Anomaly detection",
      "Custom metric exporters",
      "Webhook integrations",
    ],
    challenges:
      "Handling high-cardinality metrics, ensuring query performance, managing alert fatigue, and integrating multiple data sources.",
    solutions:
      "Implemented metric downsampling and retention policies, optimized Prometheus queries with recording rules, tuned alert thresholds with ML models, and built unified data ingestion layer.",
    githubUrl: "https://github.com",
    liveUrl: "https://monitoring.example.com",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      "https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=800",
    ],
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
  },
  {
    id: 4,
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
    id: 5,
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
    thumbnail: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400",
  },
  {
    id: 6,
    title: "Penetration Testing: Metasploitable Report",
    shortDescription:
      "Comprehensive penetration testing engagement against a Metasploitable VM, documenting two critical exploits achieving full root access.",
    fullDescription:
      "A professional penetration testing report documenting a security assessment against a Metasploitable virtual machine in an isolated VirtualBox lab environment. Demonstrates the full attack lifecycle from reconnaissance and vulnerability scanning to exploitation and post-compromise activities, resulting in complete system compromise with root privileges.",
    technologies: [
      "Kali Linux",
      "Metasploit",
      "Nmap",
      "Nessus",
      "VirtualBox",
    ],
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
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
  },
  {
    id: 7,
    title: "Nginx EC2 & Cloudflare DNS Lab",
    shortDescription:
      "Deployed an Nginx web server on AWS EC2 with a custom domain configured via Cloudflare DNS, covering networking fundamentals from OSI model to cloud architecture.",
    fullDescription:
      "A hands-on DevOps lab documenting the deployment of an Nginx web server on an AWS EC2 instance with a custom domain routed through Cloudflare DNS. Accompanied by comprehensive networking reference material covering the full spectrum from OSI and TCP/IP models to cloud networking patterns, container networking, and real-world diagnostic techniques.",
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
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400",
  },
];

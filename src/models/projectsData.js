// Portfolio Projects Data Model - Sheikh Khaled Ahmed (github.com/ei-sei)
export const projectsData = [
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
  {
    id: 10,
    title: "Serverless API with Lambda & API Gateway",
    shortDescription:
      "Fully serverless REST API on AWS accepting POST and GET requests to store and retrieve student records in DynamoDB, secured with API keys, usage plans, and WAF rate-limiting.",
    fullDescription:
      "An AWS serverless lab building a REST API entirely without servers. API Gateway exposes POST /submit and GET /students endpoints, proxying requests to Lambda functions written in Python. Lambda reads and writes from a DynamoDB table, auto-generating UUIDs and UTC timestamps on submission. IAM execution roles follow least-privilege principles with hand-crafted inline policies scoped to exact table ARNs and specific DynamoDB actions only. Extended with API key enforcement via usage plans (10 req/s rate limit, 1,000/month quota), and an AWS WAF Web ACL attached to the API Gateway stage for IP-based rate-limiting and DDoS protection.",
    technologies: [
      "AWS API Gateway",
      "AWS Lambda",
      "Amazon DynamoDB",
      "IAM",
      "Amazon CloudWatch",
      "AWS WAF",
      "Python",
      "boto3",
    ],
    features: [
      "POST /submit endpoint writing student records (name, module, UUID, timestamp) to DynamoDB",
      "GET /students endpoint scanning and returning all records as JSON",
      "Least-privilege IAM inline policies scoped to specific DynamoDB actions and table ARN",
      "API key enforcement with usage plans (10 req/s burst, 1,000 req/month quota)",
      "AWS WAF Web ACL with rate-limiting blocking IPs exceeding 100 requests per 5 minutes",
      "Lambda proxy integration passing raw HTTP request including headers and body",
      "CORS enabled on all API Gateway resources",
      "CloudWatch Logs for Lambda invocation observability",
    ],
    challenges:
      "Avoiding over-permissive IAM policies while keeping Lambda able to interact with DynamoDB, configuring API Gateway to enforce API key authentication, and attaching WAF to the API Gateway stage without impacting legitimate traffic.",
    solutions:
      "Hand-crafted inline IAM policies granting only the specific DynamoDB action needed (PutItem or Scan) scoped to the exact table ARN, configured usage plans with API key linkage on each method, and deployed a WAF Web ACL with a rate-based rule targeting the API Gateway stage.",
    githubUrl:
      "https://github.com/ei-sei/DevOps/tree/aws/lab/04-serverless-api-with-lambda-iam-api-gateway",
    liveUrl: "",
    images: [
      "https://raw.githubusercontent.com/ei-sei/DevOps/aws/assets/04-lab/architecture.png",
      "https://raw.githubusercontent.com/ei-sei/DevOps/aws/assets/04-lab/test3.png",
      "https://raw.githubusercontent.com/ei-sei/DevOps/aws/assets/04-lab/test-DynamoDB.png",
    ],
    thumbnail:
      "https://raw.githubusercontent.com/ei-sei/DevOps/aws/assets/04-lab/architecture.png",
  },
  {
    id: 13,
    featured: true,
    title: "Headscale VPN on AWS ECS",
    shortDescription:
      "Self-hosted, Tailscale-compatible VPN control plane running on AWS ECS Fargate, coordinating a 5-node WireGuard mesh, with fully automated Terraform infrastructure and OIDC-secured GitHub Actions CI/CD.",
    fullDescription:
      "A self-hosted deployment of Headscale, the open-source control plane alternative to Tailscale, running serverless on AWS ECS Fargate rather than relying on a third-party SaaS coordinator. The Go binary is built via a multi-stage Docker image and deployed into private subnets with no public IP, fronted by a Network Load Balancer handling both the TCP control-plane API and UDP WireGuard tunnel traffic. All infrastructure is provisioned through five Terraform modules (VPC, ECR, ACM, NLB, ECS), and GitHub Actions deploys via OIDC federation into a tightly scoped IAM role, so no long-lived AWS credentials are stored in CI. The mesh currently coordinates 5 connected nodes.",
    technologies: [
      "Go",
      "Docker",
      "Terraform",
      "AWS ECS Fargate",
      "AWS ECR",
      "AWS VPC",
      "Network Load Balancer",
      "AWS Certificate Manager",
      "CloudWatch",
      "IAM (OIDC)",
      "GitHub Actions",
      "Cloudflare DNS",
    ],
    features: [
      "Self-hosted, Tailscale-compatible VPN control plane avoiding third-party SaaS dependency",
      "Serverless Fargate deployment with tasks in private subnets and no public IP",
      "Network Load Balancer with separate target groups for TCP control-plane (8080) and UDP WireGuard (41641)",
      "Five reusable Terraform modules covering VPC, ECR, ACM, NLB, and ECS",
      "GitHub Actions CI/CD via OIDC federation, no stored AWS credentials",
      "PR-gated health-check workflow that builds, runs, and polls the container before merge",
      "Terraform fmt/validate CI gate on every infrastructure pull request",
      "ACM certificate validated automatically via Cloudflare DNS",
    ],
    challenges:
      "Load balancing a mixed-protocol service (TCP control-plane API plus UDP WireGuard traffic) on one service, avoiding long-lived AWS credentials in CI, and keeping ECS tasks fully private while still publicly reachable.",
    solutions:
      "Used a Network Load Balancer with two target groups since NLBs support UDP at layer 4, unlike an ALB. Replaced stored AWS credentials with GitHub OIDC federation into an IAM role trust-restricted to the main branch ref. Kept ECS tasks in private subnets with NAT Gateway egress, exposing only the NLB publicly.",
    githubUrl: "https://github.com/ei-sei/headscale-ecs",
    liveUrl: "",
    images: [
      "https://raw.githubusercontent.com/ei-sei/headscale-ecs/main/assets/architecture.png",
      "https://raw.githubusercontent.com/ei-sei/headscale-ecs/main/assets/ecs-flowchart.png",
      "https://raw.githubusercontent.com/ei-sei/headscale-ecs/main/assets/terraform-flowchart.png",
    ],
    thumbnail:
      "https://raw.githubusercontent.com/ei-sei/headscale-ecs/main/assets/architecture.png",
  },
  {
    id: 11,
    featured: true,
    title: "Watched",
    shortDescription:
      "Self-hosted, full-stack production app for tracking shows, movies, anime, and books. Built because nothing else did exactly what I wanted, running on my own VPS with real users.",
    fullDescription:
      "Watched exists because I wanted it to. It's a media tracker covering shows, movies, anime, and books, self-hosted on my own VPS, invite-only, and used daily. The backend is Go with PostgreSQL, the frontend React + TypeScript with Tailwind, and the whole stack ships via Docker Compose through a GitHub Actions CI/CD pipeline. Search fans out in parallel across four external APIs, deduplicates and ranks results before returning. The app is offline-first: once loaded, reads never hit the network and everything lives in IndexedDB via Dexie. It's installable as a PWA on mobile. Access is gated behind invite-only JWT auth with refresh token rotation. An admin console handles user and invite management, and a runtime feature flag system lets me toggle features without a deployment.",
    technologies: [
      "Go",
      "PostgreSQL",
      "React + TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "PWA / IndexedDB",
      "Docker",
      "GitHub Actions",
    ],
    apis: [
      "TMDB",
      "MAL / Jikan",
      "AniList",
      "Google Books / OpenLibrary",
    ],
    features: [
      "Multi-source search with parallel fan-out across 4 external APIs, deduplication, and ranking",
      "Offline-first reads via IndexedDB, reads never hit the network",
      "Installable PWA with service worker for mobile",
      "Invite-only auth with JWT access tokens and refresh token rotation",
      "Admin console for user management and invite generation",
      "Feature flags toggled at runtime by superadmin, no deployment required",
      "Stats and trending dashboards",
      "CI/CD pipeline via GitHub Actions deploying to self-hosted VPS through GHCR",
      "HTTPS via Let's Encrypt and certbot",
    ],
    challenges:
      "Multi-source search across APIs with inconsistent data structures, duplicates across providers, and varying response times. Offline-first sync required careful cache management to avoid stale reads. JWT refresh token rotation needed to be race-condition safe under concurrent requests.",
    solutions:
      "Parallel fan-out fires all API requests simultaneously; a deduplication and ranking layer normalises results before returning. Dexie/IndexedDB stores the full dataset locally so reads are instant and network-independent. Refresh token rotation uses a single in-flight promise so concurrent requests share one refresh cycle instead of competing.",
    githubUrl: "https://github.com/ei-sei/watched",
    liveUrl: "https://brsti.uk",
    demoVideo: "/videos/watched-demo.mp4",
    images: [
      "/images/watched-dashboard.png",
      "/images/watched-search.png",
      "/images/watched-trending.png",
      "/images/watched-watchlist.png",
    ],
    thumbnail: "/images/watched-dashboard.png",
  },
  {
    id: 12,
    title: "Threat Composer on ECS Fargate",
    shortDescription:
      "Containerized deployment of AWS Threat Composer on ECS Fargate using Terraform, GitHub Actions CI/CD, HTTPS via ACM, and a custom domain.",
    fullDescription:
      "A production-grade deployment of the open-source AWS Threat Composer threat modeling tool onto AWS ECS Fargate. Infrastructure is fully managed with Terraform split into five reusable modules covering VPC networking, ECR, ACM certificate provisioning, ALB, and ECS. A GitHub Actions pipeline builds the Docker image, pushes it to ECR, and re-deploys the Fargate service on every push to main. HTTPS is enforced via an ACM certificate validated through Cloudflare DNS, with traffic flowing through the ALB into containers running in private subnets.",
    technologies: [
      "Terraform",
      "Docker",
      "AWS ECS Fargate",
      "AWS ECR",
      "Application Load Balancer",
      "AWS Certificate Manager",
      "AWS VPC",
      "IAM",
      "GitHub Actions",
      "Cloudflare DNS",
    ],
    features: [
      "Five reusable Terraform modules: vpc, ecr, acm, alb, ecs",
      "ECS Fargate running containers in private subnets with NAT Gateway egress",
      "ALB handling HTTPS termination on port 443",
      "ACM certificate with DNS validation via Cloudflare",
      "GitHub Actions CI/CD pipeline building, pushing to ECR, and redeploying on every push to main",
      "Custom domain via Cloudflare CNAME pointing to ALB DNS endpoint",
      "Private subnet isolation with public ALB as the only ingress point",
    ],
    challenges:
      "ACM returned the certificate ARN before validation completed, causing the ALB listener to fail attaching a pending cert. The Cloudflare Terraform provider couldn't resolve within the ACM module due to a namespace issue. The custom subdomain had no DNS records pointing to the ALB.",
    solutions:
      "Fixed the cert timing by referencing the aws_acm_certificate_validation resource output instead of the cert directly, ensuring the ALB only attaches a fully issued certificate. Resolved the provider by explicitly specifying the full cloudflare/cloudflare namespace in the module. Added a Cloudflare CNAME record pointing the subdomain to the ALB DNS endpoint.",
    githubUrl: "https://github.com/ei-sei/threat-composer-ecs",
    liveUrl: "",
    images: [
      "https://raw.githubusercontent.com/ei-sei/threat-composer-ecs/main/assets/ecs-architecture.png",
    ],
    thumbnail:
      "https://raw.githubusercontent.com/ei-sei/threat-composer-ecs/main/assets/ecs-architecture.png",
  },
];

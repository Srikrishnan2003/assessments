// Cognizant GenC - Infrastructure: Cloud Computing Questions

export const infraCloudQuestions = [
    {
        id: 'ctsta-cloud-001',
        question: 'Explain IaaS, PaaS, and SaaS with examples.',
        answer: `### Cloud Service Models

### IaaS (Infrastructure as a Service)
**What:** Virtual infrastructure - servers, storage, networks
**You manage:** OS, applications, data
**Provider manages:** Physical hardware, virtualization

**Examples:**
- AWS EC2, S3
- Azure Virtual Machines
- Google Compute Engine

**Use case:** Full control needed, custom configurations

---

### PaaS (Platform as a Service)
**What:** Development platform with tools
**You manage:** Application code, data
**Provider manages:** OS, runtime, middleware, infrastructure

**Examples:**
- AWS Elastic Beanstalk
- Azure App Service
- Google App Engine
- Heroku

**Use case:** Focus on development, not infrastructure

---

### SaaS (Software as a Service)
**What:** Ready-to-use applications
**You manage:** Just use the software
**Provider manages:** Everything else

**Examples:**
- Google Workspace (Gmail, Docs)
- Microsoft 365
- Salesforce
- Slack, Zoom

**Use case:** End-user applications

---

### Comparison
| Feature | IaaS | PaaS | SaaS |
|---------|------|------|------|
| Control | High | Medium | Low |
| Flexibility | High | Medium | Low |
| Management | You | Shared | Provider |
| Cost | Pay per use | Moderate | Subscription |`
    },
    {
        id: 'ctsta-cloud-002',
        question: 'What are the main cloud providers and their key services?',
        answer: `### Major Cloud Providers

### AWS (Amazon Web Services)
| Service | Purpose |
|---------|---------|
| EC2 | Virtual servers |
| S3 | Object storage |
| RDS | Managed databases |
| Lambda | Serverless functions |
| EKS | Kubernetes |
| CloudFront | CDN |

### Azure (Microsoft)
| Service | Purpose |
|---------|---------|
| Virtual Machines | Compute |
| Blob Storage | Object storage |
| Azure SQL | Database |
| Azure Functions | Serverless |
| AKS | Kubernetes |
| Cosmos DB | NoSQL database |

### Google Cloud (GCP)
| Service | Purpose |
|---------|---------|
| Compute Engine | VMs |
| Cloud Storage | Object storage |
| Cloud SQL | Managed DB |
| Cloud Functions | Serverless |
| GKE | Kubernetes |
| BigQuery | Data warehouse |

### Market Share (2025)
1. AWS (~32%)
2. Azure (~23%)
3. Google Cloud (~10%)

### Choosing a Provider
- **AWS**: Most services, largest ecosystem
- **Azure**: Microsoft integration, enterprise
- **GCP**: Data/ML, Kubernetes native`
    },
    {
        id: 'ctsta-cloud-003',
        question: 'Explain cloud deployment models: Public, Private, Hybrid.',
        answer: `### Cloud Deployment Models

### Public Cloud
- Infrastructure owned by cloud provider
- Shared resources among multiple tenants
- Access over internet

**Pros:** Low cost, scalable, no maintenance
**Cons:** Less control, security concerns
**Examples:** AWS, Azure, GCP

---

### Private Cloud
- Dedicated infrastructure for one organization
- Can be on-premises or hosted
- Full control over resources

**Pros:** Security, compliance, customization
**Cons:** High cost, requires expertise
**Examples:** VMware, OpenStack, Azure Stack

---

### Hybrid Cloud
- Combination of public and private
- Data and apps can move between environments
- Flexibility based on workload needs

**Pros:** Balance of control and scalability
**Cons:** Complex management
**Examples:** AWS Outposts, Azure Arc

---

### Multi-Cloud
- Using multiple public cloud providers
- Avoid vendor lock-in
- Best services from each provider

---

### Comparison
| Model | Cost | Control | Scalability | Security |
|-------|------|---------|-------------|----------|
| Public | Low | Low | High | Standard |
| Private | High | High | Limited | High |
| Hybrid | Medium | Medium | High | Flexible |`
    },
    {
        id: 'ctsta-cloud-004',
        question: 'What is serverless computing? Explain with examples.',
        answer: `### Serverless Computing

### What is Serverless?
- No server management
- Pay only for execution time
- Auto-scaling built-in
- Event-driven architecture

### Key Characteristics
- **No provisioning**: Just deploy code
- **Auto-scale**: From 0 to thousands of instances
- **Pay per use**: Billed by milliseconds of execution
- **Stateless**: Each invocation is independent

### Popular Serverless Services
| Provider | Service |
|----------|---------|
| AWS | Lambda |
| Azure | Functions |
| GCP | Cloud Functions |
| Cloudflare | Workers |

### Use Cases
1. **API backends** - REST APIs without servers
2. **Data processing** - ETL, file processing
3. **Scheduled tasks** - Cron jobs
4. **Webhooks** - Event handling
5. **Chatbots** - Message processing

### Example: AWS Lambda
\`\`\`javascript
exports.handler = async (event) => {
    const name = event.name || 'World';
    return {
        statusCode: 200,
        body: JSON.stringify({ message: \`Hello, \${name}!\` })
    };
};
\`\`\`

### Pros and Cons
| Pros | Cons |
|------|------|
| No server management | Cold start latency |
| Auto-scaling | Limited execution time |
| Cost-effective | Vendor lock-in |
| Fast deployment | Debugging challenges |`
    },
    {
        id: 'ctsta-cloud-005',
        question: 'Explain containerization and Docker basics.',
        answer: `### Containerization

### What is a Container?
- Lightweight, standalone executable package
- Includes code, runtime, libraries, settings
- Runs consistently across environments

### Docker Basics
**Image**: Blueprint/template for container
**Container**: Running instance of an image
**Dockerfile**: Instructions to build image
**Registry**: Storage for images (Docker Hub)

### Dockerfile Example
\`\`\`dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
\`\`\`

### Common Commands
\`\`\`bash
docker build -t myapp .          # Build image
docker run -p 3000:3000 myapp    # Run container
docker ps                         # List containers
docker stop <id>                  # Stop container
docker images                     # List images
docker pull nginx                 # Download image
\`\`\`

### VM vs Container
| Feature | VM | Container |
|---------|-----|-----------|
| Size | GBs | MBs |
| Startup | Minutes | Seconds |
| OS | Full OS | Shared kernel |
| Isolation | Strong | Process level |
| Overhead | High | Low |

### Benefits
- Consistent environments (dev = prod)
- Fast deployment
- Resource efficient
- Microservices friendly`
    },
    {
        id: 'ctsta-cloud-006',
        question: 'What is Kubernetes? Explain key concepts.',
        answer: `### Kubernetes (K8s)

### What is Kubernetes?
- Container orchestration platform
- Manages containerized workloads
- Automates deployment, scaling, operations

### Key Components
| Component | Purpose |
|-----------|---------|
| Pod | Smallest deployable unit |
| Node | Worker machine (VM/physical) |
| Cluster | Set of nodes |
| Deployment | Manages replica sets |
| Service | Network endpoint for pods |
| Namespace | Virtual cluster |

### Pod
- One or more containers
- Shared network/storage
- Ephemeral (can be replaced)

### Deployment
\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:1.0
        ports:
        - containerPort: 8080
\`\`\`

### Service Types
- **ClusterIP**: Internal only
- **NodePort**: External via node port
- **LoadBalancer**: Cloud load balancer

### Benefits
- Auto-healing (restarts failed pods)
- Auto-scaling
- Rolling updates
- Service discovery`
    },
    {
        id: 'ctsta-cloud-007',
        question: 'What is a CDN and how does it work?',
        answer: `### CDN (Content Delivery Network)

### What is CDN?
- Network of servers distributed globally
- Caches content closer to users
- Reduces latency, improves load times

### How It Works
1. User requests content (image, video, file)
2. Request routed to nearest edge server
3. If cached → serve immediately
4. If not cached → fetch from origin, cache, serve

### Popular CDN Providers
| Provider | Known For |
|----------|-----------|
| Cloudflare | Free tier, security |
| AWS CloudFront | AWS integration |
| Akamai | Enterprise, largest |
| Fastly | Edge computing |
| Azure CDN | Microsoft integration |

### What CDNs Cache
- Static files (images, CSS, JS)
- Videos and media
- API responses (with proper headers)
- Entire websites

### Benefits
| Benefit | Description |
|---------|-------------|
| Speed | Reduced latency |
| Scalability | Handle traffic spikes |
| Security | DDoS protection |
| Availability | Multiple fallback servers |
| Cost | Reduced bandwidth from origin |

### Cache Headers
\`\`\`
Cache-Control: max-age=86400     # Cache for 1 day
Cache-Control: no-cache          # Validate before use
Cache-Control: no-store          # Never cache
\`\`\``
    },
    {
        id: 'ctsta-cloud-008',
        question: 'Explain load balancing and its types.',
        answer: `### Load Balancing

### What is Load Balancing?
- Distributes traffic across multiple servers
- Improves availability and performance
- Prevents single point of failure

### Load Balancer Types
| Type | Layer | Use Case |
|------|-------|----------|
| L4 (Transport) | TCP/UDP | High performance |
| L7 (Application) | HTTP/HTTPS | Content routing |

### Load Balancing Algorithms

**Round Robin**
- Requests distributed sequentially
- Simple, equal distribution
- Ignores server capacity

**Weighted Round Robin**
- Servers have different weights
- More powerful servers get more traffic

**Least Connections**
- Routes to server with fewest active connections
- Good for varying request durations

**IP Hash**
- Same client always goes to same server
- Good for session persistence

### Health Checks
- Regularly check server status
- Remove unhealthy servers from pool
- Add back when healthy

### Cloud Load Balancers
| Provider | Service |
|----------|---------|
| AWS | Elastic Load Balancer (ALB, NLB) |
| Azure | Azure Load Balancer |
| GCP | Cloud Load Balancing |

### Benefits
- High availability
- Scalability
- SSL termination
- DDoS protection`
    },
    {
        id: 'ctsta-cloud-009',
        question: 'What is auto-scaling in cloud computing?',
        answer: `### Auto-Scaling

### What is Auto-Scaling?
- Automatically adjust resources based on demand
- Scale up (add resources) when load increases
- Scale down (remove resources) when load decreases

### Types of Scaling
| Type | Description |
|------|-------------|
| Vertical (Scale Up) | Increase server size (CPU, RAM) |
| Horizontal (Scale Out) | Add more servers |

### Scaling Triggers
- **CPU utilization** > 70%
- **Memory usage** > 80%
- **Request count** > threshold
- **Queue length** too long
- **Schedule** (time-based)

### AWS Auto Scaling Example
\`\`\`yaml
# Scaling Policy
- Scale out: If CPU > 70% for 5 min, add 2 instances
- Scale in: If CPU < 30% for 10 min, remove 1 instance
- Min: 2 instances
- Max: 10 instances
\`\`\`

### Scaling Components
1. **Metrics** - What to monitor
2. **Thresholds** - When to act
3. **Actions** - What to do
4. **Cooldown** - Wait before next action

### Best Practices
- Start with conservative thresholds
- Use cooldown periods
- Set min/max limits
- Test your scaling policies
- Monitor costs

### Benefits
- Cost optimization (pay for what you use)
- Performance (handle traffic spikes)
- Availability (no manual intervention)`
    },
    {
        id: 'ctsta-cloud-010',
        question: 'Explain cloud security best practices.',
        answer: `### Cloud Security Best Practices

### 1. Identity and Access Management (IAM)
- Principle of least privilege
- Multi-factor authentication (MFA)
- Role-based access control (RBAC)
- Regular access reviews

### 2. Data Protection
- Encrypt data at rest
- Encrypt data in transit (HTTPS/TLS)
- Key management (use managed services)
- Regular backups

### 3. Network Security
- Virtual Private Cloud (VPC)
- Security groups / firewalls
- Private subnets for sensitive resources
- VPN for remote access

### 4. Monitoring and Logging
- Enable cloud trail / audit logs
- Set up alerts for anomalies
- Regular log review
- SIEM integration

### 5. Compliance
- Follow industry standards (SOC 2, HIPAA, GDPR)
- Regular security assessments
- Documentation

### Common Security Tools
| Provider | Tools |
|----------|-------|
| AWS | IAM, KMS, CloudTrail, GuardDuty |
| Azure | Azure AD, Key Vault, Sentinel |
| GCP | Cloud IAM, Cloud Armor, Security Center |

### Security Checklist
- [ ] Enable MFA for all users
- [ ] Encrypt all sensitive data
- [ ] Configure network isolation
- [ ] Enable logging and monitoring
- [ ] Regular patching and updates
- [ ] Incident response plan`
    }
];

export default infraCloudQuestions;

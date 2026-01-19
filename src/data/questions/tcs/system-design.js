// TCS Prime Interview - System Design & Architecture Questions

export const systemDesignQuestions = [
    {
        id: 'tcs085',
        question: 'Explain MVC architecture',
        answer: `### Simple Explanation
MVC (Model-View-Controller) is a design pattern that separates an application into three connected parts. Each part has one job, making code organized and maintainable.

### Real-World Analogy
Like a restaurant:
- **Model (Kitchen)**: Stores recipes, ingredients, prepares food - the data and logic
- **View (Menu/Table)**: What customers see - plates, presentations, the UI
- **Controller (Waiter)**: Takes orders, communicates between kitchen and customers - handles input

### Technical Details
| Component | Responsibility | Example |
|-----------|----------------|---------|
| **Model** | Data and business logic | User class, database operations |
| **View** | Display/UI | HTML templates, React components |
| **Controller** | Handle input, coordinate | Route handlers, event listeners |

**Data Flow:**
1. User interacts with View (clicks button)
2. Controller receives and processes input
3. Controller updates Model
4. Model notifies View of changes
5. View re-renders with new data

### Code Example
\`\`\`javascript
// MODEL - Data and logic
class UserModel {
  constructor() {
    this.users = [];
  }
  
  addUser(user) {
    this.users.push(user);
    return user;
  }
  
  getUsers() {
    return this.users;
  }
  
  findUser(id) {
    return this.users.find(u => u.id === id);
  }
}

// VIEW - Display logic (React example)
function UserListView({ users, onAddUser }) {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={onAddUser}>Add User</button>
    </div>
  );
}

// CONTROLLER - Handles interaction
class UserController {
  constructor(model) {
    this.model = model;
  }
  
  handleAddUser(userData) {
    // Validate input
    if (!userData.name) {
      throw new Error('Name required');
    }
    
    // Update model
    const user = this.model.addUser({
      id: Date.now(),
      ...userData
    });
    
    return user;
  }
  
  handleGetUsers() {
    return this.model.getUsers();
  }
}

// Express.js MVC structure:
// /models/User.js      - Data layer
// /views/users.ejs     - Templates
// /controllers/userController.js - Route handlers
// /routes/users.js     - Route definitions
\`\`\`

### Why It Matters
MVC promotes separation of concerns - each part can be developed, tested, and modified independently. It's the foundation of many frameworks (Rails, Spring, Express, Laravel).`
    },
    {
        id: 'tcs086',
        question: 'What is microservices architecture?',
        answer: `### Simple Explanation
Microservices breaks an application into small, independent services. Each service does one thing, runs in its own process, and communicates with others via APIs. Think of it as building with LEGO blocks instead of carving from a single stone.

### Real-World Analogy
A monolith is like one chef cooking an entire meal alone - if they're sick, nothing gets done. Microservices is like a restaurant with specialized stations - one for appetizers, one for mains, one for desserts. Each works independently, and if one station is slow, others continue.

### Technical Details
| Aspect | Monolith | Microservices |
|--------|----------|---------------|
| **Deployment** | All or nothing | Deploy services independently |
| **Scaling** | Scale entire app | Scale only what's needed |
| **Technology** | Single tech stack | Each service can use different tech |
| **Failure** | One bug affects all | Isolated failures |
| **Complexity** | Simple initially | Complex infrastructure |

### Code Example
\`\`\`javascript
// MONOLITH - Everything in one app
// app.js does users, orders, payments, emails, etc.

// MICROSERVICES - Separate apps

// 1. USER SERVICE (port 3001)
const userService = express();
userService.get('/users/:id', (req, res) => {
  const user = db.users.find(req.params.id);
  res.json(user);
});

// 2. ORDER SERVICE (port 3002)
const orderService = express();
orderService.post('/orders', async (req, res) => {
  // Get user from user service
  const user = await fetch('http://user-service:3001/users/' + req.body.userId);
  
  // Create order
  const order = await db.orders.create(req.body);
  
  // Notify payment service
  await fetch('http://payment-service:3003/process', {
    method: 'POST',
    body: JSON.stringify({ orderId: order.id, amount: order.total })
  });
  
  res.json(order);
});

// 3. PAYMENT SERVICE (port 3003)
const paymentService = express();
paymentService.post('/process', async (req, res) => {
  const result = await processPayment(req.body);
  
  // Publish event for other services
  messageQueue.publish('payment.completed', result);
  
  res.json(result);
});

// 4. NOTIFICATION SERVICE (listens to events)
messageQueue.subscribe('payment.completed', async (event) => {
  await sendEmail(event.userId, 'Payment successful!');
});

// Docker Compose for deployment:
/*
services:
  user-service:
    build: ./user-service
    ports: ["3001:3001"]
  order-service:
    build: ./order-service
    ports: ["3002:3002"]
  payment-service:
    build: ./payment-service
    ports: ["3003:3003"]
*/
\`\`\`

### Why It Matters
Microservices enable teams to work independently, deploy frequently, and scale efficiently. Essential for large-scale systems like Netflix, Amazon, and Uber.`
    },
    {
        id: 'tcs087',
        question: 'Explain monolithic vs microservices',
        answer: `### Simple Explanation
- **Monolith**: One big application containing everything
- **Microservices**: Many small, focused applications working together

### Real-World Analogy
- **Monolith**: A smartphone - everything built into one device. Great when it works, but if the camera breaks, the whole phone needs repair.
- **Microservices**: A home entertainment system - separate TV, speakers, game console. Each can be upgraded or replaced independently.

### Technical Details
| Aspect | Monolith | Microservices |
|--------|----------|---------------|
| **Development** | Faster startup | Slower initial setup |
| **Deployment** | One deployment | Multiple deployments |
| **Testing** | End-to-end simpler | Integration testing complex |
| **Debugging** | Easier (one codebase) | Distributed tracing needed |
| **Team Size** | Small teams | Large, multiple teams |
| **Scalability** | Scale entire app | Scale individual services |
| **Reliability** | Single point of failure | Fault isolation |

### Code Example
\`\`\`javascript
// MONOLITH STRUCTURE
/*
/my-app
  /src
    /controllers
      userController.js
      orderController.js
      paymentController.js    // All in one project
    /models
    /services
    /routes
  app.js
  package.json              // One package.json
*/

// Everything deployed together
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);
app.use('/payments', paymentRoutes);
app.listen(3000);  // Single server


// MICROSERVICES STRUCTURE
/*
/user-service
  /src
    app.js
  Dockerfile
  package.json

/order-service
  /src
    app.js
  Dockerfile
  package.json

/payment-service
  /src
    app.js
  Dockerfile
  package.json

docker-compose.yml          // Orchestrates all services
*/

// Each service is independent
// user-service/app.js
app.listen(3001);

// order-service/app.js
app.listen(3002);

// payment-service/app.js
app.listen(3003);


// WHEN TO CHOOSE WHAT?

// Choose MONOLITH when:
// - Small team (less than 10 developers)
// - Startup MVP / proof of concept
// - Simple domain
// - Speed to market is priority

// Choose MICROSERVICES when:
// - Large organization with multiple teams
// - Need independent scaling
// - High availability requirements
// - Different parts need different technologies
\`\`\`

### Why It Matters
Understanding trade-offs helps you make the right architecture decision. Many companies start monolith and evolve to microservices as they grow (Netflix, Amazon, Twitter).`
    },
    {
        id: 'tcs088',
        question: 'What is load balancing?',
        answer: `### Simple Explanation
Load balancing distributes incoming traffic across multiple servers. Instead of one server handling everything (and potentially crashing), requests are spread evenly to maintain performance and availability.

### Real-World Analogy
Like checkout lanes at a supermarket. Instead of everyone queuing at one register, customers are distributed across multiple lanes. If one register closes, others continue serving.

### Technical Details
**Load Balancing Algorithms:**
| Algorithm | Description | Best For |
|-----------|-------------|----------|
| **Round Robin** | Sequential rotation | Equal capacity servers |
| **Least Connections** | Send to least busy | Varying request lengths |
| **IP Hash** | Same client → same server | Session persistence |
| **Weighted** | More traffic to stronger servers | Mixed server capacities |

### Code Example
\`\`\`javascript
// NGINX Load Balancer Configuration
/*
http {
    upstream backend {
        # Round Robin (default)
        server server1.example.com;
        server server2.example.com;
        server server3.example.com;
    }
    
    # Least Connections
    upstream backend_lc {
        least_conn;
        server server1.example.com;
        server server2.example.com;
    }
    
    # Weighted Distribution
    upstream backend_weighted {
        server server1.example.com weight=3;  # Gets 3x traffic
        server server2.example.com weight=1;
    }
    
    # IP Hash (sticky sessions)
    upstream backend_sticky {
        ip_hash;
        server server1.example.com;
        server server2.example.com;
    }
    
    server {
        listen 80;
        location / {
            proxy_pass http://backend;
        }
    }
}
*/

// Node.js Application Load Balancing with PM2
/*
pm2 start app.js -i max  // Starts one instance per CPU core
*/

// Health Checks - Remove unhealthy servers
/*
upstream backend {
    server server1.example.com max_fails=3 fail_timeout=30s;
    server server2.example.com max_fails=3 fail_timeout=30s;
    server backup.example.com backup;  // Only used if others fail
}
*/

// AWS Application Load Balancer (Terraform)
/*
resource "aws_lb" "main" {
  name               = "my-alb"
  internal           = false
  load_balancer_type = "application"
  
  subnets = ["subnet-1", "subnet-2"]
}

resource "aws_lb_target_group" "main" {
  name     = "my-target-group"
  port     = 80
  protocol = "HTTP"
  vpc_id   = "vpc-123"
  
  health_check {
    path                = "/health"
    healthy_threshold   = 2
    unhealthy_threshold = 10
  }
}
*/
\`\`\`

### Why It Matters
Load balancing is essential for:
- **High availability** - No single point of failure
- **Scalability** - Add servers to handle more traffic
- **Performance** - Distribute workload evenly
- **Rolling deployments** - Update servers without downtime`
    },
    {
        id: 'tcs089',
        question: 'Explain caching strategies',
        answer: `### Simple Explanation
Caching stores frequently accessed data in fast storage (memory) to avoid repeated expensive operations (database queries, API calls). It's like keeping commonly used items on your desk instead of walking to the filing cabinet each time.

### Real-World Analogy
- **No cache**: Library visit for every book reference
- **Cache**: Keep favorite reference books on your desk
- **Cache invalidation**: Returning outdated books and getting new editions

### Technical Details
| Strategy | Description | Use Case |
|----------|-------------|----------|
| **Cache-Aside** | App checks cache, then database | Read-heavy, cache misses acceptable |
| **Write-Through** | Write to cache AND database | Strong consistency needed |
| **Write-Behind** | Write to cache, async to database | Write-heavy, eventual consistency ok |
| **Refresh-Ahead** | Preemptively refresh before expiry | Predictable access patterns |

### Code Example
\`\`\`javascript
// CACHE-ASIDE (Lazy Loading)
async function getUser(userId) {
  // 1. Check cache first
  const cached = await redis.get(\`user:\${userId}\`);
  if (cached) {
    return JSON.parse(cached);  // Cache HIT
  }
  
  // 2. Cache MISS - get from database
  const user = await db.users.findById(userId);
  
  // 3. Store in cache for future requests
  await redis.setex(\`user:\${userId}\`, 3600, JSON.stringify(user));
  
  return user;
}

// WRITE-THROUGH
async function updateUser(userId, data) {
  // 1. Update database
  const user = await db.users.update(userId, data);
  
  // 2. Update cache immediately
  await redis.setex(\`user:\${userId}\`, 3600, JSON.stringify(user));
  
  return user;
}

// WRITE-BEHIND (Async write to DB)
async function updateUserFast(userId, data) {
  // 1. Update cache immediately (fast response)
  await redis.setex(\`user:\${userId}\`, 3600, JSON.stringify(data));
  
  // 2. Queue database update for later (async)
  await messageQueue.publish('user.update', { userId, data });
  
  return data;
}

// Cache Invalidation
async function deleteUser(userId) {
  await db.users.delete(userId);
  await redis.del(\`user:\${userId}\`);  // Remove from cache
}

// TTL (Time To Live) - Auto-expiry
await redis.setex('key', 300, 'value');  // Expires in 5 minutes

// Cache Patterns in Express.js
const cacheMiddleware = (duration) => {
  return async (req, res, next) => {
    const key = req.originalUrl;
    const cached = await redis.get(key);
    
    if (cached) {
      return res.json(JSON.parse(cached));
    }
    
    // Store original res.json
    const originalJson = res.json.bind(res);
    res.json = async (data) => {
      await redis.setex(key, duration, JSON.stringify(data));
      return originalJson(data);
    };
    
    next();
  };
};

app.get('/products', cacheMiddleware(300), getProducts);
\`\`\`

### Why It Matters
Caching can reduce database load by 90%+ and improve response times from seconds to milliseconds. Essential for high-traffic applications.`
    },
    {
        id: 'tcs090',
        question: 'What is CDN?',
        answer: `### Simple Explanation
A CDN (Content Delivery Network) is a network of servers distributed globally that cache and serve static content (images, CSS, JavaScript) from locations close to users. Instead of fetching a file from New York to Tokyo, it's served from a nearby Tokyo server.

### Real-World Analogy
Like Amazon warehouses. Instead of shipping every order from one central location, products are stored in local warehouses. Users get faster delivery from the nearest warehouse.

### Technical Details
| Without CDN | With CDN |
|-------------|----------|
| All requests hit origin server | Static files served from edge |
| High latency for distant users | Low latency (nearby server) |
| Origin handles all traffic | Traffic distributed |
| Single point of failure | Multiple redundant nodes |

**What to put on CDN:**
- ✅ Images, videos, fonts
- ✅ CSS, JavaScript bundles
- ✅ Static HTML pages
- ❌ Dynamic/personalized content
- ❌ Real-time data

### Code Example
\`\`\`javascript
// Setting up Cloudflare CDN in Next.js
// next.config.js
module.exports = {
  images: {
    domains: ['your-cdn.cloudflare.com'],
    loader: 'cloudinary',  // or 'imgix', 'akamai'
  },
  
  // Static assets automatically use CDN
  assetPrefix: 'https://cdn.yoursite.com',
};

// Using CDN URLs in HTML
/*
<!-- Without CDN - served from your server -->
<img src="/images/logo.png" />

<!-- With CDN - served from edge -->
<img src="https://cdn.yoursite.com/images/logo.png" />

<!-- React/Next.js -->
<Image 
  src="/images/hero.jpg" 
  alt="Hero"
  width={1200}
  height={600}
/>  // Next.js Image component auto-optimizes
*/

// CDN Cache Headers
app.use('/static', express.static('public', {
  maxAge: '1y',  // Cache for 1 year
  etag: true,
  lastModified: true,
}));

// Cache-Control header for CDN
res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');

// Versionining for cache busting
// Old: /styles.css
// New: /styles.abc123.css  (hash changes on file change)

// AWS CloudFront Configuration (Terraform)
/*
resource "aws_cloudfront_distribution" "cdn" {
  origin {
    domain_name = "my-bucket.s3.amazonaws.com"
    origin_id   = "S3-my-bucket"
  }
  
  default_cache_behavior {
    target_origin_id       = "S3-my-bucket"
    viewer_protocol_policy = "redirect-to-https"
    
    allowed_methods = ["GET", "HEAD"]
    cached_methods  = ["GET", "HEAD"]
    
    default_ttl = 86400    # 1 day
    max_ttl     = 31536000 # 1 year
  }
}
*/

// Popular CDN Providers:
// - Cloudflare (free tier available)
// - AWS CloudFront
// - Akamai
// - Fastly
// - Vercel Edge Network (for Next.js)
\`\`\`

### Why It Matters
CDNs dramatically improve page load times (especially for global users), reduce origin server load, provide DDoS protection, and improve SEO (page speed is a ranking factor).`
    },
];

export default systemDesignQuestions;

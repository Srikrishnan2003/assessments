// Cognizant GenC - Infrastructure: HTTP Methods & Codes Questions

export const infraHttpQuestions = [
    {
        id: 'ctsta-http-001',
        question: 'Explain HTTP methods (GET, POST, PUT, DELETE, PATCH) with use cases.',
        answer: `### HTTP Methods

| Method | Purpose | Idempotent | Body | Use Case |
|--------|---------|------------|------|----------|
| GET | Retrieve data | Yes | No | Fetch user profile |
| POST | Create resource | No | Yes | Create new user |
| PUT | Replace resource | Yes | Yes | Update entire user |
| PATCH | Partial update | No | Yes | Update user email only |
| DELETE | Remove resource | Yes | No | Delete a user |

### Examples
\`\`\`
GET /api/users              → Get all users
GET /api/users/123          → Get user with ID 123
POST /api/users             → Create new user (body contains user data)
PUT /api/users/123          → Replace user 123 completely
PATCH /api/users/123        → Update specific fields of user 123
DELETE /api/users/123       → Delete user 123
\`\`\`

### Key Concepts
- **Idempotent**: Same request multiple times = same result
- **Safe**: GET, HEAD, OPTIONS don't modify data
- **POST vs PUT**: POST creates, PUT replaces entire resource
- **PUT vs PATCH**: PUT requires complete resource, PATCH only changes`
    },
    {
        id: 'ctsta-http-002',
        question: 'Explain HTTP status codes with examples.',
        answer: `### HTTP Status Code Categories

| Range | Category | Meaning |
|-------|----------|---------|
| 1xx | Informational | Request received, continuing |
| 2xx | Success | Request successful |
| 3xx | Redirection | Further action needed |
| 4xx | Client Error | Error in request |
| 5xx | Server Error | Server failed |

### Common Status Codes

**2xx Success**
- \`200 OK\` - Request successful
- \`201 Created\` - Resource created (after POST)
- \`204 No Content\` - Success but no response body (DELETE)

**3xx Redirection**
- \`301 Moved Permanently\` - URL changed permanently
- \`302 Found\` - Temporary redirect
- \`304 Not Modified\` - Use cached version

**4xx Client Errors**
- \`400 Bad Request\` - Invalid syntax/data
- \`401 Unauthorized\` - Authentication required
- \`403 Forbidden\` - Authenticated but no permission
- \`404 Not Found\` - Resource doesn't exist
- \`405 Method Not Allowed\` - Wrong HTTP method
- \`409 Conflict\` - Resource conflict (duplicate)
- \`422 Unprocessable Entity\` - Validation failed

**5xx Server Errors**
- \`500 Internal Server Error\` - Generic server error
- \`502 Bad Gateway\` - Invalid response from upstream
- \`503 Service Unavailable\` - Server temporarily down
- \`504 Gateway Timeout\` - Upstream server timeout`
    },
    {
        id: 'ctsta-http-003',
        question: 'Explain REST API principles.',
        answer: `### REST (Representational State Transfer) Principles

### 1. Client-Server Separation
- Client handles UI, Server handles data
- Improves portability and scalability

### 2. Statelessness
- Each request contains all information
- No session stored on server

### 3. Uniform Interface
- Consistent URL patterns
- Standard HTTP methods
- HATEOAS (Hypermedia links)

### 4. Resource-Based URLs
\`\`\`
Good:
GET /api/users                → All users
GET /api/users/123            → Single user
GET /api/users/123/orders     → User's orders
POST /api/users               → Create user

Bad:
GET /api/getUser?id=123
POST /api/createUser
GET /api/getAllUsersOrders
\`\`\`

### 5. Use Proper HTTP Methods
| Action | Method | URL |
|--------|--------|-----|
| List | GET | /resources |
| Read | GET | /resources/:id |
| Create | POST | /resources |
| Update | PUT/PATCH | /resources/:id |
| Delete | DELETE | /resources/:id |

### 6. Proper Response Codes
- Use appropriate status codes
- Return meaningful error messages`
    },
    {
        id: 'ctsta-http-004',
        question: 'What is the difference between HTTP and HTTPS?',
        answer: `### HTTP vs HTTPS

| Feature | HTTP | HTTPS |
|---------|------|-------|
| Port | 80 | 443 |
| Security | None | SSL/TLS encrypted |
| URL | http:// | https:// |
| SEO | Lower ranking | Higher ranking |
| Speed | Faster | Slightly slower |

### How HTTPS Works
1. **TLS Handshake**
   - Client requests secure connection
   - Server sends SSL certificate
   - Client verifies certificate
   - Session keys exchanged

2. **Encryption**
   - All data encrypted in transit
   - Prevents man-in-the-middle attacks
   - Cannot be read if intercepted

### SSL Certificate Types
| Type | Validation | Use Case |
|------|------------|----------|
| DV (Domain) | Domain ownership | Personal sites |
| OV (Organization) | Business verified | Business sites |
| EV (Extended) | Thorough verification | Banks, e-commerce |

### Why HTTPS is Important
- Data privacy (passwords, credit cards)
- User trust (padlock icon)
- SEO ranking factor
- Required for many browser features`
    },
    {
        id: 'ctsta-http-005',
        question: 'Explain HTTP headers with examples.',
        answer: `### Common HTTP Headers

### Request Headers
\`\`\`
Host: api.example.com
Accept: application/json
Content-Type: application/json
Authorization: Bearer <token>
User-Agent: Mozilla/5.0...
Accept-Language: en-US
Cookie: session=abc123
\`\`\`

### Response Headers
\`\`\`
Content-Type: application/json
Content-Length: 1024
Cache-Control: max-age=3600
Set-Cookie: session=xyz789
Access-Control-Allow-Origin: *
Location: /new-url (for redirects)
\`\`\`

### Important Headers

| Header | Purpose |
|--------|---------|
| Content-Type | MIME type of body |
| Authorization | Authentication credentials |
| Cache-Control | Caching directives |
| CORS headers | Cross-origin permissions |
| Accept | Expected response format |

### Content-Type Examples
\`\`\`
application/json
application/x-www-form-urlencoded
multipart/form-data
text/html
text/plain
\`\`\`

### Authorization Types
\`\`\`
Basic: Base64 encoded username:password
Bearer: Token-based authentication
API Key: X-API-Key: your-api-key
\`\`\``
    },
    {
        id: 'ctsta-http-006',
        question: 'What is CORS and how does it work?',
        answer: `### CORS (Cross-Origin Resource Sharing)

### What is Origin?
Origin = Protocol + Domain + Port
- \`http://example.com:80\` and \`https://example.com:443\` are different origins

### Same-Origin Policy
- Browsers block requests to different origins by default
- Prevents malicious scripts from accessing other sites

### How CORS Works
1. **Simple Request**
   - GET, POST with standard headers
   - Browser adds Origin header
   - Server responds with allow headers

2. **Preflight Request (OPTIONS)**
   - For complex requests (PUT, DELETE, custom headers)
   - Browser sends OPTIONS first
   - Server responds with allowed methods/headers

### CORS Headers
\`\`\`
Access-Control-Allow-Origin: https://mysite.com
Access-Control-Allow-Origin: * (any origin)
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 86400
\`\`\`

### Common CORS Errors
\`\`\`
❌ No 'Access-Control-Allow-Origin' header
❌ Method not allowed
❌ Header not allowed
\`\`\`

### Solutions
- Configure server to send proper CORS headers
- Use proxy in development
- API Gateway/Load Balancer configuration`
    },
    {
        id: 'ctsta-http-007',
        question: 'What are cookies, sessions, and tokens? Compare them.',
        answer: `### Authentication Mechanisms

### Cookies
- Small data stored in browser
- Automatically sent with requests
- Can be HTTP-only (not accessible by JS)
- Used for session management

\`\`\`
Set-Cookie: session_id=abc123; HttpOnly; Secure; SameSite=Strict
\`\`\`

### Sessions
- Server-side storage of user data
- Session ID stored in cookie
- Data stored on server (memory, database, Redis)

**Flow:**
1. User logs in → Server creates session
2. Session ID sent in cookie
3. Each request includes session ID
4. Server retrieves user data from session

### Tokens (JWT)
- Self-contained authentication
- Stateless (no server storage)
- Sent in Authorization header
- Contains encoded user info

**JWT Structure:**
\`\`\`
Header.Payload.Signature
eyJhbGci...eyJzdWIi...SflKxwR
\`\`\`

### Comparison
| Feature | Cookie/Session | JWT Token |
|---------|----------------|-----------|
| Storage | Server | Client |
| Scalability | Harder | Easier |
| Size | Small | Larger |
| Revocation | Easy | Harder |
| Cross-domain | Limited | Easy |
| Stateless | No | Yes |`
    },
    {
        id: 'ctsta-http-008',
        question: 'Explain API versioning strategies.',
        answer: `### API Versioning Methods

### 1. URL Path Versioning (Most Common)
\`\`\`
https://api.example.com/v1/users
https://api.example.com/v2/users
\`\`\`
**Pros:** Clear, easy to implement
**Cons:** URL changes with version

### 2. Query Parameter
\`\`\`
https://api.example.com/users?version=1
https://api.example.com/users?version=2
\`\`\`
**Pros:** Optional versioning
**Cons:** Can be missed, caching issues

### 3. Header Versioning
\`\`\`
GET /users
Accept: application/vnd.api+json; version=1
Accept: application/vnd.api.v2+json
\`\`\`
**Pros:** Clean URLs
**Cons:** Not visible, harder to test

### 4. Subdomain Versioning
\`\`\`
https://v1.api.example.com/users
https://v2.api.example.com/users
\`\`\`
**Pros:** Clear separation
**Cons:** DNS/SSL setup needed

### Best Practices
- Start with v1 (not v0)
- Support at least 2 versions
- Deprecation warnings in responses
- Clear migration documentation
- Semantic versioning (major.minor.patch)`
    },
    {
        id: 'ctsta-http-009',
        question: 'What is request/response body formats? Compare JSON and XML.',
        answer: `### Data Formats

### JSON (JavaScript Object Notation)
\`\`\`json
{
    "id": 1,
    "name": "Alice",
    "email": "alice@example.com",
    "orders": [
        { "id": 101, "total": 99.99 }
    ]
}
\`\`\`

### XML (Extensible Markup Language)
\`\`\`xml
<user>
    <id>1</id>
    <name>Alice</name>
    <email>alice@example.com</email>
    <orders>
        <order>
            <id>101</id>
            <total>99.99</total>
        </order>
    </orders>
</user>
\`\`\`

### Comparison
| Feature | JSON | XML |
|---------|------|-----|
| Size | Smaller | Larger |
| Readability | Good | Verbose |
| Parsing | Native in JS | Requires parser |
| Data Types | Yes | No (all strings) |
| Comments | No | Yes |
| Namespaces | No | Yes |
| Schema | JSON Schema | XSD |

### When to Use
- **JSON**: Modern APIs, mobile apps, JavaScript
- **XML**: Enterprise systems, SOAP, document formats

### Content-Type Headers
\`\`\`
JSON: Content-Type: application/json
XML:  Content-Type: application/xml
Form: Content-Type: application/x-www-form-urlencoded
File: Content-Type: multipart/form-data
\`\`\``
    },
    {
        id: 'ctsta-http-010',
        question: 'What is rate limiting and how is it implemented?',
        answer: `### Rate Limiting

### Purpose
- Prevent abuse/DDoS attacks
- Fair resource distribution
- Cost control for API providers

### Common Limit Types
| Type | Example |
|------|---------|
| Requests/Second | 10 req/s |
| Requests/Minute | 100 req/min |
| Requests/Day | 10,000 req/day |
| Bandwidth | 1 GB/day |

### Response Headers
\`\`\`
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1640995200
Retry-After: 60
\`\`\`

### Status Codes
- \`429 Too Many Requests\` - Rate limit exceeded
- \`503 Service Unavailable\` - Server overloaded

### Implementation Algorithms

**1. Token Bucket**
- Bucket holds tokens
- Each request uses one token
- Tokens refill at fixed rate

**2. Sliding Window**
- Count requests in rolling time window
- More accurate than fixed windows

**3. Fixed Window**
- Count requests per time period (minute, hour)
- Simple but can have burst issues

### Best Practices
- Return clear error messages
- Include rate limit headers
- Provide Retry-After header
- Use different limits per endpoint
- Allow authenticated users higher limits`
    }
];

export default infraHttpQuestions;

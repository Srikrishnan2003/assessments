// Computer Networks Questions for BARC CSE Exam
export const computerNetworksQuestions = [
    // OSI MODEL
    {
        id: "cn001", topic: "Computer Networks", subtopic: "OSI Model", difficulty: "Easy",
        question: "How many layers are in the OSI model?",
        options: ["A) 5", "B) 6", "C) 7", "D) 4"], answer: "C",
        explanation: "OSI has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application."
    },
    {
        id: "cn002", topic: "Computer Networks", subtopic: "OSI Model", difficulty: "Easy",
        question: "Which layer is responsible for routing?",
        options: ["A) Physical", "B) Data Link", "C) Network", "D) Transport"], answer: "C",
        explanation: "Network layer (Layer 3) handles routing between different networks."
    },
    {
        id: "cn003", topic: "Computer Networks", subtopic: "OSI Model", difficulty: "Easy",
        question: "TCP operates at which layer?",
        options: ["A) Network", "B) Transport", "C) Application", "D) Data Link"], answer: "B",
        explanation: "TCP is a Transport layer (Layer 4) protocol."
    },
    {
        id: "cn004", topic: "Computer Networks", subtopic: "OSI Model", difficulty: "Medium",
        question: "Which layer handles data encryption?",
        options: ["A) Transport", "B) Session", "C) Presentation", "D) Application"], answer: "C",
        explanation: "Presentation layer (Layer 6) handles encryption, compression, and data translation."
    },
    {
        id: "cn005", topic: "Computer Networks", subtopic: "OSI Model", difficulty: "Medium",
        question: "MAC address is used at which layer?",
        options: ["A) Physical", "B) Data Link", "C) Network", "D) Transport"], answer: "B",
        explanation: "Data Link layer uses MAC addresses for local delivery."
    },
    // TCP/IP
    {
        id: "cn006", topic: "Computer Networks", subtopic: "TCP/IP", difficulty: "Easy",
        question: "TCP/IP model has how many layers?",
        options: ["A) 4", "B) 5", "C) 6", "D) 7"], answer: "A",
        explanation: "TCP/IP has 4 layers: Network Interface, Internet, Transport, Application."
    },
    {
        id: "cn007", topic: "Computer Networks", subtopic: "TCP/IP", difficulty: "Easy",
        question: "IP is a:",
        options: ["A) Connection-oriented protocol", "B) Connectionless protocol", "C) Transport protocol", "D) Application protocol"], answer: "B",
        explanation: "IP is connectionless and unreliable (best effort delivery)."
    },
    {
        id: "cn008", topic: "Computer Networks", subtopic: "TCP/IP", difficulty: "Easy",
        question: "TCP provides:",
        options: ["A) Connectionless service", "B) Reliable, connection-oriented service", "C) Unreliable service", "D) No service"], answer: "B",
        explanation: "TCP is reliable, connection-oriented with acknowledgments and retransmissions."
    },
    {
        id: "cn009", topic: "Computer Networks", subtopic: "TCP/IP", difficulty: "Medium",
        question: "UDP is preferred over TCP for:",
        options: ["A) File transfer", "B) Real-time applications like video streaming", "C) Web browsing", "D) Email"], answer: "B",
        explanation: "UDP's low overhead suits real-time apps where speed matters more than reliability."
    },
    {
        id: "cn010", topic: "Computer Networks", subtopic: "TCP/IP", difficulty: "Medium",
        question: "TCP uses which mechanism for flow control?",
        options: ["A) Stop-and-wait", "B) Sliding window", "C) No flow control", "D) Priority queue"], answer: "B",
        explanation: "TCP uses sliding window protocol for flow control."
    },
    // IP ADDRESSING
    {
        id: "cn011", topic: "Computer Networks", subtopic: "IP Addressing", difficulty: "Easy",
        question: "IPv4 address is how many bits?",
        options: ["A) 16", "B) 32", "C) 64", "D) 128"], answer: "B",
        explanation: "IPv4 addresses are 32 bits (4 bytes), written as dotted decimal."
    },
    {
        id: "cn012", topic: "Computer Networks", subtopic: "IP Addressing", difficulty: "Easy",
        question: "IPv6 address is how many bits?",
        options: ["A) 32", "B) 64", "C) 128", "D) 256"], answer: "C",
        explanation: "IPv6 addresses are 128 bits, written in hexadecimal."
    },
    {
        id: "cn013", topic: "Computer Networks", subtopic: "IP Addressing", difficulty: "Medium",
        question: "Class B IP address range is:",
        options: ["A) 0-127", "B) 128-191", "C) 192-223", "D) 224-239"], answer: "B",
        explanation: "Class B: 128.0.0.0 to 191.255.255.255 (first octet 128-191)."
    },
    {
        id: "cn014", topic: "Computer Networks", subtopic: "IP Addressing", difficulty: "Medium",
        question: "Subnet mask 255.255.255.0 means:",
        options: ["A) 8 bits for network", "B) 16 bits for network", "C) 24 bits for network", "D) 32 bits for network"], answer: "C",
        explanation: "/24 subnet mask = 24 network bits, 8 host bits."
    },
    {
        id: "cn015", topic: "Computer Networks", subtopic: "IP Addressing", difficulty: "Hard",
        question: "How many hosts can a /26 network have?",
        options: ["A) 62", "B) 64", "C) 30", "D) 128"], answer: "A",
        explanation: "/26 = 6 host bits. 2^6 - 2 = 62 usable hosts (subtract network and broadcast)."
    },
    // ROUTING
    {
        id: "cn016", topic: "Computer Networks", subtopic: "Routing", difficulty: "Medium",
        question: "Which routing protocol uses distance vector?",
        options: ["A) OSPF", "B) RIP", "C) BGP", "D) IS-IS"], answer: "B",
        explanation: "RIP (Routing Information Protocol) is a distance vector protocol."
    },
    {
        id: "cn017", topic: "Computer Networks", subtopic: "Routing", difficulty: "Medium",
        question: "OSPF uses which algorithm?",
        options: ["A) Bellman-Ford", "B) Dijkstra", "C) Floyd-Warshall", "D) DFS"], answer: "B",
        explanation: "OSPF uses Dijkstra's shortest path first algorithm."
    },
    {
        id: "cn018", topic: "Computer Networks", subtopic: "Routing", difficulty: "Medium",
        question: "Count-to-infinity problem occurs in:",
        options: ["A) Link state protocols", "B) Distance vector protocols", "C) All protocols", "D) No protocols"], answer: "B",
        explanation: "Distance vector protocols like RIP can suffer from count-to-infinity."
    },
    {
        id: "cn019", topic: "Computer Networks", subtopic: "Routing", difficulty: "Hard",
        question: "BGP is used for:",
        options: ["A) Intra-domain routing", "B) Inter-domain (between AS) routing", "C) Local routing", "D) No routing"], answer: "B",
        explanation: "BGP routes between Autonomous Systems (inter-domain routing)."
    },
    // DATA LINK
    {
        id: "cn020", topic: "Computer Networks", subtopic: "Data Link", difficulty: "Medium",
        question: "CSMA/CD is used in:",
        options: ["A) WiFi", "B) Ethernet", "C) Token Ring", "D) ATM"], answer: "B",
        explanation: "CSMA/CD (Collision Detection) is used in traditional Ethernet."
    },
    {
        id: "cn021", topic: "Computer Networks", subtopic: "Data Link", difficulty: "Medium",
        question: "CSMA/CA is used in:",
        options: ["A) Ethernet", "B) WiFi (802.11)", "C) Token Ring", "D) FDDI"], answer: "B",
        explanation: "CSMA/CA (Collision Avoidance) is used in wireless networks."
    },
    {
        id: "cn022", topic: "Computer Networks", subtopic: "Data Link", difficulty: "Medium",
        question: "ARP resolves:",
        options: ["A) IP to MAC address", "B) MAC to IP address", "C) Domain to IP", "D) IP to domain"], answer: "A",
        explanation: "ARP (Address Resolution Protocol) maps IP addresses to MAC addresses."
    },
    {
        id: "cn023", topic: "Computer Networks", subtopic: "Data Link", difficulty: "Easy",
        question: "Ethernet frame uses which addressing?",
        options: ["A) IP addressing", "B) MAC addressing", "C) Port addressing", "D) URL addressing"], answer: "B",
        explanation: "Ethernet frames use 48-bit MAC addresses."
    },
    // APPLICATION LAYER
    {
        id: "cn024", topic: "Computer Networks", subtopic: "Application Layer", difficulty: "Easy",
        question: "HTTP uses which port by default?",
        options: ["A) 21", "B) 22", "C) 80", "D) 443"], answer: "C",
        explanation: "HTTP uses port 80, HTTPS uses port 443."
    },
    {
        id: "cn025", topic: "Computer Networks", subtopic: "Application Layer", difficulty: "Easy",
        question: "DNS uses which port?",
        options: ["A) 23", "B) 53", "C) 80", "D) 110"], answer: "B",
        explanation: "DNS uses port 53 for both UDP and TCP."
    },
    {
        id: "cn026", topic: "Computer Networks", subtopic: "Application Layer", difficulty: "Easy",
        question: "FTP uses which ports?",
        options: ["A) 20, 21", "B) 22, 23", "C) 80, 443", "D) 25, 110"], answer: "A",
        explanation: "FTP uses port 21 for control, port 20 for data transfer."
    },
    {
        id: "cn027", topic: "Computer Networks", subtopic: "Application Layer", difficulty: "Medium",
        question: "SMTP is used for:",
        options: ["A) Receiving email", "B) Sending email", "C) File transfer", "D) Web browsing"], answer: "B",
        explanation: "SMTP (port 25) sends email. POP3/IMAP receive email."
    },
    {
        id: "cn028", topic: "Computer Networks", subtopic: "Application Layer", difficulty: "Medium",
        question: "DNS is used to:",
        options: ["A) Encrypt data", "B) Translate domain names to IP addresses", "C) Route packets", "D) Control access"], answer: "B",
        explanation: "DNS resolves human-readable domain names to IP addresses."
    },
    // FLOW/ERROR CONTROL
    {
        id: "cn029", topic: "Computer Networks", subtopic: "Flow Control", difficulty: "Medium",
        question: "Stop-and-wait protocol efficiency is:",
        options: ["A) Very high", "B) Low due to waiting for each ACK", "C) Always 100%", "D) Negative"], answer: "B",
        explanation: "Stop-and-wait has low utilization as sender waits for each acknowledgment."
    },
    {
        id: "cn030", topic: "Computer Networks", subtopic: "Error Control", difficulty: "Medium",
        question: "Go-Back-N retransmits:",
        options: ["A) Only erroneous frame", "B) Erroneous frame and all subsequent frames", "C) All frames", "D) No frames"], answer: "B",
        explanation: "Go-Back-N retransmits from error point; all subsequent frames resent."
    },
    {
        id: "cn031", topic: "Computer Networks", subtopic: "Error Control", difficulty: "Medium",
        question: "Selective Repeat retransmits:",
        options: ["A) All frames", "B) Only erroneous frames", "C) No frames", "D) First frame only"], answer: "B",
        explanation: "Selective Repeat only retransmits frames with errors, more efficient."
    },
    {
        id: "cn032", topic: "Computer Networks", subtopic: "Error Control", difficulty: "Medium",
        question: "CRC is used for:",
        options: ["A) Encryption", "B) Error detection", "C) Routing", "D) Addressing"], answer: "B",
        explanation: "CRC (Cyclic Redundancy Check) detects errors in transmitted data."
    },
    // CONGESTION CONTROL
    {
        id: "cn033", topic: "Computer Networks", subtopic: "Congestion Control", difficulty: "Medium",
        question: "TCP slow start increases window size:",
        options: ["A) Linearly", "B) Exponentially", "C) Not at all", "D) Randomly"], answer: "B",
        explanation: "Slow start doubles window each RTT (exponential growth until threshold)."
    },
    {
        id: "cn034", topic: "Computer Networks", subtopic: "Congestion Control", difficulty: "Hard",
        question: "After congestion (3 duplicate ACKs), TCP does:",
        options: ["A) Slow start from 1", "B) Fast recovery (halve window)", "C) Terminate connection", "D) Nothing"], answer: "B",
        explanation: "Fast recovery halves cwnd and continues; doesn't restart from 1."
    },
    // SECURITY
    {
        id: "cn035", topic: "Computer Networks", subtopic: "Security", difficulty: "Medium",
        question: "SSL/TLS provides:",
        options: ["A) Only encryption", "B) Encryption, authentication, integrity", "C) Only authentication", "D) Only integrity"], answer: "B",
        explanation: "TLS provides encryption, server authentication, and data integrity."
    },
    {
        id: "cn036", topic: "Computer Networks", subtopic: "Security", difficulty: "Medium",
        question: "Firewall operates at:",
        options: ["A) Only application layer", "B) Multiple layers (network, transport, application)", "C) Only physical layer", "D) No layer"], answer: "B",
        explanation: "Firewalls can filter at network (IP), transport (port), and application layers."
    },
    {
        id: "cn037", topic: "Computer Networks", subtopic: "Security", difficulty: "Medium",
        question: "Symmetric key encryption uses:",
        options: ["A) Different keys for encryption and decryption", "B) Same key for encryption and decryption", "C) No keys", "D) Public keys only"], answer: "B",
        explanation: "Symmetric encryption uses single shared secret key for both operations."
    },
    {
        id: "cn038", topic: "Computer Networks", subtopic: "Security", difficulty: "Medium",
        question: "RSA is an example of:",
        options: ["A) Symmetric encryption", "B) Asymmetric (public key) encryption", "C) Hashing", "D) No encryption"], answer: "B",
        explanation: "RSA uses public-private key pair (asymmetric encryption)."
    },
    // MISC
    {
        id: "cn039", topic: "Computer Networks", subtopic: "General", difficulty: "Easy",
        question: "Switch operates at which layer?",
        options: ["A) Physical", "B) Data Link", "C) Network", "D) Transport"], answer: "B",
        explanation: "Switch operates at Layer 2 using MAC addresses."
    },
    {
        id: "cn040", topic: "Computer Networks", subtopic: "General", difficulty: "Easy",
        question: "Router operates at which layer?",
        options: ["A) Physical", "B) Data Link", "C) Network", "D) Transport"], answer: "C",
        explanation: "Router operates at Layer 3 using IP addresses for routing."
    },
    {
        id: "cn041", topic: "Computer Networks", subtopic: "General", difficulty: "Medium",
        question: "NAT (Network Address Translation) is used to:",
        options: ["A) Encrypt data", "B) Map private IPs to public IPs", "C) Route packets", "D) Detect errors"], answer: "B",
        explanation: "NAT allows multiple private IPs to share a public IP address."
    },
    {
        id: "cn042", topic: "Computer Networks", subtopic: "General", difficulty: "Medium",
        question: "DHCP automatically assigns:",
        options: ["A) MAC addresses", "B) IP addresses", "C) Domain names", "D) Routing tables"], answer: "B",
        explanation: "DHCP dynamically assigns IP addresses to devices."
    },
    {
        id: "cn043", topic: "Computer Networks", subtopic: "General", difficulty: "Easy",
        question: "Hub operates at which layer?",
        options: ["A) Physical", "B) Data Link", "C) Network", "D) Transport"], answer: "A",
        explanation: "Hub is a Layer 1 device, just repeats signals."
    },
    {
        id: "cn044", topic: "Computer Networks", subtopic: "General", difficulty: "Medium",
        question: "Bandwidth is measured in:",
        options: ["A) Bytes per second", "B) Bits per second", "C) Packets per second", "D) Frames per second"], answer: "B",
        explanation: "Network bandwidth is typically measured in bits per second (bps)."
    },
    {
        id: "cn045", topic: "Computer Networks", subtopic: "General", difficulty: "Medium",
        question: "Latency is:",
        options: ["A) Amount of data transferred", "B) Time delay for packet to travel", "C) Number of packets", "D) Bandwidth"], answer: "B",
        explanation: "Latency is the time delay for a packet to travel from source to destination."
    },
    // MORE NETWORKING QUESTIONS
    {
        id: "cn046", topic: "Computer Networks", subtopic: "TCP/IP", difficulty: "Hard",
        question: "TCP 3-way handshake uses which flags?",
        options: ["A) SYN, SYN-ACK, ACK", "B) FIN, FIN-ACK, ACK", "C) RST, ACK", "D) PSH, URG"], answer: "A",
        explanation: "TCP connection: Client SYN → Server SYN-ACK → Client ACK."
    },
    {
        id: "cn047", topic: "Computer Networks", subtopic: "TCP/IP", difficulty: "Medium",
        question: "TCP connection termination uses:",
        options: ["A) 2-way handshake", "B) 4-way handshake (FIN/ACK)", "C) No handshake", "D) 3-way"], answer: "B",
        explanation: "TCP closes with FIN→ACK, FIN→ACK (4-way or 2×2-way)."
    },
    {
        id: "cn048", topic: "Computer Networks", subtopic: "TCP/IP", difficulty: "Medium",
        question: "UDP header size is:",
        options: ["A) 8 bytes", "B) 20 bytes", "C) 40 bytes", "D) Variable"], answer: "A",
        explanation: "UDP header is fixed 8 bytes (source port, dest port, length, checksum)."
    },
    {
        id: "cn049", topic: "Computer Networks", subtopic: "TCP/IP", difficulty: "Medium",
        question: "TCP header minimum size is:",
        options: ["A) 8 bytes", "B) 20 bytes", "C) 40 bytes", "D) 60 bytes"], answer: "B",
        explanation: "TCP header minimum 20 bytes, max 60 bytes with options."
    },
    {
        id: "cn050", topic: "Computer Networks", subtopic: "IP Addressing", difficulty: "Hard",
        question: "CIDR notation /20 provides how many host addresses?",
        options: ["A) 2046", "B) 4094", "C) 4096", "D) 8190"], answer: "B",
        explanation: "/20 = 12 host bits. 2^12 - 2 = 4094 usable hosts."
    },
    {
        id: "cn051", topic: "Computer Networks", subtopic: "IP Addressing", difficulty: "Medium",
        question: "Private IP address range for Class A is:",
        options: ["A) 10.0.0.0/8", "B) 172.16.0.0/12", "C) 192.168.0.0/16", "D) 127.0.0.0/8"], answer: "A",
        explanation: "Private ranges: 10.0.0.0/8 (Class A), 172.16.0.0/12 (B), 192.168.0.0/16 (C)."
    },
    {
        id: "cn052", topic: "Computer Networks", subtopic: "IP Addressing", difficulty: "Medium",
        question: "Loopback address in IPv4 is:",
        options: ["A) 0.0.0.0", "B) 127.0.0.1", "C) 255.255.255.255", "D) 192.168.1.1"], answer: "B",
        explanation: "127.0.0.1 is loopback - packets sent to self for testing."
    },
    {
        id: "cn053", topic: "Computer Networks", subtopic: "Routing", difficulty: "Hard",
        question: "RIP maximum hop count is:",
        options: ["A) 10", "B) 15", "C) 16", "D) 255"], answer: "B",
        explanation: "RIP max hop count is 15; 16 means unreachable."
    },
    {
        id: "cn054", topic: "Computer Networks", subtopic: "Routing", difficulty: "Hard",
        question: "Split horizon prevents:",
        options: ["A) Slow convergence only", "B) Routing loops by not advertising routes back", "C) All routing issues", "D) Nothing"], answer: "B",
        explanation: "Split horizon: don't advertise route back on interface it was learned from."
    },
    {
        id: "cn055", topic: "Computer Networks", subtopic: "Routing", difficulty: "Medium",
        question: "Default gateway is used when:",
        options: ["A) Destination is on same network", "B) Destination is on different network", "C) Always", "D) Never"], answer: "B",
        explanation: "Packets for external networks go to default gateway (router)."
    },
    {
        id: "cn056", topic: "Computer Networks", subtopic: "Data Link", difficulty: "Hard",
        question: "Ethernet MTU is:",
        options: ["A) 576 bytes", "B) 1500 bytes", "C) 64 bytes", "D) 9000 bytes"], answer: "B",
        explanation: "Standard Ethernet MTU (Max Transmission Unit) is 1500 bytes."
    },
    {
        id: "cn057", topic: "Computer Networks", subtopic: "Data Link", difficulty: "Medium",
        question: "RARP resolves:",
        options: ["A) IP to MAC", "B) MAC to IP", "C) Domain to IP", "D) IP to domain"], answer: "B",
        explanation: "RARP (Reverse ARP): finds IP given MAC address."
    },
    {
        id: "cn058", topic: "Computer Networks", subtopic: "Data Link", difficulty: "Medium",
        question: "Sliding window size in Go-Back-N with sequence bits m is:",
        options: ["A) 2^m", "B) 2^m - 1", "C) m", "D) 2m"], answer: "B",
        explanation: "Go-Back-N sender window ≤ 2^m - 1 to avoid ambiguity."
    },
    {
        id: "cn059", topic: "Computer Networks", subtopic: "Data Link", difficulty: "Hard",
        question: "In Selective Repeat, sender and receiver window sizes are:",
        options: ["A) N, 1", "B) N, N", "C) ≤ 2^(m-1) each", "D) Any size"], answer: "C",
        explanation: "Selective Repeat: sender + receiver window ≤ 2^m, typically each ≤ 2^(m-1)."
    },
    {
        id: "cn060", topic: "Computer Networks", subtopic: "Application Layer", difficulty: "Medium",
        question: "HTTP is a:",
        options: ["A) Stateful protocol", "B) Stateless protocol", "C) Connection-oriented", "D) UDP based"], answer: "B",
        explanation: "HTTP is stateless - each request is independent (cookies add state)."
    },
    {
        id: "cn061", topic: "Computer Networks", subtopic: "Application Layer", difficulty: "Medium",
        question: "HTTPS uses port:",
        options: ["A) 80", "B) 443", "C) 8080", "D) 22"], answer: "B",
        explanation: "HTTPS (HTTP over TLS) uses port 443."
    },
    {
        id: "cn062", topic: "Computer Networks", subtopic: "Application Layer", difficulty: "Medium",
        question: "POP3 is used for:",
        options: ["A) Sending email", "B) Downloading email from server", "C) Chat", "D) File transfer"], answer: "B",
        explanation: "POP3 (port 110) downloads email from server to client."
    },
    {
        id: "cn063", topic: "Computer Networks", subtopic: "Application Layer", difficulty: "Medium",
        question: "IMAP differs from POP3 in:",
        options: ["A) IMAP sends email", "B) IMAP keeps email on server", "C) No difference", "D) IMAP is faster"], answer: "B",
        explanation: "IMAP keeps mail on server; POP3 typically downloads and deletes."
    },
    {
        id: "cn064", topic: "Computer Networks", subtopic: "Application Layer", difficulty: "Hard",
        question: "DNS uses which transport protocol?",
        options: ["A) TCP only", "B) UDP only", "C) UDP primarily, TCP for large responses", "D) Neither"], answer: "C",
        explanation: "DNS uses UDP (port 53) normally, TCP for zone transfers or large responses."
    },
    {
        id: "cn065", topic: "Computer Networks", subtopic: "Congestion Control", difficulty: "Hard",
        question: "TCP congestion avoidance increases cwnd:",
        options: ["A) Exponentially", "B) Linearly (by 1 MSS per RTT)", "C) Not at all", "D) Randomly"], answer: "B",
        explanation: "Congestion avoidance: additive increase, cwnd += MSS/cwnd per ACK."
    },
    {
        id: "cn066", topic: "Computer Networks", subtopic: "Congestion Control", difficulty: "Hard",
        question: "TCP timeout triggers:",
        options: ["A) Fast recovery", "B) Slow start from ssthresh=cwnd/2, cwnd=1", "C) Connection close", "D) Nothing"], answer: "B",
        explanation: "Timeout: severe congestion, reset cwnd to 1, ssthresh = cwnd/2."
    },
    {
        id: "cn067", topic: "Computer Networks", subtopic: "Security", difficulty: "Medium",
        question: "Digital signature provides:",
        options: ["A) Confidentiality only", "B) Authentication and non-repudiation", "C) Speed", "D) Nothing"], answer: "B",
        explanation: "Digital signature: verifies sender identity and prevents denial."
    },
    {
        id: "cn068", topic: "Computer Networks", subtopic: "Security", difficulty: "Hard",
        question: "Diffie-Hellman is used for:",
        options: ["A) Encryption", "B) Key exchange", "C) Hashing", "D) Signing"], answer: "B",
        explanation: "DH: secure key exchange over insecure channel (no encryption itself)."
    },
    {
        id: "cn069", topic: "Computer Networks", subtopic: "Security", difficulty: "Medium",
        question: "AES is an example of:",
        options: ["A) Asymmetric encryption", "B) Symmetric encryption", "C) Hash function", "D) Key exchange"], answer: "B",
        explanation: "AES (Advanced Encryption Standard) is symmetric block cipher."
    },
    {
        id: "cn070", topic: "Computer Networks", subtopic: "Security", difficulty: "Medium",
        question: "SHA-256 is a:",
        options: ["A) Encryption algorithm", "B) Hash function", "C) Key exchange", "D) Protocol"], answer: "B",
        explanation: "SHA-256 is cryptographic hash function producing 256-bit digest."
    },
    {
        id: "cn071", topic: "Computer Networks", subtopic: "General", difficulty: "Medium",
        question: "VLAN is used to:",
        options: ["A) Increase speed", "B) Create logical network segments", "C) Encrypt data", "D) Route packets"], answer: "B",
        explanation: "VLAN separates broadcast domains logically, regardless of physical location."
    },
    {
        id: "cn072", topic: "Computer Networks", subtopic: "General", difficulty: "Medium",
        question: "Spanning Tree Protocol prevents:",
        options: ["A) Security attacks", "B) Loops in switched networks", "C) Congestion", "D) Packet loss"], answer: "B",
        explanation: "STP prevents broadcast storms by eliminating Layer 2 loops."
    },
    {
        id: "cn073", topic: "Computer Networks", subtopic: "General", difficulty: "Easy",
        question: "Full duplex communication allows:",
        options: ["A) One direction at a time", "B) Both directions simultaneously", "C) No communication", "D) Only receiving"], answer: "B",
        explanation: "Full duplex: simultaneous bidirectional transmission."
    },
    {
        id: "cn074", topic: "Computer Networks", subtopic: "General", difficulty: "Medium",
        question: "Multiplexing combines:",
        options: ["A) Multiple signals on single channel", "B) Single signal on multiple channels", "C) Nothing", "D) Only analog signals"], answer: "A",
        explanation: "Multiplexing: multiple data streams share single communication channel."
    },
    {
        id: "cn075", topic: "Computer Networks", subtopic: "General", difficulty: "Medium",
        question: "QoS (Quality of Service) manages:",
        options: ["A) Security", "B) Bandwidth, latency, jitter, packet loss", "C) Physical connections", "D) IP addresses"], answer: "B",
        explanation: "QoS prioritizes traffic to ensure performance for critical applications."
    },
    {
        id: "cn076", topic: "Computer Networks", subtopic: "TCP/IP", difficulty: "Hard",
        question: "TCP Nagle's algorithm:",
        options: ["A) Increases throughput for all", "B) Reduces small packets by buffering", "C) Speeds up connections", "D) Handles congestion"], answer: "B",
        explanation: "Nagle: buffer small data until ACK received or buffer full."
    },
    {
        id: "cn077", topic: "Computer Networks", subtopic: "TCP/IP", difficulty: "Medium",
        question: "ICMP is used for:",
        options: ["A) Data transfer", "B) Error reporting and diagnostics (ping, traceroute)", "C) Routing", "D) Encryption"], answer: "B",
        explanation: "ICMP: error messages, echo request/reply (ping), TTL exceeded."
    },
    {
        id: "cn078", topic: "Computer Networks", subtopic: "IP Addressing", difficulty: "Medium",
        question: "Broadcast address 255.255.255.255 is:",
        options: ["A) Unicast", "B) Limited broadcast (same network)", "C) Multicast", "D) Anycast"], answer: "B",
        explanation: "255.255.255.255 is limited broadcast - stays on local network."
    },
    {
        id: "cn079", topic: "Computer Networks", subtopic: "IP Addressing", difficulty: "Hard",
        question: "Supernetting combines:",
        options: ["A) Multiple networks into one route", "B) One network into multiple", "C) Nothing", "D) Only hosts"], answer: "A",
        explanation: "Supernetting (CIDR): aggregates multiple networks into single route."
    },
    {
        id: "cn080", topic: "Computer Networks", subtopic: "Routing", difficulty: "Hard",
        question: "OSPF area 0 is:",
        options: ["A) Any area", "B) Backbone area", "C) Stub area", "D) External area"], answer: "B",
        explanation: "OSPF Area 0 is backbone; all other areas must connect to it."
    },
    {
        id: "cn081", topic: "Computer Networks", subtopic: "Data Link", difficulty: "Hard",
        question: "Hidden terminal problem in wireless is solved by:",
        options: ["A) CSMA/CD", "B) RTS/CTS", "C) Token passing", "D) Polling"], answer: "B",
        explanation: "RTS/CTS (Request/Clear to Send) reserves channel, solving hidden terminal."
    },
    {
        id: "cn082", topic: "Computer Networks", subtopic: "Data Link", difficulty: "Medium",
        question: "Piggyback in data link layer:",
        options: ["A) Sends separate ACK", "B) Combines ACK with data frame", "C) No ACK", "D) Drops packets"], answer: "B",
        explanation: "Piggybacking: ACK included in outgoing data frame to reduce overhead."
    },
    {
        id: "cn083", topic: "Computer Networks", subtopic: "Application Layer", difficulty: "Medium",
        question: "Telnet uses port:",
        options: ["A) 21", "B) 22", "C) 23", "D) 25"], answer: "C",
        explanation: "Telnet uses port 23 (unencrypted). SSH uses port 22 (encrypted)."
    },
    {
        id: "cn084", topic: "Computer Networks", subtopic: "Application Layer", difficulty: "Medium",
        question: "SSH provides:",
        options: ["A) Unencrypted remote access", "B) Encrypted remote access", "C) File storage", "D) Email"], answer: "B",
        explanation: "SSH (Secure Shell) provides encrypted remote terminal access."
    },
    {
        id: "cn085", topic: "Computer Networks", subtopic: "General", difficulty: "Medium",
        question: "Proxy server acts as:",
        options: ["A) Direct connection", "B) Intermediary between client and server", "C) Router", "D) Switch"], answer: "B",
        explanation: "Proxy: intermediary that makes requests on behalf of clients."
    },
    {
        id: "cn086", topic: "Computer Networks", subtopic: "General", difficulty: "Medium",
        question: "Load balancer distributes:",
        options: ["A) IP addresses", "B) Traffic across multiple servers", "C) MAC addresses", "D) Domain names"], answer: "B",
        explanation: "Load balancer distributes incoming requests across server pool."
    },
    {
        id: "cn087", topic: "Computer Networks", subtopic: "Security", difficulty: "Hard",
        question: "Man-in-the-middle attack intercepts:",
        options: ["A) Nothing", "B) Communication between two parties", "C) Only files", "D) Only passwords"], answer: "B",
        explanation: "MITM: attacker secretly relays/alters communication between two parties."
    },
    {
        id: "cn088", topic: "Computer Networks", subtopic: "Security", difficulty: "Medium",
        question: "DoS attack aims to:",
        options: ["A) Steal data", "B) Make service unavailable", "C) Encrypt files", "D) Modify data"], answer: "B",
        explanation: "Denial of Service overwhelms target to prevent legitimate access."
    },
    {
        id: "cn089", topic: "Computer Networks", subtopic: "General", difficulty: "Easy",
        question: "Throughput is:",
        options: ["A) Maximum possible rate", "B) Actual rate of data transfer", "C) Latency", "D) Jitter"], answer: "B",
        explanation: "Throughput: actual data transfer rate achieved (≤ bandwidth)."
    },
    {
        id: "cn090", topic: "Computer Networks", subtopic: "General", difficulty: "Medium",
        question: "Jitter is:",
        options: ["A) Constant delay", "B) Variation in packet delay", "C) Packet loss", "D) Bandwidth"], answer: "B",
        explanation: "Jitter: variation in latency; problematic for real-time applications."
    }
];
export default computerNetworksQuestions;

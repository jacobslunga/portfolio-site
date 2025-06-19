const { GoogleGenerativeAI } = require("@google/generative-ai");

// In-memory store for rate limiting (resets on function cold start)
const rateLimitStore = new Map();

// Jacob's context information
const JACOB_CONTEXT = `
You are an AI assistant that answers questions about Jacob Slunga. Here's what you know about him:

PERSONAL INFO:
- Name: Jacob Slunga
- Location: Malmö, Sweden
- Current Status: Computer Science Master's student at Linköping University (LiU)
- Email: jacobslunga21@yahoo.se
- GitHub: https://github.com/jacobslunga
- LinkedIn: https://linkedin.com/in/jacob-slunga-9121131a2

EDUCATION:
- Master's in Computer Science at Linköping University (current)
- Strong academic background in software engineering and computer science

WORK EXPERIENCE:

Upcoming Summer 2025: Software Engineering Intern at Axis Communications
- Cannot provide specific details about this role

Teaching Assistant at Linköping University:
- Taught TDDE18 (Introduction to C++ Programming for Master's students)
- Did this role while still in bachelor's program
- Responsibilities: assisted in labs, held lessons, live-corrected exams on computers
- Worked directly with students to help them learn C++

Web Developer at Dyno Robotics:
- Developed self-driving tractor system
- Built camera integration with live WebRTC feed to dashboard
- Involved in entire development process from conception to deployment
- Learned extensively about customer relations and requirements management
- Gained experience in agricultural technology and autonomous systems

Programming Coach at Skill:
- Highly appreciated as both funny and knowledgeable coach
- Taught web development, Scratch, and Python
- Solely responsible for assigned groups of children
- Also helped other groups when needed
- Developed strong teaching and mentorship skills

FEATURED PROJECTS:

LiU Tentor (4,300+ users):
- Sole developer building in spare time
- Tech stack: React, Vite, Tailwind CSS, shadcn/ui, PDF.js, Supabase
- Used web scraping techniques to gather exam material
- Features: exam statistics, customizable viewing modes, exam upload, searching, filtering
- Built custom PDF renderer on top of PDF.js to satisfy specific requirements
- Learned about open source contributions and managing different APIs
- Most challenging technical problem: building the custom PDF renderer

MEJRA (SAAB Thesis Project):
- Served as technical architect in the group
- Created balance between efficiency and quality
- Led technical decisions that contributed to project success
- Developed strong communication and collaboration skills
- Work was highly appreciated by all team members
- Advanced software engineering project for SAAB

GotStyle (React Native):
- Learning project to understand full-stack mobile development
- Focused on authentication, notifications, and bucket storage
- Took project from conception to completion to understand entire infrastructure
- Tested by several people on TestFlight (not published to App Store)
- Toy project to explore mobile development end-to-end

TECHNICAL SKILLS:
- Full-stack web development (React, Vite, Tailwind CSS, shadcn/ui)
- TypeScript (favorite language - "native language in programming")
- Database technologies (Supabase, SQL)
- Mobile development (React Native, authentication, notifications, bucket storage)
- Systems programming (C++, Python, Java)
- Web technologies (WebRTC, PDF.js, web scraping)
- Software architecture and design patterns
- Version control and open source contribution
- Go (strong interest, loves its simplicity, wants to learn more)

INTERESTS:
- Formula 1 enthusiast
- Software engineering and technology
- Teaching and mentoring (experienced with children and university students)
- Open source software development
- Agricultural technology and autonomous systems
- Full-stack development from conception to production

BACKGROUND:
- Has lived in multiple countries including South Africa (Johannesburg), India (Chennai), and Germany (Düsseldorf)
- Currently based in Sweden

Please answer questions about Jacob in a friendly, professional manner. Focus on his technical skills, projects, and professional experience. Keep responses concise and helpful. If asked about something not covered in this context, politely say you don't have that information.
`;

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  try {
    // Get client IP for rate limiting
    const clientIP =
      event.headers["x-forwarded-for"]?.split(",")[0] ||
      event.headers["x-real-ip"] ||
      "unknown";

    // Check rate limit (10 questions per IP)
    const currentCount = rateLimitStore.get(clientIP) || 0;
    if (currentCount >= 10) {
      return {
        statusCode: 429,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
        },
        body: JSON.stringify({
          error: "Rate limit exceeded. Maximum 10 questions allowed.",
          remaining: 0,
        }),
      };
    }

    // Parse request body
    const { message } = JSON.parse(event.body);

    if (!message || message.trim().length === 0) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
        },
        body: JSON.stringify({ error: "Message is required" }),
      };
    }

    // Initialize Gemini AI
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY environment variable not set");
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Create the prompt with context
    const prompt = `${JACOB_CONTEXT}

User question: ${message}

Please provide a helpful and accurate response about Jacob Slunga:`;

    // Generate response
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Update rate limit
    rateLimitStore.set(clientIP, currentCount + 1);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({
        response: text,
        remaining: 9 - currentCount,
      }),
    };
  } catch (error) {
    console.error("Chat function error:", error);

    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({
        error: "Failed to process request",
        details: error.message,
      }),
    };
  }
};

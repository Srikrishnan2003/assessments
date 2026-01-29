
export const gstProjectQuestions = [
    {
        id: 'hi-proj-gst-001',
        question: 'Explain the "Serverless/Local-First" Architecture of your GST App.',
        answer: `### Local-First Architecture
**Pitch:** "A Privacy-First GST Filing Solution that runs entirely in the browser."

**Why?**
*   **Privacy:** Financial data (Sales, Invoices) never leaves the user's machine.
*   **Speed:** Zero network latency validation.
*   **Cost:** No backend server costs.

**How?**
*   **Processing:** Uses **Web Workers** to parse Excel files off the main thread.
*   **Logic:** All business logic (Validation, JSON generation) is in TypeScript modules loaded on the client.`
    },
    {
        id: 'hi-proj-gst-002',
        question: 'How do you handle large Excel files (performance)?',
        answer: `### Handling Large Files (Performance)
1.  **ExcelJS Streaming:** Used streaming/chunking to read file line-by-line instead of loading 50MB into RAM.
2.  **Web Workers:** Moved the heavy parsing logic to a separate thread so the UI doesn't freeze.
3.  **Virtualization:** Used \`react-window\` to render the preview table. Only renders the 20 visible rows, not the 10,000 hidden ones.`
    },
    {
        id: 'hi-proj-gst-003',
        question: 'How does the Validation Engine work?',
        answer: `### Validation Engine (Zod)
I used **Zod** for schema validation.
1.  Defined strict schema \`GstSchema\` (Regex for GSTIN, HSN codes).
2.  **Process:**
    *   Parse Excel Row -> Object.
    *   \`GstSchema.safeParse(row)\`.
    *   If valid -> Add to \`validInvoices\`.
    *   If invalid -> Add to \`errors\` array with specific error message (e.g., "Invalid HSN").
3.  **Result:** User gets immediate, detailed feedback.`
    }
];

export const genAiProjectQuestions = [
    {
        id: 'hi-proj-genai-001',
        question: 'How does your GenAI Developer Assistant work?',
        answer: `### GenAI Assistant
**Stack:** Next.js + Hugging Face (DeepSeek Coder) + OpenAI API (or similar).

**Workflow:**
1.  **Prompt Engineering:** Designed specific system prompts ("Act as a Senior Java Dev").
2.  **Context Management:** Maintained a sliding window of the last 5 conversation turns to provide "Memory".
3.  **Integration:** Used REST API to send prompt/context to the LLM and stream the response back to the UI.`
    },
    {
        id: 'hi-proj-genai-002',
        question: 'What is Prompt Engineering?',
        answer: `### Prompt Engineering
The art of crafting inputs (prompts) to get the best output from an LLM.
*   **Instruction:** "Write a Java function..."
*   **Context:** "Using Spring Boot 3..."
*   **Output Indicator:** "Return only code, no markdown..."
*   **Few-Shot Learning:** Giving examples in the prompt to guide the model.`
    }
];

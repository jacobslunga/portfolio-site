// src/posts.ts

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "engineering-reality-of-agents",
    title: "Reframing the Agent Narrative: Engineering vs. Research", // Softer, more analytical title
    date: "2025-12-14",
    content: `
In 2024–2025, the industry conversation shifted noticeably toward "AI Agents." From startup pitches to conference headlines, the focus moved from raw chat capabilities to agentic workflows that can autonomously execute multi-step tasks.

While this shift has unlocked incredible product value, it is worth distinguishing between two different types of progress: the engineering of systems and the research of intelligence. As leaders like Ilya Sutskever have pointed out, understanding this distinction is key to predicting where the field goes next.

---

## The Value of Orchestration

Today’s agentic workflows are not typically built on fundamentally new model architectures. Instead, they represent a leap in **orchestration**. We are effectively surrounding Large Language Models (LLMs) with robust context pipelines, memory layers, and tool interfaces.

This is a significant engineering achievement. It allows us to:
* Build systems that can maintain state over long periods.
* Connect stochastic models to deterministic APIs reliably.
* Automate workflows that require planning and error correction.

**This is practical, high-value engineering. It turns a probabilistic model into a reliable product component.** However, it is important to recognize that this is a systems design challenge, not necessarily a change in the underlying learning algorithm.

---

## The Research Frontier

Ilya Sutskever, co‑founder of OpenAI and CEO of Safe Superintelligence Inc., has frequently discussed the trajectory of AI progress. In his view, the industry is approaching a point where we must look beyond scaling existing paradigms.

In discussions on the future of AI (such as his [interview with Dwarkesh Patel](https://www.youtube.com/watch?v=aR20FWCCjAs)), Sutskever highlights a few critical realities:

1.  **Finite Scaling:** Relying solely on pre-training and scale has diminishing returns as data and compute become constrained.
2.  **Generalization Limits:** True generalization—the ability to reason through novel situations like a human—requires fundamental research improvements, not just better tooling around current models.
3.  **The Next Paradigm:** Future breakthroughs will likely come from rethinking how models learn and reason, rather than just scaling current transformer architectures.

This perspective doesn't diminish the work being done on agents today; rather, it clarifies that "agents" and "reasoning breakthroughs" are often parallel tracks.

---

## Why The Distinction Matters for Builders

For engineers working in Applied AI, this distinction is helpful for setting realistic expectations and choosing the right tools.

* **Better Architecture Decisions:** When we acknowledge that current models are powerful but have brittle reasoning, we build better guardrails and verification steps into our agent loops.
* **Focus on Reliability:** Recognizing agents as "context orchestration" shifts the focus to where it belongs: improving retrieval quality, reducing latency, and handling API failures gracefully.
* **Long-term Strategy:** It helps businesses distinguish between immediate automation wins (using today's agents) and long-term R&D investments.

---

## Conclusion

We are in a golden era of **Applied AI**. The ability to chain LLMs together to perform actions is creating real economic value and solving actual user problems.

But as we build these systems, we should remain clear-eyed about the technology. We are currently mastering the art of orchestration—getting the most out of existing intelligence. The next leap in *fundamental* intelligence is a separate, equally exciting challenge that is still being solved in the research labs.

Both are necessary. Both are innovative. They are just different disciplines.
`,
  },
  {
    slug: "goodbye-webpack-hello-vite",
    title: "Goodbye Webpack, Hello Vite",
    date: "2022-03-10",
    content: `
I've been using Webpack for years. It’s powerful, configurable, and undeniably the industry standard. But recently, starting a dev server for my side projects felt like waiting for a kettle to boil.


So, last weekend, I decided to migrate my main dashboard project to **Vite**. The results were honestly shocking.


---


## The "Wait, It’s Already Running?" Moment

The first time I ran \`npm run dev\`, I thought it failed. There was no loading bar. No "building modules..." text scrolling by. Just:

\`\`\`bash
  VITE v2.8.0  ready in 300 ms
\`\`\`

I refreshed the browser, and the app was there. Instantaneously. 


Coming from a Webpack setup where cold starts took 20+ seconds, this felt like magic. But it’s not magic—it’s ES modules. Unlike Webpack, which bundles your entire application before serving it, Vite serves source code over native ESM.


---


## Configuration Sanity

Here is my old \`webpack.config.js\` (simplified):

\`\`\`javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\\.js$/, use: 'babel-loader' },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
\`\`\`

And here is my new \`vite.config.js\`:

\`\`\`javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
})
\`\`\`

That's it. It just works.


---


## Conclusion

I’m sure Webpack still has its place for complex enterprise builds with weird federation requirements. But for 99% of the apps I build? I’m never going back.
`,
  },
];

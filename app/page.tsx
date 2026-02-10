import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black selection:bg-orange-100">
      <main className="mx-auto w-full max-w-2xl flex min-h-screen w-full max-w-2xl flex-col gap-8 py-32 px-8 bg-white dark:bg-stone-950 border-x border-zinc-200/50 dark:border-stone-800/50 shadow-sm">
        <p className="text-[17px] leading-relaxed text-zinc-900 dark:text-zinc-100">
          Hi, I'm Jacob. I am currently a student at Linköping University where
          I am studying Computer Science. Besides that, I also work part time as
          a developer at{" "}
          <a
            href="https://www.weknowit.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline underline-offset-4 decoration-zinc-300 hover:decoration-blue-600 transition-colors dark:text-blue-400"
          >
            WeKnowIT
          </a>
          .
        </p>

        <p className="text-[17px] leading-relaxed">
          One of my big loves is for{" "}
          <span className="inline-flex items-baseline">
            <span
              style={{ fontFamily: "monospace" }}
              className="text-orange-600 font-bold"
            >
              Typ
            </span>
            <span className="text-purple-600 font-sans italic">ogr</span>
            <span className="text-green-600 font-serif">aphy</span>
          </span>
          . I cannot explain it, but it's something with typography that I find
          very delightful.
        </p>

        <p className="text-[17px] leading-relaxed">
          Design is something that I've been thinking about since I was a child.
          Most people think of design as something beautiful and nice to look
          at; I view design as something being functional and accomplishes a
          goal.{" "}
          <span className="text-stone-400 dark:text-stone-500 text-[13px] block mt-1 italic">
            I bet it took you longer than normal to read the word "Typography"
            which was intended.
          </span>
        </p>

        <div className="space-y-4">
          <p className="text-[17px] leading-relaxed">
            I can bore you with my thoughts on design, but here are my 3
            principles I follow whenever I'm designing something:
          </p>
          <ol className="list-decimal pl-8 space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>
              If someone has to think for more than{" "}
              <span className="font-semibold text-black dark:text-white">
                5
              </span>{" "}
              seconds to take an action, it's not a good design
            </li>
            <li>Performance is part of design</li>
            <li>Good design is invisible</li>
          </ol>
        </div>

        <section className="pt-8 border-t border-zinc-100 dark:border-stone-900 space-y-6">
          <div className="space-y-4">
            <p className="text-[17px] leading-relaxed text-zinc-900 dark:text-zinc-100 italic opacity-80">
              This page isn't "pretty" in the traditional sense. It doesn't have
              gradients, flashy cards, or complex entrance animations.
            </p>
            <p className="text-[17px] leading-relaxed text-zinc-900 dark:text-zinc-100">
              But it tells the story of who I am. It's raw, direct, and perhaps
              not for everyone. I think the world needs more diverse thinking;
              not every digital space needs to be a polished product. Sometimes,
              it just needs to be a conversation.
            </p>
          </div>

          <p
            style={{ fontFamily: "monospace" }}
            className="text-[14px] text-stone-500 tracking-tight"
          >
            /* Yes, I built a static site with Next.js and Tailwind. Overkill?
            Maybe. But performance is part of design, and I like having the
            option to be complex later. */
          </p>
        </section>

        <section className="pb-32 pt-8 border-t border-zinc-100 dark:border-stone-900 space-y-6">
          <div className="space-y-4">
            <p className="text-[17px] leading-relaxed">
              Beyond the visual, I’ve been diving deep into the mechanics of{" "}
              <span
                style={{ fontFamily: "monospace" }}
                className="bg-zinc-100 dark:bg-stone-900 px-1 rounded text-[15px]"
              >
                Functional Programming
              </span>
              . There is a specific kind of beauty in a pure function—no side
              effects, no hidden state, just a clear mapping from input to
              output.
            </p>
          </div>

          <div
            style={{ fontFamily: "monospace" }}
            className="bg-zinc-50 dark:bg-stone-900/50 p-6 rounded-sm text-[14px] leading-relaxed border border-zinc-200/50 dark:border-stone-800/50"
          >
            <p className="text-stone-400 mb-2">
              -- The ideal pipeline: no mutation, just transformation
            </p>
            <p className="text-blue-600 dark:text-blue-400">
              solve :: Problem -&gt; Solution
            </p>
            <p>solve = filter isEssential . map refine . transform</p>

            <p className="mt-4 text-stone-500 italic text-[13px]">
              // We live in a Von Neumann world of mutable state, // but we
              should strive for the elegance of a pipeline.
            </p>
          </div>

          <p className="text-[17px] leading-relaxed">
            Optimizing isn't just about making things "fast." It's about
            removing the friction between a thought and its execution. Real
            computers are messy—they have state, they have latency, and they
            have side effects. But as a developer, my job is to be a{" "}
            <strong>sophisticated plumber</strong>: taking data from Source A,
            transforming it, and placing it in Source B with as little noise as
            possible.
          </p>

          <p className="text-[17px] leading-relaxed">
            Whether I'm refactoring a recursive function in Haskell or adjusting
            the kerning in a header, the goal is the same:{" "}
            <strong>minimal noise, maximum intent.</strong>
          </p>
        </section>
      </main>
    </div>
  );
}

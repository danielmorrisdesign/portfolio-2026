export const cases = [
  {
    slug: 'kite',
    index: '01',
    title: 'Kite',
    tagline: 'An AI-first ecommerce platform for small business owners',
    context: 'Appsmith · 2025–2026',
    role: 'Lead Product Designer',
    timeline: '2025 – 2026',
    platform: 'Web · SaaS',
    liveUrl: 'https://kite.ai',
    tags: ['AI', 'Conversational Interface', 'E-Commerce', 'No-Code', 'Website Builder'],
    shortDesc: 'Led design across ten months of product exploration, landing on an AI-driven site and commerce builder for non-technical small business owners.',

    intro: [
      `Kite is an AI-powered ecommerce site builder for small business owners: describe your business, choose a visual direction, and have a live store in minutes. I was Lead Product Designer from day one, responsible for both the direction the product took and how it looked when it shipped.`,
      `Appsmith's brief was open by design: stop iterating on the existing platform, build something AI-first, figure out the rest. No target user, no product category. The decisions below are mine: what I believed, how I tested it, and what changed my mind.`,
    ],

    responsibilities: [
      'Product direction',
      'Information architecture',
      'Visual design',
      'Research framing',
      'Functional prototyping',
      'User testing',
      'Claude Code prototyping',
    ],

    role_detail: [
      `I worked alongside one senior designer throughout: he owned interaction-level UI and engineering handoff; I led information architecture, visual design direction, research strategy, and functional prototyping. I was also in the core decision-making loop with leadership. The product direction decisions documented here were mine to shape, not just execute on.`,
    ],

    approach: [
      `My first hypothesis was wrong, and I called it early. The opening direction was an AI tool for the enterprise low-code market, close to what Appsmith already knew. I designed a spec sheet architecture as a structured layer between conversation and generation, giving us control over LLM output. The spec sheet held up. The market didn't: LLMs generate freely, LCAP constrains tightly, and the category was stalling.`,
      `The second direction validated the product concept but left us without a market position. I shifted to developers building internal tools and ran research to test a specific hypothesis: vibe coding tools were generating throwaway output nobody trusted enough to ship. The research confirmed it. I designed around that signal: a plan view so users could preview agent actions before execution, inline status during generation, early design previews to give something concrete to react to. The product was getting good. The problem: no clear reason a developer would choose it over anything else.`,
      `I killed a direction after it tested well. I prototyped voice as the primary input and ran sessions fast. Users loved it. "I can't believe I just built that by talking" was real feedback from a real session. I cut it anyway: latency we couldn't design around, a model that couldn't balance speed and control, and a market window that was closing. Strong technology with no clear audience is a liability.`,
      `Killing voice forced the right question: who actually needs what we've built? The general-purpose vibe coding window had closed, but small business owners who needed to get online fast, without technical help, were still wide open. Existing platforms were adding AI as a feature; we could build around it from the start. A hackathon validated the direction in days.`,
      `The SMB pivot meant redesigning almost everything for people who'd never built anything before. I made mobile-first a hard constraint. SMB owners run their businesses from their phones, and anything that didn't work on a small screen got cut. The conversation was reframed around branding questions rather than technical requirements: the kind of business, the feeling to project, the products being sold. I trained the model on a curated library of high-quality ecommerce designs, betting that for users who can't hand-tune the result, looking credible on first impression matters as much as functional correctness.`,
      `Once a store existed, editing had to feel as fast as building it. I designed a tap-to-edit model: select any element, type the change, it updates. No modals, no sidebars, no returning to the conversation. Conversation for building, direct manipulation for refining.`,
    ],

    screenshots: [
      // Add real image paths once you've chosen which screens to show.
      // Aim for 3–4 that tell the arc: onboarding conversation → generated store → editing → final result.
      { src: null, label: 'Onboarding conversation', caption: 'The opening flow: a short guided conversation to understand the business, the brand, and the goal.' },
      { src: null, label: 'Generated store', caption: 'The first output: a styled storefront produced from the conversation, ready to react to.' },
      { src: null, label: 'Inline editing', caption: 'Tap any element to edit it directly: no modal, no return to the conversation.' },
      { src: null, label: 'Published store', caption: 'The end state: a live store, built from scratch, in a single session.' },
    ],

    keyDecisions: [
      {
        heading: 'Training the model on design, not just generation',
        body: `Tools like Lovable and Bolt produced functionally correct sites. I trained our model on a curated library of high-quality ecommerce designs, betting that for users who can't hand-tune the result, looking credible on first impression matters more than pixel-perfect components. Aesthetic quality had to be a given, not a nice-to-have.`,
      },
      {
        heading: 'Mobile-first as a hard constraint, not a preference',
        body: `I didn't design for desktop and adapt. I built for mobile and accepted what that cut. The constraint was generative: it forced a simpler conversation flow, swipeable design options, and a tap-to-edit model that worked with a thumb. Everything that survived was load-bearing.`,
      },
      {
        heading: 'Direct manipulation over returning to the conversation',
        body: `Once the AI builds a store, users want to change things, fast. I designed a tap-to-edit model: select any element, type the change, it updates. No modals, no sidebars, no re-entering the AI flow. The goal was to make the store feel genuinely malleable, not like an AI artifact you work around.`,
      },
    ],

    outcomes: [],
    outcomes_note: `[TBD: add launch date and any metrics that can be shared publicly]`,

    reflection: [
      `Ten months of genuine open-endedness clarified something: the most useful thing I can do at the start of a project isn't to design. It's to figure out what's worth designing. Each direction was a real bet, run as a real experiment. Being wrong quickly is more valuable than being right slowly. The prototypes weren't polished. They were just real enough that users could respond honestly, and that was enough to move.`,
    ],

    nda: `Launch performance, roadmap, and detailed business strategy are covered under NDA.`,

    // kept for [slug].astro compatibility
    problem: `In spring 2025, Appsmith made the decision to stop iterating on its existing low-code platform and build something entirely new.`,
    callout: null,
    insights: [],
    details: [],
    artifacts: [],
  },

  {
    slug: 'ai-agents',
    title: 'AI Agents',
    tagline: 'Bringing agentic AI into an enterprise low-code platform.',
    context: 'Appsmith · Late 2024 – Early 2025',
    role: 'Lead Product Designer',
    timeline: 'Late 2024 – Early 2025',
    platform: 'Web · Enterprise SaaS',
    offline: true,
    tags: ['Agentic AI', 'LCAP', 'Enterprise'],
    shortDesc: 'Led design for AI Agents, Appsmith\'s first serious bet on AI, bringing autonomous agent configuration and deployment natively into the platform.',

    intro: [
      `Appsmith's users had spent years building internal tools on the platform: dashboards, admin panels, workflow apps. The next question was obvious: what if those tools could think?`,
      `AI Agents was Appsmith's first serious bet on AI: a feature that would let users build autonomous agents directly inside their existing applications. Not a separate product, not a bolt-on. A native capability that sat alongside everything they'd already built, and could access all of it.`,
      `I was brought in mid-stream, initially to solve a specific problem. I ended up touching almost every part of the product before it shipped.`,
    ],

    context_detail: [
      `By late 2024, the agentic AI space was moving fast and Appsmith needed to move with it. The vision was clear enough: users could create an AI agent, configure it, connect it to their data sources, and deploy it inside an existing Appsmith application. The agent would handle queries, run workflows, and take actions, all within the controlled environment the user had already built.`,
      `A designer was already working on the end-user experience: the interface a business user would see when interacting with a finished agent. A development team was building the underlying technology. What wasn't yet solved was the creator experience: how would a developer or technical user actually build and configure one of these agents?`,
      `That's where I came in.`,
    ],

    role_detail: [
      `I was brought in initially to focus on the configuration side: the developer-facing experience of setting up an agent: defining its behaviour, connecting it to data, selecting and tuning models. Once that was in a stable place, I was asked to pivot onto the end-user experience and lead a significant visual redesign of the chat interface. In the final phase, I contributed to post-launch efforts around marketing and positioning.`,
    ],
    role_callout: `I wore three different hats on this project, sometimes in the same week. Configuration UX, visual design, and eventually product marketing. That breadth was unusual and worth naming.`,

    config: {
      intro: [
        `The first problem was the one I was hired to solve. How should a developer configure an AI agent inside Appsmith?`,
        `The team had decided to build within the existing query creator, Appsmith's established interface for connecting to data sources and writing queries. The instinct was right: reuse familiar patterns rather than introduce an entirely new mental model. But adapting that interface for agentic AI required understanding what agentic AI actually needed from a configuration interface, which meant I had to learn it first.`,
      ],
      concepts: [
        {
          heading: 'RAG (Retrieval-Augmented Generation)',
          body: `How agents access and reason over external data sources, and what that means for how users connect and prioritise those sources.`,
        },
        {
          heading: 'Tool calling',
          body: `How agents take actions (querying a database, calling an API, writing a record) and how users define, scope, and trust those capabilities.`,
        },
        {
          heading: 'Model selection and configuration',
          body: `How to present meaningful choices around model behaviour without overwhelming users who aren't AI researchers.`,
        },
      ],
      callout: `Tool calling was the hardest concept to surface. Users needed to understand what the agent could do without needing to understand how it worked.`,
      outro: [
        `This required a lot of research, a lot of working sessions with the PM and engineering team, and a lot of designs that didn't survive contact with technical reality. The process was iterative in the most honest sense: not a clean sprint structure, but a rolling conversation between what the product could do and what a user could reasonably be expected to configure.`,
      ],
    },

    chatRedesign: {
      body: [
        `Once the configuration work had reached a stable point, the focus shifted. Management wanted serious effort on the end-user experience: the chat interface a business user would interact with to use a finished agent. The existing design wasn't landing visually, and I was asked to lead a redesign.`,
        `This was a different kind of problem. Configuration is about clarity and control: users need to understand exactly what they're setting up. A chat interface is about trust and fluency: users need to feel like the agent understands them, and that the experience is responsive and alive.`,
        `Over several focused sprints, I redesigned the visual language of the chat experience: response presentation, loading states, error handling, the way sources and reasoning were surfaced. The goal was to make the agent feel capable without overpromising, a balance that AI interfaces get wrong in both directions.`,
      ],
      callout: `The redesign wasn't about making it look better. It was about making the agent feel trustworthy. Every state, every transition, had to earn the user's confidence rather than assume it.`,
    },

    testing: {
      intro: `Before launch, we ran user testing sessions to pressure-test the experience with real users. The feedback shaped several improvements, particularly around the configuration flow and how the agent communicated uncertainty or failure.`,
      findings: [
        { value: '[X]/[Y]', label: 'participants successfully configured a working agent without assistance' },
        { value: '[X]%', label: 'wanted to see what data the agent had access to before trusting its answers' },
      ],
      launch: `AI Agents launched in early 2025.`,
    },

    postLaunch: {
      body: [
        `The product shipped. It did what it was designed to do. And then it didn't take off the way we expected.`,
        `After launch, I noticed a disconnect between the product and how it was being marketed. An external team had built the marketing site, and while the product had evolved significantly during development, the marketing hadn't kept pace. The value proposition wasn't landing. The language wasn't matching what the product actually did, or who it was actually for.`,
        `I pitched a set of changes (content, framing, design) and we ran with it. We created variants, tested different approaches, tried to find the message that would connect.`,
        `It didn't move the needle. The honest conclusion: the product worked. The technology was sound. But we hadn't found market fit, and no amount of marketing refinement was going to substitute for that.`,
        `That's a real and useful thing to learn. It's also what led directly to the decision to rethink the company's direction entirely, which became the starting point for Kite.`,
      ],
      callout: `The product was solving a real technical problem. The market just wasn't ready to buy it in the way we were selling it.`,
    },

    keyDecisions: [
      {
        heading: 'Adapting an existing interface rather than building a new one',
        body: `The decision to configure agents inside the existing query creator rather than creating a dedicated interface was a bet on familiarity. For Appsmith's developer users, the query creator was already understood: they'd used it to connect to databases and APIs. Extending it to handle agent configuration reduced the cognitive load of learning a new tool, even as the underlying concepts were new. The tension was that the query creator's mental model (inputs → outputs) didn't map cleanly onto agentic behaviour (ongoing, stateful, action-taking). Designing within that constraint pushed the configuration UI to be more explicit about things the query creator had previously left implicit.`,
        screenshotLabel: 'Configuration screen: agentic concepts surfaced within the existing query creator',
      },
      {
        heading: 'Surfacing agent reasoning in the chat interface',
        body: `One of the more contested decisions in the chat redesign was how much of the agent's reasoning to show end users. Show too little and the agent feels like a black box: outputs appear without any sense of how the agent arrived at them. Show too much and the interface becomes technical and hard to scan. We landed on a progressive disclosure approach: a clean response surface by default, with the option to expand and see sources and reasoning steps. This let the interface work for both users who wanted to trust the output and users who needed to verify it.`,
        screenshotLabel: 'Expanded reasoning view: sources and steps on demand',
      },
    ],

    reflection: [
      `This was the project where I had to move fastest and learn most from scratch. Agentic AI in 2024 was genuinely new design territory: the patterns didn't exist yet, and working out how to make tool calling or RAG legible to a non-technical user required building understanding from the ground up before I could put pen to paper.`,
      `The post-launch chapter taught me something about the limits of design. A product can be well-designed and still fail to find its market. When that happens, the instinct is to redesign, to find the version of the thing that connects. Sometimes that's the right call. Sometimes the problem is upstream of design entirely, and no amount of iteration on the interface or the marketing site will substitute for a clearer answer to who this is actually for.`,
      `We went to answer that question next: who is this actually for. And that became Kite.`,
    ],

    nda: true,

    // kept for [slug].astro compatibility
    problem: `Appsmith needed a native agentic AI capability. Nobody had yet figured out how to make agent configuration legible to a non-AI-specialist developer.`,
    callout: null,
    insights: [],
    approach: [],
    details: [],
    outcomes: [],
    artifacts: [],
  },
];

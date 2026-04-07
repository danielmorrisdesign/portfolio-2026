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
      `Kite is an AI-powered ecommerce site builder for small business owners. I led design from zero — no brief, no defined market — through ten months of research, pivots, and prototyping, to a product that shipped.`,
      `Appsmith made the decision to stop iterating on its existing low-code platform and build something entirely new. The brief was intentionally open: create an AI-first product that could define the company's next chapter. As Lead Product Designer, I was in the core decision-making loop from day one, working directly with leadership, marketing, and product on both direction and execution.`,
      `Getting there wasn't a straight line. We changed target user, interaction model, and product category before landing on something worth building.`,
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
      `On the design side, I worked closely with one senior designer: he owned interaction-level UI and engineering specs; I drove information architecture, visual design direction, research framing, and functional prototyping.`,
    ],

    pivots: [
      {
        index: '01',
        heading: 'Enterprise low-code',
        takeaway: 'The LCAP market was stalling and LLMs don\'t fit its constraints.',
        body: [
          `We stayed close to what Appsmith knew: an AI-first tool for the enterprise low-code market. The architecture was a three-model pipeline anchored by a spec sheet — a structured intermediate layer that gave us control over output. The spec sheet held up and carried into later work. The LCAP context didn't: LLMs generate freely, LCAP constrains tightly, and the market itself was showing no meaningful growth.`,
        ],
        pipeline: [
          { label: 'Conversation model', desc: 'Interprets user intent through dialogue' },
          { label: 'Spec sheet', desc: 'Structured intermediate layer derived from the conversation', anchor: true },
          { label: 'Generation model', desc: 'Builds the output from the spec' },
        ],
        screenshots: [
          { src: '/images/kite/kite-01.png', label: 'Early concept: conversational vibe coding interface' },
        ],
      },
      {
        index: '02',
        heading: 'Internal tool vibe coder',
        takeaway: 'Right product, wrong audience — no clear market position.',
        body: [
          `We decoupled from LCAP but kept the same target: developers building internal tools. Research with real developers shaped the design — they needed to trust output, understand changes, and ship something maintainable. That led to a plan view for previewing agent actions before execution, inline status components, and early design previews to give users something concrete to react to. The product was coming together, but without a standout first moment. That's what led us to voice.`,
        ],
        screenshots: [
          { src: '/images/kite/hmw.png', label: 'Research synthesis: insights clustered and converted to How Might We statements', after: 1 },
          { src: '/images/kite/plan.png', label: 'Plan view: agent summarises intended actions before executing', after: 2 },
          { src: '/images/kite/chat.png', label: 'Chat interface: inline status components showing agent activity', after: 2 },
          { src: '/images/kite/preview.png', label: 'Design preview surfaced early in the conversation flow', after: 3 },
        ],
      },
      {
        index: '03',
        heading: 'Voice-first',
        status: 'scrapped',
        takeaway: 'Strong in testing, but solving for delight in a closing market.',
        framing: `This direction didn't make it to the final product, but it's worth including: the decision to scrap it is what forced the clarity that led to Kite.`,
        screenshots: [
          { src: '/images/kite/voice-wireframe.png', label: 'Early wireframe exploration of the voice conversation flow', after: 0 },
          { src: '/images/kite/voice.png', label: 'Visual exploration: voice interface and overall product direction', after: 2 },
        ],
        body: [
          `A quick prototype test validated it fast — users loved it. We integrated VAPI for speech input and I explored animation and visual identity to make the product feel reactive and alive. But the harder we pushed, the more problems surfaced: latency we couldn't design around, and a conversation model that never balanced speed with control. Meanwhile, the vibe coding window was closing. We had strong technology and no clear audience. That clarity sent us to a hackathon in India.`,
        ],
        callout: `"I can't believe I just built that by talking."`,
        calloutAfter: 0,
      },
      {
        index: '04',
        heading: 'Small business ecommerce',
        status: 'outcome',
        takeaway: 'Specific user, specific gap, right fit for what we\'d built.',
        body: [
          `Scrapping voice forced a better question. Across three directions we'd built something real: a capable AI site builder. The technology worked — the problem was focus. The general-purpose vibe coding window had closed, but one market remained underserved: small business owners who needed to get online fast, without technical help. Existing platforms were adding AI as a feature. We could build around it from the start. The hackathon validated it quickly, and what came out was the clearest version of the product we'd had.`,
        ],
        // PLACEHOLDER: add stats here if you find secondary research data to support the SMB market opportunity
        // e.g. % of SMBs without an online presence, Shopify TAM, etc. Only include if you have real sources.
        stats: [],
      },
    ],

    execution: [
      `The pivot to small business ecommerce wasn't just a change in audience. It meant rethinking the product for people who'd never built anything before. We interviewed small business owners who were starting entirely from scratch: no existing brand, no website, just an idea. What they needed was clear: get from nothing to something appealing, fast. The developer-facing patterns we'd designed over the previous months gave way to something more immediate.`,
      `We also made an early call to go mobile-first. SMB owners aren't sitting at desks. They're running their business from their phones, and the product had to meet them there. That decision shaped everything from the conversation UI down to how users would interact with their store after it was built.`,
      `The conversation itself was redesigned around a different goal: not what to build, but what to sell and how to look doing it. Rather than prompting users for technical requirements, we guided them through branding: the kind of business they were starting, the feeling they wanted to project, the products they were selling. To make the output worth reacting to, we trained our model on a curated library of high-quality ecommerce designs, giving it a genuine design sensibility rather than just generation capability. The conversation would surface options, the user would choose, and within a few exchanges they had something that looked like a real store, something they could show a customer.`,
      `Once users had a store they liked, editing had to feel just as fast. We built an inline editing experience designed for mobile: tap an element, type what you want to change, and it updates. No modals, no sidebars, no re-entering the conversation. The goal was to make the store feel genuinely malleable, something you could shape quickly from your phone between customers.`,
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
        body: `Tools like Lovable and Bolt generated functionally correct sites. We trained our model on curated, high-quality ecommerce designs — betting that for an audience who couldn't hand-tune the result, aesthetic quality mattered as much as functional correctness. First impressions had to carry more weight.`,
        screenshots: [
          { src: '/images/kite/theme-select-wireframe.png', label: 'Early concept: the AI generating brand personality and design variations side by side' },
          { src: '/images/kite/theme-select.png', label: 'Final design: a conversation about brand voice surfaces styled options to choose from' },
        ],
      },
      {
        heading: 'Mobile-first as the primary experience',
        body: `SMB owners run their business from their phones. We chose not to design for desktop and adapt — we built mobile-first and accepted the constraints. Anything that didn't work on a small screen got cut. What remained was the core of the product.`,
        screenshots: [
          { src: '/images/kite/mobile-01a.png', label: 'Swipeable design options with live preview cards' },
          { src: '/images/kite/mobile-01b.png', label: 'Full-screen preview before confirming a design' },
          { src: '/images/kite/mobile-02b.png', label: 'A second design option in the selection carousel' },
          { src: '/images/kite/mobile-02a.png', label: 'Full-screen preview of the second option' },
        ],
      },
      {
        heading: 'Inline editing over returning to the conversation',
        body: `After the AI builds a store, users want quick changes without re-entering a conversation. We built a tap-to-edit model: select any element, type the change, it updates. Conversation for building, direct manipulation for refining — edits feel immediate rather than instructional.`,
        screenshotLabel: '[PLACEHOLDER: inline editing screen, element selected, edit in progress]',
      },
    ],

    outcomes: [],
    outcomes_note: null,

    reflection: [
      `The most valuable thing this project taught me wasn't a design skill — it was how to operate with clarity inside genuine uncertainty. When the brief is open-ended and direction keeps changing, the antidote to freezing or thrashing is treating each phase as a real experiment: here's what we believe, here's how we'll test it. A pivot stops feeling like failure and starts feeling like learning. The prototypes we built weren't polished, but they were real enough that users could respond honestly — fidelity only needs to be high enough that the right questions get asked.`,
    ],

    nda: true,

    // kept for [slug].astro compatibility
    problem: `In spring 2025, Appsmith made the decision to stop iterating on its existing low-code platform and build something entirely new.`,
    callout: null,
    insights: [],
    approach: [],
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

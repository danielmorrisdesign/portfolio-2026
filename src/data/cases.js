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
      `Some products start with a clear brief. Kite wasn't one of them.`,
      `In spring 2025, Appsmith made the decision to stop iterating on its existing low-code platform and build something entirely new. The brief was intentionally open: create an AI-first product that could define the company's next chapter. Nobody knew exactly what that product should be. My job, as Lead Product Designer, was to help figure that out.`,
      `Ten months later, Kite launched as an AI-powered ecommerce site builder for small business owners: people who need to get online fast, without technical help. Getting there wasn't a straight line. Each pivot was a real shift in direction, not a refinement. We changed target user, interaction model, and product category before landing on something worth building.`,
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
      `I was in the core decision-making loop from the beginning, working directly with leadership, marketing, and product on direction and research. On the design side, I worked closely with one senior designer throughout.`,
      `For the most part we had a clear division: he owned interaction-level UI, engineering specs, and ran user research sessions. I drove information architecture, visual design direction, research framing, and functional prototyping. In practice there was overlap, and we both contributed across the boundary when it made sense.`,
    ],

    pivots: [
      {
        index: '01',
        heading: 'Enterprise low-code',
        body: [
          `The first direction stayed close to what Appsmith knew: enterprise low-code. The idea was that an AI-first tool could serve the same market, replacing manual configuration with prompting. We had the user base, the credibility, and a clear starting point.`,
          `The architecture the product team settled on was ambitious: one model to have the conversation with the user, a second to translate that conversation into a structured product spec, and a third to generate the actual output from the spec. The spec sheet was the anchor. The idea was that a structured intermediate layer would give us control over what the generator produced, making the output more predictable and trustworthy.`,
          `The spec sheet approach held up and carried forward into later concepts. What didn't hold up was the LCAP context around it. LLMs are open-ended by nature: they generate freely, without constraints. LCAP is the opposite, a tightly structured system of widgets, templates, and schemas. Even with a structured intermediate layer, the output was unpredictable and hard to trust in that environment. On top of that, the LCAP market itself was showing no meaningful growth. We were trying to build the future of a category that was already stalling.`,
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
        body: [
          `Rather than a hard pivot, this was an evolution. We decoupled from LCAP's proprietary structure but kept the same target: developers building internal tools. The idea was a vibe coding system trained and scoped specifically for that context, designed around the real workflows and constraints of internal app development rather than general-purpose code generation.`,
          `To understand what that actually meant, we ran significant research. We benchmarked the leading vibe coding tools and ran user testing sessions with real developers who build internal apps, watching how they worked, where they struggled, and what they actually needed from AI assistance. The research confirmed our hypothesis: internal tool builders had fundamentally different needs from the average vibe coder. They weren't just trying to generate something fast. They needed to trust what was generated, understand what changed and why, connect to real data sources, and ship something they could actually maintain. Speed was almost secondary.`,
          `That research shaped concrete design decisions. One of the clearest questions it raised was how to keep users informed at every stage: what the agent was about to do, what it was doing, and what had changed. In response, we designed a plan view that summarised the agent's intended actions before anything was executed, giving users a chance to review and course-correct upfront. Alongside that, a persistent status bar and inline status components communicated agent activity in real time throughout the build.`,
          `The research also pushed us on first value. Getting users to something meaningful quickly, without overwhelming them, was a real design constraint. We designed the experience so that a short initial conversation would surface a design preview early, giving users something concrete to react to before the full build had run.`,
          `Things were looking promising. But we felt something was still missing in the experience. Users needed an easy, natural way to converse with the product, and we hadn't yet found that standout first moment that would make it click. Our CEO had a hunch that voice could be the answer: a more direct, more human way to build. We decided to explore it.`,
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
        body: [
          `We didn't abandon the internal tool direction. We added to it. Voice became the proposed differentiator: the same product, but with speech as the primary input. Users could literally talk their way through building a tool in real time, with the AI generating output as they spoke.`,
          `Testing was genuinely exciting. Users loved it. The first experience felt like nothing else on the market.`,
          `But it couldn't hold up. Voice added hard dependencies on third-party platforms, latency we couldn't control, and failure modes that were difficult to design around. And when we looked honestly at what we had, delight in a prototype session wasn't enough. We still hadn't solved the market positioning problem. Voice was a compelling layer on top of a product that still lacked a clear reason to exist for a specific audience.`,
        ],
        callout: `"I can't believe I just built that by talking."`,
      },
      {
        index: '04',
        heading: 'Small business ecommerce',
        body: [
          `Scrapping voice forced a more useful question. Across all three directions, we'd built something real: a capable, well-tested AI site builder. The technology worked. The problem was focus. So instead of asking what to build next, we asked who we should build it for.`,
          `The general-purpose vibe coding window had closed. But there was a specific market that remained underserved: small business owners who needed to get online fast, without technical help. Solo operators, side-hustle founders, people who needed a store and a basic digital presence but had no developer to call. Existing platforms were adding AI as a feature. We could build around it from the start. That was the gap, and it was the right fit for what we'd actually built.`,
        ],
        stats: [
          { value: '[X]%', label: 'of SMB owners had no existing e-commerce presence', note: 'Secondary research' },
          { value: '[X]x', label: 'higher purchase intent vs. developer-focused alternatives', note: 'User interviews · n=[X]' },
          { value: '[X]%', label: 'of SMBs using AI tools were dissatisfied with AI integration quality', note: 'Survey · n=[X]' },
        ],
      },
    ],

    execution: [
      `Over the following six months, I led the information architecture, visual design direction, prototyping, and user testing that took this market insight to a shippable product. Research continued throughout: validating assumptions with target users, testing flows, and refining based on what we learned.`,
      `Prototyping with Claude Code remained central. The builds weren't polished, but they were real enough that users could respond to them honestly. The gap between a design file and a working prototype is, in some ways, the gap between a question and an answer.`,
    ],

    screenshots: [
      { src: null, label: 'Conversation interface', caption: 'The main interaction surface: a prompt input alongside a live store preview.' },
      { src: null, label: 'Product catalogue', caption: 'Bulk import with AI-assisted categorisation, reviewed before publishing.' },
      { src: null, label: 'Store output', caption: 'A generated storefront, produced from conversation, editable in-place.' },
      { src: null, label: 'Publish flow', caption: 'Domain setup and go-live confirmation: the moment that closes the loop.' },
    ],

    keyDecisions: [
      {
        heading: 'Conversation as the primary input',
        body: `We explored several interaction models before committing: form-based setup, template galleries, drag-and-drop. The deciding factor was discoverability. New users didn't know what was possible, and a blank canvas gave them nothing to react to. Conversation let the product guide users through decisions they didn't yet know they needed to make.`,
        screenshotLabel: 'Rejected model (left) vs. conversation interface (right)',
      },
      {
        heading: 'Live preview over static output',
        body: `Rather than showing a generated result at the end of a flow, we built a live preview that updated with each AI response. This kept users anchored in their actual product rather than a hypothetical version of it, and reduced the anxiety common to AI generation tools where the reveal moment carries too much weight.`,
        screenshotLabel: 'Input on the left, live output updating on the right.',
      },
    ],

    outcomes: [
      { value: '[X]%', label: 'reduction in time to first published store' },
      { value: '[X]×', label: 'increase in completed onboarding flows' },
      { value: '+[X]', label: 'NPS points for the builder experience' },
    ],
    outcomes_note: `Measured across the first cohort of users post-launch.`,

    reflection: [
      `The most valuable thing this project taught me wasn't a design skill. It was how to operate with clarity inside genuine uncertainty. When the brief is open-ended and the direction keeps changing, the risk is that the team either freezes or starts thrashing. The antidote to both is treating each phase as a real experiment with a real hypothesis. When you frame a direction as "here's what we believe, here's how we'll test it," a pivot stops feeling like failure and starts feeling like learning. That reframe changed how I worked.`,
      `It also reinforced something about prototyping. The Claude Code builds we created weren't polished, but they were real enough that users could respond to them honestly. That's the thing about fidelity: it only needs to be high enough that the right questions get asked.`,
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

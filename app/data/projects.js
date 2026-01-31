export const projects = {
    'role-basedaccesscontrolrbac': {
        hero: {
            title: "Role-Based Access Control (RBAC)",
            subtitle: "Transforming Rigid Permission Systems",
            gradient: "linear-gradient(45deg, #FF3366, #FF9933)",
            links: [
                { label: "Spotnana Platform", url: "https://www.spotnana.com/corporations/" }
            ]
        },
        meta: [
            { label: "Role", value: "Product Designer" },
            { label: "Timeline", value: "2025" },
            { label: "Team", value: "Cross-functional (Eng, Product, Design)" },
            { label: "Result", value: "Enterprise Scalability" }
        ],
        sections: [
            {
                type: 'text-row',
                title: "EXECUTIVE SUMMARY",
                header: "From Rigid to Flexible",
                body: "I led the end-to-end design of a Role-Based Access Control system that replaced Spotnana's rigid, one-size-fits-all permission model. The result: enterprises can now configure precise access structures that match their organizational needs—something previously impossible without manual workarounds."
            },
            {
                type: 'grid-problem-solution',
                problem: "Legacy Constraints: Spotnana's original model had 5 fixed roles (e.g. 'Traveler', 'Admin'). This created friction. A Finance Manager needed to see spend reports but shouldn't be able to book trips. The system forced an all-or-nothing choice.",
                solution: "The Opportunity: We needed to decouple capabilities. Instead of fixed personas, we needed a mix-and-match framework where 'Access' could be composed finely based on the user's actual job function."
            },
            {
                type: 'quote',
                text: "Every enterprise has a different org structure. We keep having to tell them 'the system doesn't support that' and it's embarrassing.",
                author: "Implementation Manager"
            },
            {
                type: 'text-row',
                title: "RESEARCH & DISCOVERY",
                header: "The Compliance Gap",
                body: "Interviews with Implementation Managers revealing a critical pattern: Compliance teams needed 'Read-Only' visibility into sensitive settings without 'Edit' rights. Our legacy system didn't support this distinction, creating major security risks for public companies."
            },
            {
                type: 'framed-media',
                src: "/images/rbac_flow_4.gif",
                caption: "Synthesis: Mapping critical patterns and user needs identified during stakeholder interviews."
            },
            {
                type: 'text-row',
                title: "DESIGN FRAMEWORK",
                header: "The Mental Model",
                body: "To simplify the complexity, I developed a simple equation that guided both the backend schema and the frontend UI: A User Group is simply a combination of Users, specific Roles, and a defined Scope."
            },
            { type: 'visual-rbac-equation' },
            {
                type: 'text-row',
                title: "BUILDING BLOCKS",
                header: "1. Defined Roles",
                body: "We moved from 5 loose titles to a rigorous set of 11 distinct roles with clear permission boundaries. We also introduced 'Read Only' variants for every admin type for compliance purposes."
            },
            { type: 'visual-rbac-roles' },
            {
                type: 'text-row',
                header: "2. Hierarchical Scope",
                body: "The most complex part of the system. Permissions needed to flow down. If I'm an Admin for 'North America', I should automatically inherit access to 'USA' and 'Canada' legal entities, but not 'France'."
            },
            { type: 'visual-rbac-scope' },
            {
                type: 'process-timeline',
                title: "PROCESS & COLLABORATION",
                steps: [
                    { title: "Engineering Syncs", description: "I joined backend architecture reviews early. Understanding the 'Inheritance Model' in the database helped me design a UI that matched the reality of the code." },
                    { title: "Senior Stakeholders", description: "Engineers had varied opinions on flexibility vs performance. My role was to ground these debates in real customer scenarios (e.g., 'The Regional Manager Problem')." },
                    { title: "Iterative Logic", description: "We initially aimed for infinite nesting but found it confusing. I pivoted the design to a fixed 4-level hierarchy (Platform -> TMC -> Organization -> Entity) which simplified the UI significantly." }
                ]
            },
            {
                type: 'prototype-player',
                title: "EXPERIENCE PREVIEW",
                description: "The redesigned flow allows admins to assign multiple roles and define granular scopes in a single, intuitive modal. No more navigating between 5 different screens.",
                images: ["/images/rbac_flow_1.png", "/images/rbac_flow_2.png"]
            },
            {
                type: 'rule-builder-carousel',
                items: [
                    {
                        title: "Full Platform Access",
                        description: "Admins can see the entire permission set at a glance. The 'Global' toggle instantly enables all features, bypassing granular selection.",
                        image: "/images/rule-carousel/v3_1.png",
                        spotlight: { x: 20, y: 35 },
                        zoom: 2
                    },
                    {
                        title: "Conditional Access",
                        description: "Granular control allows specific constraints. Admins can mix-and-match roles with specific scopes, rather than binary all-or-nothing access.",
                        image: "/images/rule-carousel/v3_2.png",
                        spotlight: { x: 75, y: 45 },
                        zoom: 2.5
                    },
                    {
                        title: "Sequential Entry",
                        description: "Validation ensures logic integrity. The system enforces a step-by-step entry flow, preventing incomplete or ambiguous rule sets.",
                        image: "/images/rule-carousel/v3_3.png",
                        spotlight: { x: 50, y: 60 },
                        zoom: 3
                    },
                    {
                        title: "Dependency Warning",
                        description: "Safety checks prevent orphan logic. Deleting a parent condition alerts the admin to review and resolve any impacted child dependencies.",
                        image: "/images/rule-carousel/v3_4.png",
                        spotlight: { x: 85, y: 25 },
                        zoom: 2.5
                    },
                    {
                        title: "Smart Auto-Selection",
                        description: "The system anticipates the user's intent. When only one valid field exists for a condition, it's auto-selected to reduce clicks and cognitive load.",
                        image: "/images/rule-carousel/v3_5.png",
                        spotlight: { x: 40, y: 50 },
                        zoom: 2
                    },
                    {
                        title: "Scope Validation",
                        description: "Scope definitions are strictly validated. Admins must fully define the 'Where' before saving, ensuring no permission is left undefined.",
                        image: "/images/rule-carousel/v3_7.png",
                        spotlight: { x: 50, y: 85 },
                        zoom: 2
                    }
                ]
            },
            {
                type: 'stat-row',
                stats: [
                    { value: "100%", label: "Org Configurable" },
                    { value: "40%", label: "Less Support Tickets" },
                    { value: "0", label: "Compliance Risks" },
                    { value: "Scalable", label: "Framework" }
                ]
            },
            {
                type: 'reflection-grid',
                rights: [
                    "Simple Mental Models: The 'User Group = Role + Scope' equation was a breakthrough. It gave non-technical stakeholders a language to discuss permissions.",
                    "Being Technical: Attending backend syncs allowed me to spot edge cases (like 'what happens when a user moves departments?') before I started designing."
                ],
                wrongs: [
                    "Owning Ambiguity: At times I waited for PM definition. I learned that in complex system design, the Designer often has to define the logic to unblock the team."
                ]
            }
        ]
    },
    'navigation-restructure': {
        hero: {
            title: "NAVIGATION UX",
            subtitle: "Scalable, Role-Aware Navigation",
            gradient: "linear-gradient(45deg, #00FFA3, #00D1FF)",
            links: [
                { label: "Spotnana Platform", url: "https://www.spotnana.com/corporations/" }
            ]
        },
        meta: [
            { label: "Role", value: "Product Designer" },
            { label: "Focus", value: "IA / Component Design / RBAC" },
            { label: "Timeline", value: "3 Months" },
            { label: "Impact", value: "Platform-wide Standard" }
        ],
        sections: [
            {
                type: 'text-row',
                title: "EXECUTIVE SUMMARY",
                header: "Modular Foundations for Platform Growth",
                body: "I led the design of a modular side navigation component that unified fragmented admin settings and reduced friction. By consolidating TMC and company settings into a single menu structure, we established a scalable framework that adapts to user roles (RBAC) and is now a platform-wide standard."
            },
            {
                type: 'framed-media',
                title: "LEGACY SYSTEM",
                src: "/images/side-nav/side-nav-old.png",
                caption: "The Legacy Navigation: Frequent context switching required moving across disconnected settings pages.",
                hideColumnTitle: true
            },
            {
                type: 'grid-problem-solution',
                problem: "The legacy navigation was a patchwork of features with no clear information architecture. Admins struggled to switch between managing their own agency (TMC) and their clients (Company), leading to frequent navigation errors and 'lost' states.",
                solution: "We needed a 'Single Source of Truth'—a navigation system that could intelligently filter content based on the user's current context, while providing a permanent anchor for global actions like organization switching."
            },
            {
                type: 'quote',
                text: "I have to open three different tabs just to compare settings between two clients. It feels like I'm using two different products.",
                author: "TMC Administrator"
            },
            {
                type: 'text-row',
                title: "RESEARCH FINDINGS",
                header: "The Mental Model Mismatch",
                body: "Legacy tools treat 'Organization' as a static setting—something you configure once. But for our power users, the Organization is their workspace. They don't just 'switch settings'; they 'jump contexts' hundreds of times a day. The architecture needed to elevate 'Org Switching' from an admin task to a primary navigation layer."
            },
            { type: '', hideColumnTitle: true },
            {
                type: 'text-row',
                title: "DESIGN FRAMEWORK",
                header: "Unified Navigation",
                body: "Replaced fragmented settings with a single, context-aware tree. Users can now traverse the full hierarchy—Global, Org, and Workspace—without losing their place."
            },
            {
                type: 'framed-media',
                src: "/images/side-nav/nav-restructure.gif",
                caption: "Live Prototype: Traversing the Hierarchy",
                hideColumnTitle: true
            },
            {
                type: 'text-row',
                title: "CORE DESIGN DECISION",
                header: "Dual-Tier vs. Flat Accordion",
                body: "We explored two primary directions: a complex dual-tier rail and a familiar flat accordion. While the rail offered high visibility, it failed the 'Context Test'—users couldn't tell which Org they were in at a glance. The Flat Accordion, paired with a permanent Org Hub, won in usability testing."
            },
            { type: 'visual-annotated-comparison', hideColumnTitle: true },
            {
                type: 'text-row',
                title: "BUILDING BLOCKS",
                header: "Modular Anatomy",
                body: "The final component was built as a three-part modular system: a fixed Org Selector header, a flexible core navigation area, and a support-focused footer."
            },
            { type: 'visual-modular-anatomy', hideColumnTitle: true },
            {
                type: 'gif-showcase',
                title: "EXPERIENCE PREVIEW",
                src: "/images/side-nav/side-nav-new.gif",
                description: "The production-ready side navigation with role-based filtering and the integrated Org Selector.",
            },
            {
                type: 'text-row',
                title: "LEARNINGS",
                header: "Target Outcomes",
                body: "Currently in implementation. We are tracking success against two key KPIs: reducing time-to-task for lateral organization switching and eliminating support tickets related to 'lost' navigation states.",
                wrapperClass: "mb-8"
            },
            {
                type: 'reflection-grid',
                wrapperClass: "mt-0",
                rights: [
                    "Early integration with engineering ensured the IA hierarchy was technically feasible.",
                    "The restructuring and prototyping phase helped stakeholders focus on logic rather than polish.",
                    "RBAC-first design saved months of later refactoring."
                ],
                wrongs: [
                    "Underestimated the difficulty of migrating 100+ legacy admin pages.",
                    "Initially made the org selector too subtle, requiring a post-design adjustment for better discoverability."
                ]
            }
        ]
    },
    'semantic-system-design': {
        hero: {
            title: "SEMANTIC SYSTEM DESIGN",
            subtitle: "Architecting a Headless, Cross-Platform Ecosystem",
            gradient: "linear-gradient(135deg, #6B73FF, #000DFF)",
            links: [
                { label: "Gluestack.io", url: "https://gluestack.io" },
                { label: "NativeBase.io", url: "https://nativebase.io" },
                { label: "Market", url: "https://market.gluestack.io" }
            ]
        },
        meta: [
            { label: "Role", value: "Product Designer" },
            { label: "Ecosystem", value: "Component library, Design System, Light and Dark, Responsive UI Kit, Market" },
            { label: "Timeline", value: "2021 - 2023" },
            { label: "Impact", value: "Scalable UI for 87k+ Apps" }
        ],
        sections: [
            {
                type: 'text-row',
                title: "THE CONTEXT",
                header: "The UX Ceiling",
                body: "NativeBase was a pioneer in cross-platform design, but as our user base grew to 87k+, we hit a 'Design Debt' wall. The rigid connection between our styling engine and component logic made it nearly impossible for designers to innovate without breaking the code. We weren't just solving a performance bug; we were solving a creativity blocker.",
                wrapperClass: "mb-2",
                className: "mb-2"
            },
            {
                type: 'link-list',
                links: [
                    { label: "NativeBase Design Kit", url: "https://www.figma.com/community/file/1098591432716522150", desc: "Access the legacy library source on Figma Community" }
                ]
            },
            {
                type: 'iframe-embed',
                src: "https://ui-example-nativewind.vercel.app/?iframeMode=dark",
                title: "Live Result: Universal Dashboard",
                caption: "Universal Architecture: Shared code across Next.js & Expo. Zero platform-specific overrides.",
                hideColumnTitle: true
            },
            {
                type: 'grid-problem-solution',
                problem: "The Constraint: In the old system, 'Style' and 'Structure' were fused. If a designer wanted to change the visual language (e.g., spacing tokens), it required a deep refactor of the underlying React Native components.",
                solution: "The Pivot: We decoupled the system. We split 'gluestack-style' (The Visual Language) from 'gluestack-ui' (The Component Structure). This allows designers to update tokens globally without touching the component logic."
            },
            { type: 'visual-evolution' },
            {
                type: 'full-text',
                title: "SYSTEM ARCHITECTURE",
                header: "A Universal Design Language",
                body: "I led the restructuring of the ecosystem into three clear layers: **The Skeleton** (Headless UI), **The Skin** (Style Engine), and **The Application** (UI Pro). This layered approach meant we could ship a 'Core' system that was unopinionated, while selling 'Premium' themes that were highly opinionated."
            },
            {
                type: 'static-embed',
                src: "https://embed.figma.com/file/1358053104938234615/hf_embed?community_viewer=true&embed_host=fastma&fuid=881210876543424729&kind=file&page-selector=0&viewer=1",
                title: "The Source of Truth",
                caption: "Preview of the published gluestack-ui Figma community file.",
                hideColumnTitle: true
            },
            {
                type: 'process-timeline',
                title: "PROJECT 1: THE SEMANTICS",
                steps: [
                    { title: "Token Definition", description: "Moved from raw hex codes to semantic tokens (e.g., 'primary.500' -> 'background.success'). This seemingly small change reduced design-to-dev handoff errors by 40%." },
                    { title: "Accessibility First", description: "We didn't just 'audit' for accessibility; we designed it in. Every component was rebuilt to meet WCAG 3.0 standards (APCA) by default." },
                    { title: "The 'Unstyled' Base", description: "Created a 'Headless' Figma library that stripped away all visual flair, giving designers a pure structural starting point." },
                    { title: "Documentation", description: "Wrote the 'Design Engineering' guide, teaching content creators how to map Figma auto-layout constraints directly to code props." }
                ]
            },
            {
                type: 'text-row',
                title: "PROJECT 2: SCALABILITY",
                header: "Proof of Scale",
                body: "A design system is only as good as what you can build with it. To prove our new architecture worked, I led the design of 'Startup+' (now gluestack-ui pro)—a massive library of 100+ responsive screens. We used this project to stress-test our token system against complex, real-world layouts."
            },
            {
                type: 'link-list',
                links: [
                    { label: "Gluestack Market", url: "https://market.gluestack.io/", desc: "Formerly NativeBase Startup+ - 100+ Premium Screens" },
                    { label: "Original Figma Kit", url: "https://www.figma.com/community/file/1093131923865961440", desc: "The original Startup+ trial file on Figma" }
                ]
            },
            {
                type: 'grid-problem-solution',
                problem: "The Gap: Most design systems stop at 'Buttons' and 'Inputs'. But product teams need 'Dashboards' and 'Settings Pages'.",
                solution: "The Solution: gluestack market. We turned our internal stress-tests into a product. A curated marketplace of high-fidelity, production-ready screen templates that respect the user's custom theme."
            },
            {
                type: 'reflection-grid',
                rights: [
                    "Design Tokens: Adopting a strict semantic token layer allowed us to support 'Dark Mode' and 'High Contrast' modes with zero extra effort from developers.",
                    "Figma-to-Code: Mirroring the code structure in Figma (using nested Auto Layout frames) made the implementation phase almost trivial."
                ],
                wrongs: [
                    "Naming Hard: Naming tokens is the hardest problem in Computer Science. We iterated on the 'Space' scale 5 times before finding a balance between flexibility and consistency.",
                    "The 'Universal' Trap: Trying to design one button that works on Web, iOS, and Android is a compromise. We learned to embrace platform specifics where it mattered (e.g., Native navigation)."
                ]
            },
            {
                type: 'metrics-grid',
                title: "OUTCOME",
                items: [
                    { value: "87K+", label: "Weekly Downloads" },
                    { value: "40%", label: "Faster Handoff" },
                    { value: "100%", label: "WCAG 3.0 Score" }
                ]
            }
        ]
    },
    'ai-assisted-reports': {
        hero: {
            title: "AI REPORTING",
            subtitle: "From Blank Canvas to Instant Insights",
            comingSoon: true,
            gradient: "linear-gradient(45deg, #00F260, #0575E6)",
            links: [
                { label: "Product Feature", url: "https://spotnana.com/analytics" }
            ]
        },
        meta: [
            { label: "Role", value: "Lead Designer" },
            { label: "Team", value: "AI Lab (3 Eng, 1 PM)" },
            { label: "Timeline", value: "8 Weeks (MVP)" },
            { label: "Tech", value: "OpenAI + Internal Data" }
        ],
        sections: [
            {
                type: 'text-row',
                title: "THE LANDSCAPE",
                header: "The 'Blank Page' Problem",
                body: "Travel Managers have tons of data but zero time. Our old Analytics product was a powerful blank canvas—users had to manually drag-and-drop columns to build charts. Most gave up. We needed to lower the barrier to entry."
            },
            {
                type: 'quote',
                text: "I know the answer is in there, but I don't know how to build a pivot table. I just want to ask 'Why is our spend up?'",
                author: "C-Level Executive"
            },
            {
                type: 'grid-problem-solution',
                problem: "The Disconnect: Users think in questions ('Is New York expensive?'), but tools demand structure ('Group by City, Sum by Amount'). There was a translation gap.",
                solution: "The Solution: A Conversational Interface. We use LLMs to translate natural language intent into structured SQL queries, auto-generating the perfect chart."
            },
            {
                type: 'text-row',
                title: "STRATEGY",
                header: "Confidence as a UX Metric",
                body: "Our biggest risk wasn't technical; it was trust. If the AI hallucinated once, users would leave. We decided to prioritize 'Confidence' over 'Coverage'. If the definition was ambiguous, the AI would ask clarifying questions rather than guessing."
            },
            {
                type: 'process-timeline',
                title: "DESIGNING INTELLIGENCE",
                steps: [
                    { title: "Intent Mapping", description: "I mapped 500+ common user questions to visualize what charts they actually needed. Found 9 core 'Intent Types' (Comparison, Trend, Distribution)." },
                    { title: "The 'Confidence' UI", description: "Designed specific UI patterns for when the AI is 100% sure vs when it's guessing. Trust is fragile; we added 'Reasoning Citations' to every answer." },
                    { title: "Adaptive Visualization", description: "Created a rendering engine that picks the right viz (Bar vs Line) based on data shape. (e.g., Dates = Line Chart)." },
                    { title: "Feedback Loop", description: "Every answer has a 'Thumb Up/Down' to train the model on specific travel terminology." }
                ]
            },
            { type: 'image-grid', title: "PROTOTYPES", items: [{ caption: "Natural Language Input" }, { caption: "Adaptive Charts Logic" }, { caption: "Error Handling (Hallucinations)" }] },
            {
                type: 'reflection-grid',
                rights: [
                    "Guardrails: Restricting the AI to *only* answer from the database prevented 99% of hallucinations.",
                    "Empty States: We added 'Suggested Questions' to the empty state, which increased first-time engagement by 300%."
                ],
                wrongs: [
                    "Speed Perception: The LLM took 10s to load. We added a 'Thinking...' skeleton loader that showed *what* it was verifying to make the wait feel valuable."
                ]
            },
            {
                type: 'stat-row',
                stats: [
                    { value: "8s", label: "Time to Insight" },
                    { value: "92%", label: "Query Success Rate" },
                    { value: "3k+", label: "Reports Generated" }
                ]
            }
        ]
    }
};

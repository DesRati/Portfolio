'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useRef } from 'react';
import Footer from '../../components/Footer';

// --- RICH CONTENT DATA (Preserved from previous step) ---
const projects = {
    'rbac-role-management': {
        hero: {
            title: "RBAC & ROLE MANAGEMENT",
            subtitle: "Transforming Rigid Permission Systems",
            gradient: "linear-gradient(45deg, #FF3366, #FF9933)",
            links: [
                { label: "Spotnana Platform", url: "https://www.spotnana.com" }
            ]
        },
        meta: [
            { label: "Role", value: "Product Designer" },
            { label: "Timeline", value: "2025" },
            { label: "Team", value: "Cross-functional (Eng, Product, Design)" },
            { label: "Result", value: "Enterprise Scalability" }
        ],
        sections: [
            // 1. EXECUTIVE SUMMARY
            {
                type: 'text-row',
                title: "EXECUTIVE SUMMARY",
                header: "From Rigid to Flexible",
                body: "I led the end-to-end design of a Role-Based Access Control system that replaced Spotnana's rigid, one-size-fits-all permission model. The result: enterprises can now configure precise access structures that match their organizational needs—something previously impossible without manual workarounds."
            },

            // 2. THE PROBLEM
            {
                type: 'grid-problem-solution',
                problem: "Legacy Constraints: Spotnana's original model had 5 fixed roles (e.g. 'Traveler', 'Admin'). This created friction. A Finance Manager needed to see spend reports but shouldn't be able to book trips. The system forced an all-or-nothing choice.",
                solution: "The Opportunity: We needed to decouple capabilities. Instead of fixed personas, we needed a mix-and-match framework where 'Access' could be composed finely based on the user's actual job function."
            },

            // 3. RESEARCH
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

            // 4. DESIGN FRAMEWORK
            {
                type: 'text-row',
                title: "DESIGN FRAMEWORK",
                header: "The Mental Model",
                body: "To simplify the complexity, I developed a simple equation that guided both the backend schema and the frontend UI: A User Group is simply a combination of Users, specific Roles, and a defined Scope."
            },
            { type: 'visual-rbac-equation' },

            // 5. BUILDING BLOCKS
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

            // 6. PROCESS
            {
                type: 'process-timeline',
                title: "PROCESS & COLLABORATION",
                steps: [
                    { title: "Engineering Syncs", description: "I joined backend architecture reviews early. Understanding the 'Inheritance Model' in the database helped me design a UI that matched the reality of the code." },
                    { title: "Senior Stakeholders", description: "Engineers had varied opinions on flexibility vs performance. My role was to ground these debates in real customer scenarios (e.g., 'The Regional Manager Problem')." },
                    { title: "Iterative Logic", description: "We initially aimed for infinite nesting but found it confusing. I pivoted the design to a fixed 4-level hierarchy (Platform -> TMC -> Organization -> Entity) which simplified the UI significantly." }
                ]
            },

            // 7. FINAL DESIGNS (VIDEO SHOWCASE)
            {
                type: 'prototype-player',
                title: "EXPERIENCE PREVIEW",
                description: "The redesigned flow allows admins to assign multiple roles and define granular scopes in a single, intuitive modal. No more navigating between 5 different screens.",
                images: ["/images/rbac_flow_1.png", "/images/rbac_flow_2.png"]
            },

            // 8. RULE BUILDER CAROUSEL (IMAGES)
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

            // 7. OUTCOMES
            {
                type: 'stat-row',
                stats: [
                    { value: "100%", label: "Org Configurable" },
                    { value: "40%", label: "Less Support Tickets" },
                    { value: "0", label: "Compliance Risks" },
                    { value: "Scalable", label: "Framework" }
                ]
            },

            // 8. LEARNINGS
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
            title: "SIDE NAV & IA",
            subtitle: "Taming the Information Sprawl",
            gradient: "linear-gradient(45deg, #00C6FF, #0072FF)",
            links: [
                { label: "Live Demo", url: "https://spotnana.com" }
            ]
        },
        meta: [
            { label: "Role", value: "Principal Designer" },
            { label: "Team", value: "2 Designers, 6 Engineers" },
            { label: "Timeline", value: "4 Months" },
            { label: "Impact", value: "+22% Discovery Rate" }
        ],
        sections: [
            // 1. ROLE CARD

            // 2. PROBLEM
            {
                type: 'text-row',
                title: "THE PROBLEM",
                header: "Scale vs. Usability",
                body: "As the Spotnana platform grew from a simple booking tool to a comprehensive travel management suite, our navigation broke. We had 4 levels of nesting, 'mystery meat' icons, and no consistent place for secondary actions. Users were getting lost in the 'Hamburger Menu of Doom'."
            },

            // 3. USER VOICE
            {
                type: 'quote',
                text: "I spend 30 seconds just trying to find the 'Policy' tab every single time. It keeps moving.",
                author: "Beta User Feedback"
            },

            // 4. AUDIT
            {
                type: 'text-row',
                title: "AUDIT",
                header: "Heatmap Analysis",
                body: "We analyzed 50,000 sessions using FullStory. The data was clear: 80% of clicks were concentrated on just 3 menu items (Trips, Book, Approvals). The other 62 items were creating 'cognitive noise', leading to accidental clicks and 'rage-clicking' on the back button."
            },

            // 5. DEFINITION
            {
                type: 'grid-problem-solution',
                problem: "The Legacy IA: A single flat list that tried to be everything for everyone. Admins saw Traveler tools (irrelevant) and Travelers saw broken Admin links.",
                solution: "The Concept: 'Context Switching'. We split the app into two distinct modes: 'Traveler Mode' (Personal) and 'Admin Mode' (Management). This cut the visible menu items by 50% for every user."
            },

            // 6. PRINCIPLES
            {
                type: 'text-row',
                title: "PRINCIPLES",
                header: "The 3 Laws of Navigation",
                body: "Before designing pixels, we agreed on three non-negotiables: 1. Predictability (Location never changes). 2. Density (High density for admins, low for travelers). 3. Keyboard First (Everything accessible via Command+K)."
            },

            // 7. PROCESS
            {
                type: 'process-timeline',
                title: "THE RESTRUCTURE",
                steps: [
                    { title: "Card Sorting", description: "Ran open card-sort studies with 30 admins to group 65+ navigation items into 5 logical clusters (Manage, Analyze, Configure, Support)." },
                    { title: "Tree Testing", description: "Tested the new hierarchy with 200 users. 'Time to find Policy' dropped from 32s to 8s." },
                    { title: "The 'Context' Rail", description: "Designed a slim 'Global Rail' for context switching (Travel vs Admin) and a wider 'Local Panel' for deep navigation." },
                    { title: "Keyboard Speed", description: "Implemented 'Command+K' global search and logical tab-indexing for power users." }
                ]
            },

            // 7. EXPLORATION
            { type: 'image-grid', title: "WIREFRAMES", items: [{ caption: "Navigation Tree Testing" }, { caption: "Interaction States" }, { caption: "Mobile Responsive Logic" }, { caption: "Search vs Browse" }] },

            // 8. REFLECTION
            {
                type: 'reflection-grid',
                rights: [
                    "Testing Early: Tree-testing proved our initial grouping was wrong before we wrote a line of code.",
                    "Progressive Disclosure: Hiding 'Advanced Settings' by default reduced cognitive load for 90% of users."
                ],
                wrongs: [
                    "Icon Reliance: We assumed icons were enough. Users needed labels. We added a 'pinned expanded' mode."
                ]
            },

            // 9. OUTCOME
            {
                type: 'stat-row',
                stats: [
                    { value: "22%", label: "Faster Task Completion" },
                    { value: "5/5", label: "SUS Score" },
                    { value: "60+", label: "Routes Mapped" }
                ]
            }
        ]
    },
    'ai-assisted-reports': {
        hero: {
            title: "AI REPORTING",
            subtitle: "From Blank Canvas to Instant Insights",
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
            // 1. ROLE CARD
            {
                type: 'role-card',
                items: [
                    { label: "Role", value: "Lead Designer" },
                    { label: "Team", value: "AI Lab" },
                    { label: "Timeline", value: "8 Weeks" },
                    { label: "Outcome", value: "Beta Launched" }
                ]
            },
            // 2. CONTEXT
            {
                type: 'text-row',
                title: "THE LANDSCAPE",
                header: "The 'Blank Page' Problem",
                body: "Travel Managers have tons of data but zero time. Our old Analytics product was a powerful blank canvas—users had to manually drag-and-drop columns to build charts. Most gave up. We needed to lower the barrier to entry."
            },

            // 3. USER VOICE (Quote)
            {
                type: 'quote',
                text: "I know the answer is in there, but I don't know how to build a pivot table. I just want to ask 'Why is our spend up?'",
                author: "C-Level Executive"
            },

            // 4. DEFINITION
            {
                type: 'grid-problem-solution',
                problem: "The Disconnect: Users think in questions ('Is New York expensive?'), but tools demand structure ('Group by City, Sum by Amount'). There was a translation gap.",
                solution: "The Solution: A Conversational Interface. We use LLMs to translate natural language intent into structured SQL queries, auto-generating the perfect chart."
            },

            // 5. STRATEGY
            {
                type: 'text-row',
                title: "STRATEGY",
                header: "Confidence as a UX Metric",
                body: "Our biggest risk wasn't technical; it was trust. If the AI hallucinated once, users would leave. We decided to prioritize 'Confidence' over 'Coverage'. If the definition was ambiguous, the AI would ask clarifying questions rather than guessing."
            },

            // 6. PROCESS: PROMPT ENGINEERING
            {
                type: 'process-timeline', // Reusing the timeline component for AI Logic steps
                title: "DESIGNING INTELLIGENCE",
                steps: [
                    { title: "Intent Mapping", description: "I mapped 500+ common user questions to visualize what charts they actually needed. Found 9 core 'Intent Types' (Comparison, Trend, Distribution)." },
                    { title: "The 'Confidence' UI", description: "Designed specific UI patterns for when the AI is 100% sure vs when it's guessing. Trust is fragile; we added 'Reasoning Citations' to every answer." },
                    { title: "Adaptive Visualization", description: "Created a rendering engine that picks the right viz (Bar vs Line) based on data shape. (e.g., Dates = Line Chart)." },
                    { title: "Feedback Loop", description: "Every answer has a 'Thumb Up/Down' to train the model on specific travel terminology." }
                ]
            },

            // 7. EXPLORATION
            { type: 'image-grid', title: "PROTOTYPES", items: [{ caption: "Natural Language Input" }, { caption: "Adaptive Charts Logic" }, { caption: "Error Handling (Hallucinations)" }] },

            // 8. REFLECTION
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

            // 9. OUTCOME
            {
                type: 'stat-row',
                stats: [
                    { value: "8s", label: "Time to Insight" },
                    { value: "92%", label: "Query Success Rate" },
                    { value: "3k+", label: "Reports Generated" }
                ]
            }
        ]
    },
    'nativebase-gluestack': {
        hero: {
            title: "NATIVEBASE & GLUESTACK",
            subtitle: "Universal Component Libraries for Web & Mobile",
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
            // 1. INTRO: THE CONTEXT
            {
                type: 'text-row',
                title: "THE CONTEXT",
                header: "The UX Ceiling",
                body: "NativeBase was a pioneer in cross-platform design, but as our user base grew to 87k+, we hit a 'Design Debt' wall. The rigid connection between our styling engine and component logic made it nearly impossible for designers to innovate without breaking the code. We weren't just solving a performance bug; we were solving a creativity blocker.",
                wrapperClass: "mb-2",
                className: "mb-2"
            },

            // LINK TO NATIVEBASE FIGMA KIT
            {
                type: 'link-list',
                links: [
                    { label: "NativeBase Design Kit", url: "https://www.figma.com/community/file/1098591432716522150", desc: "Access the legacy library source on Figma Community" }
                ]
            },

            // 2. RESPONSIVE COMPONENT DEMO (Repositioned here)
            {
                type: 'iframe-embed',
                src: "https://ui-example-nativewind.vercel.app/?iframeMode=dark",
                title: "Live Result: Universal Dashboard",
                caption: "Universal Architecture: Shared code across Next.js & Expo. Zero platform-specific overrides.",
                hideColumnTitle: true
            },

            // 3. THE PIVOT
            {
                type: 'grid-problem-solution',
                problem: "The Constraint: In the old system, 'Style' and 'Structure' were fused. If a designer wanted to change the visual language (e.g., spacing tokens), it required a deep refactor of the underlying React Native components.",
                solution: "The Pivot: We decoupled the system. We split 'gluestack-style' (The Visual Language) from 'gluestack-ui' (The Component Structure). This allows designers to update tokens globally without touching the component logic."
            },

            // 4. VISUAL EVOLUTION
            { type: 'visual-evolution' },

            // 5. ECOSYSTEM OVERVIEW (Architecture)
            {
                type: 'full-text',
                title: "SYSTEM ARCHITECTURE",
                header: "A Universal Design Language",
                body: "I led the restructuring of the ecosystem into three clear layers: **The Skeleton** (Headless UI), **The Skin** (Style Engine), and **The Application** (UI Pro). This layered approach meant we could ship a 'Core' system that was unopinionated, while selling 'Premium' themes that were highly opinionated."
            },

            // 6. FIGMA EMBED (Repositioned here)
            {
                type: 'static-embed',
                src: "https://embed.figma.com/file/1358053104938234615/hf_embed?community_viewer=true&embed_host=fastma&fuid=881210876543424729&kind=file&page-selector=0&viewer=1",
                title: "The Source of Truth",
                caption: "Preview of the published gluestack-ui Figma community file.",
                hideColumnTitle: true
            },

            // 7. DEEP DIVE: DESIGN KIT (Semantics)
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



            // 8. DEEP DIVE: STARTUP+ (Scalability)
            {
                type: 'text-row',
                title: "PROJECT 2: SCALABILITY",
                header: "Proof of Scale",
                body: "A design system is only as good as what you can build with it. To prove our new architecture worked, I led the design of 'Startup+' (now gluestack-ui pro)—a massive library of 100+ responsive screens. We used this project to stress-test our token system against complex, real-world layouts."
            },

            // LINK TO STARTUP+ / MARKET
            {
                type: 'link-list',
                links: [
                    { label: "Gluestack Market", url: "https://market.gluestack.io/", desc: "Formerly NativeBase Startup+ - 100+ Premium Screens" },
                    { label: "Original Figma Kit", url: "https://www.figma.com/community/file/1093131923865961440", desc: "The original Startup+ trial file on Figma" }
                ]
            },

            // 9. MARKETPLACE VISION
            {
                type: 'grid-problem-solution',
                problem: "The Gap: Most design systems stop at 'Buttons' and 'Inputs'. But product teams need 'Dashboards' and 'Settings Pages'.",
                solution: "The Solution: gluestack market. We turned our internal stress-tests into a product. A curated marketplace of high-fidelity, production-ready screen templates that respect the user's custom theme."
            },

            // 10. REFLECTION & LEARNINGS
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

            // 11. OUTCOME
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
    }
};

// --- VISUAL COMPONENTS ---

// --- ICONS ---
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
const ShieldIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
const TargetIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
const KeyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="7.5" cy="15.5" r="5.5" /><path d="m21 2-9.6 9.6" /><path d="m15.5 7.5 3 3L22 7l-3-3" /></svg>;
const GlobeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>;
const BuildingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M8 10h.01" /><path d="M16 10h.01" /><path d="M8 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M16 18h.01" /></svg>;
const BriefcaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>;

const RBACEquationVisual = () => (
    <div className="w-full relative bg-[#1e1e1e] border border-[#333] rounded-3xl p-8 lg:p-12 overflow-hidden select-none">
        {/* Infinite Canvas Dot Pattern */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#888 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

        <div className="relative z-10 flex flex-col flex-wrap lg:flex-nowrap items-center justify-center gap-8 min-h-[400px]">

            <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
                {/* Sticky Note: User */}
                <div className="relative group cursor-grab active:cursor-grabbing hover:z-20 transform md:rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
                    <div className="w-40 h-40 bg-[#FFD02F] shadow-[8px_8px_0px_rgba(0,0,0,0.2)] rounded-sm flex flex-col items-center justify-center p-6 text-[#1e1e1e]">
                        <div className="scale-125 mb-3 opacity-80"><UserIcon /></div>
                        <div className="font-display text-xl font-bold">User</div>
                        <div className="font-serif italic text-sm opacity-70 mt-2 text-center leading-tight">"The Who"</div>
                    </div>
                    {/* Fake Cursor */}
                    <div className="absolute -top-3 -left-3 z-30 pointer-events-none animate-pulse">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg"><path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19179L11.7841 12.3673H5.65376Z" fill="#F24E1E" stroke="white" strokeWidth="1" /></svg>
                        <div className="bg-[#F24E1E] text-white text-[10px] font-bold px-2 py-0.5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-sm ml-2 -mt-1">Admin</div>
                    </div>
                </div>

                {/* Connector */}
                <div className="text-[#555] opacity-50 text-3xl font-light font-handwriting">+</div>

                {/* Sticky Note: Role */}
                <div className="relative group cursor-grab active:cursor-grabbing hover:z-20 transform md:rotate-[1deg] hover:rotate-0 transition-transform duration-300">
                    <div className="w-40 h-40 bg-[#E0B6FF] shadow-[8px_8px_0px_rgba(0,0,0,0.2)] rounded-sm flex flex-col items-center justify-center p-6 text-[#1e1e1e]">
                        <div className="scale-125 mb-3 opacity-80"><ShieldIcon /></div>
                        <div className="font-display text-xl font-bold">Role</div>
                        <div className="font-serif italic text-sm opacity-70 mt-2 text-center leading-tight">"The What"</div>
                    </div>
                    {/* Fake Cursor */}
                    <div className="absolute -bottom-3 -right-3 z-30 pointer-events-none">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg transform rotate-180"><path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19179L11.7841 12.3673H5.65376Z" fill="#0D99FF" stroke="white" strokeWidth="1" /></svg>
                        <div className="bg-[#0D99FF] text-white text-[10px] font-bold px-2 py-0.5 rounded-tl-lg rounded-bl-lg rounded-br-lg shadow-sm mr-2 -mt-1">Report Admin</div>
                    </div>
                </div>

                {/* Connector */}
                <div className="text-[#555] opacity-50 text-3xl font-light font-handwriting">+</div>

                {/* Sticky Note: Scope */}
                <div className="relative group cursor-grab active:cursor-grabbing hover:z-20 transform md:rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
                    <div className="w-40 h-40 bg-[#69F0AE] shadow-[8px_8px_0px_rgba(0,0,0,0.2)] rounded-sm flex flex-col items-center justify-center p-6 text-[#1e1e1e]">
                        <div className="scale-125 mb-3 opacity-80"><TargetIcon /></div>
                        <div className="font-display text-xl font-bold">Scope</div>
                        <div className="font-serif italic text-sm opacity-70 mt-2 text-center leading-tight">"The Where"</div>
                    </div>
                    {/* Fake Cursor */}
                    <div className="absolute top-0 right-0 z-30 pointer-events-none animate-bounce duration-1000">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg"><path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19179L11.7841 12.3673H5.65376Z" fill="#9747FF" stroke="white" strokeWidth="1" /></svg>
                        <div className="bg-[#9747FF] text-white text-[10px] font-bold px-2 py-0.5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-sm ml-2 -mt-1">Company</div>
                    </div>
                </div>

                {/* Equals */}
                <div className="text-[#555] opacity-50 text-3xl font-light font-handwriting">=</div>

                {/* Sticky Note: Result */}
                <div className="relative group cursor-grab active:cursor-grabbing hover:z-20 transform md:rotate-[2deg] hover:rotate-0 transition-transform duration-300">
                    <div className="w-40 h-40 bg-[#FF9D9D] shadow-[8px_8px_0px_rgba(0,0,0,0.2)] rounded-sm flex flex-col items-center justify-center p-6 text-[#1e1e1e]">
                        <div className="scale-125 mb-3 opacity-80"><KeyIcon /></div>
                        <div className="font-display text-xl font-bold leading-none mb-1">Access</div>
                        <div className="font-serif italic text-sm opacity-70 text-center leading-tight">"The Result"</div>
                    </div>
                    {/* Fake Cursor */}
                    <div className="absolute -bottom-4 left-4 z-30 pointer-events-none">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg"><path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19179L11.7841 12.3673H5.65376Z" fill="#00C19C" stroke="white" strokeWidth="1" /></svg>
                        <div className="bg-[#00C19C] text-white text-[10px] font-bold px-2 py-0.5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-sm ml-2 -mt-1">Report Admins</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const RBACScopeVisual = () => (
    <div className="w-full relative bg-[#050505] border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-16 items-center">

            <div className="order-2 md:order-1 relative">
                <div className="absolute left-[15px] top-6 bottom-6 w-px bg-gradient-to-b from-white/5 via-white/20 to-white/5" />

                <div className="space-y-4">
                    {[
                        { label: 'Platform', icon: GlobeIcon, active: false },
                        { label: 'TMC Agency', icon: BuildingIcon, active: false },
                        { label: 'Organization', icon: BriefcaseIcon, active: true },
                        { label: 'Legal Entity', icon: null, text: 'LE', active: false },
                        { label: 'Traveler', icon: UserIcon, active: false },
                    ].map((item, i) => (
                        <div key={i} className={`relative pl-12 transition-all duration-300 ${item.active ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}>
                            {/* Dot on line */}
                            <div className={`absolute left-[11px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border border-[#050505] transition-colors ${item.active ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-white/10'}`} />

                            <div className={`p-4 rounded-lg border flex items-center justify-between group ${item.active ? 'bg-blue-500/5 border-blue-500/20' : 'bg-[#111] border-white/5'}`}>
                                <div className="flex items-center gap-3">
                                    <div className={`text-${item.active ? 'blue-400' : 'mist'}`}>
                                        {item.icon ? <item.icon /> : <span className="font-mono text-xs">{item.text}</span>}
                                    </div>
                                    <span className="text-sm font-medium text-white">{item.label}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="order-1 md:order-2">
                <div className="inline-block mb-6 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-mist uppercase tracking-widest">
                    Hierarchy
                </div>
                <h3 className="font-display text-3xl text-white mb-6">Waterfall Inheritance</h3>
                <p className="text-mist leading-relaxed text-sm md:text-base">
                    Access flows downwards. Granting permissions at the <span className="text-white font-medium">Organization</span> level automatically cascades to every <span className="text-mist">Legal Entity</span> and <span className="text-mist">Traveler</span> node below it.
                </p>
            </div>
        </div>
    </div>
);

const RBACRolesVisual = () => {
    const roles = [
        { name: "Trip Manager", desc: "Manage & approve bookings", scope: "Write", color: "bg-orange-500/20 text-orange-200" },
        { name: "Reporting Admin", desc: "View spend analytics", scope: "Read", color: "bg-blue-500/20 text-blue-200" },
        { name: "Company Admin", desc: "Full configuration access", scope: "Full", color: "bg-red-500/20 text-red-200" },
        { name: "Card Manager", desc: "Unmask corporate cards", scope: "Secure", color: "bg-yellow-500/20 text-yellow-200" },
        { name: "Integrator", desc: "HR feed synchronization", scope: "System", color: "bg-purple-500/20 text-purple-200" },
        { name: "Auditor", desc: "Read-only compliance check", scope: "Read", color: "bg-blue-500/20 text-blue-200" },
    ];

    return (
        <div className="w-full relative bg-[#191919] rounded-xl overflow-hidden border border-[#333]">
            {/* Window Controls (Notion style) */}
            <div className="flex items-center gap-2 p-4 border-b border-[#333] bg-[#202020]">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                <div className="ml-4 text-xs font-sans text-stone-400">Roles Database</div>
            </div>

            <div className="p-0">
                <div className="w-full text-left border-collapse">
                    {/* Header */}
                    <div className="grid grid-cols-12 px-4 py-3 border-b border-[#333] text-xs font-sans text-stone-500">
                        <div className="col-span-4 pl-2">Aa Role Name</div>
                        <div className="col-span-6 border-l border-[#333] pl-4">≡ Description</div>
                        <div className="col-span-2 border-l border-[#333] pl-4">▼ Access</div>
                    </div>

                    {/* Rows */}
                    {roles.map((role, i) => (
                        <div key={i} className="grid grid-cols-12 px-4 py-3 border-b border-[#333] last:border-0 hover:bg-[#202020] transition-colors group">
                            <div className="col-span-4 flex items-center gap-2 pl-2">
                                <span className="text-stone-600 group-hover:text-stone-400 transition-colors">📄</span>
                                <span className="font-sans text-sm text-stone-200 font-medium">{role.name}</span>
                            </div>
                            <div className="col-span-6 flex items-center pl-4 border-l border-[#333] border-dashed">
                                <span className="font-sans text-sm text-stone-400">{role.desc}</span>
                            </div>
                            <div className="col-span-2 flex items-center pl-4 border-l border-[#333] border-dashed">
                                <span className={`px-2 py-0.5 rounded text-[11px] font-sans font-medium ${role.color} whitespace-nowrap`}>
                                    {role.scope}
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* Add New Row Placeholder */}
                    <div className="grid grid-cols-12 px-4 py-3 text-stone-600 hover:bg-[#202020] transition-colors cursor-pointer">
                        <div className="col-span-12 pl-2 flex items-center gap-2 text-sm font-sans">
                            <span>+ New</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const EvolutionVisual = () => (
    <div className="w-full relative bg-charcoal border border-white/10 rounded-xl p-8 md:p-12 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 relative z-10 w-full">
            <div className="p-6 border-l border-white/20 flex-1 min-w-0">
                <div className="text-xs font-mono text-red-400 mb-2 truncate">GENERATION 1</div>
                <div className="font-display text-2xl text-mist truncate">NativeBase</div>
                <div className="text-xs text-mist/50 mt-2 truncate">Runtime Heavy</div>
            </div>
            <div className="p-6 border-l border-neon flex-1 min-w-0">
                <div className="text-xs font-mono text-neon mb-2 truncate">GENERATION 2</div>
                <div className="font-display text-2xl text-ice truncate">Gluestack</div>
                <div className="text-xs text-mist mt-2 truncate">Heading + Zero Runtime</div>
            </div>
            <div className="p-6 border-l border-blue-400 flex-1 min-w-0">
                <div className="text-xs font-mono text-blue-400 mb-2 truncate">ECOSYSTEM</div>
                <div className="font-display text-2xl text-ice truncate">Market</div>
                <div className="text-xs text-mist mt-2 truncate">Premium Templates</div>
            </div>
        </div>
    </div>
);

const ResizableEmbed = ({ src, title, caption }) => {
    const containerRef = useRef(null);
    const resizeOffset = useMotionValue(0);
    const width = useMotionTemplate`calc(100% + ${resizeOffset}px)`;
    const [isResizing, setIsResizing] = useState(false);

    return (
        <div className="mb-32 flex flex-col items-center">
            <motion.div
                ref={containerRef}
                style={{ width }}
                className="relative bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl origin-top mx-auto"
            >
                <div className="h-8 bg-white/5 border-b border-white/5 flex items-center justify-between px-4">
                    <div className="flex gap-1.5 opacity-50">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    </div>
                    <div className="text-[10px] font-mono text-white/30 tracking-widest uppercase">
                        {title}
                    </div>
                    <div className="w-8" />
                </div>
                <div className="relative w-full h-[708px] overflow-hidden bg-charcoal">
                    <iframe
                        src={src}
                        title={title}
                        loading="lazy"
                        className="w-full h-full rounded-none"
                        style={{
                            transformOrigin: '0px 0px',
                            transform: 'scale(0.8)',
                            width: '125%',
                            height: '125%',
                            border: 'none',
                        }}
                    />
                    {isResizing && <div className="absolute inset-0 z-50 bg-transparent cursor-ew-resize" />}
                </div>
                <motion.div
                    className="absolute top-0 right-0 w-6 h-full cursor-ew-resize z-50 flex items-center justify-center group touch-none"
                    onPan={(event, info) => {
                        if (!containerRef.current) return;
                        const sensitivity = 2;
                        const delta = info.delta.x * sensitivity;
                        const currentOffset = resizeOffset.get();
                        const newOffset = currentOffset + delta;
                        const currentVisualWidth = containerRef.current.offsetWidth;
                        const baseWidth = currentVisualWidth - currentOffset;
                        const minOffset = 400 - baseWidth;
                        const clampedOffset = Math.max(minOffset, Math.min(100, newOffset));
                        resizeOffset.set(clampedOffset);
                    }}
                    onPanStart={() => setIsResizing(true)}
                    onPanEnd={() => setIsResizing(false)}
                    whileHover={{ scale: 1.1 }}
                >
                    <div className="w-1.5 h-12 bg-white/20 rounded-full group-hover:bg-neon transition-colors shadow-lg backdrop-blur-sm" />
                </motion.div>
                <motion.div
                    className="absolute top-2 right-10 px-2 py-1 bg-black/50 backdrop-blur text-[10px] font-mono text-neon rounded border border-white/10 opacity-0 transition-opacity"
                    animate={{ opacity: isResizing ? 1 : 0 }}
                >
                    Resize Width
                </motion.div>
            </motion.div>
            <div className="mt-6 text-center max-w-xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-mist mb-2">
                    <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                    Interactive Demo
                </div>
                <p className="text-sm text-mist">{caption}</p>
            </div>
        </div>
    );
};

const StaticEmbed = ({ src, title, caption }) => {
    return (
        <div className="mb-32 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
            <div className="relative w-full h-[708px] overflow-hidden">
                <iframe
                    src={src}
                    title={title}
                    loading="lazy"
                    className="w-full h-full rounded-none"
                    style={{
                        transformOrigin: '0px 0px',
                        transform: 'scale(0.8)',
                        width: '125%',
                        height: '125%',
                        border: 'none',
                        borderBottomLeftRadius: '16px',
                        borderBottomRightRadius: '16px'
                    }}
                />
            </div>
            <div className="bg-[#111] p-4 text-center border-t border-white/10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-mist">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Live Preview
                </div>
            </div>
        </div>
    );
};

const PrototypePlayer = ({ images, title, description }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [cursorVariant, setCursorVariant] = useState("initial");

    useEffect(() => {
        let t1, t2, t3, t4;
        const sequence = () => {
            setActiveIndex(0);
            setCursorVariant("initial");

            t1 = setTimeout(() => setCursorVariant("target"), 1000);
            t2 = setTimeout(() => setCursorVariant("click"), 2000);
            t3 = setTimeout(() => {
                setCursorVariant("modal");
                setActiveIndex(1);
            }, 2300);
            t4 = setTimeout(sequence, 6000);
        };

        sequence();
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
    }, []);

    const cursorVariants = {
        initial: { left: "90%", top: "90%", opacity: 1, scale: 1 },
        target: { left: "89%", top: "16%", opacity: 1, scale: 1, transition: { duration: 1, ease: "easeInOut" } },
        click: { left: "89%", top: "16%", opacity: 1, scale: 0.9, transition: { duration: 0.1 } },
        modal: { left: "89%", top: "16%", opacity: 0, scale: 1, transition: { duration: 0.2 } }
    };

    return (
        <div className="mb-32">
            <div className="mb-12">
                <p className="font-sans text-xl text-mist leading-relaxed font-light max-w-2xl">{description}</p>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-transparent shadow-2xl group w-full">
                {/* Background Images */}
                {images.map((src, i) => (
                    <motion.div
                        key={i}
                        className={`${i === 0 ? 'relative' : 'absolute inset-0'} w-full`}
                        initial={{ opacity: i === 0 ? 1 : 0 }}
                        animate={{ opacity: activeIndex === i ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <img src={src} alt="" className="w-full h-auto block" />
                    </motion.div>
                ))}

                {/* Cursor */}
                <motion.div
                    className="absolute w-6 h-6 z-50 pointer-events-none drop-shadow-xl"
                    variants={cursorVariants}
                    animate={cursorVariant}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19179L11.7841 12.3673H5.65376Z" fill="#F24E1E" stroke="white" strokeWidth="1.5" /></svg>
                </motion.div>
            </div>
        </div>
    );
};

const RuleBuilderCarousel = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);

    // Auto-play logic (only active when not hovered in inline, or maybe always auto-play in inline preview?)
    // Let's keep auto-play for the inline preview to attract attention.
    useEffect(() => {
        if (isFullScreen) return; // interactive mode is manual usually, or we can keep auto-play? User said "rotating". Let's pause auto-play in full screen to let user read, unless they just watch. Let's make it manual in full screen for control.
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % items.length);
        }, 5000); // Faster preview cycle
        return () => clearInterval(interval);
    }, [items.length, isFullScreen]);

    // Keyboard navigation
    useEffect(() => {
        if (!isFullScreen) return;
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') setActiveIndex((prev) => (prev + 1) % items.length);
            if (e.key === 'ArrowLeft') setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
            if (e.key === 'Escape') setIsFullScreen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isFullScreen, items.length]);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const activeItem = items[activeIndex];

    return (
        <>
            {/* FULL SCREEN EXPERIENCE MODAL */}
            {/* FULL SCREEN EXPERIENCE MODAL */}
            {mounted && createPortal(
                <AnimatePresence>
                    {isFullScreen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col force-cursor-auto"
                        >
                            {/* Header / Close */}
                            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-50 pointer-events-none">
                                <div className="pointer-events-auto bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                                    <span className="text-neon font-mono text-xs tracking-widest uppercase">Rule Builder Scenarios</span>
                                </div>
                                <button
                                    onClick={() => setIsFullScreen(false)}
                                    className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 group force-cursor-pointer"
                                >
                                    <span className="sr-only">Close</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-90 transition-transform"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            </div>

                            {/* Main Stage - Centered Image */}
                            <div className="flex-1 relative w-full h-full flex items-center justify-center p-4 lg:p-12 overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={activeItem.image}
                                        src={activeItem.image}
                                        alt={activeItem.title}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="max-w-full max-h-full object-contain shadow-2xl"
                                    />
                                </AnimatePresence>
                            </div>

                            {/* Bottom Control Bar */}
                            <div className="w-full bg-[#0A0A0A] border-t border-white/10 p-6 lg:p-8 shrink-0 z-50">
                                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 justify-between">

                                    {/* Text Content */}
                                    <div className="text-center md:text-left flex-1">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={activeIndex}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                                                    <div className="text-xs font-mono text-neon/80 uppercase tracking-widest">Scenario {activeIndex + 1} / {items.length}</div>
                                                </div>
                                                <h3 className="text-2xl font-display text-white mb-2">{activeItem.title}</h3>
                                                <p className="text-mist text-lg">{activeItem.description}</p>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>

                                    {/* Controls */}
                                    <div className="flex items-center gap-4 shrink-0">
                                        <button
                                            onClick={() => setActiveIndex((prev) => (prev - 1 + items.length) % items.length)}
                                            className="p-4 rounded-full border border-white/10 hover:bg-white/10 text-white transition-all active:scale-95 force-cursor-pointer"
                                        >
                                            ←
                                        </button>
                                        <div className="flex gap-2">
                                            {items.map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setActiveIndex(i)}
                                                    className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-neon' : 'w-2 bg-white/20 hover:bg-white/40'} force-cursor-pointer`}
                                                />
                                            ))}
                                        </div>
                                        <button
                                            onClick={() => setActiveIndex((prev) => (prev + 1) % items.length)}
                                            className="p-4 rounded-full border border-white/10 hover:bg-white/10 text-white transition-all active:scale-95 force-cursor-pointer"
                                        >
                                            →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}

            {/* INLINE LAUNCHER (Subtle Design) */}
            <div
                className="mb-32 w-full group cursor-pointer relative"
                onClick={() => setIsFullScreen(true)}
            >
                <div className="relative w-full aspect-[16/9] md:aspect-[2.5/1] bg-[#0A0A0A] border border-dashed border-white/10 rounded-2xl overflow-hidden hover:border-neon/30 transition-all duration-300">

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center p-8 opacity-60 group-hover:opacity-100 transition-opacity">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neon group-hover:text-black transition-all">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 3h6v6" /><path d="M9 21H3v-6" /><path d="M21 3l-7 7" /><path d="M3 21l7-7" /></svg>
                            </div>
                            <span className="font-mono text-xs text-mist uppercase tracking-widest group-hover:text-neon transition-colors">View Scenarios</span>
                        </div>
                    </div>

                    {/* Faint Background Preview */}
                    <div className="absolute inset-0 opacity-20 blur-sm scale-110 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-700">
                        <img src={activeItem.image} className="w-full h-full object-cover" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

// --- SECTIONS ---

const SectionRenderer = ({ section }) => {
    switch (section.type) {
        case 'iframe-embed':
            return <ResizableEmbed src={section.src} title={section.title} caption={section.caption} />;

        case 'text-row':
            return (
                <div className={section.className || "mb-12"}>
                    <h2 className="font-display text-4xl md:text-5xl text-ice mb-6 leading-tight">{section.header}</h2>
                    <p className="font-sans text-xl text-mist leading-relaxed font-light max-w-2xl">{section.body}</p>
                </div>
            );

        case 'grid-problem-solution':
            return (
                <div className="flex flex-col gap-0 mb-32 rounded-2xl overflow-hidden border border-white/10">
                    <div className="p-10 bg-[#111] relative">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <div className="text-xs font-mono text-red-400 tracking-widest">THE PROBLEM</div>
                        </div>
                        <p className="font-sans text-xl text-mist leading-relaxed max-w-4xl">{section.problem}</p>
                    </div>
                    <div className="p-10 bg-white/[0.03] relative border-t border-white/10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                            <div className="text-xs font-mono text-neon tracking-widest">THE SOLUTION</div>
                        </div>
                        <p className="font-sans text-xl text-ice leading-relaxed max-w-4xl">{section.solution}</p>
                    </div>
                </div>
            );
        case 'metrics-grid':
            return (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-32 rounded-lg overflow-hidden">
                    {section.items.map((item, i) => (
                        <div key={i} className="bg-void p-8 hover:bg-white/[0.02] transition-colors group">
                            <div className="text-4xl md:text-5xl font-display text-ice mb-2 group-hover:text-neon transition-colors">{item.value}</div>
                            <div className="text-xs font-mono text-mist uppercase tracking-wider">{item.label}</div>
                        </div>
                    ))}
                </div>
            );
        case 'full-text':
            return (
                <div className="mb-32 border-l-2 border-neon pl-8 py-2">
                    <h3 className="font-display text-2xl text-ice mb-4">{section.header}</h3>
                    <p className="font-sans text-lg text-mist leading-relaxed max-w-3xl">{section.body}</p>
                </div>
            );
        case 'link-list':
            return (
                <div className="mb-12">
                    <div className="grid md:grid-cols-1 gap-4">
                        {section.links.map((link, i) => (
                            <a key={i} href={link.url} target="_blank" className="relative group block p-8 border border-white/10 hover:border-neon transition-colors rounded-xl bg-charcoal overflow-hidden">
                                <div className="absolute inset-0 bg-neon/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10 flex items-center justify-between">
                                    <div>
                                        <div className="font-display text-2xl text-ice group-hover:text-neon transition-colors">{link.label}</div>
                                        <div className="text-xs font-mono text-mist mt-1">{link.desc}</div>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-neon group-hover:border-neon group-hover:text-charcoal transition-all">
                                        ↗
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            );
        case 'quote':
            return (
                <div className="mb-32 flex flex-col items-center text-center">
                    <p className="font-display text-3xl md:text-5xl text-ice leading-tight max-w-4xl mb-8 opacity-90">"{section.text}"</p>
                    <div className="font-mono text-xs text-neon uppercase tracking-widest px-4 py-2 border border-neon rounded-full">{section.author}</div>
                </div>
            );
        case 'visual-rbac-equation': return <div className="mb-32"><RBACEquationVisual /></div>;
        case 'visual-rbac-scope': return <div className="mb-32"><RBACScopeVisual /></div>;
        case 'visual-rbac-roles': return <div className="mb-32"><RBACRolesVisual /></div>;
        case 'visual-evolution': return <div className="mb-32"><EvolutionVisual /></div>;

        // --- NEW: Static Embed (Clean, no resize) ---
        case 'static-embed':
            return <StaticEmbed src={section.src} title={section.title} caption={section.caption} />;



        // --- NEW: Prototype Player ---
        case 'prototype-player':
            return <PrototypePlayer images={section.images} title={section.title} description={section.description} />;


        // --- NEW: Rule Builder Carousel ---
        case 'rule-builder-carousel':
            return <RuleBuilderCarousel items={section.items} />;

        case 'process-timeline':
            return (
                <div className="mb-32">
                    <div className="grid md:grid-cols-2 gap-8">
                        {section.steps.map((step, i) => (
                            <div key={i} className="relative group">
                                <div className="text-6xl font-display text-white/5 font-bold mb-4 absolute -top-8 -left-2 z-0 group-hover:text-neon/10 transition-colors">
                                    0{i + 1}
                                </div>
                                <div className="relative z-10 p-6 bg-[#111] border border-white/5 rounded-xl h-full hover:border-neon/30 transition-colors">
                                    <h4 className="text-xl text-white font-bold mb-2">{step.title}</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );

        // --- NEW: Reflection Grid (Stacked Layout) ---
        case 'reflection-grid':
            return (
                <div className="mb-32 flex flex-col gap-6">
                    <div className="bg-[#111] p-10 rounded-2xl border-l-[6px] border-green-500 w-full relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-10 opacity-10 blur-3xl group-hover:opacity-20 transition-opacity">
                            <div className="w-32 h-32 bg-green-500 rounded-full" />
                        </div>
                        <h4 className="text-2xl font-display text-white mb-6 relative z-10">What went right</h4>
                        <ul className="space-y-4 relative z-10">
                            {section.rights.map((item, i) => (
                                <li key={i} className="flex gap-4 text-mist leading-relaxed items-start text-lg">
                                    <span className="text-green-500 mt-1.5 text-xl">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-[#111] p-10 rounded-2xl border-l-[6px] border-red-500 w-full relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-10 opacity-10 blur-3xl group-hover:opacity-20 transition-opacity">
                            <div className="w-32 h-32 bg-red-500 rounded-full" />
                        </div>
                        <h4 className="text-2xl font-display text-white mb-6 relative z-10">What went wrong</h4>
                        <ul className="space-y-4 relative z-10">
                            {section.wrongs.map((item, i) => (
                                <li key={i} className="flex gap-4 text-mist leading-relaxed items-start text-lg">
                                    <span className="text-red-500 mt-1.5 text-xl">×</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            );



        // --- NEW: Image Grid (Sketches/Wireframes) ---
        case 'image-grid':
            return (
                <div className="mb-32">
                    <div className="grid md:grid-cols-2 gap-4">
                        {section.items.map((item, i) => (
                            <div key={i} className="bg-[#111] border border-white/5 rounded-xl p-8 min-h-[300px] flex flex-col items-center justify-center text-center group hover:border-neon/30 transition-colors">
                                <div className="text-4xl mb-4 opacity-20 group-hover:opacity-100 transition-opacity">🖼️</div>
                                <div className="text-white font-medium mb-2">{item.caption}</div>
                                <div className="text-xs text-gray-500 font-mono uppercase">Image Placeholder</div>
                            </div>
                        ))}
                    </div>
                </div>
            );

        // --- NEW: Stat Row (Key Metrics) ---
        case 'stat-row':
            return (
                <div className="mb-32 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {section.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-4xl md:text-5xl font-display text-white font-bold mb-2">{stat.value}</div>
                            <div className="text-xs font-mono text-neon uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            );

        default: return null;
    }
};

export default function CaseStudy() {
    const params = useParams();
    const slug = params.slug;
    const project = projects[slug];

    // Scroll Magic
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    const yHero = useTransform(scrollY, [0, 500], [0, 150]);
    const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

    // Mouse Spotlight
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);
    function handleMouseMove({ clientX, clientY }) {
        mouseX.set(clientX);
        mouseY.set(clientY);
    }

    if (!project) return <div className="min-h-screen bg-void flex items-center justify-center text-ice">Project Not Found</div>;

    const { nextSlug: nextProjectSlug, nextProject } = getNextProject(slug);

    return (
        <main className="bg-void min-h-screen text-ice selection:bg-neon selection:text-void overflow-x-hidden" onMouseMove={handleMouseMove}>

            {/* Global Spotlight */}
            <motion.div
                className="fixed inset-0 pointer-events-none z-0 opacity-20"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            800px circle at ${mouseX}px ${mouseY}px, 
                            rgba(255,255,255,0.08), 
                            transparent 80%
                        )
                    `
                }}
            />



            {/* Top Navigation */}
            <nav className="fixed top-0 left-0 right-0 p-6 md:p-8 z-50 flex justify-between items-center mix-blend-difference pointer-events-none">
                <Link href="/" className="group relative z-10 block pointer-events-auto">
                    <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                        <div className="absolute inset-0 bg-neon/20 blur-md rounded-full scale-0 group-hover:scale-150 transition-transform duration-300" />
                        <Image
                            src="/logo.png"
                            alt="Rati Agarwal"
                            fill
                            className="object-contain relative z-10"
                        />
                    </div>
                </Link>

                <Link href="/#work" className="group flex items-center gap-3 font-mono text-xs uppercase tracking-widest hover:text-neon transition-colors pointer-events-auto">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">Back to Work</span>
                    <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-neon">✕</div>
                </Link>
            </nav>

            <div ref={containerRef} className="relative z-10">

                {/* HERO SECTION */}
                <section className="relative min-h-[90vh] flex flex-col justify-end pb-32 px-8 pt-40">
                    <motion.div style={{ y: yHero, opacity: opacityHero }} className="container mx-auto">
                        <div className="flex flex-col gap-6">
                            {/* Tags/Links Row */}
                            <div className="flex flex-wrap items-center gap-6 mb-4">
                                <div className="font-mono text-neon tracking-widest uppercase text-sm">
                                    01 / {project.hero.subtitle.split(' ')[0]}
                                </div>
                                <div className="h-px w-20 bg-white/20" />
                                {project.hero.links && project.hero.links.map((link, i) => (
                                    <a key={i} href={link.url} target="_blank" className="font-mono text-xs text-mist hover:text-ice transition-colors uppercase border-b border-transparent hover:border-neon">
                                        {link.label} ↗
                                    </a>
                                ))}
                            </div>

                            {/* Massive Title */}
                            <h1 className="font-display font-bold text-[10vw] leading-[0.85] tracking-tighter text-ice mix-blend-overlay">
                                {project.hero.title}
                            </h1>

                            <p className="font-sans text-2xl md:text-3xl text-mist max-w-3xl mt-8 font-light leading-relaxed">
                                {project.hero.subtitle}
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* MAIN CONTENT GRID */}
                <section className="bg-charcoal border-t border-white/10 relative">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12">

                            {/* Sticky Sidebar (Meta) */}
                            <div className="lg:col-span-3 border-r border-white/10 p-8 lg:p-12 lg:min-h-screen">
                                <div className="lg:sticky lg:top-32 flex flex-col gap-12">
                                    {project.meta.map((item) => (
                                        <div key={item.label}>
                                            <div className="text-xs font-mono text-mist mb-2 uppercase tracking-widest">{item.label}</div>
                                            <div className="font-sans text-lg text-ice">{item.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="lg:col-span-9 p-8 lg:p-16">
                                {project.sections.map((section, i) => (
                                    <div key={i} className={`grid grid-cols-1 md:grid-cols-12 gap-8 ${section.wrapperClass || 'mb-12'}`}>
                                        {/* Section Label (Left) */}
                                        {!section.hideColumnTitle && (
                                            <div className="md:col-span-3">
                                                {section.title && (
                                                    <span className="font-mono text-xs text-neon uppercase tracking-widest sticky top-32">
                                                        {section.title}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                        {/* Section Body (Right) */}
                                        <div className={section.hideColumnTitle ? "md:col-span-12" : "md:col-span-9"}>
                                            <SectionRenderer section={section} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </section>

                {/* NEXT PROJECT FOOTER */}
                <section className="py-40 border-t border-white/10 flex flex-col items-center justify-center text-center bg-void relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-t from-neon/20 to-transparent" />
                    <div className="relative z-10">
                        <div className="text-sm font-mono text-mist mb-8 uppercase tracking-widest">Next Case Study</div>
                        <Link href={`/work/${nextProjectSlug}`} className="font-display text-6xl md:text-9xl text-ice hover:text-transparent hover:text-stroke-neon hover:text-stroke transition-all duration-500 leading-[0.8] tracking-tighter block">
                            {nextProject.hero.title}
                        </Link>
                    </div>
                </section>

                <Footer />
            </div>
        </main>
    );
}

function getNextProject(currentSlug) {
    const slugs = Object.keys(projects);
    const nextIndex = (slugs.indexOf(currentSlug) + 1) % slugs.length;
    const nextSlug = slugs[nextIndex];
    return { nextSlug, nextProject: projects[nextSlug] };
}

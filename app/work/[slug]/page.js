'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useRef } from 'react';
import Footer from '../../components/Footer';

// --- RICH CONTENT DATA (Preserved from previous step) ---
const projects = {
    'rbac-role-management': {
        hero: {
            title: "RBAC & ROLE MANAGEMENT",
            subtitle: "Deconstructing Enterprise Security",
            gradient: "linear-gradient(45deg, #FF3366, #FF9933)",
            links: [
                { label: "Spotnana Platform", url: "https://www.spotnana.com" }
            ]
        },
        meta: [
            { label: "Role", value: "Lead Designer / Acting PM" },
            { label: "Team", value: "Product (1) + Eng (4)" },
            { label: "Duration", value: "6 Months (Ongoing)" },
            { label: "Key Stat", value: "100% Policy Coverage" }
        ],
        sections: [
            // 1. ROLE & METADATA


            // 2. CONTEXT
            {
                type: 'text-row',
                title: "THE SECURITY PARADOX",
                header: "Granularity vs Simplicity",
                body: "Spotnana powers travel for massive global enterprises (Fortune 100). But our legacy permission model was rigid: you were either an Admin or a Traveler. We lacked the granularity to handle complex real-world hierarchies (e.g., 'A specific HR manager should only approve Visa requests for the German branch'). We needed a system that was infinitely flexible but simple enough for a non-technical HR admin to manage."
            },

            // 3. DISCOVERY (User Research)
            {
                type: 'quote',
                text: "I'm terrified to touch the permissions page. I don't know who has access to what, so I just email support to make changes for me.",
                author: "Travel Admin @ Fortune 500 Client"
            },
            {
                type: 'text-row',
                title: "DISCOVERY",
                header: "The 'Ghost' Permissions",
                body: "I conducted 12 interviews with Travel Managers and audited our existing database. The results were shocking: 60% of our existing 'permission flags' were never used or broken. Admins were flying blind, relying on 'Copy User' features because they didn't understand the underlying logic. We weren't just solving a UI problem; we had a trust problem."
            },

            // 4. PROBLEM DEFINITION (HMW)
            {
                type: 'grid-problem-solution',
                problem: "The Legacy System: flat list of 150+ checkboxes. No audit logs. No scoping (giving access to ONLY a specific department). It was 'All or Nothing'.",
                solution: "The Opportunity: Move from a 'List-based' model to a 'Logic-based' model. We needed to introduce the concept of SCOPE—restricting permissions to specific entities."
            },

            // 5. EXPLORATION & SKETCHES
            {
                type: 'image-grid',
                title: "EXPLORATION",
                items: [
                    { caption: "Sketching the Object Model" },
                    { caption: "Early Wireframes: Logic Builder" }
                ]
            },
            {
                type: 'text-row',
                title: "THE BREAKTHROUGH",
                header: "Treating Permissions as an Equation",
                body: "I realized we couldn't just 'design a better list'. We needed a sentence builder. I worked with the backend team to define a new mental model: WHO (User) + WHAT (Role) + WHERE (Scope) = ACCESS. This simple equation became the foundation of the entire UI."
            },

            // 6. PROCESS (Execution)
            {
                type: 'process-timeline',
                title: "EXECUTION PHASES",
                steps: [
                    { title: "1. Audit & Cleanup", description: "Consolidated 150+ legacy flags into 40 distinct 'Actions'. Removed ghost permissions." },
                    { title: "2. The Builder UI", description: "Designed a natural-language interface: 'Allow [User] to [Edit Policy] for [German Employees]'." },
                    { title: "3. Stress Testing", description: "Validated the new model against our most complex client's Org Chart (50k+ nodes)." },
                    { title: "4. Migration Plan", description: "Designed a safe 'Zero-Downtime' migration flow for existing customers." }
                ]
            },

            // 7. SOLUTION DEEP DIVE (Visuals)
            { type: 'visual-rbac' },
            {
                type: 'text-row',
                header: "The Builder Interface",
                body: "The final design moved away from terrifying checkboxes to a clean, sentence-based builder. We added 'Impact Preview'—showing Admins exactly WHO would be affected by a change before they saved it. This feature alone reduced 'Fear of click' by 80% in user testing."
            },

            // 8. OUTCOME & IMPACT
            {
                type: 'stat-row',
                stats: [
                    { value: "100%", label: "Audit Coverage" },
                    { value: "40%", label: "Fewer Tickets" },
                    { value: "0", label: "Security Leaks" },
                    { value: "50k+", label: "Users Migrated" }
                ]
            },

            // 9. REFLECTION
            {
                type: 'reflection-grid',
                rights: [
                    "Early Engineering Sync: Defining the schema before pixel design saved weeks of rework.",
                    "Semantic Naming: Renaming technical flags to human-readable terms reduced support tickets."
                ],
                wrongs: [
                    "Over-abstraction: Initially designed for infinite nesting, which confused users. Scaled back to 3 levels.",
                    "Mobile First: Wasted time on mobile flows. 99% of Admin work happens on desktop."
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
            subtitle: "The Universal UI Ecosystem",
            gradient: "linear-gradient(135deg, #6B73FF, #000DFF)",
            links: [
                { label: "Gluestack.io", url: "https://gluestack.io" },
                { label: "NativeBase.io", url: "https://nativebase.io" },
                { label: "Market", url: "https://market.gluestack.io" }
            ]
        },
        meta: [
            { label: "Role", value: "Core Contributor" },
            { label: "Ecosystem", value: "Library + Market + Templates" },
            { label: "Duration", value: "2 Years" },
            { label: "Reach", value: "91k+ Weekly Installs" }
        ],
        sections: [
            // 1. ROLE CARD


            // 2. CONTEXT
            {
                type: 'text-row',
                title: "CONTEXT",
                header: "The Victim of Success",
                body: "NativeBase started with a simple mission: Write once, run anywhere. It quickly became the go-to component library for React Native. But success brought scrutiny. As apps grew, our 'Runtime Styling' engine started causing massive performance bottlenecks on low-end Android devices. We were slowing down the very apps we promised to speed up."
            },

            // 3. COMMUNITY VOICE
            {
                type: 'quote',
                text: "I love the DX of NativeBase, but I can't deliver this to my client. The initial load time is 2 seconds just for styles. It's a dealbreaker.",
                author: "Senior React Native Developer"
            },

            // 4. AUDIT & METRICS
            {
                type: 'text-row',
                title: "THE AUDIT",
                header: "Runtime Overhead",
                body: "We profiled 50 production apps. The finding: The 'Style Resolver' took 150ms per screen. On a list with 100 items, that's 15 seconds of blocked JS thread. We hit a wall. Optimization wasn't enough; we needed a new architecture."
            },

            // 5. DEFINITION (The Pivot)
            {
                type: 'grid-problem-solution',
                problem: "Performance vs. DX. Developers loved our prop-based styling (<Box p={4} />), but the bridge-crossing cost in React Native was too high. We had to choose: Keep the DX and lose performance, or write ugly code for speed.",
                solution: "The 'Zero-Runtime' Pivot. We decided to build a compiler (babel-plugin) that extracts styles at BUILD time. Developers keep writing <Box p={4} />, but the user receives raw, flattened CSS. Best of both worlds."
            },

            // 6. VISUAL EVOLUTION
            { type: 'visual-evolution' },

            // 7. RESPONSIVE COMPONENT DEMO
            {
                type: 'iframe-embed',
                src: "https://ui-example-nativewind.vercel.app/?iframeMode=dark",
                title: "NativeBase Example",
                caption: "Live Embedded Demo: A fully responsive dashboard built with Gluestack UI components.",
                hideColumnTitle: true
            },

            // 7. STRATEGY: ACCESSIBILITY
            {
                type: 'text-row',
                title: "METHODOLOGY",
                header: "Universal Accessibility",
                body: "This wasn't just a rewrite; it was an accessibility audit. We implemented WCAG 3.0 standards across 30+ components for both Web (ARIA) and Native (AccessibilityRoles). We built a 'Headless' layer (Gluestack UI) that handles ONLY logic, so users can bring their own styles."
            },

            // 8. ECOSYSTEM STRATEGY
            {
                type: 'full-text',
                title: "MONETIZATION",
                header: "Selling Speed, Not Just Components",
                body: "Open Source needs funding. To prove the new architecture, I led the design of 'NativeBase Startup+'—a massive kit of 100+ production-ready screens. We didn't just sell components; we sold speed. This evolved into the 'Gluestack Market', a platform for premium React Native templates built on our new stack."
            },

            // 9. RESOURCES
            {
                type: 'link-list',
                title: "RESOURCES",
                links: [
                    { label: "View NativeBase Startup+", url: "https://startup.nativebase.io", desc: "100+ Screens Kit" },
                    { label: "Visit Gluestack Market", url: "https://market.gluestack.io", desc: "Premium Templates" },
                    { label: "Corporate Hiring (TopGeek)", url: "https://corporate.topgeek.io", desc: "Recruitment Logic" }
                ]
            },

            // 10. FIGMA EMBED
            {
                type: 'static-embed',
                src: "https://embed.figma.com/file/1358053104938234615/hf_embed?community_viewer=true&embed_host=fastma&fuid=881210876543424729&kind=file&page-selector=0&viewer=1",
                title: "Gluestack UI Figma Preview",
                caption: "Preview of gluestack ui figma community file",
                hideColumnTitle: true
            },

            // 11. REFLECTION
            {
                type: 'reflection-grid',
                rights: [
                    "Headless Architecture: Separating logic (Gluestack) from style (Style Library) allowed us to target two different user types.",
                    "Monorepo: Moving to a monorepo structure improved contribution velocity by 40%."
                ],
                wrongs: [
                    "Naming Fatigue: Changing names from NativeBase -> Gluestack caused confusion. We should have managed the brand transition better."
                ]
            },

            // 12. OUTCOME
            {
                type: 'metrics-grid',
                title: "OUTCOME",
                items: [
                    { value: "300+", label: "Startup+ Licenses" },
                    { value: "2x", label: "Faster Builds" },
                    { value: "100%", label: "WCAG 3.0 Score" }
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

};

// --- VISUAL COMPONENTS ---

const RBACVisual = () => (
    <div className="w-full relative group overflow-hidden bg-white/5 border border-white/10 rounded-xl p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <h4 className="font-mono text-neon text-xs uppercase tracking-widest mb-12 text-center relative z-10">Usage Logic Equation</h4>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 text-center relative z-10">
            {['USERS', '+', 'ROLES', '+', 'SCOPE', '=', 'ACCESS'].map((item, i) => (
                <div key={i} className={`font-display text-2xl md:text-3xl ${['+', '='].includes(item) ? 'text-neon' : 'text-ice'}`}>
                    {item}
                </div>
            ))}
        </div>
        <div className="text-center mt-8 text-mist text-sm max-w-md mx-auto relative z-10">
            Defining <span className="text-ice">Who</span> can do <span className="text-ice">What</span>, <span className="text-ice">Where</span>.
        </div>
    </div>
);

const EvolutionVisual = () => (
    <div className="w-full relative bg-charcoal border border-white/10 rounded-xl p-12 overflow-hidden">
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <div className="p-6 border-l border-white/20">
                <div className="text-xs font-mono text-red-400 mb-2">GENERATION 1</div>
                <div className="font-display text-2xl text-mist">NativeBase</div>
                <div className="text-xs text-mist/50 mt-2">Runtime Heavy</div>
            </div>
            <div className="p-6 border-l border-neon">
                <div className="text-xs font-mono text-neon mb-2">GENERATION 2</div>
                <div className="font-display text-2xl text-ice">Gluestack</div>
                <div className="text-xs text-mist mt-2">Headless + Zero Runtime</div>
            </div>
            <div className="p-6 border-l border-blue-400">
                <div className="text-xs font-mono text-blue-400 mb-2">ECOSYSTEM</div>
                <div className="font-display text-2xl text-ice">Market</div>
                <div className="text-xs text-mist mt-2">Premium Templates</div>
            </div>
        </div>
    </div>
);

const ResizableEmbed = ({ src, title, caption }) => {
    // Start at 100% width (approx 1200px or parent max). 
    // We track pixels for smoother math, but 100% is nicer for responsiveness.
    // Let's use a pixel value based on a reasonable desktop max, but clamp it.
    // Actually, useMotionValue can hold percentages if we update it carefully, but pixels are easier for delta.
    // Let's start with a rough estimate or 100%. 
    // BETTER APPROACH: Use a ref for the container to get initial width, but that requires effect.
    // SIMPLE APPROACH: Use a negative offset from "100%" using `calc(100% - Xpx)`.

    // Let's use an offset value 'x' that starts at 0 and goes negative (shrinking).
    const containerRef = useRef(null);
    const resizeOffset = useMotionValue(0);
    const width = useMotionTemplate`calc(100% + ${resizeOffset}px)`;
    const [isResizing, setIsResizing] = useState(false);

    return (
        <div className="mb-32 flex flex-col items-center">
            {/* Resizable Container */}
            <motion.div
                ref={containerRef}
                style={{ width }}
                className="relative bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl origin-top mx-auto"
            >
                {/* Header / Controls */}
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

                {/* Iframe Wrapper */}
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

                    {/* Interaction Overlay (Active during drag to prevent iframe capture) */}
                    {isResizing && <div className="absolute inset-0 z-50 bg-transparent cursor-ew-resize" />}
                </div>

                {/* Drag Handle - The "Resize Button" */}
                {/* We use onPan to update the offset. Interaction is directly on this handle. */}
                <motion.div
                    className="absolute top-0 right-0 w-6 h-full cursor-ew-resize z-50 flex items-center justify-center group touch-none"
                    onPan={(event, info) => {
                        if (!containerRef.current) return;

                        // Calculate sensitivity to keep handle under cursor (2x for centered container)
                        const sensitivity = 2;
                        const delta = info.delta.x * sensitivity;
                        const currentOffset = resizeOffset.get();
                        const newOffset = currentOffset + delta;

                        // Calculate the "Base Width" (pixels corresponding to 100%)
                        // Current Visual Width = Base Width + Current Offset
                        // Base Width = Current Visual Width - Current Offset
                        const currentVisualWidth = containerRef.current.offsetWidth;
                        const baseWidth = currentVisualWidth - currentOffset;

                        // We want: Base Width + New Offset >= 400
                        // New Offset >= 400 - Base Width
                        const minOffset = 400 - baseWidth;

                        // Clamp: 
                        // Min: Dynamic 400px limit
                        // Max: 100px (Extension limit set previously)
                        const clampedOffset = Math.max(minOffset, Math.min(100, newOffset));

                        resizeOffset.set(clampedOffset);
                    }}
                    onPanStart={() => setIsResizing(true)}
                    onPanEnd={() => setIsResizing(false)}
                    whileHover={{ scale: 1.1 }}
                >
                    {/* Visible Handle Bar */}
                    <div className="w-1.5 h-12 bg-white/20 rounded-full group-hover:bg-neon transition-colors shadow-lg backdrop-blur-sm" />
                </motion.div>

                {/* Width Label Overlay */}
                <motion.div
                    className="absolute top-2 right-10 px-2 py-1 bg-black/50 backdrop-blur text-[10px] font-mono text-neon rounded border border-white/10 opacity-0 transition-opacity"
                    animate={{ opacity: isResizing ? 1 : 0 }}
                >
                    Resize Width
                </motion.div>

            </motion.div>

            {/* Caption */}
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
            {/* Iframe Wrapper to handle the scaling transform cleanly */}
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
                        height: '125%', // Compensate for scale(0.8) to fill height
                        border: 'none',
                        borderBottomLeftRadius: '16px',
                        borderBottomRightRadius: '16px'
                    }}
                />
            </div>
            {/* Optional Caption */}
            <div className="bg-[#111] p-4 text-center border-t border-white/10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-mist">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Live Preview
                </div>
            </div>
        </div>
    );
};

// --- SECTIONS ---

const SectionRenderer = ({ section }) => {
    switch (section.type) {
        // ... (other cases) ...

        // --- NEW: Iframe Embed ---
        case 'iframe-embed':
            return <ResizableEmbed src={section.src} title={section.title} caption={section.caption} />;

        case 'text-row':
            return (
                <div className="mb-32">
                    <h2 className="font-display text-4xl md:text-5xl text-ice mb-6 leading-tight">{section.header}</h2>
                    <p className="font-sans text-xl text-mist leading-relaxed font-light max-w-2xl">{section.body}</p>
                </div>
            );
        case 'grid-problem-solution':
            return (
                <div className="grid md:grid-cols-2 gap-8 mb-32">
                    <div className="p-8 border-t border-white/10 relative">
                        <div className="absolute top-0 left-0 w-8 h-[1px] bg-red-500" />
                        <div className="text-xs font-mono mb-4 text-red-400">PROBLEM</div>
                        <p className="font-sans text-lg text-mist">{section.problem}</p>
                    </div>
                    <div className="p-8 border-t border-white/10 relative bg-white/[0.02]">
                        <div className="absolute top-0 left-0 w-8 h-[1px] bg-neon" />
                        <div className="text-xs font-mono mb-4 text-neon">SOLUTION</div>
                        <p className="font-sans text-lg text-ice">{section.solution}</p>
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
                <div className="mb-32 border-l border-neon pl-8 py-2">
                    <h3 className="font-display text-2xl text-ice mb-4">{section.header}</h3>
                    <p className="font-sans text-lg text-mist leading-relaxed max-w-3xl">{section.body}</p>
                </div>
            );
        case 'link-list':
            return (
                <div className="mb-32">
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
        case 'visual-rbac': return <div className="mb-32"><RBACVisual /></div>;
        case 'visual-evolution': return <div className="mb-32"><EvolutionVisual /></div>;

        // --- NEW: Static Embed (Clean, no resize) ---
        case 'static-embed':
            return <StaticEmbed src={section.src} title={section.title} caption={section.caption} />;



        // --- NEW: Process Timeline ---
        case 'process-timeline':
            return (
                <div className="mb-32">
                    {section.title && (
                        <h3 className="font-mono text-neon text-sm tracking-widest mb-12 uppercase">{section.title}</h3>
                    )}
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

        // --- NEW: Reflection Grid ---
        case 'reflection-grid':
            return (
                <div className="mb-32 grid md:grid-cols-2 gap-12">
                    <div className="bg-[#111] p-10 rounded-2xl border-l-4 border-green-500">
                        <h4 className="text-2xl font-display text-white mb-6">What went right</h4>
                        <ul className="space-y-4">
                            {section.rights.map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-400">
                                    <span className="text-green-500">✓</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-[#111] p-10 rounded-2xl border-l-4 border-red-500">
                        <h4 className="text-2xl font-display text-white mb-6">What went wrong</h4>
                        <ul className="space-y-4">
                            {section.wrongs.map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-400">
                                    <span className="text-red-500">×</span> {item}
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
                    {section.title && (
                        <h3 className="font-mono text-neon text-sm tracking-widest mb-12 uppercase">{section.title}</h3>
                    )}
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
                                    <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
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

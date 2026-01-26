'use client';

import { motion } from 'framer-motion';
import Container from './ui/Container';
import { Heading, Text } from './ui/Typography';

const SkillGroup = ({ title, skills, delay = 0 }) => (
    <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
    >
        <Heading level={4} className="text-muted mb-6 font-medium text-sm uppercase tracking-widest">{title}</Heading>
        <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
                <motion.div
                    key={skill}
                    className="px-6 py-3 bg-card-dark border border-dark-border rounded-xl text-fg-light hover:border-accent/50 hover:text-accent transition-colors cursor-default"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                    {skill}
                </motion.div>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const professionalSkills = ["Figma", "Framer", "Prototyping", "Design Systems", "User Research", "Enterprise UX", "Next.js (Basic)", "Tailwind CSS"];
    const personalInterests = ["Ice Cream Tasting", "Reading", "Travel", "Mentoring", "Storytelling"];

    return (
        <section className="py-20 bg-dark-card/30 border-y border-dark-border/50">
            <Container>
                <div className="grid md:grid-cols-2 gap-12">
                    <SkillGroup title="The Stack" skills={professionalSkills} />
                    <SkillGroup title="Beyond Pixels" skills={personalInterests} delay={0.2} />
                </div>
            </Container>
        </section>
    );
};

export default Skills;

'use client';

import { motion } from 'framer-motion';
import Container from './ui/Container';
import { Heading, Text } from './ui/Typography';
import Button from './ui/Button';

const ArticleCard = ({ title, source, summary, link, index }) => (
    <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group bg-card-dark p-8 rounded-2xl border border-dark-border hover:border-accent/50 transition-all duration-300 h-full relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
    >
        <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
            ↗
        </div>
        <div className="text-xs text-accent font-medium uppercase tracking-wider mb-4">{source}</div>
        <Heading level={4} className="mb-4 group-hover:text-accent transition-colors">{title}</Heading>
        <Text className="text-sm line-clamp-3">{summary}</Text>
    </motion.a>
);

const Blog = () => {
    const articles = [
        {
            title: "How I Became A Self Taught UI/UX Designer",
            source: "GeekyAnts Blog",
            summary: "My journey to becoming a self-taught designer filled with learning new interesting things. Tips and tricks that you can adopt if you're doing the same!",
            link: "https://geekyants.com/blog/how-i-became-a-self-taught-uiux-designer"
        },
        // Placeholder for more talks or articles
        {
            title: "Building Scalable Design Systems",
            source: "Medium (Coming Soon)",
            summary: "Thoughts on how strict or flexible a design system should be when scaling from 1 to 10 product squads.",
            link: "#"
        }
    ];

    return (
        <section className="py-32">
            <Container>
                <div className="mb-16 flex items-end justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Heading level={2}>Writes & Talks</Heading>
                        <Text>Sharing what I learn along the way.</Text>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {articles.map((article, index) => (
                        <ArticleCard key={index} {...article} index={index} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Blog;

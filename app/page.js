import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Philosophy from './components/Philosophy';
import Journey from './components/Journey';
import SelectedWork from './components/SelectedWork';
import SkillsAndBlog from './components/SkillsAndBlog';

export default function Home() {
    return (
        <main className="bg-dark-bg min-h-screen selection:bg-accent/30 text-fg-light">
            <Navbar />

            <Hero />

            <div id="work">
                <SelectedWork />
            </div>

            <Philosophy />
            <Journey />
            <SkillsAndBlog />

            <Footer />
        </main>
    );
}

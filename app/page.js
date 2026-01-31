import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Philosophy from './components/Philosophy';
import Journey from './components/Journey';
import SelectedWork from './components/SelectedWork';
import Impact from './components/Impact';
import Arsenal from './components/Arsenal';
import Writing from './components/Writing';

export default function Home() {
    return (
        <main className="bg-dark-bg min-h-screen selection:bg-accent/30 text-fg-light">
            <Navbar />

            <Hero />

            <div id="work">
                <SelectedWork />
            </div>

            <Philosophy />
            <Impact />
            <Journey />
            <Arsenal />
            <Writing />

            <Footer />
        </main>
    );
}

import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Programs from './sections/Programs';
import Impact from './sections/Impact';
import Team from './sections/Team';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Timeline from './sections/Timeline';
import Partners from './sections/Partners';
import Volunteer from './sections/Volunteer';
import Donate from './sections/Donate';
import Contact from './sections/Contact';
import ImpactStories from './sections/ImpactStories';
import Activities from './sections/Activities';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Programs />
        <Impact />
        <Team />
        <Testimonials />
        <ImpactStories />
        <Activities />
        <Timeline />
        <Partners />
        <Volunteer />
        <Donate />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

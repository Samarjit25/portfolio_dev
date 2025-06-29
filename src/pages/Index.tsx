
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <About />
      <Footer />
    </div>
  );
};

export default Index;

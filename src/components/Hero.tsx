import { Download, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/SamarjitRoy25', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/samarjit-roy-368071257/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/_samarjitroy_/', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/Samarjit25', label: 'GitHub' }
  ];

  return (
    <section className="min-h-screen pt-20 flex items-center justify-center bg-black text-white px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto w-full">
    <div className="text-center flex flex-col items-center">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tighter mb-6 animate-fade-in">
        <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
          Hi, I'm Samarjit
        </span>
        <br />
        <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
          I Design Interfaces, Then I Build Them.
        </span>
      </h1>

      <p
        className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl animate-fade-in"
        style={{ animationDelay: '0.2s' }}
      >
        Final year BTech student at NIT Silchar, building cool stuff at the intersection of design, code, and AI.  
        Always learning, always tinkering — comfort zones are boring anyway.
      </p>

      <div
        className="flex flex-col sm:flex-row items-center gap-6 mb-6 animate-fade-in"
        style={{ animationDelay: '0.4s' }}
      >
        <a
          href="https://drive.google.com/file/d/1FMD-pDcCD0rAVPE_u1H7ef-Uvozn3oIw/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105">
            <Download size={20} />
            Download Resume
          </Button>
        </a>
      </div>

      <div
        className="flex justify-center gap-4 animate-fade-in"
        style={{ animationDelay: '0.6s' }}
      >
        <div className="flex items-center gap-4 bg-gray-900/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-800">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                aria-label={social.label}
              >
                <Icon size={20} />
              </a>
            );
          })}
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Hero;

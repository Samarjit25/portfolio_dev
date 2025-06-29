
import { Download, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 animate-fade-in">
            Hi, I'm Swami
            <br />
            <span className="text-gray-400">Full Stack Developer</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl animate-fade-in" style={{animationDelay: '0.2s'}}>
            I build exceptional digital experiences with modern technologies. 
            Specialized in Full Stack Development and UI & UX Design.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button 
              className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center lg:justify-start gap-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center gap-4 bg-gray-900/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-800">
              {socialLinks.map((social, index) => {
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

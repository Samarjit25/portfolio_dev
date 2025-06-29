
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <footer id="contact" className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
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
          
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Swami. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

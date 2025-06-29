
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/SamarjitRoy25', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/samarjit-roy-368071257/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/_samarjitroy_/', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/Samarjit25', label: 'GitHub' }
  ];

  return (
    <footer id="contact" className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="mt-20 text-center">
<h3 className="inline-block text-4xl sm:text-6xl font-medium tracking-tighter leading-tight pb-[6px] mb-4 bg-gradient-to-b from-white to-gray-700 bg-clip-text text-transparent">
  Let's work together
</h3>
          <p className="text-white-400 text-lg mb-6">
            Have a project in mind? Let's create something amazing.
          </p>
        </div>
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
              © 2025 Samarjit. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

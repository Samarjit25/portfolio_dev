
import { ExternalLink } from 'lucide-react';

const About = () => {
  const links = [
    { name: 'GitHub', url: '#' },
    { name: 'LinkedIn', url: '#' },  
    { name: 'Leetcode', url: '#' }
  ];

  return (
    <section id="about" className="py-20 bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">About</h2>
        
        <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
          <p>
            I'm a UI/UX Designer and Full Stack Developer based in India, currently pursuing my degree at 
            Vishwakarma Institute of Technology, Pune. I blend design thinking with technical expertise to create 
            intuitive and scalable digital solutions.
          </p>
          
          <p>
            With a strong foundation in both design and development, I bridge the gap between aesthetics and 
            functionality. My approach combines user-centered design principles with robust full-stack 
            development practices, ensuring seamless experiences from concept to deployment.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200"
              >
                {link.name}
                <ExternalLink size={16} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <h3 className="text-4xl sm:text-6xl font-bold mb-8">Let's work together</h3>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Let's create something amazing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

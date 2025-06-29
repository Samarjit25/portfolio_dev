import { ExternalLink } from 'lucide-react';

const About = () => {
  const links = [
    { name: 'GitHub', url: 'https://github.com/Samarjit25' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/samarjit-roy-368071257/' },
    { name: 'Leetcode', url: 'https://leetcode.com/u/samarjitroy/' }
  ];

  return (
    <section id="about" className="py-20 bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h3 className="inline-block text-3xl font-medium tracking-tight mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
  About Me
</h3>


        <div className="space-y-6 text-white/90 text-base leading-normal">
          <p>
            I'm a final year B.Tech student at NIT Silchar, majoring in Electronics and Communication Engineering. By day, I delve into circuits and signals; by night, I'm immersed in UI/UX, full-stack development, and machine learning.
          </p>

          <p>
            I love turning abstract ideas into tangible, interactive experiences—whether that means designing intuitive interfaces or building robust applications. Constantly curious, I thrive on learning new things, experimenting with technologies, and pushing beyond comfort zones to create solutions that are both functional and delightful.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue hover:text-blue-300 transition-colors duration-200"
              >
                {link.name}
                <ExternalLink size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

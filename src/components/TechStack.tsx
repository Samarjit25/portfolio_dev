import { useRef } from 'react';

const TechStack = () => {
  const technologies = [
    'JavaScript', 'SQL', 'TypeScript', 'Python',
    'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase',
    'CSS', 'Tailwind CSS', 'Next.js',
    'Git', 'GitHub', 'Power BI', 'Figma', 'Linux',
    'UI/UX'
  ];

  const repeatedTech = [...technologies, ...technologies];

  return (
    <section className="py-20 bg-black text-white overflow-hidden px-4 sm:px-8 lg:px-8">
      <div className="max-w-7xl mx-auto relative overflow-hidden group">

        {/* Left Blur */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 z-10 bg-gradient-to-r from-black via-black/70 to-transparent" />

        {/* Right Blur */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 z-10 bg-gradient-to-l from-black via-black/70 to-transparent" />

        {/* Scrolling Items */}
        <div className="whitespace-nowrap flex gap-4 animate-marquee group-hover:[animation-play-state:paused]">
          {repeatedTech.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="inline-flex items-center justify-center px-5 py-[10px] bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full text-sm text-gray-300 leading-none hover:text-white hover:border-gray-500 transition-all duration-200 hover:scale-105"


            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

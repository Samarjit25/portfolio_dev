
const TechStack = () => {
  const technologies = [
    'NPM', 'MySQL', 'MongoDB', 'Firebase', 'Appwrite', 'Git', 'GitHub', 
    'Vercel', 'UI-UX Design', 'Figma', 'HTML', 'CSS', 'JavaScript', 'React',
    'Node.js', 'TypeScript', 'Tailwind CSS', 'Next.js'
  ];

  return (
    <section className="py-20 bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full text-sm text-gray-300 hover:text-white hover:border-gray-600 transition-all duration-200 hover:scale-105"
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

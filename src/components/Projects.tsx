
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'Layers Landing page',
      subtitle: 'Animated Landing page',
      description: 'Landing page for a SaaS, with interactive Animations made using Tailwind CSS and Framer motion',
      category: 'SAAS LANDING PAGE',
      technologies: ['React', 'Tailwind', 'Framer Motion'],
      image: '/lovable-uploads/29fb3e12-7607-49c0-b770-58b0d15b3a33.png',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'GhostType',
      subtitle: 'Seamless Typing Site',
      description: 'A sleek and minimalistic typing test app designed to enhance your typing speed and accuracy with real-time performance tracking and dynamic leaderboard.',
      category: 'WEB APP',
      technologies: ['React.js', 'Tailwind', 'Appwrite'],
      image: '/lovable-uploads/0e5f7c08-4646-462f-b275-96e98674bbd7.png',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Simon Says Game',
      subtitle: 'Interactive Memory Game',
      description: 'A interactive memory game with features that also include a leaderboard with 400+ users',
      category: 'WEBSITE',
      technologies: ['HTML', 'CSS', 'Javascript'],
      image: '/lovable-uploads/fde30ec7-73ad-44cc-a8be-39c9ec7b313e.png',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm text-gray-400 tracking-wider uppercase mb-4">RECENT PROJECTS</h2>
          <h3 className="text-4xl sm:text-6xl font-bold mb-8">Projects Catalogue</h3>
          <p className="text-gray-400 text-lg mb-8">A collection of my proof of work</p>
          <Link to="/projects">
            <Button 
              variant="outline"
              className="bg-gray-800/50 border-gray-700 text-white hover:bg-gray-700 hover:border-gray-600 rounded-full px-6"
            >
              View All Projects →
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-500 hover:scale-[1.02] animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white font-bold text-xl">{project.title}</h4>
                  <p className="text-gray-200 text-sm">{project.subtitle}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-xs text-gray-500 tracking-wider uppercase">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-bold text-white mt-1 mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-gray-800/50 border-gray-700 text-white hover:bg-gray-700 hover:border-gray-600"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Site
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-gray-800/50 border-gray-700 text-white hover:bg-gray-700 hover:border-gray-600"
                  >
                    <Github size={16} className="mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

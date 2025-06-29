import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'Kartly',
      subtitle: 'Next-Gen Online Storefront',
      description:
        'Developed a full-stack retail platform with optimized real-time checkout and inventory systems, enhancing user engagement and reducing cart abandonment.',
      category: 'Website',
      technologies: ['React.js', 'TailwindCSS', 'Firebase'],
      image: 'https://res.cloudinary.com/dz2mlxltd/image/upload/v1751182616/d04fd14bd493f5ac56e62b0a6c14410c_xm0enh.jpg',
      liveUrl: 'https://kartly-634f2.web.app/',
      githubUrl: 'https://github.com/Samarjit25/kartly',
    },
    {
      title: 'Luxeco',
      subtitle: 'Interactive Fashion Booking Portal',
      description:
        'Engineered a responsive platform with enhanced catalog and reservation systems, improving user experience, engagement, and operational efficiency.',
      category: 'Website',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      image: 'https://res.cloudinary.com/dz2mlxltd/image/upload/v1742308736/Screenshot_2025-02-21_152851_2_lnjrmp.png',
      liveUrl: 'https://luxeeco-fashion.netlify.app/',
      githubUrl: 'https://github.com/Samarjit25/Luxeco-Website',
    },
    {
      title: 'Signify',
      subtitle: 'Interactive eSignature Website',
      description:
        'A lightweight e-signature platform that allows users to draw and instantly download their signatures as PNG files.',
      category: 'Website',
      technologies: ['HTML', 'CSS', 'Javascript', 'Canvas'],
      image: 'https://res.cloudinary.com/dz2mlxltd/image/upload/v1751182752/04373510a18fffb1cb2ba2e7478bde1a_h2ncma.jpg',
      liveUrl: 'https://samarjit25.github.io/Signify/',
      githubUrl: 'https://github.com/Samarjit25/Signify',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h3 className="inline-block text-4xl sm:text-6xl font-medium tracking-tighter leading-tight pb-[6px] mb-4 bg-gradient-to-b from-white to-gray-700 bg-clip-text text-transparent">
  Projects Catalogue
</h3>



          <p className="text-white-400 text-lg">A few things I've worked on.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-500 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Section */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-xs text-gray-500 tracking-wider uppercase">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-bold text-white mt-1">{project.title}</h4>
                  <p className="text-sm text-gray-400 mb-2">{project.subtitle}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
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
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-gray-800/50 border border-gray-700 text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-gray-100 hover:text-black hover:border-gray-300"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Site
                    </Button>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-gray-800/50 border border-gray-700 text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-gray-100 hover:text-black hover:border-gray-300"
                    >
                      <Github size={16} className="mr-2" />
                      GitHub
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-16 flex justify-center">
          <Link to="/projects">
            <Button
              variant="outline"
             className="bg-gray-900/40 border border-gray-700 text-white rounded-full px-6 py-2 transition-all duration-300 ease-in-out hover:border-white hover:bg-gray-800 hover:text-white hover:shadow-md hover:scale-105"

            >
              View All Projects →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const projects = [
    {
      title: 'SummarIQ',
      subtitle: 'SaaS Landing Page',
      description:
        'SaaS Landing page for a tool that integrates with Zoom and Google Meet to generate meeting summaries and extract actionable tasks automatically',
      category: 'Website',
      technologies: ['Next','Typescript', 'FramerMotion'],
      image: 'https://res.cloudinary.com/dz2mlxltd/image/upload/v1751256552/Screenshot_2025-06-30_093804_iphfnb.png',
      liveUrl: 'https://summariq-landing.vercel.app/',
      githubUrl: 'https://github.com/Samarjit25/SummarIQ-landing',
    },
    {
      title: 'Kartly',
      subtitle: 'Next-Gen Online Storefront',
      description:
        'Developed a full-stack retail platform with optimized real-time checkout and inventory systems, enhancing user engagement and reducing cart abandonment.',
      category: 'Website',
      technologies: ['React.js', 'TailwindCSS', 'Firebase'],
      image: 'https://res.cloudinary.com/dz2mlxltd/image/upload/v1751199676/8e7fc704c70d51c97ad92927e224f060_enjmav.jpg',
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
      image: 'https://res.cloudinary.com/dz2mlxltd/image/upload/v1751199531/246fb33c6fb75c96333ef8e75e491870_twiixs.jpg',
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
      image: 'https://res.cloudinary.com/dz2mlxltd/image/upload/v1751199668/5dbac67f29f715d0f15e4349711d9338_gbznhb.jpg',
      liveUrl: 'https://samarjit25.github.io/Signify/',
      githubUrl: 'https://github.com/Samarjit25/Signify',
    },
    
    {
      title: 'NotifyMe',
      subtitle: 'Reminder system',
      description:
        'Mini project that works as a simple reminder system where users can set custom messages and times, and a dialog box pops up to notify them at the scheduled moment.',
      category: 'Python software',
      technologies: ['Python', 'tkinter', 'plyer'],
      image: 'https://res.cloudinary.com/dz2mlxltd/image/upload/v1751199192/6ab53b881771f74222f3cc21b5965c0a_gjnw0a.jpg',
      liveUrl: 'https://github.com/Samarjit25/Notify_Me/',
      githubUrl: 'https://github.com/Samarjit25/Notify_Me/',
    },
    {
      title: 'Weather App',
      subtitle: 'Website',
      description:
        'A sleek weather app that fetches real-time weather data using the OpenWeatherMap API and displays temperature, humidity, and conditions.',
      category: 'Website',
      technologies: ['HTML', 'CSS', 'Javascript', 'OpenWeatherMap API'],
      image: 'https://res.cloudinary.com/dz2mlxltd/image/upload/v1751199146/d5272910c4ccacfc46b2072dd1817ca4_ysd9cg.jpg',
      liveUrl: 'https://samarjit25.github.io/Signify/',
      githubUrl: 'https://github.com/Samarjit25/Signify',
    },
  ];

 return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <section className="pt-24 pb-20 bg-black text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
  <Link 
    to="/"
    className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
  >
    ← Back to Home
  </Link>

  <h1 className="inline-block text-4xl sm:text-6xl font-medium tracking-tight leading-tight pb-[4px] mb-4 bg-gradient-to-b from-white to-gray-700 bg-clip-text text-transparent">
    All Projects
  </h1>

  <p className="text-white-400 text-lg">Complete collection of my work</p>
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
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;

import { Button } from '@/components/ui/button';

const Experience = () => {
  const experiences = [
    {
      period: 'April - June 2025',
      company: 'Mach5 Software',
      role: 'Freelance Frontend Developer',
      logo: 'M5',
      logoColor: 'bg-orange-500'
    },
    {
      period: 'Nov 2022 - Present',
      company: 'Vishwakarma Institute of Technology',
      role: 'Bachelor of Technology in Information Technology',
      logo: 'VIT',
      logoColor: 'bg-blue-500'
    }
  ];

  return (
    <section className="py-20 bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Button 
            variant="outline"
            className="bg-gray-800/50 border-gray-700 text-white hover:bg-gray-700 hover:border-gray-600 mb-8 rounded-full px-6"
          >
            Explore More →
          </Button>
        </div>
        
        <h3 className="text-3xl font-bold mb-12">Education & Work Experience</h3>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className={`w-16 h-16 ${exp.logoColor} rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                {exp.logo}
              </div>
              
              <div className="flex-1">
                <div className="text-sm text-gray-400 mb-1">{exp.period}</div>
                <h4 className="text-xl font-bold text-white mb-1">{exp.company}</h4>
                <p className="text-gray-400">{exp.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

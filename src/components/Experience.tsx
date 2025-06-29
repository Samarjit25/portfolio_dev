import { Button } from '@/components/ui/button';

const Experience = () => {
  const experiences = [
    {
      period: 'Nov 2022 - Present',
      company: 'National Institute of Technology, Silchar',
      role: 'Bachelor of Technology in Electronics and Communication Engineering',
      logo: 'NITS',
      logoColor: 'bg-blue-500'
    },
    {
      period: 'Sept 2023 - May 2025',
      company: 'Borde Inc.',
      role: 'Data Annotation Intern',
      logo: 'B',
      logoColor: 'bg-red-500'
    },
    {
      period: 'Aug 2023 - May 2025',
      company: 'Google Developers Student Club, NIT Silchar',
      role: 'UI/UX Designer',
      logo: 'GDSC',
      logoColor: 'bg-green-500'
    }
  ];

  return (
    <section className="py-16 bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
<h3 className="inline-block text-2xl font-medium tracking-tight mb-10 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
  Education & Work Experience
</h3>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="flex flex-row items-start gap-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-10 h-10 ${exp.logoColor} rounded-xl flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}>
                {exp.logo}
              </div>
              
              <div className="flex-1">
                <div className="text-xs text-gray-400 mb-1">{exp.period}</div>
                <h4 className="text-base font-semibold text-white mb-1">{exp.company}</h4>
                <p className="text-sm text-gray-400">{exp.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

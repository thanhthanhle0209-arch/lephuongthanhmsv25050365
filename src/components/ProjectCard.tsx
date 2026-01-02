import { useState } from 'react';
import { ChevronDown, ChevronUp, Target, Wrench, Image, BarChart3, Lightbulb } from 'lucide-react';

interface ProjectSection {
  icon: React.ReactNode;
  title: string;
  content: string | string[];
}

interface ProjectCardProps {
  number: number;
  title: string;
  description: string;
  sections: {
    objective: string;
    method: string | string[];
    evidence: string;
    analysis: string;
    lesson: string;
  };
  defaultOpen?: boolean;
}

const ProjectCard = ({ number, title, description, sections, defaultOpen = false }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const projectSections: ProjectSection[] = [
    { icon: <Target className="w-5 h-5" />, title: 'Mục tiêu bài học', content: sections.objective },
    { icon: <Wrench className="w-5 h-5" />, title: 'Cách thực hiện', content: sections.method },
    { icon: <Image className="w-5 h-5" />, title: 'Minh chứng', content: sections.evidence },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Phân tích và đánh giá', content: sections.analysis },
    { icon: <Lightbulb className="w-5 h-5" />, title: 'Bài học rút ra', content: sections.lesson },
  ];

  return (
    <div className="card-academic overflow-hidden">
      {/* Header - Always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-start gap-4 text-left hover:bg-muted/50 transition-colors"
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
          {number}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-xl text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground line-clamp-2">{description}</p>
        </div>
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          )}
        </div>
      </button>

      {/* Content - Expandable */}
      {isOpen && (
        <div className="px-6 pb-6 animate-fade-in">
          <div className="border-t border-border pt-6 space-y-6">
            {projectSections.map((section, index) => (
              <div key={index} className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    {section.icon}
                  </div>
                  <h4 className="font-display font-medium text-foreground">{section.title}</h4>
                </div>
                <div className="pl-11">
                  {Array.isArray(section.content) ? (
                    <ul className="space-y-2">
                      {section.content.map((item, i) => (
                        <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;

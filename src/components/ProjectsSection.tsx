import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import dmorderScreenshot from "@/assets/dmorder-screenshot.png";
import cropcareScreenshot from "@/assets/cropcare-screenshot.png";

const projects = [
  {
    id: 1,
    title: "DMOrder – Smart Order Management Tool",
    description:
      "A simple SaaS-style web tool built for Instagram and WhatsApp sellers to collect and manage customer orders and payment confirmations.",
    techStack: ["React", "Next.js", "Firebase", "Tailwind CSS"],
    liveLink: "https://dmorder.in",
    image: dmorderScreenshot,
    color: "from-primary to-neon-blue",
  },
  {
    id: 2,
    title: "CropCare AI – Smart Agriculture Dashboard",
    description:
      "A real-time web dashboard that displays live agriculture sensor data with secure user authentication.",
    techStack: ["Next.js", "Firebase Authentication", "Firebase Realtime Database"],
    liveLink: "https://cropcare-ai-mvp.vercel.app",
    image: cropcareScreenshot,
    color: "from-neon-green to-accent",
  },
];

const ProjectCard = ({ 
  project, 
  index, 
  onClick 
}: { 
  project: typeof projects[0]; 
  index: number;
  onClick: () => void;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="group relative cursor-pointer perspective-1000"
    >
      <motion.div
        animate={{
          rotateY: isHovered ? 5 : 0,
          rotateX: isHovered ? -5 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="glass-card overflow-hidden preserve-3d"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40`} />
          
          {/* Overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center"
          >
            <span className="text-foreground font-medium">Click to view details</span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span key={tech} className="skill-badge text-xs">
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              whileHover={{ x: 5 }}
            >
              <ExternalLink size={16} />
              Live Demo
            </motion.a>
          </div>
        </div>

        {/* Glow effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl blur-xl opacity-30 -z-10`}
        />
      </motion.div>
    </motion.div>
  );
};

const ProjectModal = ({ 
  project, 
  onClose 
}: { 
  project: typeof projects[0]; 
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors z-10"
        >
          <X size={20} />
        </button>

        {/* Image */}
        <div className="relative h-64 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-30`} />
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
            {project.title}
          </h3>
          <p className="text-foreground/90 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-muted-foreground mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="skill-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={18} />
            <span className="relative z-10">Visit Live Site</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subheading mx-auto">
              Real-world applications I have built
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;

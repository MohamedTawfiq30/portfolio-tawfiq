import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-primary to-neon-blue",
    skills: [
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "React JS", level: 90 },
      { name: "Framer Motion", level: 75 },
      { name: "HTML, CSS, Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend & Database",
    color: "from-neon-blue to-accent",
    skills: [
      { name: "Node JS", level: 80 },
      { name: "Express Js", level: 78 },
      { name: "Firebase Authentication", level: 85 },
      { name: "Firebase Realtime Database", level: 82 },
      { name: "SQL", level: 70 },
    ],
  },
  {
    title: "Tools",
    color: "from-accent to-neon-green",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Vercel", level: 88 },
      { name: "Firebase Console", level: 80 },
      { name: "Figma (basic)", level: 60 },
    ],
  },
];

const SkillCard = ({ 
  skill, 
  color, 
  index 
}: { 
  skill: { name: string; level: number }; 
  color: string; 
  index: number;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative p-4 rounded-xl bg-secondary/30 border border-white/5 transition-all duration-500 hover:border-primary/30 overflow-hidden"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-10 blur-xl`} />
      </div>

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-3">
          <span className="font-medium text-foreground">{skill.name}</span>
          <span className="text-sm text-muted-foreground">{skill.level}%</span>
        </div>
        
        {/* Progress Bar */}
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
            className={`h-full bg-gradient-to-r ${color} rounded-full`}
          />
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-heading">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="section-subheading mx-auto">
              Technologies and tools I work with
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-card p-6"
              >
                <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      color={category.color}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

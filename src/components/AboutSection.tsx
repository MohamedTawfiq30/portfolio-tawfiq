import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Target, Rocket } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const highlights = [
    { icon: Code2, text: "Hands-on Development", color: "text-primary" },
    { icon: Lightbulb, text: "Problem Solver", color: "text-accent" },
    { icon: Target, text: "Goal-Oriented", color: "text-neon-green" },
    { icon: Rocket, text: "Fast Learner", color: "text-neon-blue" },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-heading">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="section-subheading mx-auto">
              Get to know more about who I am
            </p>
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            variants={itemVariants}
            className="glass-card-hover p-8 md:p-12"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-8"
            >
              I am a 3rd-year Information Technology student with hands-on experience building real-world web applications. I enjoy turning ideas into interactive products using{" "}
              <span className="text-primary font-semibold">MERN</span>,{" "}
              <span className="text-accent font-semibold">Next JS</span>, and modern UI tools.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-10"
            >
              My focus is on practical development — dashboards, SaaS-style tools, and systems that solve real problems. I learn best by building, experimenting, and improving continuously.
            </motion.p>

            {/* Highlight Cards */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl bg-secondary/30 border border-white/5 transition-all duration-300 hover:border-primary/30"
                >
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                  <span className="text-sm font-medium text-center text-muted-foreground">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

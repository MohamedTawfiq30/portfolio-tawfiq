import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Briefcase } from "lucide-react";
import ThreeScene from "./ThreeScene";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Blur Overlays */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/30 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/20 rounded-full blur-[150px]" />

      {/* 3D Scene - Hidden on mobile for performance */}
      <div className="hidden md:block">
        <ThreeScene />
      </div>

      {/* Mobile Gradient Background */}
      <div className="md:hidden absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />

      <div className="container mx-auto px-6 relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl w-full text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary">
              <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
              Available for Internship
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="gradient-text">Mohamed Tawfiq J</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/90 mb-6"
          >
            Full-Stack Developer |{" "}
            <span className="gradient-text-accent">Building Interactive Web Experiences</span>
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            I design and build real-world web applications using MERN, Next JS, and modern frontend tools.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={scrollToProjects}
              className="btn-primary flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Briefcase size={20} />
              <span className="relative z-10">View Projects</span>
            </motion.button>

            <motion.a
              href="/Mohamed_Tawfiq_Fullstack_Intern_Resume.pdf"
              download
              className="btn-outline flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Resume
            </motion.a>

            <motion.button
              onClick={scrollToContact}
              className="btn-outline flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

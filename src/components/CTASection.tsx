import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Mail, Sparkles } from "lucide-react";

const CTASection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Full-screen gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[150px]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Sparkle icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-8"
          >
            <Sparkles className="w-8 h-8 text-primary" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
          >
            Looking for a motivated developer intern who can{" "}
            <span className="gradient-text">build and learn fast</span>?
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground mb-10"
          >
            Let's connect and explore opportunities together
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="/Mohamed_Tawfiq_Fullstack_Intern_Resume.pdf"
              download
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              <span className="relative z-10">Download Resume</span>
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
      </div>
    </section>
  );
};

export default CTASection;

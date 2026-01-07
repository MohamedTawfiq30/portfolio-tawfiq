import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Youtube, Heart } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/MohamedTawfiq30",
    color: "hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mohamed-tawfiq-81810b2a9",
    color: "hover:text-[#0077B5]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/tawfiq_sparkz",
    color: "hover:text-[#E4405F]",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@TawfiqSparkz",
    color: "hover:text-[#FF0000]",
  },
];

const Footer = () => {
  return (
    <footer className="py-12 relative overflow-hidden border-t border-white/5">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground transition-colors duration-300 ${social.color}`}
                title={social.name}
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500 fill-red-500" />
            </motion.span>
            <span>by Mohamed Tawfiq</span>
            <span className="text-muted-foreground/50">•</span>
            <span>{new Date().getFullYear()}</span>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{ color: "hsl(var(--primary))" }}
                className="transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

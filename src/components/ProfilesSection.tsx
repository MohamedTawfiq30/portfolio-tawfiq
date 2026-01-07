import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Code2, Award } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    username: "MohamedTawfiq30",
    link: "https://github.com/MohamedTawfiq30",
    icon: Github,
    color: "from-[#333] to-[#24292e]",
    glowColor: "shadow-[0_0_30px_rgba(255,255,255,0.2)]",
    description: "Open Source Projects & Code",
  },
  {
    name: "LeetCode",
    username: "mohamedtawfiq70249",
    link: "https://leetcode.com/u/mohamedtawfiq70249/",
    icon: Code2,
    color: "from-[#FFA116] to-[#FF8C00]",
    glowColor: "shadow-[0_0_30px_rgba(255,161,22,0.3)]",
    description: "DSA Problem Solving",
  },
  {
    name: "HackerRank",
    username: "mohamedtawfiq701",
    link: "https://www.hackerrank.com/profile/mohamedtawfiq701",
    icon: Award,
    color: "from-[#00EA64] to-[#00C853]",
    glowColor: "shadow-[0_0_30px_rgba(0,234,100,0.3)]",
    description: "Certifications & Challenges",
  },
];

const ProfileCard = ({ 
  profile, 
  index 
}: { 
  profile: typeof profiles[0]; 
  index: number;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      ref={cardRef}
      href={profile.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group block perspective-1000"
    >
      <motion.div
        animate={{
          rotateY: isHovered ? 10 : 0,
          rotateX: isHovered ? -5 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
        className={`glass-card p-8 preserve-3d transition-all duration-500 ${
          isHovered ? profile.glowColor : ""
        }`}
      >
        {/* Icon */}
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.6 }}
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${profile.color} flex items-center justify-center mb-6`}
        >
          <profile.icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Content */}
        <h3 className="text-xl font-bold text-foreground mb-2">{profile.name}</h3>
        <p className="text-muted-foreground text-sm mb-2">@{profile.username}</p>
        <p className="text-muted-foreground/70 text-xs">{profile.description}</p>

        {/* Arrow indicator */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          className="absolute top-8 right-8 text-foreground"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 15L15 5M15 5H8M15 5V12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        {/* Background glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className={`absolute -inset-2 bg-gradient-to-r ${profile.color} rounded-3xl blur-xl opacity-20 -z-10`}
        />
      </motion.div>
    </motion.a>
  );
};

const ProfilesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="profiles" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#FFA116]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00EA64]/10 rounded-full blur-[150px]" />

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
              Coding <span className="gradient-text">Profiles</span>
            </h2>
            <p className="section-subheading mx-auto">
              Track my coding journey and achievements
            </p>
          </motion.div>

          {/* Profiles Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {profiles.map((profile, index) => (
              <ProfileCard key={profile.name} profile={profile} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfilesSection;

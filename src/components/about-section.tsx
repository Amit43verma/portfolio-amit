"use client"

import { siteConfig, skills } from '@/lib/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="bg-card py-10 md:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-8 text-center text-3xl font-bold text-primary sm:text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 items-center">
          <motion.div 
            className="md:col-span-1 flex justify-center relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="relative">
              {/* Animated glowing ring */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{ zIndex: 1, mixBlendMode: 'screen' }}
                initial={false}
                animate={{
                  opacity: 1,
                  scale: [1, 1.12, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear"
                }}
              >
                <div className="w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-blue-500 via-fuchsia-500 to-cyan-400 opacity-90 blur-[1.5px] animate-pulse border-4 border-white dark:border-cyan-200" />
              </motion.div>
              <motion.div
                className="bg-card shadow-2xl rounded-full p-2 border-4 border-primary/60 transition-all duration-300 relative z-10"
                whileHover="light-mode-enlarge"
                variants={{
                  'light-mode-enlarge': {
                    scale: 1.06,
                  },
                }}
              >
                <Image
                  src="/amit.png"
                  alt={siteConfig.name}
                  width={300}
                  height={300}
                  className="rounded-full object-cover aspect-square"
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="md:col-span-2 space-y-4 bg-card rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I&apos;m {siteConfig.name}, a passionate B.Tech student in Computer Science & Engineering (AI) at NSUT, Delhi.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With hands-on expertise in React, Next.js, Tailwind CSS, Python, and FastAPI, I&apos;ve developed projects in AI, web development, and more, focusing on real-world applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I excel in collaborative teams, constantly learning new technologies to tackle challenges and drive impactful results in software engineering.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Education</h3>
              <ul className="text-base text-muted-foreground space-y-2">
                <li>B.Tech in Computer Science & Engineering (AI), NSUT, Delhi (2022–2026) &mdash; CGPA: 8.03</li>
                <li>Class XII (CBSE), RPVV, I.P.Extention (2020–2021) &mdash; Percentage: 94.2%</li>
                <li>Class X (CBSE), RPVV, I.P.Extention (2018–2019) &mdash; Percentage: 92.6%</li>
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6"
            >
              <h3 className="text-xl font-semibold text-primary mb-4 text-center">My Skills</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="text-xs cursor-pointer transition-all duration-200
                        hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:shadow-accent/40
                        dark:hover:bg-primary dark:hover:text-primary-foreground dark:hover:shadow-lg dark:hover:shadow-primary/40"
                    >
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

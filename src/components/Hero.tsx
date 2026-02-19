import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const roles = [
  "Computer Science",
  "AI Enthusiast",
  "UE5 + ML Integrator",
  "AI Automation Engineer",
  "Flutter Developer",
  
];

const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % roles.length);
  }, 2500);
  return () => clearInterval(interval);
}, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-12 px-6 md:flex-row md:gap-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center md:text-left">

          <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">HELLO THERE! </p>
          <h1 className="mb-4 font-heading text-4xl font-bold leading-tight md:text-6xl">I'm
<span className="text-gradient"> Fizza Baloch,</span>
            <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-gradient"
              >
                {roles[index]}
              </motion.span>s
            </AnimatePresence>

          </h1>
          <p className="mb-8 max-w-lg text-muted-foreground leading-relaxed">
            AI Enthusiast focused on integrating Unreal Engine 5 (UE5) with machine learning models. 
            Experienced in AI automation using n8n, Flutter app development, and Java with a strong 
            foundation in OOP and Data Structures & Algorithms (DSA).
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-medium text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25">

              View My Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 font-medium text-foreground transition-all hover:border-primary hover:text-primary">

              Hire Me
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 md:justify-start">
            {[
            { label: "CGPA", value: "3.94" },
            { label: "Projects", value: "7+" },
            { label: "Skills", value: "10+" }].
            map((stat) =>
            <div key={stat.label} className="text-center">
                <p className="font-heading text-2xl font-bold text-gradient">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -15, 0]
          }}
          transition={{ 
            duration: 4,
            delay: 0.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative flex-shrink-0">


          <div className="relative h-72 w-72 md:h-96 md:w-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 blur-2xl" />
            <img
              src={profilePhoto}
              alt="Fizza Baloch"
              className="relative h-full w-full rounded-full border-2 border-primary/30 object-cover glow-border" />

            <div className="absolute -right-2 top-10 rounded-xl border border-border bg-card px-4 py-2 shadow-lg">
              <p className="text-xs text-muted-foreground">🎓 Merit Scholar</p>
            </div>
            <div className="absolute -left-2 bottom-16 rounded-xl border border-border bg-card px-4 py-2 shadow-lg">
              <p className="text-xs text-muted-foreground">💻 AI Enthusiast</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground">

        <ArrowDown size={20} />
      </motion.a>
    </section>);

};

export default Hero;
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">About Me</p>
          <h2 className="mb-12 font-heading text-3xl font-bold md:text-5xl">
            Who is <span className="text-gradient">Fizza Baloch?</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6 leading-relaxed text-muted-foreground">
              I am a sixth-semester Computer Science student with a CGPA of 3.94, 
              driven by excellence and innovation. As an AI Enthusiast, I focus on 
              integrating Unreal Engine 5 (UE5) with machine learning models to build 
              intelligent and immersive systems.
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              My expertise includes AI automation with n8n, Flutter application development, 
              and Java programming, backed by a strong foundation in OOP and Data Structures 
              & Algorithms (DSA). I am passionate about connecting diverse fields with AI to 
              create impactful solutions.
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              Beyond academics, I actively contribute to communities ranging from AAAI-affiliated
              initiatives to international organizations like AIESEC, believing strongly in leadership,
              collaboration, and knowledge sharing.
            </p>

            <div className="flex flex-wrap gap-4">
              {["Flutter", "Python", "Java", "Firebase", "n8n", "C++"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-4"
          >
            {[
              {
                icon: GraduationCap,
                title: "Education",
                desc: "BS Computer Science — CGPA 3.94 (2023 - Present)",
              },
              {
                icon: Briefcase,
                title: "Internship",
                desc: "AI Automation Intern — ByteTech Consulting (Pvt) Ltd",
              },
              {
                icon: Award,
                title: "Recognition",
                desc: "Microsoft Student Learn Ambassador, Google Dev Society President, Association for the Advancement of Artificial Intelligence",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="mb-1 font-heading font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

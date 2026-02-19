import { motion } from "framer-motion";

const skills = [
  { name: "Flutter & Firebase", level: 90, desc: "App Development, Authentication & Database" },
  { name: "Python", level: 85, desc: "Data Structures and Algorithms" },
  { name: "AI Automation (n8n)", level: 80, desc: "Workflow Automation & AI Agents" },
  { name: "Java", level: 85, desc: "Object-Oriented Programming & Design Patterns" },
  { name: "C++", level: 75, desc: "Systems Programming & Terminal Applications" },
  { name: "Public Speaking", level: 90, desc: "Presentations, Workshops & Debates" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">Expertise</p>
          <h2 className="mb-12 font-heading text-3xl font-bold md:text-5xl">
            My <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-1 flex items-center justify-between">
                <h3 className="font-heading font-semibold text-foreground">{skill.name}</h3>
                <span className="text-sm font-medium text-primary">{skill.level}%</span>
              </div>
              <p className="mb-3 text-sm text-muted-foreground">{skill.desc}</p>
              <div className="h-2 overflow-hidden rounded-full bg-secondary">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-[hsl(200,100%,70%)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

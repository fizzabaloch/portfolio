import { motion } from "framer-motion";
import { ExternalLink, Smartphone, Monitor, Terminal, Cpu, Watch, Projector } from "lucide-react";

const projects = [
  {
    title: "BookSwap",
    desc: "A Flutter and Dart-based mobile application designed to help readers buy and sell new and used books.",
    tech: ["Flutter", "Dart","Firebase","Google APIs"],
    icon: Smartphone,
  },
  {
    title: "Teachers App",
    desc: "A Flutter & Dart-based mobile application for managing teacher workflows efficiently.",
    tech: ["Flutter", "Dart"],
    icon: Projector,
  },
  {
    title: "Period Tracking App",
    desc: "A health tracking app built with Flutter integrating REST APIs for data management.",
    tech: ["Flutter", "REST API"],
    icon: Watch,
  },
  {
    title: "AI Automation Workflows",
    desc: "Created intelligent automation workflows and AI agents using n8n at ByteTech Consulting.",
    tech: ["n8n", "AI"],
    icon: Cpu,
  },
  {
    title: "Online Doctor Booking System",
    desc: "Java-based appointment system for hospitals enabling patients to book consultations online.",
    tech: ["Java", "OOP","DSA"],
    icon: Monitor,
  },
  {
    title: "Hospital Management System",
    desc: "Terminal-based C++ system managing hospital records, patients, and staff operations.",
    tech: ["C++", "Terminal"],
    icon: Terminal,
  },
  {
    title: "Arduino IoT Project",
    desc: "Hardware-software integration project using Arduino microcontrollers for IoT solutions.",
    tech: ["Arduino", "IoT"],
    icon: Cpu,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">Portfolio</p>
            <h2 className="font-heading text-3xl font-bold md:text-5xl">
              My <span className="text-gradient">Projects</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <project.icon size={22} />
                </div>
                <ExternalLink size={16} className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{project.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

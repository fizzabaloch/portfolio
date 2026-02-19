import { motion } from "framer-motion";
import { Trophy, Users, Globe, BookOpen, Medal, Pen} from "lucide-react";

const achievements = [
  {
    icon: Medal,
    title: "Association for the Advancement in Artificial Intelligence",
    period: "Feb 2026 - Present",
    desc: "Recognized as a Vice President",
  },
  
  {
    icon: Globe,
    title: "Google Developers Society President",
    period: "Feb 2025 - Feb 2026",
    desc: "Leading the developer community as President",
  },
  {
    icon: Trophy,
    title: "Microsoft Student Learn Ambassador",
    period: "Feb 2024 - Feb 2025",
    desc: "Recognized as a Marketing Professional",
  },
  {
    icon: Pen,
    title: "English2Success",
    period: "March 2025 - Present",
    desc: "Mentoring of students at an international forum",
  },
  {
    icon: Users,
    title: "Digital Empowerment Network",
    period: "Dec 2024 - Present",
    desc: "Ambassador of the NSPBP program",
  },
  {
    icon: BookOpen,
    title: "NAVTTC Mobile Development Course",
    period: "Mar 2025 - Jun 2025",
    desc: "Completed 4-month comprehensive course",
  },
];

const extracurriculars = [
  "Hackathon Organizer at SZABIST",
  "Active Participant in Speeches and Debates",
  "Member of Al-Ibadah Charity Foundation",
  "Business Module Workshop — Lincoln Corner Hyderabad",
  "Community Development through Youth Advocacy Workshop",
];

const Others = () => {
  return (
    <section id="others" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">More About Me</p>
          <h2 className="mb-12 font-heading text-3xl font-bold md:text-5xl">
            Achievements & <span className="text-gradient">Activities</span>
          </h2>
        </motion.div>

        <div className="mb-16 grid gap-6 sm:grid-cols-2">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon size={22} />
              </div>
              <div>
                <h3 className="mb-1 font-heading font-semibold text-foreground">{item.title}</h3>
                <p className="mb-1 text-xs font-medium text-primary">{item.period}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-6 font-heading text-xl font-bold text-foreground">Extracurriculars</h3>
          <div className="flex flex-wrap gap-3">
            {extracurriculars.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-secondary px-5 py-2.5 text-sm text-secondary-foreground transition-colors hover:border-primary/30"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Others;

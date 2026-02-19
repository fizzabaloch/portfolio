import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "fizzabalochakueb9@gmail.com", href: "mailto:fizzabalochakueb9@gmail.com" },
 
  { icon: MapPin, label: "Location", value: "Qasimabad, Hyderabad", href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "Fizza Baloch", href: "https://linkedin.com/in/fizza-baloch-a5a61b261" },
   { icon: Globe, label: "GitHub", value: "fizzabaloch", href: "https://github.com/fizzabaloch" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">Get In Touch</p>
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-5xl">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="mx-auto mb-12 max-w-lg text-muted-foreground">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {contactInfo.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="font-medium text-foreground">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

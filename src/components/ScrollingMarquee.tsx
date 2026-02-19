import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const items = [
  "App Development", "Web Design", "Flutter", "Python", "Java", "AI Automation",
  "Firebase", "C++", "n8n", "UI/UX", "Mobile Apps", "Arduino",
];

const ScrollingMarquee = () => {
  return (
    <div className="overflow-hidden border-y border-border bg-card/50 py-5">
      <motion.div
        animate={{ x: [0, -1920] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex w-max items-center gap-8"
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <Sparkles size={14} className="text-primary" />
            <span className="whitespace-nowrap font-heading text-lg font-medium text-foreground">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingMarquee;

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("mb-14", align === "center" && "text-center", className)}
    >
      {eyebrow && (
        <div className={cn("section-eyebrow mb-4", align === "center" && "justify-center")}>
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-[var(--text)] sm:text-4xl md:text-[2.75rem]">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="gradient-text">{highlight}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 100, category: "frontend" },
  { name: "JavaScript", level: 100, category: "frontend" },
  { name: "Next.js", level: 100, category: "frontend" },
  { name: "React", level: 100, category: "frontend" },
  { name: "React Native", level: 100, category: "frontend" },
  { name: "TypeScript", level: 100, category: "frontend" },
  { name: "Tailwind CSS", level: 100, category: "frontend" },
  { name: "Figma", level: 100, category: "frontend" },
  { name: "Sass", level: 100, category: "frontend" },
  { name: "Shadcn UI", level: 100, category: "frontend" },

  // Backend
  { name: "Node.js", level: 100, category: "backend" },
  { name: "Express", level: 100, category: "backend" },
  { name: "MongoDB", level: 100, category: "backend" },
  { name: "PostgreSQL", level: 100, category: "backend" },
  { name: "tRPC", level: 100, category: "backend" },
  { name: "Drizzle ORM", level: 100, category: "backend" },
  { name: "Supabase", level: 100, category: "backend" },
  { name: "Firebase", level: 100, category: "backend" },
  { name: "AWS", level: 100, category: "backend" },
  { name: "Serverless", level: 100, category: "backend" },
  { name: "Nest.js", level: 100, category: "backend" },
  { name: "Docker", level: 100, category: "backend" },
  { name: "Git/GitHub", level: 100, category: "backend" },
  { name: "Prisma", level: 100, category: "backend" },
];

const categories = ["all", "frontend", "backend"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sd:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-center mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div
                className="w-full bg-secondary/50
                h-2
                rounded-full
                overflow-hidden"
              >
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              {/* <div>
                <span>{skill.level}%</span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Layers,
  MapPin,
  Rocket,
  Sparkles,
  Terminal,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Backend Development",
    description: "Java, Spring Boot, REST APIs and microservices.",
    color: "text-cyan-500",
    background: "bg-cyan-500/10",
  },
  {
    icon: Layers,
    title: "Full-Stack Engineering",
    description: "Building responsive interfaces with React.",
    color: "text-violet-500",
    background: "bg-violet-500/10",
  },
  {
    icon: Database,
    title: "Data & Infrastructure",
    description: "SQL, PostgreSQL, Redis, Kafka and AWS.",
    color: "text-emerald-500",
    background: "bg-emerald-500/10",
  },
  {
    icon: Terminal,
    title: "Problem Solving",
    description: "Clean code, debugging and maintainable systems.",
    color: "text-orange-500",
    background: "bg-orange-500/10",
  },
];

const details = [
  {
    label: "Role",
    value: "Software Developer",
    icon: BriefcaseBusiness,
  },
  {
    label: "Specialization",
    value: "Java Backend & Full-Stack",
    icon: Code2,
  },
  {
    label: "Education",
    value: "Information Technology",
    icon: GraduationCap,
  },
  {
    label: "Location",
    value: "India",
    icon: MapPin,
  },
];

const technologies = [
  "Java",
  "Spring Boot",
  "Microservices",
  "React",
  "SQL",
  "AWS",
  "Redis",
  "Kafka",
];

function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-white py-24 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-96 w-96 rounded-full bg-violet-500/10 blur-[110px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-14"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400">
            <Sparkles size={16} />
            A little about me
          </div>

          <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Engineering ideas into{" "}
            <span className="gradient-text">real solutions.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            I enjoy building reliable software, solving engineering challenges,
            and creating applications that are practical, scalable, and easy to
            maintain.
          </p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Introduction and highlights */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/80 p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 sm:p-9">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-cyan-500/5" />

              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <Code2 size={25} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Hello, I'm
                    </p>
                    <h3 className="text-xl font-bold sm:text-2xl">
                      Abhijeet Yadav
                    </h3>
                  </div>
                </div>

                <p className="mb-5 leading-8 text-slate-600 dark:text-slate-300">
                  My primary focus is Java backend development with Spring Boot
                  and microservices. I enjoy designing APIs, working with
                  databases, troubleshooting issues, and understanding how
                  applications operate behind the scenes.
                </p>

                <p className="leading-8 text-slate-600 dark:text-slate-300">
                  I also work with React to build modern user interfaces. I aim
                  to combine strong engineering fundamentals with practical
                  problem-solving to deliver clean, dependable software.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-cyan-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href="#projects"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-600 transition-colors hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                >
                  Explore my projects
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ y: -5 }}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-cyan-400/60 dark:border-slate-800 dark:bg-slate-900"
                  >
                    <div
                      className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${item.background} ${item.color}`}
                    >
                      <Icon size={22} />
                    </div>

                    <h4 className="font-bold">{item.title}</h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Profile information */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            viewport={{ once: true, amount: 0.15 }}
            className="lg:sticky lg:top-24"
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/10 sm:p-9">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500" />

              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                    Profile overview
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">
                    Quick Information
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/15 to-violet-500/15 text-cyan-600 dark:text-cyan-400">
                  <Rocket size={25} />
                </div>
              </div>

              <div className="space-y-1">
                {details.map((detail, index) => {
                  const Icon = detail.icon;

                  return (
                    <motion.div
                      key={detail.label}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.07,
                      }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 rounded-xl px-3 py-4 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/70"
                    >
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        <Icon size={19} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {detail.label}
                        </p>
                        <p className="mt-1 break-words font-semibold">
                          {detail.value}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-500/15 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                  <Sparkles size={17} />
                  What drives me
                </div>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  Continuous learning, thoughtful engineering, and building
                  software that solves real problems.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
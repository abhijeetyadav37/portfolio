import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import passwordChecker from "../assets/projects/password-checker.png";

function Projects() {
  const projects = [
    {
      title: "Password Strength Checker & Generator",

      description:
        "An Android application that evaluates password strength in real time based on security rules and provides instant feedback to help users create stronger passwords.",

      technologies: [
        "Java",
        "Android Studio",
        "Android SDK",
        "XML",
        "Material Design",
      ],

      learned: [
        "Android application development",
        "Java event handling",
        "Password validation",
        "Material Design UI",
        "Input validation",
      ],

      github: "https://github.com/abhijeetyadav37/StrengthChecker",

      live: "#",

      image: passwordChecker,
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-100 py-24 text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-semibold uppercase tracking-widest text-cyan-500">
            Projects
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            My Work
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600 dark:text-slate-400">
            I believe the best way to learn software development is by building
            real projects.
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <div className="space-y-10">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;
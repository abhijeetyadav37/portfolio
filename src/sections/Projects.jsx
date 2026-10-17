import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import passwordChecker from "../assets/projects/password-checker.png";
import dashboardImage from "../assets/projects/dashboard.png";


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

    {
      title: "CyberSaarthi",

      description:
        "A cybersecurity case management platform designed to organize security cases, track case information, and visualize relationships between entities. The application includes a dashboard, case management views, and graph-based investigation features.",

      technologies: [
        "React",
        "TypeScript",
        "Python",
        "PostgreSQL",
        "Redis",
        "Neo4j",
        "Docker",
      ],

      learned: [
        "Building a React and TypeScript frontend",
        "Integrating frontend components with REST APIs",
        "Managing case data using PostgreSQL",
        "Working with Redis and Neo4j",
        "Docker-based development",
        "Visualizing relationships between entities",
      ],

      github: "https://github.com/abhijeetyadav37/cybersaarthi",

      live: "https://youtu.be/5etn15xfs5M?si=XIw-FkeWHtT2k-sh",

      image: dashboardImage,
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

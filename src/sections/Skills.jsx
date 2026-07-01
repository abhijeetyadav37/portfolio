import { motion } from "framer-motion";

function Skills() {
  const skillList = [
    "Java",
    "JavaScript",
    "Spring Boot",
    "React",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Linux",
    "SQL",
    "Data Structures",
    "Algorithms",
  ];

  return (
    <section
      id="skills"
      className="bg-white py-24 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white"
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
            My Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600 dark:text-slate-400">
            These are the technologies, tools, and concepts that I use while
            learning, building projects, and continuously improving my software
            development skills.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skillList.map((skill) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-slate-300 bg-slate-50 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-cyan-500">
                {skill}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
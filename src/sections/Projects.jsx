import { motion } from "framer-motion";

function Projects() {
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

        {/* Project Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl rounded-2xl border border-slate-300 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-950"
        >
          <div className="flex flex-col items-center text-center">

            {/* Placeholder Image */}
            <div className="mb-8 flex h-48 w-full items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 text-6xl dark:border-slate-700 dark:bg-slate-900">
              🚀
            </div>

            <h3 className="text-2xl font-bold">
              Projects Coming Soon
            </h3>

            <p className="mt-5 max-w-2xl leading-8 text-slate-600 dark:text-slate-400">
              I am currently working on personal and academic projects to
              strengthen my software engineering skills. Every completed project
              will be added here .
            </p>

            <div className="mt-8 rounded-full bg-cyan-500/10 px-5 py-2 font-medium text-cyan-500">
              🚧 Building • Learning • Improving
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;
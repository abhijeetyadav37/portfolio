import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-semibold uppercase tracking-widest text-cyan-500">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Get to Know Me
          </h2>
        </motion.div>

        <div className="grid items-start gap-14 lg:grid-cols-2">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-2xl font-semibold">
              Hello! I'm Abhijeet Yadav.
            </h3>

            <p className="mb-6 leading-8 text-slate-600 dark:text-slate-400">
              I am a B.Tech Information Technology student with a strong
              interest in software engineering, problem solving, and modern web
              technologies. I enjoy transforming ideas into practical
              applications while continuously improving my programming skills.
            </p>

            <p className="leading-8 text-slate-600 dark:text-slate-400">
              Currently, I am focused on Java, Data Structures & Algorithms,
              React, Spring Boot, backend development, and Linux. I enjoy
              learning how systems work internally and strive to write clean,
              maintainable, and scalable code.
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-300 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
          >
            <h3 className="mb-8 text-2xl font-semibold">
              Quick Information
            </h3>

            <div className="space-y-5">

              <div className="flex justify-between border-b border-slate-300 pb-3 dark:border-slate-700">
                <span className="text-slate-500 dark:text-slate-400">
                  Name
                </span>
                <span className="font-medium">
                  Abhijeet Yadav
                </span>
              </div>

              <div className="flex justify-between border-b border-slate-300 pb-3 dark:border-slate-700">
                <span className="text-slate-500 dark:text-slate-400">
                  Education
                </span>
                <span className="font-medium">
                  B.Tech Information Technology
                </span>
              </div>

              <div className="flex justify-between border-b border-slate-300 pb-3 dark:border-slate-700">
                <span className="text-slate-500 dark:text-slate-400">
                  University
                </span>
                <span className="font-medium">
                  RTM Nagpur University
                </span>
              </div>

              <div className="flex justify-between border-b border-slate-300 pb-3 dark:border-slate-700">
                <span className="text-slate-500 dark:text-slate-400">
                  Location
                </span>
                <span className="font-medium">
                 Nagpur Maharashtra, India
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">
                  Interests
                </span>
                <span className="font-medium text-right">
                  Java • React • Spring Boot • Linux
                </span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;
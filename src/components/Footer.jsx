import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-300 bg-white text-slate-700 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 lg:flex-row"
      >
        {/* Left */}
        <div className="text-center lg:text-left">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Abhijeet Yadav
          </h3>

          <p className="mt-3 text-slate-600 dark:text-slate-400">
            B.Tech Information Technology Student
          </p>

          <p className="mt-2 max-w-sm text-sm leading-7 text-slate-500 dark:text-slate-500">
            Passionate about Java, Data Structures & Algorithms, Linux,
            Backend Development, and building modern web applications.
          </p>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex flex-wrap justify-center gap-8 text-sm font-medium">

            <li>
              <a
                href="#home"
                className="transition duration-300 hover:text-cyan-500"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="transition duration-300 hover:text-cyan-500"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="transition duration-300 hover:text-cyan-500"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="transition duration-300 hover:text-cyan-500"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="transition duration-300 hover:text-cyan-500"
              >
                Contact
              </a>
            </li>

          </ul>
        </nav>

        {/* Back to Top */}
        <a
          href="#home"
          className="rounded-xl border border-slate-300 bg-slate-100 px-5 py-3 font-medium transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:text-cyan-500 dark:border-slate-700 dark:bg-slate-900"
        >
          ↑ Back to Top
        </a>
      </motion.div>

      {/* Bottom */}
      <div className="border-t border-slate-300 py-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-500">
        © {currentYear} Abhijeet Yadav. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
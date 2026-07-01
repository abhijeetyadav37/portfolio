import { motion } from "framer-motion";

import profileImage from "../assets/profilee.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white"
    >
      {/* Background Glow */}
      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute -right-20 bottom-0 h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-3xl"></div>

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Status Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-500">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
            Available for Internships
          </div>

          {/* Greeting */}
          <p className="text-lg font-semibold text-cyan-500">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="mt-4 text-5xl font-extrabold leading-tight md:text-7xl">
            Abhijeet Yadav
          </h1>

          {/* Role */}
          <h2 className="mt-6 text-2xl font-semibold text-slate-600 dark:text-slate-300 md:text-3xl">
            B.Tech Information Technology Student
          </h2>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            I am passionate about Java, Data Structures & Algorithms, Linux,
            and modern Web Development. I enjoy building clean, scalable
            applications, solving challenging problems, and continuously
            learning technologies that help me become a better software
            engineer.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-xl bg-cyan-500 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              View Projects
            </a>

            <a
              href="/AbhijeetResume.pdf"
              download
              className="rounded-xl border border-slate-300 px-7 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:text-cyan-500 dark:border-slate-700"
            >
              Download Resume
            </a>

          </div>

          {/* Social Links */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">

            <a
              href="https://github.com/abhijeetyadav37"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-500"
            >
              GitHub
            </a>

            <a
              href="#"
              className="transition hover:text-cyan-500"
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/abhijeetyadav_37"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-500"
            >
              LeetCode
            </a>

            <a
              href="mailto:yadavabhijeet3737@gmail.com"
              className="transition hover:text-cyan-500"
            >
              Email
            </a>

          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl"></div>

            {/* Placeholder */}
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-cyan-500 shadow-2xl">
  <img
    src={profileImage}
    alt="Abhijeet Yadav"
    className="h-full w-full object-cover"
  />
</div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
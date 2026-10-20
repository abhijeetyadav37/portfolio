
import awsLogo from "../assets/projects/aws.png";
import javaLogo from "../assets/projects/java.png";
import buyMeCoffeeIcon from "../assets/buymeacoffee.png";
import profileImage from "../assets/profilee.jpg";
import goLangImage from "../assets/Go.png";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Mail,
} from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/abhijeetyadav37",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhijeet-yadav-307955291/",
    Icon: FaLinkedinIn,
  },
  {
    label: "Email",
    href: "mailto:yadavabhijeet3737@gmail.com",
    Icon: Mail,
  },
];

const skills = [
  { name: "Java", logo: javaLogo },
  {
    name: "Spring Boot",
    logo: "https://cdn.simpleicons.org/springboot/6DB33F",
  },
  {
    name: "React",
    logo: "https://cdn.simpleicons.org/react/61DAFB",
  },

   { name: "GO", logo: goLangImage },

  {
    name: "PostgreSQL",
    logo: "https://cdn.simpleicons.org/postgresql/4169E1",
  },
  {
    name: "Redis",
    logo: "https://cdn.simpleicons.org/redis/DC382D",
  },
  {
    name: "Kafka",
    logo: "https://cdn.simpleicons.org/apachekafka/231F20",
  },
  { name: "AWS", logo: awsLogo },
  {
    name: "Docker",
    logo: "https://cdn.simpleicons.org/docker/2496ED",
  },
];

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-76px)] scroll-mt-20 items-center overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#070b14] dark:text-white"
    >
      <div className="portfolio-grid-bg pointer-events-none absolute inset-0 -z-10" />

      <div className="pointer-events-none absolute -left-48 top-10 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[120px] dark:bg-cyan-500/10" />

      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-indigo-400/10 blur-[120px] dark:bg-indigo-500/10" />

      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3.5 py-2 text-xs font-semibold tracking-wide text-emerald-700 dark:text-emerald-300 sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Java & Full-Stack Development
          </div>

          <p className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400 sm:text-base">
            <Code2
              size={19}
              className="text-cyan-600 dark:text-cyan-400"
            />
            Hello, I'm Abhijeet Yadav
          </p>

          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-6xl md:text-7xl xl:text-[82px]">
            Building
            <br />
            <span className="gradient-text">digital solutions</span>
            <br />
            that matter.
          </h1>

          <h2 className="mt-7 text-lg font-semibold text-slate-700 dark:text-slate-200 sm:text-xl">
            Java Backend Developer
            <span className="mx-2 text-cyan-600 dark:text-cyan-400">
              /
            </span>
            Full-Stack Developer
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            I build reliable backend services and modern web applications
            using Java, Spring Boot, React, and SQL. I enjoy solving
            engineering problems and turning ideas into maintainable,
            practical software.
          </p>

          {/* Technology skills */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            {skills.map(({ name, logo }) => (
              <div
                key={name}
                title={name}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-cyan-400 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200"
              >
                <img
                  src={logo}
                  alt=""
                  aria-hidden="true"
                  width="20"
                  height="20"
                  loading="lazy"
                  className="h-5 w-5 object-contain"
                />
                <span>{name}</span>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="primary-button">
              Explore My Work
              <ArrowRight size={17} />
            </a>

            <a
              href="/AbhijeetResume.pdf"
              download
              className="secondary-button"
            >
              Download Resume
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Social links and Buy Me a Coffee */}
          <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
              Find me on
            </span>

            <span className="h-5 w-px bg-slate-300 dark:bg-slate-700" />

            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-flex items-center justify-center text-slate-600 transition duration-200 hover:-translate-y-1 hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-300"
              >
                <Icon size={19} />
              </a>
            ))}

            {/* Buy Me a Coffee — rectangular icon only */}
            <a
              href="https://buymeacoffee.com/abhijeetyadav"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buy Me a Coffee"
              title="Buy Me a Coffee"
              className="inline-flex h-9 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg transition duration-200 hover:-translate-y-1 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
            >
              <img
                src={buyMeCoffeeIcon}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-contain"
              />
            </a>
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 15 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[410px] lg:max-w-none"
        >
          <div className="relative mx-auto aspect-[4/5] max-h-[500px] w-full max-w-[370px]">
            <div className="absolute inset-5 rotate-6 rounded-[32px] border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 transition-transform duration-500 hover:rotate-3" />

            <div className="glass-panel absolute inset-0 overflow-hidden rounded-[28px] p-3 shadow-2xl shadow-slate-900/10 dark:shadow-black/30">
              <div className="relative h-full overflow-hidden rounded-[20px] bg-slate-200 dark:bg-slate-800">
                <img
                  src={profileImage}
                  alt="Portrait of Abhijeet Yadav"
                  className="h-full w-full object-cover object-center"
                  fetchPriority="high"
                />

                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/75 to-transparent" />

                <div className="absolute inset-x-5 bottom-5 text-white">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
                    Developer Portfolio
                  </p>

                  <p className="mt-2 text-xl font-bold sm:text-2xl">
                    Abhijeet Yadav
                  </p>

                  <p className="mt-1 text-sm text-slate-200">
                    Java · Spring Boot · React
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="glass-panel absolute -left-5 top-12 flex items-center gap-3 rounded-2xl p-3.5 shadow-xl sm:-left-9 sm:p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
                <Code2 size={22} />
              </div>

              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Focus
                </p>

                <p className="mt-0.5 text-sm font-bold">
                  Backend Engineering
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="glass-panel absolute -right-3 bottom-16 flex items-center gap-2 rounded-xl px-4 py-3 shadow-xl sm:-right-7"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-semibold">
                Always learning
              </span>
            </motion.div>
          </div>
        </motion.div>

        <a
          href="#about"
          aria-label="Scroll to About section"
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium text-slate-400 transition hover:text-cyan-600 lg:flex"
        >
          <ArrowDown size={15} />
          Scroll to explore
        </a>
      </div>
    </section>
  );
}

export default Hero;

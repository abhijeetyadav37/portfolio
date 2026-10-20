import awsLogo from "../assets/projects/aws.png";
import javaLogo from "../assets/projects/java.png";
import { motion } from "framer-motion";
import goLangImage from "../assets/go.png";

const skillList = [
 {
  name: "Java",
  logo: javaLogo,
},
  
  {
    name: "Spring Boot",
    logo: "https://cdn.simpleicons.org/springboot/6DB33F",
  },
   {
  name: "GO",
  logo: goLangImage,
},
  {
    name: "React",
    logo: "https://cdn.simpleicons.org/react/61DAFB",
  },


  {
    name: "JavaScript",
    logo: "https://cdn.simpleicons.org/javascript/F7DF1E",
  },
  {
    name: "HTML5",
    logo: "https://cdn.simpleicons.org/html5/E34F26",
  },
  {
    name: "CSS3",
    logo: "https://cdn.simpleicons.org/css/1572B6",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  },
  {
    name: "Git",
    logo: "https://cdn.simpleicons.org/git/F05032",
  },
  {
    name: "GitHub",
    logo: "https://cdn.simpleicons.org/github/181717",
  },
  {
    name: "Linux",
    logo: "https://cdn.simpleicons.org/linux/FCC624",
  },
  {
    name: "SQL",
    logo: "https://cdn.simpleicons.org/mysql/4479A1",
  },
 
{
  name: "Data Structures",
  logo: "https://cdn.simpleicons.org/thealgorithms/00BCB4",
},
{
  name: "Algorithms",
  logo: "https://cdn.simpleicons.org/leetcode/FFA116",
},
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

  {
  name: "AWS",
  logo: awsLogo,
},

  {
    name: "Docker",
    logo: "https://cdn.simpleicons.org/docker/2496ED",
  },
];

function Skills() {
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
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skillList.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: (index % 4) * 0.08,
              }}
              viewport={{ once: true }}
              className="group flex min-h-36 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  width="44"
                  height="44"
                  loading="lazy"
                  className="h-11 w-11 object-contain"
                  onError={(event) => {
                    event.currentTarget.style.visibility = "hidden";
                  }}
                />
              </div>

              <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-cyan-500">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

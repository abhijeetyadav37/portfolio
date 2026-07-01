function ProjectCard({
  title,
  description,
  technologies,
  learned,
  github,
  live,
  image,
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="h-52 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-300">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* What I Learned */}
        <div className="mt-8">
          <h4 className="font-semibold text-white">
            What I Learned
          </h4>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            {learned.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="mt-8 flex gap-6">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-cyan-400 hover:underline"
          >
            GitHub
          </a>

          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-cyan-400 hover:underline"
          >
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
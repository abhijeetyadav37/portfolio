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
      <div className="grid gap-8 p-8 md:grid-cols-[260px_1fr]">
        {/* Project Image */}
        <div className="flex justify-center">
          <img
            src={image}
            alt={title}
            className="h-[520px] rounded-xl border border-slate-700 object-contain"
          />
        </div>

        {/* Project Details */}
        <div>
          {/* Title */}
          <h3 className="text-3xl font-bold text-white">{title}</h3>

          {/* Description */}
          <p className="mt-5 leading-8 text-slate-300">{description}</p>

          {/* Technologies */}
          <div className="mt-8">
            <h4 className="mb-3 font-semibold text-white">Technologies Used</h4>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Learning */}
          <div className="mt-8">
            <h4 className="font-semibold text-white">What I Learned</h4>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
              {learned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="mt-10 flex gap-8">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-cyan-400 transition hover:underline"
            >
              GitHub →
            </a>

            {live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-cyan-400 transition hover:underline"
              >
                Live Demo →
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;

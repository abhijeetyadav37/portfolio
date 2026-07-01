import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-slate-300
        bg-white/80
        backdrop-blur-md
        transition-colors duration-300

        dark:border-slate-800
        dark:bg-slate-950/80
      "
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="
            text-2xl
            font-bold
            text-slate-900
            transition
            duration-300
            hover:text-cyan-500

            dark:text-white
          "
        >
          Abhijeet Yadav
        </a>

        {/* Navigation */}
        <nav>
          <ul
            className="
              flex
              items-center
              gap-8
              text-sm
              font-medium

              text-slate-700
              dark:text-slate-300
            "
          >
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

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          title="Toggle Theme"
          className="
            rounded-xl
            border
            border-slate-300
            bg-slate-100
            px-4
            py-2
            text-lg
            transition-all
            duration-300

            hover:scale-105
            hover:border-cyan-500

            dark:border-slate-700
            dark:bg-slate-900
          "
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
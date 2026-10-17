import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const contactDetails = [
  {
    title: "Email",
    value: "yadavabhijeet3737@gmail.com",
    href: "mailto:yadavabhijeet3737@gmail.com",
    description: "For opportunities and collaboration",
    icon: Mail,
    color: "text-cyan-500",
    background: "bg-cyan-500/10",
  },
  {
    title: "GitHub",
    value: "abhijeetyadav37",
    href: "https://github.com/abhijeetyadav37",
    description: "Explore my code and projects",
    icon: FaGithub,
    color: "text-violet-500",
    background: "bg-violet-500/10",
  },
  {
    title: "LeetCode",
    value: "abhijeetyadav_37",
    href: "https://leetcode.com/u/abhijeetyadav_37",
    description: "My problem-solving practice",
    icon: Code2,
    color: "text-orange-500",
    background: "bg-orange-500/10",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (statusMessage) {
      setStatusMessage("");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSending(true);
    setStatusMessage("");

    try {
      await emailjs.send(
        "service_uybpg8n",
        "template_pz73sr2",
        {
          fullName: formData.fullName,
          email: formData.email,
          message: formData.message,
        },
        "MLY_5cblkCyQiJz8q"
      );

      setIsSuccess(true);
      setStatusMessage(
        "Your message has been sent successfully. Thank you for reaching out!"
      );

      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS submission failed:", error);

      setIsSuccess(false);
      setStatusMessage(
        "We couldn't send your message. Please try again or contact me directly by email."
      );
    } finally {
      setIsSending(false);
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500 dark:hover:border-slate-600 dark:focus:border-cyan-400";

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-slate-50 py-24 text-slate-900 transition-colors duration-300 dark:bg-[#070b14] dark:text-white sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-14 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400">
            <MessageCircle size={16} />
            Let's talk
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Have a project in{" "}
            <span className="gradient-text">mind?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            Have an opportunity, an interesting idea, or just want to connect?
            Send me a message. I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Left: Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                Contact information
              </p>

              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                Let's build something great.
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                I'm always interested in discussing software development,
                backend engineering, interesting projects, and opportunities
                to learn and grow.
              </p>
            </div>

            <div className="space-y-4">
              {contactDetails.map((detail, index) => {
                const Icon = detail.icon;

                return (
                  <motion.a
                    key={detail.title}
                    href={detail.href}
                    target={
                      detail.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      detail.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm transition-colors hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/5 dark:border-slate-800 dark:bg-slate-900/80"
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${detail.background} ${detail.color} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon size={22} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-semibold">{detail.title}</p>

                      <p className="mt-1 break-all text-sm text-slate-600 dark:text-slate-300">
                        {detail.value}
                      </p>

                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        {detail.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="shrink-0 text-slate-400 transition duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-500"
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
              className="mt-6 overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-violet-500/10 p-6"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <Sparkles size={21} />
                </div>

                <div>
                  <h4 className="font-bold">Have something in mind?</h4>

                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    Share your idea or question using the form. I'll get back
                    to you as soon as I can.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            viewport={{ once: true, amount: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-violet-500/20 blur-xl" />

            <form
              onSubmit={handleSubmit}
              className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 sm:p-9"
            >
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <Mail size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-bold sm:text-2xl">
                    Send me a message
                  </h3>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Fill in the details below.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-fullName"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Full name
                  </label>

                  <input
                    id="contact-fullName"
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    autoComplete="name"
                    maxLength={100}
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Email address
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    autoComplete="email"
                    maxLength={254}
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Your message
                  </label>

                  <textarea
                    id="contact-message"
                    rows={5}
                    name="message"
                    placeholder="Tell me about your idea, question, or opportunity..."
                    value={formData.message}
                    onChange={handleInputChange}
                    maxLength={5000}
                    required
                    className={`${inputClasses} min-h-36 resize-y`}
                  />

                  <p className="mt-2 text-right text-xs text-slate-500 dark:text-slate-400">
                    {formData.message.length}/5000 characters
                  </p>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={isSending ? undefined : { y: -2 }}
                whileTap={isSending ? undefined : { scale: 0.98 }}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition duration-300 hover:shadow-xl hover:shadow-cyan-500/25 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Sending your message...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>

              {statusMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  aria-live="polite"
                  className={`mt-5 flex items-start gap-3 rounded-xl border p-4 text-sm leading-6 ${
                    isSuccess
                      ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                      : "border-red-500/20 bg-red-500/10 text-red-700 dark:text-red-300"
                  }`}
                >
                  {isSuccess ? (
                    <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
                  ) : (
                    <Mail size={19} className="mt-0.5 shrink-0" />
                  )}

                  <p>{statusMessage}</p>
                </motion.div>
              )}

              <p className="mt-5 text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
                Prefer email?{" "}
                <a
                  href="mailto:yadavabhijeet3737@gmail.com"
                  className="font-semibold text-cyan-600 hover:underline dark:text-cyan-400"
                >
                  Contact me directly
                </a>
              </p>
            </form>
          </motion.div>
        </div>

        {/* Bottom footer-style line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-7 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row sm:text-left"
        >
          <p>Thanks for visiting my portfolio.</p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 font-medium transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
          >
            Back to top
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
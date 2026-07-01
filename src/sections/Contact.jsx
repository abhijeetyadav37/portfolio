import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
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

      setStatusMessage("✅ Your message has been sent successfully! Thank you.");

      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatusMessage(
        "❌ Unable to send your message. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="bg-white py-24 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-semibold uppercase tracking-widest text-cyan-500">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Let's Connect
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600 dark:text-slate-400">
            Whether you have an opportunity, a project idea, or simply want to
            connect, I'd be happy to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold">
              Contact Information
            </h3>

            <div className="mt-8 space-y-8">

              <div>
                <p className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Email
                </p>

                <a
                  href="mailto:yadavabhijeet3737@gmail.com"
                  className="mt-2 inline-block transition hover:text-cyan-500"
                >
                  yadavabhijeet3737@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  GitHub
                </p>

                <a
                  href="https://github.com/abhijeetyadav37"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block transition hover:text-cyan-500"
                >
                  github.com/abhijeetyadav37
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  LeetCode
                </p>

                <a
                  href="https://leetcode.com/u/abhijeetyadav_37"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block transition hover:text-cyan-500"
                >
                  leetcode.com/u/abhijeetyadav_37
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right Side */}
          <motion.form
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-300 bg-slate-50 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900"
          >

            <label className="mb-2 block font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              placeholder="Your name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="mb-6 w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950"
            />

            <label className="mb-2 block font-medium">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mb-6 w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950"
            />

            <label className="mb-2 block font-medium">
              Message
            </label>

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleInputChange}
              required
              className="mb-8 w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950"
            />

            <button
              type="submit"
              disabled={isSending}
              className="rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {statusMessage && (
              <p
                className={`mt-5 font-medium ${
                  statusMessage.startsWith("✅")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {statusMessage}
              </p>
            )}

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
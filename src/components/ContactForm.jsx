import React, { useState } from "react";
import { motion } from "framer-motion";

const formId = import.meta.env.VITE_FORMSPREE_FORM_ID?.trim?.() || "";
const FORMSPREE_ENDPOINT = formId
  ? formId.startsWith("http")
    ? formId
    : `https://formspree.io/f/${formId}`
  : null;

const BUDGET_OPTIONS = [
  { value: "", label: "Select budget range" },
  { value: "under-1k", label: "Under $1,000" },
  { value: "1k-5k", label: "$1,000 – $5,000" },
  { value: "5k-10k", label: "$5,000 – $10,000" },
  { value: "10k-plus", label: "$10,000+" },
  { value: "custom", label: "Custom / Not sure" },
];

const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email?.trim() || "");

const CONTACT_EMAIL = "buzinessstories@gmail.com";
const CONTACT_PHONE = "+91 7875879291";
const CONTACT_ADDRESS =
  "Cloudtool Technologies Pvt Ltd, IT Park, Navale Icon, 101 First Floor, Pune Banglore Highway Pashan Exit, Narhe, Pune, Maharashtra 411041";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = "Name is required.";
    if (!formData.email.trim()) next.email = "Email is required.";
    else if (!validateEmail(formData.email)) next.email = "Please enter a valid email.";
    if (!formData.phone.trim()) next.phone = "Phone number is required.";
    if (!formData.budget) next.budget = "Please select a budget range.";
    if (!formData.message.trim()) next.message = "Project description is required.";
    else if (formData.message.trim().length < 20)
      next.message = "Please add a bit more detail (at least 20 characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    if (!validate()) return;

    if (!FORMSPREE_ENDPOINT) {
      setStatus("error");
      setErrors({ form: "Email form is not configured. Add VITE_FORMSPREE_FORM_ID to .env (see .env.example)." });
      return;
    }

    setStatus("sending");
    setErrors({});

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          budget: formData.budget,
          message: formData.message.trim(),
          _subject: `Contact form: ${formData.name.trim()}`,
        }),
      });

      if (!res.ok) throw new Error("Send failed");
      const submittedEmail = formData.email.trim();
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", budget: "", message: "" });
      setSubmittedEmail(submittedEmail);
    } catch {
      setStatus("error");
      setErrors({ form: "Something went wrong. Please try again or email us directly." });
    }
  };

  const inputBase =
    "w-full bg-stone-900/50 border border-stone-600 rounded-2xl px-5 py-3 md:py-4 text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition";

  // Reusable hover-pill card (same animation as ContactDetails)
  const HoverCard = ({ href, children, className = "" }) => {
    const content = (
      <motion.div
        initial="initial"
        whileHover="hovered"
        transition={{ duration: 2 }}
        className={`relative flex flex-col rounded-2xl p-0 text-center border border-stone-200 overflow-hidden hover:cursor-pointer ${className}`}
      >
        <motion.div
          variants={{
            initial: { y: 0 },
            hovered: { y: "-100%", opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
          className="absolute inset-0 py-4 px-5 text-white bg-stone-950 border-none rounded-2xl flex items-center justify-center"
        >
          {children}
        </motion.div>
        <motion.div
          variants={{
            initial: { y: "100%" },
            hovered: { y: 0 },
          }}
          transition={{ duration: 0.1, type: "tween", ease: "easeIn" }}
          className="relative rounded-2xl py-4 px-5 text-stone-950 bg-stone-200 border-none flex items-center justify-center"
        >
          {children}
        </motion.div>
      </motion.div>
    );
    if (href) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          {content}
        </a>
      );
    }
    return content;
  };

  return (
    <section className="bg-stone-950 text-white font-light w-full px-6 md:px-20 py-16 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left: form */}
        <div className="flex-1 min-w-0">
          <h2 className="text-3xl md:text-5xl font-light mb-2">Get in touch</h2>
          <p className="text-stone-400 text-base md:text-lg mb-10">
            Tell us about your project. We’ll get back to you soon.
          </p>

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-4 rounded-2xl bg-stone-800 border border-stone-600 text-stone-200"
            >
              Thanks! Your message has been sent. We’ll email you at{" "}
              {submittedEmail || "your address"}.
            </motion.div>
          )}

          {errors.form && (
            <div className="mb-6 p-4 rounded-2xl bg-red-950/30 border border-red-800 text-red-200 text-sm">
              {errors.form}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-stone-400 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={inputBase}
                autoComplete="name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-stone-400 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={inputBase}
                autoComplete="email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm text-stone-400 mb-1">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className={inputBase}
                autoComplete="tel"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm text-stone-400 mb-1">
                Budget range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className={inputBase}
              >
                {BUDGET_OPTIONS.map((opt) => (
                  <option key={opt.value || "empty"} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.budget && (
                <p className="mt-1 text-sm text-red-400">{errors.budget}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-stone-400 mb-1">
                Project description
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What do you have in mind?"
                rows={5}
                className={`${inputBase} resize-y min-h-[120px]`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            <div className="pt-2">
              <motion.button
                type="submit"
                disabled={status === "sending"}
                initial="initial"
                whileHover="hovered"
                whileTap="tap"
                transition={{ duration: 0.2 }}
                className="relative flex flex-col w-full sm:w-auto sm:min-w-[200px] rounded-full p-0 text-center border border-stone-200 overflow-hidden cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <motion.span
                  variants={{
                    initial: { y: 0 },
                    hovered: { y: "-100%", opacity: 0 },
                    tap: { scale: 0.98 },
                  }}
                  transition={{ duration: 0.15 }}
                  className="relative py-3 md:py-4 px-8 text-white bg-stone-950 border-none rounded-full text-base md:text-lg font-normal"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </motion.span>
                <motion.span
                  variants={{
                    initial: { y: "100%" },
                    hovered: { y: 0 },
                    tap: { scale: 0.98 },
                  }}
                  transition={{ duration: 0.15, type: "tween", ease: "easeIn" }}
                  className="absolute inset-0 flex items-center justify-center rounded-full py-3 md:py-4 px-8 text-stone-950 bg-stone-200 border-none text-base md:text-lg font-normal"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </motion.span>
              </motion.button>
            </div>
          </form>
        </div>

        {/* Right: contact cards */}
        <div className="lg:w-[340px] shrink-0 space-y-4">
          <p className="text-sm text-stone-500 mb-4">Reach us directly</p>
          <HoverCard href={`mailto:${CONTACT_EMAIL}`}>
            <span className="text-sm md:text-base break-all">{CONTACT_EMAIL}</span>
          </HoverCard>
          <HoverCard href="https://wa.me/917875879291">
            <span className="text-sm md:text-base whitespace-nowrap">{CONTACT_PHONE}</span>
            <span className="text-xs opacity-80 ml-1">WhatsApp</span>
          </HoverCard>
          <HoverCard
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_ADDRESS)}`}
          >
            <span className="text-sm md:text-base text-left">{CONTACT_ADDRESS}</span>
          </HoverCard>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

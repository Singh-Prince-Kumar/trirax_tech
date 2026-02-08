import { useState } from "react";
import { motion } from "framer-motion";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  SendIcon,
  CheckCircleIcon,
  UserIcon,
  MessageSquareIcon,
  GlobeIcon,
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const budgetOptions = [
    "$5k - $10k",
    "$10k - $25k",
    "$25k - $50k",
    "$50k+",
    "Not sure yet",
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const contactInfo = [
    {
      icon: <MailIcon className="w-5 h-5" />,
      title: "Email",
      value: "triraxtech@gmail.com",
      subtitle: "Typically replies within 2 hours",
      color: "from-violet-500 to-purple-500",
      borderColor: "border-violet-500/20",
      bgColor: "bg-violet-500/10",
    },
    {
      icon: <PhoneIcon className="w-5 h-5" />,
      title: "Phone",
      value: "9697474810",
      subtitle: "Mon-Fri from 9am to 6pm EST",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/20",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: <MapPinIcon className="w-5 h-5" />,
      title: "Office",
      value: "Delhi India",
      subtitle: "Available for in-person meetings",
      color: "from-emerald-500 to-green-500",
      borderColor: "border-emerald-500/20",
      bgColor: "bg-emerald-500/10",
    },
  ];

  return (
    <section id="contact" className="py-20 2xl:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10" />
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-sm mb-8"
          >
            <MailIcon className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-violet-400 tracking-widest">
              GET IN TOUCH
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 70,
              delay: 0.1,
            }}
          >
            <span className="text-white">Let's Build</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400">
              Something Amazing
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 70,
              delay: 0.2,
            }}
          >
            Ready to transform your vision into reality? Let's discuss how we
            can help your business grow with cutting-edge digital solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Contact Information */}
          <motion.div
            className="lg:col-span-1"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 70,
              delay: 0.3,
            }}
          >
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group"
                >
                  <div
                    className={`p-6 rounded-2xl border ${info.borderColor} ${info.bgColor} backdrop-blur-sm transition-all duration-300 group-hover:border-white/30`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center`}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {info.title}
                        </h3>
                        <p className="text-sm text-gray-400">{info.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.div>
              ))}

              {/* Stats */}
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">
                      24h
                    </div>
                    <div className="text-xs text-gray-400">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">
                      98%
                    </div>
                    <div className="text-xs text-gray-400">Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 70,
              delay: 0.4,
            }}
          >
            <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircleIcon className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-gray-300 mb-8">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <motion.button
                    onClick={() => setIsSubmitted(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-lg bg-white/10 border border-white/10 hover:bg-white/15 transition-colors"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                        <UserIcon className="w-4 h-4" />
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                          errors.name ? "border-red-500/50" : "border-white/10"
                        } focus:border-violet-500 focus:outline-none transition-colors text-white placeholder-gray-500`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                        <MailIcon className="w-4 h-4" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                          errors.email ? "border-red-500/50" : "border-white/10"
                        } focus:border-violet-500 focus:outline-none transition-colors text-white placeholder-gray-500`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Company Field */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                        <GlobeIcon className="w-4 h-4" />
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                        placeholder="Your company name"
                      />
                    </div>

                    {/* Budget Field */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                        <span className="text-violet-400">$</span>
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500 focus:outline-none transition-colors text-white placeholder-gray-500 appearance-none"
                      >
                        <option value="">Select budget range</option>
                        {budgetOptions.map((option, index) => (
                          <option
                            key={index}
                            value={option}
                            className="bg-gray-900"
                          >
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                      <MessageSquareIcon className="w-4 h-4" />
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                        errors.message ? "border-red-500/50" : "border-white/10"
                      } focus:border-violet-500 focus:outline-none transition-colors text-white placeholder-gray-500 resize-none`}
                      placeholder="Tell us about your project, timeline, and goals..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 font-medium text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 hover:from-violet-700 hover:to-purple-700"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <SendIcon className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-sm text-gray-500">
                    We respect your privacy. Your information is secure and will
                    never be shared.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          className="mt-20"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 70,
            delay: 0.8,
          }}
        >
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.03] to-white/[0.01] p-8 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Schedule a Discovery Call
                </h3>
                <p className="text-gray-300">
                  Prefer to talk directly? Book a 30-minute strategy session
                  with our team.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-3 whitespace-nowrap"
              >
                <CalendarIcon className="w-5 h-5" />
                Book a Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Calendar icon component (since it's not in lucide-react by default)
function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

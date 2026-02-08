import { MenuIcon, XIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "Pricing", to: "/pricing" },
    { name: "Contact Us ", to: "/contact" },
    // { name: "About Us", to: "/aboutus" },
    // { name: "Our Work", to: "/our-work" },
    // { name: "Blog", to: "/blog" },
    // { name: "Blog", to: "/blog" },
  ];

  return (
    <motion.nav
      className="fixed top-5 left-0 right-0 z-50 px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 250, damping: 70 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between bg-black/50 backdrop-blur-md border border-white/4 rounded-2xl p-3">
        <Link to="/">
          <img src="/logo.jpg" alt="trirax tech" className="h-8" />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button onClick={() => setIsOpen(true)} className="md:hidden">
          <MenuIcon className="size-6" />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black/40 backdrop-blur-md transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-white"
          >
            {link.name}
          </Link>
        ))}

        <button
          onClick={() => setIsOpen(false)}
          className="rounded-md bg-white p-2 text-gray-800"
        >
          <XIcon />
        </button>
      </div>
    </motion.nav>
  );
}

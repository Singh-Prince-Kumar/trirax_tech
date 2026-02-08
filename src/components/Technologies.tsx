import { useRef } from "react";
import { technologiesData } from "../assets/dummy-data";
import Title from "./Title";
import { motion } from "framer-motion";

export default function Technologies() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section id="technologies" className="py-20 2xl:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <Title
          title="Technology Stack"
          heading="Built with modern, scalable technologies"
          description="We use industry-proven tools and frameworks to build secure, high-performance, and future-ready digital products."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {technologiesData.map((tech, i) => (
            <motion.div
              key={tech.name}
              ref={(el) => (refs.current[i] = el)}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.05 + i * 0.05,
              }}
              onAnimationComplete={() => {
                const card = refs.current[i];
                if (card) {
                  card.classList.add(
                    "transition",
                    "duration-300",
                    "hover:border-white/15",
                    "hover:-translate-y-1"
                  );
                }
              }}
              className="rounded-2xl p-6 bg-white/3 border border-white/6 flex flex-col items-center justify-center text-center"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-10 h-10 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>

              <h4 className="text-sm font-medium text-gray-200">{tech.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./common/SectionHeader";
import { BackgroundBlobs } from "./common/BackgroundBlobs";
import { faqs } from "@/lib/data/sections";
import { scrollToSection } from "@/lib/utils/animations";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-32 bg-muted/30 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSIjMTM0NDIzIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-50" />

      <BackgroundBlobs variant="dual" />

      <div className="section-container relative z-10">
        <SectionHeader
          badge="FAQ"
          icon={HelpCircle}
          title="Preguntas "
          highlight="Frecuentes"
          description="Resolvemos tus dudas sobre nuestros servicios de ciberseguridad"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-effect border border-border/50 rounded-2xl overflow-hidden hover:border-[#134423]/50 transition-all duration-500"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 flex items-start gap-4 text-left group"
              >
                <motion.div
                  className="w-8 h-8 glass-effect rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#134423] group-hover:to-[#134423] transition-all duration-500"
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <Plus className="w-5 h-5 text-[#134423] group-hover:text-white transition-colors duration-500" />
                </motion.div>
                <span className="text-lg font-bold text-foreground pr-4 flex-1">
                  {faq.question}
                </span>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ height: "auto", opacity: 1, scale: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, scale: 0.8, y: -20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.1 }}
                      className="px-6 pb-6 pl-[4.5rem]"
                    >
                      <motion.div
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.05 }}
                        className="glass-effect border border-[#134423]/20 rounded-2xl p-6 bg-gradient-to-br from-[#134423]/5 to-[#134423]/5"
                      >
                        <p className="text-muted-foreground text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4 text-lg">
            ¿No encuentras la respuesta que buscas?
          </p>
          <motion.button
            onClick={() => scrollToSection("contacto")}
            className="inline-flex items-center gap-2 text-[#134423] hover:text-[#0d331a] font-bold text-xl group cursor-pointer"
            whileHover={{ x: 5 }}
          >
            Contáctanos directamente
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
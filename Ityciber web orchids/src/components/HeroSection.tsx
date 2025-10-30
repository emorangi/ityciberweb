"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "Protegemos tu Futuro Digital";
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-[#12805C]">

      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y }}>

        <div className="absolute top-20 left-10 w-72 h-72 bg-[#12805C] rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSIjMTI4MDVDIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] opacity-30" />

      <motion.div
        className="section-container relative z-10 text-center"
        style={{ opacity }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6">

          <span className="inline-block px-4 py-2 bg-[#12805C]/20 border border-[#12805C] rounded-full text-[#18a078] text-sm font-semibold mb-6">
            Líderes en Ciberseguridad
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 min-h-[120px] md:min-h-[160px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}>

          {text}
          <span className="animate-pulse">|</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}>

          Soluciones integrales de ciberseguridad y servicios tecnológicos para
          empresas que buscan protección y transformación digital.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}>

          <Button
            size="lg"
            className="bg-[#12805C] hover:bg-[#0d5e45] text-white px-8 py-6 text-lg">

            Solicitar Auditoría
          </Button>
          <Button
            size="lg"
            className="bg-[#12805C] hover:bg-[#0d5e45] text-white px-8 py-6 text-lg">

            Ver Servicios
          </Button>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}>

          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </motion.div>
    </section>);

}
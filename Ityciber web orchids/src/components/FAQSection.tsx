"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "¿Qué es un SOC y por qué lo necesito?",
    answer:
      "Un SOC (Security Operations Center) es un centro de operaciones de seguridad que monitorea, detecta y responde a amenazas cibernéticas las 24 horas. Es esencial para empresas que manejan datos sensibles y necesitan protección continua contra ataques cada vez más sofisticados.",
  },
  {
    question: "¿Con qué frecuencia debo realizar un pentesting?",
    answer:
      "Recomendamos realizar pentesting al menos una vez al año, y adicionalmente después de cambios significativos en tu infraestructura, nuevos desarrollos o antes de lanzamientos importantes. Para sistemas críticos, evaluaciones trimestrales son ideales.",
  },
  {
    question: "¿Cuánto tiempo toma una migración a la nube?",
    answer:
      "El tiempo varía según la complejidad de tu infraestructura. Una migración típica puede tomar entre 3-6 meses, incluyendo planificación, ejecución y optimización post-migración. Realizamos una evaluación inicial sin costo para estimar tiempos específicos.",
  },
  {
    question: "¿Qué certificaciones tienen?",
    answer:
      "Nuestro equipo cuenta con certificaciones internacionales como CISSP, CEH, OSCP, AWS Solutions Architect, y cumplimos con estándares ISO 27001. Mantenemos actualizaciones continuas para estar a la vanguardia en ciberseguridad.",
  },
  {
    question: "¿Cómo garantizan la confidencialidad de mis datos?",
    answer:
      "Firmamos NDAs estrictos, implementamos controles de acceso basados en roles, usamos encriptación end-to-end, y cumplimos con regulaciones como GDPR y LOPD. Tu información nunca se comparte con terceros y todos nuestros procesos están auditados.",
  },
  {
    question: "¿Ofrecen soporte en español?",
    answer:
      "Sí, todo nuestro equipo habla español de forma nativa. Proporcionamos documentación, reportes y soporte técnico completamente en español, además de inglés si lo requieres. Estamos disponibles 24/7 para consultas urgentes.",
  },
  {
    question: "¿Qué sucede si detectan una brecha de seguridad?",
    answer:
      "Activamos inmediatamente nuestro protocolo de respuesta a incidentes: contención, erradicación, recuperación y análisis forense. Te notificamos en tiempo real, proporcionamos actualizaciones constantes y trabajamos hasta resolver completamente el incidente.",
  },
  {
    question: "¿Pueden ayudar con el cumplimiento normativo?",
    answer:
      "Absolutamente. Tenemos experiencia ayudando empresas a cumplir con PCI-DSS, HIPAA, GDPR, SOC 2, ISO 27001 y otras normativas. Realizamos auditorías de compliance y te guiamos en la implementación de controles necesarios.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Resolvemos tus dudas sobre nuestros servicios de ciberseguridad
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white dark:bg-gray-900 rounded-lg px-6 border-2 border-gray-200 dark:border-gray-700 hover:border-[#12805C] transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            ¿No encuentras la respuesta que buscas?
          </p>
          <a
            href="#contacto"
            className="inline-block text-[#12805C] hover:text-[#0d5e45] font-semibold text-lg"
          >
            Contáctanos directamente →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

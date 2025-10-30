"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    honeypot: "", // Honeypot field for spam protection
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot
    if (formData.honeypot) {
      console.log("Spam detected");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        honeypot: "",
      });
      
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contacto"
      className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden"
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
            Hablemos de tu Seguridad
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo proteger tu empresa
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Información de Contacto
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Nuestro equipo de expertos está listo para ayudarte. Respuesta
              garantizada en menos de 24 horas.
            </p>

            <div className="space-y-6">
              <Card className="p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#12805C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#12805C]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:contacto@ityciber.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-[#12805C]"
                  >
                    contacto@ityciber.com
                  </a>
                </div>
              </Card>

              <Card className="p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#12805C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#12805C]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Teléfono
                  </h4>
                  <a
                    href="tel:+34900123456"
                    className="text-gray-600 dark:text-gray-400 hover:text-[#12805C]"
                  >
                    +34 900 123 456
                  </a>
                </div>
              </Card>

              <Card className="p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#12805C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#12805C]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Oficina
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Paseo de la Castellana 123
                    <br />
                    28046 Madrid, España
                  </p>
                </div>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-[#12805C] to-[#18a078] rounded-lg text-white">
              <h4 className="font-bold text-xl mb-2">Auditoría Gratuita</h4>
              <p className="text-white/90">
                Agenda ahora una evaluación de seguridad sin costo ni compromiso
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Nombre completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Juan Pérez"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan@empresa.com"
                    className="w-full"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Empresa
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Empresa S.A."
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+34 600 000 000"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto y necesidades de seguridad..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                {/* Honeypot field - hidden from users */}
                <div className="hidden">
                  <Input
                    id="honeypot"
                    name="honeypot"
                    type="text"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#12805C] hover:bg-[#0d5e45] text-white py-6 text-lg"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-center"
                  >
                    ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg text-center"
                  >
                    Error al enviar el mensaje. Por favor, inténtalo de nuevo.
                  </motion.div>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

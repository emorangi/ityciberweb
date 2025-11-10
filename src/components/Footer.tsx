"use client";

import { motion } from "framer-motion";
import { Shield, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { footerLinks } from "@/lib/data/sections";
import { CONTACT_INFO } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils/animations";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#134423]/5 to-[#134423]/10" />
      
      <div className="section-container relative z-10">
        <div className="pt-20 pb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-gradient-to-br from-[#134423] to-[#134423] rounded-xl flex items-center justify-center"
                  >
                    <Shield className="w-7 h-7 text-white" />
                  </motion.div>
                  <span className="text-3xl font-bold">
                    ITy<span className="text-gradient">CIBER</span>
                  </span>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
                  Líderes en ciberseguridad y servicios tecnológicos. Protegiendo
                  empresas desde 2009.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3 pt-4">
                  <motion.a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-[#134423] transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center group-hover:bg-[#134423]/10 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{CONTACT_INFO.email}</span>
                  </motion.a>
                  
                  <motion.a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-[#134423] transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center group-hover:bg-[#134423]/10 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{CONTACT_INFO.phoneFormatted}</span>
                  </motion.a>
                  
                  <motion.div
                    className="flex items-start gap-3 text-muted-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-sm leading-relaxed">
                      {CONTACT_INFO.address}<br />
                      {CONTACT_INFO.city}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-bold text-lg mb-6 text-foreground">Servicios</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.href.replace("#", ""))}
                      className="text-sm text-muted-foreground hover:text-[#134423] transition-colors inline-flex items-center gap-1 group"
                    >
                      {item.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-bold text-lg mb-6 text-foreground">Empresa</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.href.replace("#", ""))}
                      className="text-sm text-muted-foreground hover:text-[#134423] transition-colors inline-flex items-center gap-1 group"
                    >
                      {item.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-bold text-lg mb-6 text-foreground">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-[#134423] transition-colors inline-flex items-center gap-1 group"
                    >
                      {item.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-8 border-t border-border/50"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-sm text-muted-foreground">
                © {currentYear} ITyCIBER. Todos los derechos reservados.
              </p>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Hecho con</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-red-500"
                >
                  ♥
                </motion.span>
                <span className="text-sm text-muted-foreground">en España</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
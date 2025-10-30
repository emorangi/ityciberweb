"use client";

import { Shield, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-[#18a078]" />
              <span className="text-2xl font-bold">
                ITy<span className="text-[#18a078]">CIBER</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Líderes en ciberseguridad y servicios tecnológicos. Protegiendo
              empresas desde 2009.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#servicios" className="hover:text-[#18a078] transition-colors">
                  SOC 24/7
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#18a078] transition-colors">
                  Pentesting
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#18a078] transition-colors">
                  Migración Cloud
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#18a078] transition-colors">
                  Consultoría
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#proyectos" className="hover:text-[#18a078] transition-colors">
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#sectores" className="hover:text-[#18a078] transition-colors">
                  Sectores
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#18a078] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#18a078] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#18a078]" />
                <a
                  href="mailto:contacto@ityciber.com"
                  className="hover:text-[#18a078] transition-colors"
                >
                  contacto@ityciber.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#18a078]" />
                <a
                  href="tel:+34900123456"
                  className="hover:text-[#18a078] transition-colors"
                >
                  +34 900 123 456
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#18a078] mt-1" />
                <span>
                  Paseo de la Castellana 123
                  <br />
                  28046 Madrid, España
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} ITyCIBER. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#18a078] transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-[#18a078] transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="hover:text-[#18a078] transition-colors">
                Aviso Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * Datos de todas las secciones
 * Separar datos de la lógica para mejor mantenimiento
 */

import {
  CloudCog,
  Cloud,
  Settings,
  Shield,
  Building2,
  ShoppingCart,
  Heart,
  Zap,
  Radio,
  Landmark,
  GraduationCap,
  Plane,
  HeartPulse,
  Factory,
  Wifi,
} from "lucide-react";

// Servicios
export const services = [
  {
    icon: CloudCog,
    title: "Adopción de Cloud",
    description:
      "Guiamos su empresa en el proceso de adopción de tecnologías cloud, asegurando una transición estratégica y eficiente hacia la nube.",
    features: [
      "Estrategia cloud personalizada",
      "Evaluación de infraestructura",
      "Plan de adopción",
      "Formación del equipo",
    ],
    color: "from-[#134423] to-[#134423]"
  },
  {
    icon: Cloud,
    title: "Migración a Cloud",
    description:
      "Transformación digital segura hacia la nube. Migramos su infraestructura con las mejores prácticas de seguridad y optimización de costos.",
    features: [
      "AWS, Azure & GCP",
      "Arquitectura segura",
      "Optimización de costos",
      "Zero downtime",
    ],
    color: "from-[#0d331a] to-[#134423]"
  },
  {
    icon: Settings,
    title: "Operación de servicios gestionados",
    description:
      "Gestión integral de su infraestructura IT. Monitorizamos y operamos sus sistemas 24/7 para garantizar disponibilidad y rendimiento óptimo.",
    features: [
      "Monitorización 24/7",
      "Gestión proactiva",
      "Soporte técnico",
      "Optimización continua",
    ],
    color: "from-[#134423] to-[#134423]"
  },
  {
    icon: Shield,
    title: "Operación de ciberseguridad",
    description:
      "Protección continua contra amenazas. Detección de amenazas y respuesta inmediata ante incidentes para mantener su negocio seguro.",
    features: [
      "Respuesta a incidentes",
      "Análisis de amenazas",
      "Informes de seguridad",
    ],
    color: "from-[#0d331a] to-[#134423]"
  },
];

// Proyectos
export const projects = [
  {
    title: "Sistema Bancario Nacional",
    category: "Finanzas",
    description:
      "Implementación de recursos tecnologicos y auditorías de seguridad para institución financiera líder.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    tags: ["Compliance", "Pentesting"],
    result: "99.9% uptime en seguridad",
    icon: Landmark,
  },
  {
    title: "E-Commerce Global",
    category: "Retail",
    description:
      "Migración completa a AWS con arquitectura serverless y protección DDoS.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["Cloud", "AWS", "Migración"],
    result: "70% reducción de costos",
    icon: ShoppingCart,
  },
  {
    title: "Healthcare Platform",
    category: "Salud",
    description:
      "Sistema de gestión de datos médicos con cumplimiento HIPAA y encriptación end-to-end.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["Compliance", "Encriptación", "API"],
    result: "100% cumplimiento normativo",
    icon: Heart,
  },
  {
    title: "Energy Management System",
    category: "Energía",
    description:
      "Infraestructura crítica protegida con sistemas IDS/IPS avanzados.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    tags: ["ICS Security", "Monitoring", "IoT"],
    result: "Zero incidentes críticos",
    icon: Zap,
  },
  {
    title: "Telecom Infrastructure",
    category: "Telecomunicaciones",
    description:
      "Red 5G segura con implementación de Zero Trust Architecture.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tags: ["5G", "Zero Trust", "Network"],
    result: "500K usuarios protegidos",
    icon: Radio,
  },
  {
    title: "Government Portal",
    category: "Gobierno",
    description:
      "Portal ciudadano con autenticación multifactor y auditorías continuas.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tags: ["Gov-Cloud", "MFA", "Auditoría"],
    result: "3M ciudadanos servidos",
    icon: Building2,
  },
];

// Sectores
export const sectors = [
  {
    icon: Building2,
    name: "Finanzas",
    description: "Banca, seguros y servicios financieros",
    clients: "25+",
  },
  {
    icon: ShoppingCart,
    name: "Retail",
    description: "E-commerce y comercio minorista",
    clients: "40+",
  },
  {
    icon: HeartPulse,
    name: "Salud",
    description: "Hospitales y sistemas de salud",
    clients: "15+",
  },
  {
    icon: Factory,
    name: "Manufactura",
    description: "Industria y producción",
    clients: "30+",
  },
  {
    icon: Wifi,
    name: "Telecomunicaciones",
    description: "Operadores y servicios de red",
    clients: "12+",
  },
  {
    icon: Landmark,
    name: "Gobierno",
    description: "Sector público y administración",
    clients: "18+",
  },
  {
    icon: GraduationCap,
    name: "Educación",
    description: "Universidades e instituciones",
    clients: "22+",
  },
  {
    icon: Plane,
    name: "Transporte",
    description: "Logística y movilidad",
    clients: "10+",
  },
];

// FAQs
export const faqs = [
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
      "Absolutamente. Tenemos experiencia ayudando empresas a cumplir con PCI-DSS, HIPAA, GDPR, ISO 27001 y otras normativas. Realizamos auditorías de compliance y te guiamos en la implementación de controles necesarios.",
  },
];

// Links de navegación
export const navLinks = [
  { href: "#inicio", label: "Inicio", id: "inicio" },
  { href: "#servicios", label: "Servicios", id: "servicios" },
  { href: "#proyectos", label: "Proyectos", id: "proyectos" },
  { href: "#sectores", label: "Sectores", id: "sectores" },
  { href: "#faq", label: "FAQ", id: "faq" },
  { href: "#contacto", label: "Contacto", id: "contacto" },
];

// Footer links
export const footerLinks = {
  services: [
    { name: "Adopción Cloud", href: "#servicios" },
    { name: "Pentesting", href: "#servicios" },
    { name: "Migración Cloud", href: "#servicios" },
    { name: "Consultoría", href: "#servicios" },
  ],
  company: [
    { name: "Casos de Éxito", href: "#proyectos" },
    { name: "Sectores", href: "#sectores" },
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "#contacto" },
  ],
  legal: [
    { name: "Política de Privacidad", href: "#" },
    { name: "Términos de Servicio", href: "#" },
    { name: "Aviso Legal", href: "#" },
  ],
};

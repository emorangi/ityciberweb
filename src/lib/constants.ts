/**
 * Constantes globales de la aplicación
 * Centraliza valores reutilizables para mantener consistencia
 */

// Tiempos de animación
export const ANIMATION_DURATIONS = {
  preloader: 3000, // 3 segundos
  preloaderExit: 1000, // 1 segundo
  typing: 80, // milisegundos por carácter
  fadeIn: 0.6,
  slideIn: 0.8,
  hover: 0.3,
  spring: 0.6,
} as const;

// Delays de animación (después del preloader)
export const ANIMATION_DELAYS = {
  base: 3, // 3 segundos (duración del preloader)
  increment: 0.2,
  stagger: 0.1,
  small: 0.05,
} as const;

// Configuración de spring animations
export const SPRING_CONFIG = {
  default: { damping: 25, stiffness: 200 },
  smooth: { damping: 30, stiffness: 300 },
  bouncy: { damping: 17, stiffness: 400 },
  slow: { damping: 20, stiffness: 100 },
} as const;

// Colores del tema (usar con variables CSS)
export const THEME_COLORS = {
  primary: '#134423',
  primaryDark: '#0d331a',
} as const;

// Información de contacto
export const CONTACT_INFO = {
  email: 'ityciber@giconsultoria.com',
  phone: '+34 902 19 55 56',
  phoneFormatted: '+34 902 19 55 56',
  address: 'Avda. del Jardín Botánico nº 1345',
  city: '33203 Gijón, España',
  fullAddress: 'Avda. del Jardín Botánico nº 1345. Edificio Grupo Intermark 33203, Gijón',
} as const;

// Estadísticas de la empresa
export const COMPANY_STATS = {
  uptime: '99.9%',
  support: '24/7',
  responseTime: '<5min',
  experience: '15+',
  clients: '+170',
  countries: '15',
} as const;

// Configuración de viewport para animaciones
export const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.3,
} as const;

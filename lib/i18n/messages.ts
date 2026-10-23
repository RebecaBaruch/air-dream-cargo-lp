import type { Language } from '@/lib/i18n/types'

export type Messages = {
  nav: {
    ariaMain: string
    ariaLanguage: string
    openMenu: string
    closeMenu: string
    brand: string
    services: string
    differentials: string
    about: string
    contact: string
  }
  hero: {
    eyebrow: string
    titleMobileLine1: string
    titleMobileHighlight: string
    titleDesktopBefore: string
    titleDesktopHighlight: string
    ctaQuote: string
    ctaServices: string
    statCountries: string
    statSupport: string
    statPunctuality: string
  }
  services: {
    eyebrow: string
    heading: string
    items: Array<{ title: string; description: string }>
  }
  differentials: {
    eyebrow: string
    headingMobileLine1: string
    headingMobileLine2: string
    headingDesktopBefore: string
    headingDesktopHighlight: string
    introMobile: string
    introDesktop: string
    items: Array<{ title: string; description: string }>
  }
  about: {
    eyebrow: string
    headingMobile: string
    headingDesktop: string
    subheading: string
    body: string
    cta: string
  }
  faq: {
    eyebrow: string
    heading: string
    items: Array<{ question: string; answer: string }>
  }
  contact: {
    eyebrow: string
    heading: string
    description: string
    whatsapp: string
    email: string
  }
  footer: {
    tagline: string
    contactHeading: string
    locationHeading: string
    address: string
    socialAria: string
    copyright: string
    privacy: string
  }
}

const placeholder =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum.'

const placeholderLong =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const messages: Record<Language, Messages> = {
  PT: {
    nav: {
      ariaMain: 'Principal',
      ariaLanguage: 'Idioma',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      brand: 'Air Dream Cargo',
      services: 'Serviços',
      differentials: 'Diferenciais',
      about: 'Quem somos',
      contact: 'Contato',
    },
    hero: {
      eyebrow: 'AGENCIAMENTO & LOGÍSTICA',
      titleMobileLine1: 'Coordenação aérea',
      titleMobileHighlight: 'rápida e segura',
      titleDesktopBefore: 'Coordenação logística e agenciamento aéreo',
      titleDesktopHighlight: 'rápido e seguro',
      ctaQuote: 'Cotação rápida',
      ctaServices: 'Nossos serviços',
      statCountries: 'Países',
      statSupport: 'Suporte',
      statPunctuality: 'Pontualidade',
    },
    services: {
      eyebrow: 'O QUE FAZEMOS',
      heading:
        'Assessoria operacional sob medida. Otimizamos rotas e reduzimos riscos para garantir controle total da sua carga do início ao fim.',
      items: [
        {
          title: 'Agenciamento Aéreo e Marítimo',
          description: placeholder,
        },
        {
          title: 'Assessoria Operacional & Coordenação End-to-End',
          description: placeholder,
        },
        {
          title: 'Despacho Aduaneiro e Gestão de Riscos',
          description: placeholder,
        },
      ],
    },
    differentials: {
      eyebrow: 'DIFERENCIAL OPERACIONAL',
      headingMobileLine1: 'Mais que transporte.',
      headingMobileLine2: 'Coordenamos cada etapa.',
      headingDesktopBefore: 'Mais do que transportar.',
      headingDesktopHighlight: 'Coordenamos cada etapa.',
      introMobile: placeholder,
      introDesktop: placeholderLong,
      items: [
        {
          title: '+20 Anos de Atuação Operacional',
          description: placeholder,
        },
        {
          title: 'Gestão Preventiva de Riscos',
          description: placeholder,
        },
        {
          title: 'Comunicação e Follow-up Próximo',
          description: placeholder,
        },
        {
          title: 'Neutralidade e Soluções Sob Medida',
          description: placeholder,
        },
      ],
    },
    about: {
      eyebrow: 'QUEM SOMOS',
      headingMobile: 'Conectando mercados com estratégia e alto padrão',
      headingDesktop:
        'Proximidade operacional e know-how de quem conhece a fundo o comércio exterior',
      subheading: 'Lorem ipsum',
      body: placeholder,
      cta: 'CTA',
    },
    faq: {
      eyebrow: 'PERGUNTAS',
      heading: 'Ainda com dúvidas? Nós respondemos.',
      items: [
        {
          question:
            'Como funciona a coordenação logística da Air Dream Cargo?',
          answer: placeholder,
        },
        {
          question: 'Quais etapas da operação vocês podem coordenar?',
          answer: placeholder,
        },
        {
          question: 'Vocês atendem apenas o modal aéreo ou também marítimo?',
          answer: placeholder,
        },
        {
          question: 'Como solicitar uma cotação e qual o tempo de resposta?',
          answer: placeholder,
        },
      ],
    },
    contact: {
      eyebrow: 'ENTRE EM CONTATO',
      heading: 'Pronto para otimizar a logística aérea da sua empresa?',
      description: placeholder,
      whatsapp: 'WhatsApp',
      email: 'E-mail',
    },
    footer: {
      tagline:
        'Soluções em agenciamento aéreo e assessoria operacional para embarques internacionais e nacionais.',
      contactHeading: 'Entre em contato',
      locationHeading: 'Onde estamos',
      address:
        'Avenida Profa Ida Kolb 225, Apt 153, Jardim das Laranjeiras, São Paulo SP 02518-000',
      socialAria: 'Redes sociais',
      copyright: '© 2026 Air Dream Cargo. Todos os direitos reservados.',
      privacy: 'Política de Privacidade',
    },
  },
  US: {
    nav: {
      ariaMain: 'Main',
      ariaLanguage: 'Language',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      brand: 'Air Dream Cargo',
      services: 'Services',
      differentials: 'Differentiators',
      about: 'About us',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'AGENCY & LOGISTICS',
      titleMobileLine1: 'Air freight coordination',
      titleMobileHighlight: 'fast and secure',
      titleDesktopBefore: 'Logistics coordination and air freight agency',
      titleDesktopHighlight: 'fast and secure',
      ctaQuote: 'Quick quote',
      ctaServices: 'Our services',
      statCountries: 'Countries',
      statSupport: 'Support',
      statPunctuality: 'On-time rate',
    },
    services: {
      eyebrow: 'WHAT WE DO',
      heading:
        'Tailored operational advisory. We optimize routes and reduce risks to ensure full control of your cargo from start to finish.',
      items: [
        {
          title: 'Air & Ocean Freight Forwarding',
          description: placeholder,
        },
        {
          title: 'Operational Advisory & End-to-End Coordination',
          description: placeholder,
        },
        {
          title: 'Customs Clearance & Risk Management',
          description: placeholder,
        },
      ],
    },
    differentials: {
      eyebrow: 'OPERATIONAL EDGE',
      headingMobileLine1: 'More than transport.',
      headingMobileLine2: 'We coordinate every step.',
      headingDesktopBefore: 'More than moving cargo.',
      headingDesktopHighlight: 'We coordinate every step.',
      introMobile: placeholder,
      introDesktop: placeholderLong,
      items: [
        {
          title: '20+ Years of Operational Experience',
          description: placeholder,
        },
        {
          title: 'Preventive Risk Management',
          description: placeholder,
        },
        {
          title: 'Close Communication & Follow-up',
          description: placeholder,
        },
        {
          title: 'Neutrality & Tailored Solutions',
          description: placeholder,
        },
      ],
    },
    about: {
      eyebrow: 'ABOUT US',
      headingMobile: 'Connecting markets with strategy and high standards',
      headingDesktop:
        'Operational proximity and deep foreign trade expertise',
      subheading: 'Lorem ipsum',
      body: placeholder,
      cta: 'CTA',
    },
    faq: {
      eyebrow: 'FAQ',
      heading: 'Still have questions? We have answers.',
      items: [
        {
          question: 'How does Air Dream Cargo logistics coordination work?',
          answer: placeholder,
        },
        {
          question: 'Which stages of the operation can you coordinate?',
          answer: placeholder,
        },
        {
          question: 'Do you handle air freight only or ocean freight too?',
          answer: placeholder,
        },
        {
          question: 'How do I request a quote and what is the response time?',
          answer: placeholder,
        },
      ],
    },
    contact: {
      eyebrow: 'GET IN TOUCH',
      heading: 'Ready to optimize your company’s air logistics?',
      description: placeholder,
      whatsapp: 'WhatsApp',
      email: 'Email',
    },
    footer: {
      tagline:
        'Air agency and operational advisory solutions for international and domestic shipments.',
      contactHeading: 'Contact us',
      locationHeading: 'Where we are',
      address:
        'Avenida Profa Ida Kolb 225, Apt 153, Jardim das Laranjeiras, São Paulo SP 02518-000',
      socialAria: 'Social media',
      copyright: '© 2026 Air Dream Cargo. All rights reserved.',
      privacy: 'Privacy Policy',
    },
  },
  ES: {
    nav: {
      ariaMain: 'Principal',
      ariaLanguage: 'Idioma',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      brand: 'Air Dream Cargo',
      services: 'Servicios',
      differentials: 'Diferenciales',
      about: 'Quiénes somos',
      contact: 'Contacto',
    },
    hero: {
      eyebrow: 'AGENCIAMIENTO Y LOGÍSTICA',
      titleMobileLine1: 'Coordinación aérea',
      titleMobileHighlight: 'rápida y segura',
      titleDesktopBefore: 'Coordinación logística y agenciamiento aéreo',
      titleDesktopHighlight: 'rápido y seguro',
      ctaQuote: 'Cotización rápida',
      ctaServices: 'Nuestros servicios',
      statCountries: 'Países',
      statSupport: 'Soporte',
      statPunctuality: 'Puntualidad',
    },
    services: {
      eyebrow: 'QUÉ HACEMOS',
      heading:
        'Asesoría operacional a medida. Optimizamos rutas y reducimos riesgos para garantizar el control total de su carga de principio a fin.',
      items: [
        {
          title: 'Agenciamiento Aéreo y Marítimo',
          description: placeholder,
        },
        {
          title: 'Asesoría Operacional y Coordinación End-to-End',
          description: placeholder,
        },
        {
          title: 'Despacho Aduanero y Gestión de Riesgos',
          description: placeholder,
        },
      ],
    },
    differentials: {
      eyebrow: 'DIFERENCIAL OPERACIONAL',
      headingMobileLine1: 'Más que transporte.',
      headingMobileLine2: 'Coordinamos cada etapa.',
      headingDesktopBefore: 'Más que transportar.',
      headingDesktopHighlight: 'Coordinamos cada etapa.',
      introMobile: placeholder,
      introDesktop: placeholderLong,
      items: [
        {
          title: '+20 Años de Experiencia Operacional',
          description: placeholder,
        },
        {
          title: 'Gestión Preventiva de Riesgos',
          description: placeholder,
        },
        {
          title: 'Comunicación y Seguimiento Cercano',
          description: placeholder,
        },
        {
          title: 'Neutralidad y Soluciones a Medida',
          description: placeholder,
        },
      ],
    },
    about: {
      eyebrow: 'QUIÉNES SOMOS',
      headingMobile: 'Conectando mercados con estrategia y alto estándar',
      headingDesktop:
        'Proximidad operacional y know-how en comercio exterior',
      subheading: 'Lorem ipsum',
      body: placeholder,
      cta: 'CTA',
    },
    faq: {
      eyebrow: 'PREGUNTAS',
      heading: '¿Aún tiene dudas? Respondemos.',
      items: [
        {
          question: '¿Cómo funciona la coordinación logística de Air Dream Cargo?',
          answer: placeholder,
        },
        {
          question: '¿Qué etapas de la operación pueden coordinar?',
          answer: placeholder,
        },
        {
          question: '¿Atienden solo modal aéreo o también marítimo?',
          answer: placeholder,
        },
        {
          question: '¿Cómo solicitar una cotización y cuál es el tiempo de respuesta?',
          answer: placeholder,
        },
      ],
    },
    contact: {
      eyebrow: 'CONTÁCTENOS',
      heading: '¿Listo para optimizar la logística aérea de su empresa?',
      description: placeholder,
      whatsapp: 'WhatsApp',
      email: 'Correo',
    },
    footer: {
      tagline:
        'Soluciones en agenciamiento aéreo y asesoría operacional para embarques internacionales y nacionales.',
      contactHeading: 'Contáctenos',
      locationHeading: 'Dónde estamos',
      address:
        'Avenida Profa Ida Kolb 225, Apt 153, Jardim das Laranjeiras, São Paulo SP 02518-000',
      socialAria: 'Redes sociales',
      copyright: '© 2026 Air Dream Cargo. Todos los derechos reservados.',
      privacy: 'Política de Privacidad',
    },
  },
}

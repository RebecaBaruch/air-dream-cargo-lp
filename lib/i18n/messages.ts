import type { Language } from "@/lib/i18n/types";

export type Messages = {
  nav: {
    ariaMain: string;
    ariaLanguage: string;
    openMenu: string;
    closeMenu: string;
    brand: string;
    services: string;
    differentials: string;
    about: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    titleMobileLine1: string;
    titleMobileHighlight: string;
    titleDesktopBefore: string;
    titleDesktopHighlight: string;
    ctaQuote: string;
    ctaServices: string;
    statCountries: string;
    statSupport: string;
    statPunctuality: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    items: Array<{ title: string; description: string }>;
  };
  differentials: {
    eyebrow: string;
    headingMobileLine1: string;
    headingMobileLine2: string;
    headingDesktopBefore: string;
    headingDesktopHighlight: string;
    introMobile: string;
    introDesktop: string;
    items: Array<{ title: string; description: string }>;
  };
  about: {
    eyebrow: string;
    headingMobile: string;
    headingDesktop: string;
    body: string;
    cta: string;
  };
  faq: {
    eyebrow: string;
    heading: string;
    ctaLabel: string;
    items: Array<{ question: string; answer: string; cta?: boolean }>;
  };
  contact: {
    eyebrow: string;
    heading: string;
    description: string;
    whatsapp: string;
    email: string;
  };
  footer: {
    tagline: string;
    contactHeading: string;
    locationHeading: string;
    address: string;
    socialAria: string;
    copyright: string;
    privacy: string;
  };
};

export const messages: Record<Language, Messages> = {
  PT: {
    nav: {
      ariaMain: "Principal",
      ariaLanguage: "Idioma",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      brand: "Air Dream Cargo",
      services: "Serviços",
      differentials: "Diferenciais",
      about: "Quem somos",
      contact: "Contato",
    },
    hero: {
      eyebrow: "AGENCIAMENTO & LOGÍSTICA",
      titleMobileLine1: "Coordenação aérea",
      titleMobileHighlight: "rápida e segura",
      titleDesktopBefore: "Coordenação logística e agenciamento aéreo",
      titleDesktopHighlight: "rápido e seguro",
      ctaQuote: "Cotação rápida",
      ctaServices: "Nossos serviços",
      statCountries: "Países",
      statSupport: "Suporte",
      statPunctuality: "Pontualidade",
    },
    services: {
      eyebrow: "O QUE FAZEMOS",
      heading:
        "Agenciamento e logística internacional: rotas otimizadas, menos riscos e controle da carga.",
      items: [
        {
          title: "Agenciamento Aéreo e Marítimo",
          description:
            "Frete aéreo e marítimo para conectar sua empresa aos mercados globais com segurança.",
        },
        {
          title: "Assessoria Operacional End-to-End",
          description:
            "Coordenação logística ponta a ponta com controle, eficiência e previsibilidade.",
        },
        {
          title: "Despacho Aduaneiro e Riscos",
          description:
            "Importação e exportação com despacho aduaneiro seguro e gestão de riscos.",
        },
      ],
    },
    differentials: {
      eyebrow: "DIFERENCIAL OPERACIONAL",
      headingMobileLine1: "Mais que transporte.",
      headingMobileLine2: "Coordenamos cada etapa.",
      headingDesktopBefore: "Mais do que transportar.",
      headingDesktopHighlight: "Coordenamos cada etapa.",
      introMobile:
        "Integramos pessoas, processos e parceiros para conectar cada etapa da sua operação com eficiência e controle.",
      introDesktop:
        "Integramos pessoas, processos e parceiros para conectar cada etapa da sua operação com eficiência e controle.",
      items: [
        {
          title: "+20 Anos de Atuação Operacional",
          description:
            "Experiência prática em comércio exterior transformada em soluções logísticas mais seguras, eficientes estratégicas.",
        },
        {
          title: "Gestão Preventiva de Riscos",
          description:
            "Acompanhamento próximo, informações claras e alinhamento constante para manter você informado em cada etapa.",
        },
        {
          title: "Comunicação e Follow-up Próximo",
          description:
            "Antecipamos possíveis obstáculos e atuamos preventivamente para reduzir falhas, atrasos e imprevistos operacionais.",
        },
        {
          title: "Neutralidade e Soluções Sob Medida",
          description:
            "Avaliamos cada operação com independência para buscar soluções alinhadas às necessidades, aos prazos e aos custos de cada cliente.",
        },
      ],
    },
    about: {
      eyebrow: "QUEM SOMOS",
      headingMobile: "Conectando mercados com estratégia e alto padrão",
      headingDesktop:
        "Proximidade operacional e know-how de quem conhece a fundo o comércio exterior",
      body: "Com mais de 20 anos em comércio exterior, a Air Dream Cargo entrega logística internacional segura e eficiente. Unimos planejamento, atendimento próximo e transparência para coordenar cada embarque. Atuamos como seu parceiro estratégico para antecipar obstáculos e cuidar de cada detalhe.",
      cta: "Falar com um especialista",
    },
    faq: {
      eyebrow: "PERGUNTAS",
      heading: "Ainda com dúvidas? Nós respondemos.",
      ctaLabel: "Fale com um especialista",
      items: [
        {
          question: "Como funciona a coordenação logística da Air Dream Cargo?",
          answer:
            "Cuidamos desde a origem até o destino. Acompanhamos prazos, documentos e movimentações, mantendo uma comunicação próxima com os parceiros e clientes para antecipar possíveis imprevistos e proporcionar mais previsibilidade, segurança e eficiência à operação.",
        },
        {
          question: "Quais etapas da operação vocês podem coordenar?",
          answer:
            "Coordenamos o alinhamento com fornecedores, coleta, gestão documental, embarque, monitoramento do transporte, despacho aduaneiro e entrega no destino final.",
        },
        {
          question: "Vocês atendem apenas o modal aéreo ou também marítimo?",
          answer:
            "Sim! Somos especialistas em transporte aéreo internacional, mas também oferecemos soluções marítimas. Avaliamos prazo, custo e volume para indicar a melhor alternativa para sua carga.",
        },
        {
          question: "Como solicitar uma cotação e qual o tempo de resposta?",
          answer:
            "Entre em contato pelo nosso WhatsApp informando origem, destino, peso, dimensões e prazo. Retornaremos rapidamente com a melhor solução para sua carga!",
          cta: true,
        },
      ],
    },
    contact: {
      eyebrow: "ENTRE EM CONTATO",
      heading: "Pronto para otimizar a logística da sua empresa?",
      description:
        "Transforme suas importações e exportações com quem tem experiência. Garantimos controle, eficiência e previsibilidade da origem ao destino com atendimento personalizado.",
      whatsapp: "WhatsApp",
      email: "E-mail",
    },
    footer: {
      tagline: "Soluções em agenciamento e assessoria operacional.",
      contactHeading: "Entre em contato",
      locationHeading: "Onde estamos",
      address: "Avenida Profa Ida Kolb, 225 – Bl 12 / sala 153 – Casa Verde, São Paulo – SP – 02518-000",
      socialAria: "Redes sociais",
      copyright: "© 2026 Air Dream Cargo. Todos os direitos reservados.",
      privacy: "Política de Privacidade",
    },
  },
  US: {
    nav: {
      ariaMain: "Main",
      ariaLanguage: "Language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      brand: "Air Dream Cargo",
      services: "Services",
      differentials: "Differentiators",
      about: "About us",
      contact: "Contact",
    },
    hero: {
      eyebrow: "AGENCY & LOGISTICS",
      titleMobileLine1: "Air freight coordination",
      titleMobileHighlight: "fast and secure",
      titleDesktopBefore: "Logistics coordination and air freight agency",
      titleDesktopHighlight: "fast and secure",
      ctaQuote: "Quick quote",
      ctaServices: "Our services",
      statCountries: "Countries",
      statSupport: "Support",
      statPunctuality: "On-time rate",
    },
    services: {
      eyebrow: "WHAT WE DO",
      heading:
        "Freight forwarding and international logistics: optimized routes, lower risk, and cargo control.",
      items: [
        {
          title: "Air & Ocean Freight Forwarding",
          description:
            "Air and ocean freight to connect your business to global markets safely.",
        },
        {
          title: "End-to-End Operational Advisory",
          description:
            "Door-to-door logistics coordination with control, efficiency, and predictability.",
        },
        {
          title: "Customs Clearance & Risk",
          description:
            "Secure import and export customs clearance with proactive risk management.",
        },
      ],
    },
    differentials: {
      eyebrow: "OPERATIONAL EDGE",
      headingMobileLine1: "More than transport.",
      headingMobileLine2: "We coordinate every step.",
      headingDesktopBefore: "More than moving cargo.",
      headingDesktopHighlight: "We coordinate every step.",
      introMobile:
        "We bring together people, processes, and partners to connect every stage of your operation with efficiency and control.",
      introDesktop:
        "We bring together people, processes, and partners to connect every stage of your operation with efficiency and control.",
      items: [
        {
          title: "20+ Years of Operational Experience",
          description:
            "Hands-on foreign trade experience turned into safer, more efficient, and more strategic logistics solutions.",
        },
        {
          title: "Preventive Risk Management",
          description:
            "Close follow-up, clear information, and constant alignment to keep you informed at every stage.",
        },
        {
          title: "Close Communication & Follow-up",
          description:
            "We anticipate potential obstacles and act preventively to reduce failures, delays, and operational surprises.",
        },
        {
          title: "Neutrality & Tailored Solutions",
          description:
            "We evaluate each operation independently to find solutions aligned with each client's needs, timelines, and costs.",
        },
      ],
    },
    about: {
      eyebrow: "ABOUT US",
      headingMobile: "Connecting markets with strategy and high standards",
      headingDesktop: "Operational proximity and deep foreign trade expertise",
      body: "With more than 20 years in foreign trade, Air Dream Cargo delivers safe and efficient international logistics. We combine planning, close service, and transparency to coordinate every shipment. We act as your strategic partner to anticipate obstacles and take care of every detail.",
      cta: "Talk to a specialist",
    },
    faq: {
      eyebrow: "FAQ",
      heading: "Still have questions? We have answers.",
      ctaLabel: "Talk to a specialist",
      items: [
        {
          question: "How does Air Dream Cargo logistics coordination work?",
          answer:
            "We take care of your shipment from origin to destination. We track deadlines, documents, and movements, maintaining close communication with partners and clients to anticipate potential issues and provide more predictability, security, and efficiency to the operation.",
        },
        {
          question: "Which stages of the operation can you coordinate?",
          answer:
            "We coordinate supplier alignment, pickup, document management, departure, transportation monitoring, customs clearance, and final delivery.",
        },
        {
          question: "Do you handle air freight only or ocean freight too?",
          answer:
            "Yes! We specialize in international air freight, but we also offer ocean freight solutions. We assess timeline, cost, and volume to recommend the best option for your cargo.",
        },
        {
          question: "How do I request a quote and what is the response time?",
          answer:
            "Contact us on WhatsApp with origin, destination, weight, dimensions, and timeline. We'll get back to you quickly with the best solution for your cargo!",
          cta: true,
        },
      ],
    },
    contact: {
      eyebrow: "GET IN TOUCH",
      heading: "Ready to optimize your company’s logistics?",
      description:
        "Transform your imports and exports with a team that has the experience. We guarantee control, efficiency, and predictability from origin to destination with personalized service.",
      whatsapp: "WhatsApp",
      email: "Email",
    },
    footer: {
      tagline: "Freight forwarding and operational advisory solutions.",
      contactHeading: "Contact us",
      locationHeading: "Where we are",
      address:
        "Avenida Profa Ida Kolb, 225 – Bl 12 / sala 153 – Casa Verde, São Paulo – SP – 02518-000",
      socialAria: "Social media",
      copyright: "© 2026 Air Dream Cargo. All rights reserved.",
      privacy: "Privacy Policy",
    },
  },
  ES: {
    nav: {
      ariaMain: "Principal",
      ariaLanguage: "Idioma",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      brand: "Air Dream Cargo",
      services: "Servicios",
      differentials: "Diferenciales",
      about: "Quiénes somos",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "AGENCIAMIENTO Y LOGÍSTICA",
      titleMobileLine1: "Coordinación aérea",
      titleMobileHighlight: "rápida y segura",
      titleDesktopBefore: "Coordinación logística y agenciamiento aéreo",
      titleDesktopHighlight: "rápido y seguro",
      ctaQuote: "Cotización rápida",
      ctaServices: "Nuestros servicios",
      statCountries: "Países",
      statSupport: "Soporte",
      statPunctuality: "Puntualidad",
    },
    services: {
      eyebrow: "QUÉ HACEMOS",
      heading:
        "Agenciamiento y logística internacional: rutas optimizadas, menos riesgos y control de la carga.",
      items: [
        {
          title: "Agenciamiento Aéreo y Marítimo",
          description:
            "Flete aéreo y marítimo para conectar su empresa a mercados globales con seguridad.",
        },
        {
          title: "Asesoría Operacional End-to-End",
          description:
            "Coordinación logística punta a punta con control, eficiencia y previsibilidad.",
        },
        {
          title: "Despacho Aduanero y Riesgos",
          description:
            "Importación y exportación con despacho aduanero seguro y gestión de riesgos.",
        },
      ],
    },
    differentials: {
      eyebrow: "DIFERENCIAL OPERACIONAL",
      headingMobileLine1: "Más que transporte.",
      headingMobileLine2: "Coordinamos cada etapa.",
      headingDesktopBefore: "Más que transportar.",
      headingDesktopHighlight: "Coordinamos cada etapa.",
      introMobile:
        "Integramos personas, procesos y socios para conectar cada etapa de su operación con eficiencia y control.",
      introDesktop:
        "Integramos personas, procesos y socios para conectar cada etapa de su operación con eficiencia y control.",
      items: [
        {
          title: "+20 Años de Experiencia Operacional",
          description:
            "Experiencia práctica en comercio exterior transformada en soluciones logísticas más seguras, eficientes y estratégicas.",
        },
        {
          title: "Gestión Preventiva de Riesgos",
          description:
            "Seguimiento cercano, información clara y alineación constante para mantenerlo informado en cada etapa.",
        },
        {
          title: "Comunicación y Seguimiento Cercano",
          description:
            "Anticipamos posibles obstáculos y actuamos de forma preventiva para reducir fallas, retrasos e imprevistos operacionales.",
        },
        {
          title: "Neutralidad y Soluciones a Medida",
          description:
            "Evaluamos cada operación con independencia para buscar soluciones alineadas a las necesidades, los plazos y los costos de cada cliente.",
        },
      ],
    },
    about: {
      eyebrow: "QUIÉNES SOMOS",
      headingMobile: "Conectando mercados con estrategia y alto estándar",
      headingDesktop: "Proximidad operacional y know-how en comercio exterior",
      body: "Con más de 20 años en comercio exterior, Air Dream Cargo entrega logística internacional segura y eficiente. Unimos planificación, atención cercana y transparencia para coordinar cada embarque. Actuamos como su socio estratégico para anticipar obstáculos y cuidar cada detalle.",
      cta: "Hablar con un especialista",
    },
    faq: {
      eyebrow: "PREGUNTAS",
      heading: "¿Aún tiene dudas? Respondemos.",
      ctaLabel: "Hablar con un especialista",
      items: [
        {
          question:
            "¿Cómo funciona la coordinación logística de Air Dream Cargo?",
          answer:
            "Cuidamos su embarque desde el origen hasta el destino. Seguimos plazos, documentos y movimientos, manteniendo una comunicación cercana con socios y clientes para anticipar posibles imprevistos y brindar más previsibilidad, seguridad y eficiencia a la operación.",
        },
        {
          question: "¿Qué etapas de la operación pueden coordinar?",
          answer:
            "Coordinamos la alineación con proveedores, recolección, gestión documental, embarque, monitoreo del transporte, despacho aduanero y entrega en el destino final.",
        },
        {
          question: "¿Atienden solo modal aéreo o también marítimo?",
          answer:
            "¡Sí! Somos especialistas en transporte aéreo internacional, pero también ofrecemos soluciones marítimas. Evaluamos plazo, costo y volumen para indicar la mejor alternativa para su carga.",
        },
        {
          question:
            "¿Cómo solicitar una cotización y cuál es el tiempo de respuesta?",
          answer:
            "Contáctenos por WhatsApp informando origen, destino, peso, dimensiones y plazo. ¡Le responderemos rápidamente con la mejor solución para su carga!",
          cta: true,
        },
      ],
    },
    contact: {
      eyebrow: "CONTÁCTENOS",
      heading: "¿Listo para optimizar la logística de su empresa?",
      description:
        "Transforme sus importaciones y exportaciones con quien tiene experiencia. Garantizamos control, eficiencia y previsibilidad del origen al destino con atención personalizada.",
      whatsapp: "WhatsApp",
      email: "Correo",
    },
    footer: {
      tagline: "Soluciones en agenciamiento y asesoría operacional.",
      contactHeading: "Contáctenos",
      locationHeading: "Dónde estamos",
      address:
        "Avenida Profa Ida Kolb, 225 – Bl 12 / sala 153 – Casa Verde, São Paulo – SP – 02518-000",
      socialAria: "Redes sociales",
      copyright: "© 2026 Air Dream Cargo. Todos los derechos reservados.",
      privacy: "Política de Privacidad",
    },
  },
};

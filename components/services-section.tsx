import { LuFileCheck, LuGlobe, LuHandshake } from 'react-icons/lu'
import { ServiceCard } from '@/components/service-card'

const services = [
  {
    icon: LuGlobe,
    title: 'Agenciamento Aéreo e Marítimo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: LuHandshake,
    title: 'Assessoria Operacional & Coordenação End-to-End',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: LuFileCheck,
    title: 'Despacho Aduaneiro e Gestão de Riscos',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
] as const

const mediaGapClass = 'gap-[clamp(0.5rem,0.56vw,0.75rem)]'
const cardGapClass = 'gap-[clamp(0.75rem,0.83vw,1rem)]'

function ServicesEyebrow({ className }: { className?: string }) {
  return (
    <p
      className={`flex items-center gap-2 text-1 leading-14 font-semibold text-gray-900 lg:col-start-1 lg:row-start-1 lg:text-2 lg:leading-6 ${className ?? ''}`}
    >
      <span aria-hidden className="size-2 shrink-0 bg-gray-900" />
      O QUE FAZEMOS
    </p>
  )
}

function ServicesHeading({ className }: { className?: string }) {
  return (
    <h2
      id="services-heading"
      className={`font-bold tracking-0 text-cyan-900 text-[clamp(1.75rem,7.2vw,2rem)] leading-[1.25] lg:col-start-2 lg:row-start-1 lg:text-[clamp(1.75rem,2.22vw,2.25rem)] lg:leading-[1.15] ${className ?? ''}`}
    >
      Assessoria operacional sob medida. Otimizamos rotas e reduzimos riscos
      para garantir controle total da sua carga do início ao fim.
    </h2>
  )
}

function ServicesMediaGrid({ className }: { className?: string }) {
  return (
    <div
      className={`flex min-h-0 flex-col ${mediaGapClass} lg:col-start-2 lg:row-start-2 ${className ?? ''}`}
    >
      <div className="relative w-full shrink-0 overflow-hidden rounded-sm aspect-[883/307]">
        <img
          src="/shipping-01.svg"
          alt=""
          width={883}
          height={307}
          className="absolute inset-0 size-full object-cover"
        />
      </div>
      <div className={`grid min-h-0 flex-1 grid-cols-2 ${mediaGapClass}`}>
        <div className="relative min-h-0 overflow-hidden rounded-sm aspect-[430/307] lg:aspect-auto lg:h-full">
          <img
            src="/shipping-02.svg"
            alt=""
            width={430}
            height={307}
            className="absolute inset-0 size-full object-cover"
          />
        </div>
        <div className="relative min-h-0 overflow-hidden rounded-sm aspect-[430/307] lg:aspect-auto lg:h-full">
          <img
            src="/shopping-03.svg"
            alt=""
            width={430}
            height={307}
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export function ServicesSection() {
  return (
    <section
      id="servicos"
      aria-labelledby="services-heading"
      className="bg-gray-0 px-4 py-16 lg:px-[4.44%] lg:py-[clamp(4rem,5.56vw,5rem)]"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 lg:grid-cols-[38.75fr_61.25fr] lg:grid-rows-[auto_minmax(0,auto)] lg:items-stretch lg:gap-x-[clamp(1.5rem,4.17vw,3.75rem)] lg:gap-y-[clamp(1.5rem,2.22vw,2.5rem)]">
        <ServicesEyebrow />
        <ServicesHeading />
        <ServicesMediaGrid />

        <div
          className={`-mx-4 flex overflow-x-auto px-4 pb-1 ${cardGapClass} [-ms-overflow-style:none] [scrollbar-width:none] lg:col-start-1 lg:row-start-2 lg:mx-0 lg:min-h-0 lg:flex-col lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden`}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              className="w-[min(85vw,20rem)] shrink-0 snap-start lg:w-full lg:min-h-0 lg:flex-1 lg:shrink"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

import type { IconType } from 'react-icons'

type ServiceCardLayout = 'vertical' | 'horizontal'

type ServiceCardIconBackground = 'gray' | 'cyan'

type ServiceCardProps = {
  icon: IconType
  title: string
  description: string
  layout?: ServiceCardLayout
  iconBackground?: ServiceCardIconBackground
  bordered?: boolean
  className?: string
}

function classNames(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  layout = 'vertical',
  iconBackground = 'gray',
  bordered = true,
  className,
}: ServiceCardProps) {
  const iconBackgroundClass =
    iconBackground === 'cyan' ? 'bg-cyan-100' : 'bg-gray-100'

  const paddingClass =
    layout === 'horizontal'
      ? 'px-[clamp(1.2rem,1.11vw,1.25rem)] py-[clamp(1.67rem,1.67vw,1.5rem)]'
      : 'p-[clamp(1.5rem,1.11vw,1.25rem)]'

  return (
    <article
      className={classNames(
        'flex bg-gray-0',
        paddingClass,
        bordered && 'rounded-sm border border-gray-200',
        layout === 'horizontal'
          ? 'flex-row items-start gap-4'
          : 'flex-col gap-[clamp(0.75rem,0.83vw,1rem)] lg:min-h-0 lg:justify-center',
        className,
      )}
    >
      {layout === 'horizontal' ? (
        <div
          aria-hidden
          className={`flex size-10 shrink-0 items-center justify-center rounded-full ${iconBackgroundClass}`}
        >
          <Icon aria-hidden size={20} className="shrink-0 text-cyan-900" />
        </div>
      ) : (
        <div aria-hidden className="p-[clamp(0.25rem,0.42vw,0.5rem)]">
          <Icon
            aria-hidden
            className="size-[clamp(1.75rem,2.22vw,2rem)] shrink-0 text-cyan-900"
          />
        </div>
      )}

      <div className="flex min-w-0 flex-col gap-[clamp(0.25rem,0.42vw,0.5rem)]">
        <h3 className="text-3 font-semibold leading-[1.2] tracking-0 text-cyan-900 lg:text-[clamp(1.25rem,1.39vw,1.5rem)] lg:leading-[1.2]">
          {title}
        </h3>
        <p className="text-body font-normal leading-body tracking-2 text-gray-700 lg:text-2">
          {description}
        </p>
      </div>
    </article>
  )
}

import type { IconType } from 'react-icons'

type ServiceCardLayout = 'vertical' | 'horizontal'

type ServiceCardProps = {
  icon: IconType
  title: string
  description: string
  layout?: ServiceCardLayout
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
  className,
}: ServiceCardProps) {
  return (
    <article
      className={classNames(
        'flex rounded-sm border border-gray-200 bg-gray-0 p-[clamp(0.875rem,1.11vw,1.25rem)]',
        layout === 'horizontal'
          ? 'flex-row items-start gap-3'
          : 'flex-col gap-[clamp(0.75rem,0.83vw,1rem)] lg:min-h-0 lg:justify-center',
        className,
      )}
    >
      {layout === 'horizontal' ? (
        <div
          aria-hidden
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gray-100"
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
        <h3 className="font-semibold tracking-0 text-cyan-900 text-[clamp(1.125rem,1.39vw,1.5rem)] leading-[1.25] lg:leading-[1.2]">
          {title}
        </h3>
        <p className="font-normal tracking-2 text-gray-700 text-[clamp(0.875rem,1.11vw,1.125rem)] leading-[1.4] lg:leading-6">
          {description}
        </p>
      </div>
    </article>
  )
}

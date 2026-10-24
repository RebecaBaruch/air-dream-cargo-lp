const TRANSPARENT_PIXEL =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

type BreakpointImageProps = {
  src: string
  media: string
  width: number
  height?: number
  alt?: string
  className?: string
  priority?: boolean
}

export function BreakpointImage({
  src,
  media,
  width,
  height,
  alt = '',
  className,
  priority = false,
}: BreakpointImageProps) {
  return (
    <picture>
      <source media={media} srcSet={src} />
      <img
        src={TRANSPARENT_PIXEL}
        alt={alt}
        width={width}
        height={height}
        className={className}
        decoding="async"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'low'}
      />
    </picture>
  )
}

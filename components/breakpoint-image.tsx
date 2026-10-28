type BreakpointImageProps = {
  src: string
  avif?: string
  media: string
  width: number
  height?: number
  alt?: string
  className?: string
  sizes?: string
  priority?: boolean
}

export function BreakpointImage({
  src,
  avif,
  media,
  width,
  height,
  alt = '',
  className,
  sizes = '100vw',
  priority = false,
}: BreakpointImageProps) {
  return (
    <picture>
      {avif ? (
        <source type="image/avif" media={media} srcSet={avif} sizes={sizes} />
      ) : null}
      <source type="image/webp" media={media} srcSet={src} sizes={sizes} />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        sizes={sizes}
        decoding="async"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'low'}
      />
    </picture>
  )
}

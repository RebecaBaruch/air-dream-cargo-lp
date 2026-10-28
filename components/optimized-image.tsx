type OptimizedImageProps = {
  src: string
  avif?: string
  alt: string
  width: number
  height: number
  className?: string
  sizes?: string
  priority?: boolean
}

export function OptimizedImage({
  src,
  avif,
  alt,
  width,
  height,
  className,
  sizes = '100vw',
  priority = false,
}: OptimizedImageProps) {
  return (
    <picture className="contents">
      {avif ? <source type="image/avif" srcSet={avif} sizes={sizes} /> : null}
      <source type="image/webp" srcSet={src} sizes={sizes} />
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

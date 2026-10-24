type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <span
      className={`relative block h-[30px] w-[47px] overflow-hidden lg:h-[30px] lg:w-[250px] ${className ?? ''}`}
    >
      <img
        src="/adc-logo.svg"
        alt=""
        width={250}
        height={30}
        decoding="async"
        className="h-[30px] w-auto max-w-none lg:h-[30px]"
      />
    </span>
  )
}

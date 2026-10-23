type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <span
      className={`relative block h-[30px] w-[47px] overflow-hidden lg:h-[27px] lg:w-[190px] ${className ?? ''}`}
    >
      <img
        src="/adc-logo.svg"
        alt=""
        width={190}
        height={27}
        className="h-[30px] w-auto max-w-none lg:h-[27px]"
      />
    </span>
  )
}

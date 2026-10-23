'use client'

import type { IconType } from 'react-icons'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonSize = 'sm' | 'md' | 'lg'
type ButtonVariant = 'filled' | 'outline' | 'link'
type ButtonTone = 'primary' | 'secondary' | 'destructive'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize
  variant?: ButtonVariant
  tone?: ButtonTone
  href?: string
  icon?: IconType
  iconSize?: number
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-[42px] gap-3 px-2 text-1 leading-14',
  md: 'h-[50px] gap-3 px-3 text-2 leading-6',
  lg: 'h-[56px] gap-3 px-4 text-3 leading-5',
}

const linkSizeClasses: Record<ButtonSize, string> = {
  sm: 'gap-2 text-1 leading-14',
  md: 'gap-2 text-2 leading-6',
  lg: 'gap-2 text-3 leading-5',
}

const filledToneClasses: Record<ButtonTone, string> = {
  primary: 'bg-cyan-600 text-gray-0 hover:bg-cyan-700',
  secondary: 'bg-gray-800 text-gray-0 hover:bg-gray-900',
  destructive: 'bg-support-red-500 text-gray-0 hover:bg-support-red-700',
}

const outlineToneClasses: Record<ButtonTone, string> = {
  primary: 'border border-cyan-600 text-cyan-600 hover:bg-cyan-100',
  secondary: 'border border-gray-800 text-gray-800 hover:bg-gray-100',
  destructive:
    'border border-support-red-500 text-support-red-500 hover:bg-support-red-100',
}

const linkToneClasses: Record<ButtonTone, string> = {
  primary: 'text-cyan-600 hover:text-cyan-700',
  secondary: 'text-gray-800 hover:text-gray-900',
  destructive: 'text-support-red-500 hover:text-support-red-700',
}

function classNames(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(' ')
}

function ButtonIcon({
  icon: Icon,
  iconSize,
}: {
  icon: IconType
  iconSize: number
}) {
  return <Icon aria-hidden size={iconSize} className="shrink-0" />
}

export function Button({
  size = 'md',
  variant = 'filled',
  tone = 'primary',
  className,
  children,
  disabled,
  type = 'button',
  href,
  icon,
  iconSize = 16,
  ...props
}: ButtonProps) {
  const iconNode = icon ? (
    <ButtonIcon icon={icon} iconSize={iconSize} />
  ) : null

  const toneClass = disabled
    ? variant === 'filled'
      ? 'bg-gray-500 text-gray-0'
      : variant === 'outline'
        ? 'border border-gray-500 text-gray-500'
        : 'text-gray-500'
    : variant === 'filled'
      ? filledToneClasses[tone]
      : variant === 'outline'
        ? outlineToneClasses[tone]
        : linkToneClasses[tone]

  const classes = classNames(
    'inline-flex items-center justify-center rounded font-sans font-semibold tracking-2 whitespace-nowrap transition-colors',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700',
    'cursor-pointer disabled:cursor-not-allowed',
    variant === 'link' ? linkSizeClasses[size] : sizeClasses[size],
    toneClass,
    className,
  )

  const content =
    variant === 'link' ? (
      <>
        {children}
        {iconNode}
      </>
    ) : (
      <>
        {iconNode}
        {children}
      </>
    )

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        aria-disabled={disabled || undefined}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    )
  }

  return (
    <button type={type} disabled={disabled} className={classes} {...props}>
      {content}
    </button>
  )
}

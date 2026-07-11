import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonBaseProps {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
}

type ButtonProps =
  | (ButtonBaseProps & { href: string; onClick?: never; type?: never })
  | (ButtonBaseProps & {
      href?: undefined
      onClick?: () => void
      type?: 'button' | 'submit'
    })

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-brand-pink-dark text-white hover:brightness-110',
  secondary: 'bg-brand-teal text-white hover:brightness-110',
}

function Button(props: ButtonProps) {
  const { children, variant = 'primary', className = '' } = props
  const classes = `inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${variantClasses[variant]} ${className}`

  if (props.href) {
    const isExternal = props.href.startsWith('http')
    return (
      <a
        href={props.href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={props.type ?? 'button'} onClick={props.onClick} className={classes}>
      {children}
    </button>
  )
}

export default Button

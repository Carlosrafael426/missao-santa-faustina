import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { ArrowRight } from 'lucide-react'

type Variant = 'primary' | 'outline' | 'outlineInverse' | 'ghost'

interface ButtonOwnProps {
  variant?: Variant
  withArrow?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-sm shadow-gold-900/10',
  outline:
    'border border-navy-300 text-navy-800 hover:bg-navy-50 dark:border-cream-100/30 dark:text-cream-100 dark:hover:bg-white/5',
  outlineInverse: 'border border-cream-100/40 text-cream-50 hover:bg-white/10',
  ghost: 'text-navy-700 hover:text-gold-600 dark:text-cream-100 dark:hover:text-gold-400',
}

type ButtonProps<T extends ElementType> = ButtonOwnProps & {
  as?: T
} & Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps | 'as'>

export function Button<T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  withArrow = false,
  className,
  children,
  ...props
}: ButtonProps<T>) {
  const Component = (as ?? 'button') as ElementType
  const extraClassName = typeof className === 'string' ? className : ''

  return (
    <Component
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${variantClasses[variant]} ${extraClassName}`}
      {...props}
    >
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </Component>
  )
}

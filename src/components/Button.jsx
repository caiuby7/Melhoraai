import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-action text-white shadow-sm hover:bg-action-hover hover:-translate-y-0.5 hover:shadow-md',
  navy: 'bg-navy text-white shadow-sm hover:bg-navy-800 hover:-translate-y-0.5 hover:shadow-md',
  outline:
    'border border-slate-300 bg-white text-navy hover:border-navy hover:bg-slate-50 hover:-translate-y-0.5',
  ghost:
    'border border-white/30 bg-transparent text-white hover:bg-white/10 hover:-translate-y-0.5',
  whatsapp: 'bg-[#25D366] text-white hover:bg-[#1ebe5d] hover:-translate-y-0.5 hover:shadow-md',
}

const sizes = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

export default function Button({
  as,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  const Tag = as || 'button'
  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}

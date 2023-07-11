type TypographyType = 't1' | 't2' | 't3' | 't4' | 't5' | 't6' | 'sub1'
// type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div' | 'p'

interface TypographyProps {
  children: React.ReactNode
  typographyType: TypographyType
  className?: string
}

export const Typography = ({ children, typographyType, className = '' }: TypographyProps) => (
  <p className={`${typographyType} ${className}`}>{children}</p>
)

import Link from 'next/link'

const CustomLink = ({ children, ...restOfProps }) => (
  <Link scroll={false} {...restOfProps}>
    {children}
  </Link>
)

export default CustomLink

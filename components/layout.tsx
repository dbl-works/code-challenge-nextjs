import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="container mx-auto py-5 px-5 md:px-0 md:py-10">
      <header className="py-5">DBL Code Challenge</header>
      {children}
    </div>
  )
}

export default Layout

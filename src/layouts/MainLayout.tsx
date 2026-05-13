import { ReactNode } from 'react'
import Navbar from '../components/Navbar'

type Props = {
  children: ReactNode
}

function MainLayout({ children }: Props) {
  return (
    <div>
      <Navbar />
      <main className="p-6">{children}</main>
    </div>
  )
}

export default MainLayout
import { Outlet, Link } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
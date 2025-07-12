import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="container mx-auto flex-grow py-8 px-4">
        <Outlet />
      </main>
      <footer className="bg-green-600 text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p>© 2024 Rick & Morty Explorer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout

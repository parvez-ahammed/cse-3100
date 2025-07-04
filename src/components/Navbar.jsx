import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    const location = useLocation()
    return (
        <div className='flex justify-between p-3 px-7 font-bold text-3xl bg-gray-500'>
            <div className='text-white'>Assignment</div>
            <div className='flex gap-10 text-2xl'>
                <div onClick={() => navigate('/')} className={location.pathname === '/' ? 'text-blue-100 hover:text-gray-400 hover:cursor-pointer' : 'hover:text-gray-400 hover:cursor-pointer'} >Home</div>
                <div onClick={() => navigate('/contact')} className={location.pathname === '/contact' ? 'text-blue-100 hover:text-gray-400 hover:cursor-pointer' : 'hover:text-gray-400 hover:cursor-pointer'}>Contact us</div>
                <div onClick={() => navigate('/About')} className={location.pathname === '/About' ? 'text-blue-100 hover:text-gray-400 hover:cursor-pointer' : 'hover:text-gray-400 hover:cursor-pointer'}>About Us</div>
            </div>
        </div>
    )
}

export default Navbar

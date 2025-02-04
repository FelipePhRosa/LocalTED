import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { DiVisualstudio } from "react-icons/di";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#22e4a6]'>LocalTED</h1>
        <ul className='hidden md:flex'>
            <Link to='/'>
                <li className='p-4 font-semibold hover:text-[#22e4a6] transition-all duration-200 cursor-pointer'>Home</li>
            </Link>
            <li className='p-4 font-semibold hover:text-[#22e4a6] transition-all duration-200 cursor-pointer'>Empresa</li>
            <li className='p-4 font-semibold hover:text-[#22e4a6] transition-all duration-200 cursor-pointer'>Projetos</li>
            <li className='p-4 font-semibold hover:text-[#22e4a6] transition-all duration-200 cursor-pointer'>Sobre</li>
            <Link to='/register'>
                <li className='p-4 font-semibold hover:text-[#22e4a6] transition-all duration-200 cursor-pointer bg-black border rounded-md hover:bg-white px-6'>Cadastrar</li>
            </Link>
        </ul>
        <div onClick={handleMenu} className='block md:hidden'>
            {isOpen ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <div className={isOpen ? 'flex-col justify-center items-center mt-56 fixed left-0 top-0 max-w-[50%] rounded-3xl border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#22e4a6] m-4'>LocalTED</h1>
            
            <ul className='uppercase p-4'>
                <li className='p-2 border-gray-600 flex items-center'><IoHomeOutline className='m-1'/>Home</li>
                <li className='p-2 border-gray-600 flex items-center'>Empresa</li>
                <li className='p-2 border-gray-600 flex items-center'><DiVisualstudio className='m-1'/>Project</li>
                <li className='p-2 border-gray-600 flex items-center'>Sobre</li>
                <li className='p-2'>Contato</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar
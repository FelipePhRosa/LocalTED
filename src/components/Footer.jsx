import React from 'react'
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='w-full bg-black bg-[radial-gradient(ellipse_at_bottom_right,_#02a873_0%,_transparent_35%)]'>
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#22e4a6]'>LocalTED</h1>
                <p className='py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi sapiente explicabo nemo reprehenderit sit in labore provident laborum consequuntur accusantium dolor, maxime a molestias. Illum vel sed vero consequuntur autem.</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} className='mr-4'/>
                    <FaInstagramSquare size={30} className='mr-4'/>
                    <FaTwitterSquare size={30} className='mr-4'/>
                    <FaGithubSquare size={30} className='mr-4'/>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
                <li className='py-2 text-sm'>Análises</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Insights</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Suporte</h6>
            <ul>
                <li className='py-2 text-sm'>Documentação</li>
                <li className='py-2 text-sm'>Guias</li>
                <li className='py-2 text-sm'>Status de Serviço</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Empresa</h6>
            <ul>
                <li className='py-2 text-sm'>Sobre</li>
                <li className='py-2 text-sm'>Serviços</li>
                <li className='py-2 text-sm'>Equipe</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Legal</h6>
            <ul>
                <li className='py-2 text-sm'>Resgatar</li>
                <li className='py-2 text-sm'>Política</li>
                <li className='py-2 text-sm'>Termos</li>
            </ul>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
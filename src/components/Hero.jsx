import React from 'react'
import { ReactTyped } from 'react-typed'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-black bg-[radial-gradient(ellipse_at_top_left,_#22e4a6_0%,_transparent_50%)]'>
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='md:text-3xl sm:text-2xl text-xl text-[#22e4a6] font-bold '>Transforme sua forma de vender com facilidade.</p>
                <h1 className='md:text-6xl sm:text-4xl text-4xl font-bold md:py-4 sm:py-2'>Comércio Local, facilitado.</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-4xl sm:text-3xl text-xl font-bold py-2'>Rápido e Flexivel para</p>
                    <ReactTyped 
                        className='md:text-4xl sm:text-3xl text-xl font-bold pl-2'
                        strings={['Empresas.', 'Empreendedores.', 'Você.']} 
                        typeSpeed={120} 
                        backSpeed={140} 
                        loop 
                        />
                </div>
                <p className='md:text-2xl text-xl font-normal text-gray-500 py-2'>Acompanhe suas vendas, analise seu desempenho e otimize seus lucros!</p>
                <Link to='/register'>
                  <button className='bg-[#22e4a6] w-[200px] rounded-md font-medium my-4 mx-auto py-3 text-black hover:shadow-[0_0_25px_4px_rgba(34,228,166,0.5)] transition-shadow duration-300'>Começar</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero
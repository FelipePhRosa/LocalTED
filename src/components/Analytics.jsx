import React from 'react'
import Dashboard from "../assets/dashboard-fig.jpg";

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4 md:pr-4' src={Dashboard} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#22e4a6] font-bold'>Dashboard com Análise de Dados</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-semibold py-2'>Gerencie sua Central</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae 
                   blanditiis, tenetur praesentium quis ipsa nostrum sit atque consectetur, 
                   dolore error non accusantium sed debitis a possimus assumenda laborum, laboriosam officia.
                </p>
                <button className='bg-black text-[#22e4a6] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:shadow-[0_0_30px_10px_rgba(34,228,166,0.3)] transition-shadow duration-300'>Começar</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics
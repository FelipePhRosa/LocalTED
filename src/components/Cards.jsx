import React from 'react'
import Single from "../assets/avatar.png"
import SinglePremium from "../assets/avatar-wcr.png"
import threepers from "../assets/three-pers.png"

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Single} alt="" />
                <h2 className='text-2xl font-bold text-center py-4'>LocalStart</h2>
                <p className='text-center text-4xl font-bold'>R$24,99</p>
                <div className='text-left font-medium'>
                    <div className='flex justify-start'>
                        <p className='px-8 mt-6 text-[#22e4a6] drop-shadow-sm'>Benefícios:</p>
                    </div>
                    <p className='py-2 border-b mx-8 mt-2'>Visibilidade Padrão</p>
                    <p className='py-2 border-b mx-8'>Acesso a Estatísticas Simples</p>
                    <p className='py-2 border-b mx-8'>Suporte Prioritário</p>
                </div>
                <button className='bg-[#22e4a6] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:shadow-xl transition-shadow duration-300'>Teste Gratuíto</button>
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={threepers} alt="" />
                <h2 className='text-2xl font-bold text-center py-4'>LocalConnect</h2>
                <p className='text-center text-4xl font-bold'>R$64,99</p>
                <div className='text-left font-medium'>
                    <div className='flex justify-start'>
                        <p className='px-8 mt-6 text-[#22e4a6] drop-shadow-sm'>Benefícios:</p>
                    </div>
                    <p className='py-2 border-b mx-8 mt-2'>Visibilidade Máxima</p>
                    <p className='py-2 border-b mx-8'>Criação de 10 cupons por Mês</p>
                    <p className='py-2 border-b mx-8'>Integração com WhatsApp</p>
                    <p className='py-2 border-b mx-8'>Suporte Prioritário</p>
                </div>
                <button className='bg-black w-[200px] rounded-md font-medium my-8 mx-auto py-5 text-[#22e4a6] hover:shadow-[0_0_30px_10px_rgba(34,228,166,0.3)] transition-shadow duration-300'>Teste Gratuíto</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={SinglePremium} alt="" />
                <h2 className='text-2xl font-bold text-center py-4'>LocalElite</h2>
                <p className='text-center text-4xl font-bold'>R$34,99</p>
                <div className='text-left font-medium'>
                    <div className='flex justify-start'>
                        <p className='px-8 mt-6 text-[#22e4a6] drop-shadow-sm'>Benefícios:</p>
                    </div>
                    <p className='py-2 border-b mx-8 mt-2'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>50 Vendas por dia.</p>
                    <p className='py-2 border-b mx-8'>500 GB Storage</p>
                </div>
                <button className='bg-[#22e4a6] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:shadow-xl transition-shadow duration-300'>Teste Gratuíto</button>
            </div>
            
        </div>
    </div>
  )
}

export default Cards
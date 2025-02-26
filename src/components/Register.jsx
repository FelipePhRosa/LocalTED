import React, { useState } from 'react';


const Register = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleToggle = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsRegister(!isRegister);
            setIsAnimating(false);
        }, 300); // Tempo da animação
    };

    return (
        <>
            <div className="bg-[url('../assets/office-1.jpg')] bg-cover bg-center">
                <div className='flex justify-center items-center mx-auto min-h-[80vh] py-10'>
                    <div className={`w-full max-w-md bg-black/30 backdrop-blur-sm border border-gray-300 p-10 rounded-lg shadow-lg relative transition-all duration-300 ease-in-out ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                        <h2 className={`text-2xl font-bold mb-8 text-left text-gray-300 transition-all duration-300 ${isAnimating ? '-translate-x-10 opacity-0' : 'translate-x-0 opacity-100'}`}>
                            <span className='text-[#22e4a6] text-shadow-md '>{isRegister ? 'Criar Conta' : 'Login'}</span>
                        </h2>
                        <form className='flex justify-center flex-col gap-2'>
                            <div className={`space-y-4 transition-all duration-300 ease-in-out ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                                <input
                                    type="text"
                                    placeholder='Nome'
                                    className={`placeholder:font-sans placeholder:text-gray-300 bg-transparent border-b-2 border-gray-300 shadow-lg p-2 outline-none w-full transition-all duration-300 ${isRegister ? 'opacity-100 h-auto' : 'opacity-0 h-0 hidden'}`}
                                />
                                <input
                                    type="text"
                                    placeholder='Sobrenome'
                                    className={`placeholder:font-sans placeholder:text-gray-300 bg-transparent border-b-2 border-gray-300 shadow-lg p-2 outline-none w-full transition-all duration-300 ${isRegister ? 'opacity-100 h-auto' : 'opacity-0 h-0 hidden'}`}
                                />
                                <input
                                    type="text"
                                    placeholder='Email'
                                    className='placeholder:font-sans placeholder:text-gray-300 w-full bg-transparent border-b-2 border-gray-300 shadow-lg p-2 mb-4 outline-none'
                                />
                                <input
                                    type="password"
                                    placeholder='Senha'
                                    className='placeholder:font-sans placeholder:text-gray-300 w-full bg-transparent border-b-2 border-gray-300 shadow-lg p-2 mb-4 outline-none'
                                />
                                {isRegister && (
                                    <div className={`space-y-4 transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                                        <input
                                            type="password"
                                            placeholder='Confirmar Senha'
                                            className='placeholder:font-sans placeholder:text-gray-300 w-full bg-transparent border-b-2 border-gray-300 shadow-lg p-2 outline-none'
                                        />
                                        <input
                                            type="text"
                                            placeholder='Data de nascimento (00/00/0000)'
                                            className='placeholder:font-sans placeholder:text-gray-300 w-full bg-transparent border-b-2 border-gray-300 shadow-lg p-2 outline-none'
                                        />
                                        <input
                                            type="text"
                                            placeholder='Celular (Opcional)'
                                            className='placeholder:font-sans placeholder:text-gray-300 w-full bg-transparent border-b-2 border-gray-300 shadow-lg p-2 outline-none'
                                        />
                                    </div>
                                )}
                                <button className='w-full bg-[#22e4a6] bg-opacity-70 hover:bg-opacity-100 transition-all duration-300 shadow-[0_0_20px_5px_rgba(34,228,166,0.6)] text-white font-semibold rounded-md py-2 mt-6'>
                                    {isRegister ? 'Registrar' : 'Entrar'}</button>
                            </div>
                        </form>
                        <div className={`flex justify-between items-center mt-2 transition-all duration-300 ${isAnimating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
                            <h3 className='text-gray-300 font-semibold hover:text-[#22e4a6] hover:scale-105 transition-all duration-400 hover:underline'>
                                Esqueceu a senha?</h3>
                            <h3
                                onClick={handleToggle}
                                className='text-gray-300 font-semibold hover:text-[#22e4a6] transition-all duration-400 hover:underline cursor-pointer hover:scale-105'>
                                {isRegister ? 'Já tem uma conta?' : 'Criar Conta'}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
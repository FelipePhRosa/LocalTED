import painelcontrol from "../assets/painelcontrol.png"
import profile from "../assets/profile.png"
import settings from "../assets/settings.png"
import team from "../assets/team.png"
import cart from "../assets/cart.png"
import order from "../assets/order.png"
import report from "../assets/report.png"
import suporte from "../assets/suporte.png"
import check from "../assets/check.png"
import eye from "../assets/eye.png"


export default function NavDash(){
    return(
        <>
            <div class="flex flex-1 bg-gray-100 rounded-lg">
                
                <div class="flex md:w-64 md:flex-col h-screen shadow-2xl">
                    <div class="flex flex-col flex-grow pt-5 rounded-r-3xl bg-white">
                        
                        <div class="flex justify-center items-center px-4">
                            <h1 className="font-bold text-3xl text-[#22e4a6]">LocalTED</h1>
                        </div>

                        
                        <div class="px-4 mt-8">
                            <input type="search" placeholder="Pesquisar" className="w-full py-2 pl-10 border rounded-lg focus:ring-indigo-600" />
                        </div>

                        

                        <nav class="flex flex-col mt-6 space-y-4 ml-2.5 mr-8">
                            <a href="#" class="flex items-center px-4 py-2.5 text-sm font-medium bg-[#22e4a6] text-white rounded-lg">
                                <img className="w-5 ml-0.5 mr-3" src={painelcontrol} alt="" />
                                Dashboard
                            </a>
                            <p className="ml-4 text-gray-400 font-normal">ANALYTICS</p>
                            <a href="#" class="flex items-center px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-[#22e4a6] hover:text-white rounded-lg">
                                <svg class="w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                Tickets
                            </a>
                            <a href="#" class="flex items-center px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-[#22e4a6] hover:text-white rounded-lg">
                                <img className="w-7 ml-[-2.5px] mr-3" src={team} alt="" />
                                Equipe
                            </a>
                            <p className="ml-4 text-gray-400 font-normal">SHOP</p>
                            <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-[#22e4a6] hover:text-white rounded-lg">
                                <img className="w-5 ml-0.5 mr-3" src={cart} alt="" />
                                Produtos
                            </a>

                            <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-[#22e4a6] hover:text-white rounded-lg">
                                <img className="w-5 ml-0.5 mr-3"src={order} alt="" />
                                Pedidos
                            </a>

                            <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-[#22e4a6] hover:text-white rounded-lg">
                                <img className="w-5 ml-0.5 mr-3"src={report} alt="" />
                                Feedback
                            </a>

                            <p className="ml-4 text-gray-400 font-normal">SUPORTE</p>
                            <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-[#22e4a6] hover:text-white rounded-lg">
                                <img className="w-5 ml-0.5 mr-3" src={suporte} alt="" />
                                Tickets
                            </a>

                            <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-[#22e4a6] hover:text-white rounded-lg">
                                <img className="w-5 ml-0.5 mr-3" src={check} alt="" />
                                Tickets Resolvidos
                            </a>

                        <hr class="border-gray-200 mt-6" />

                        
                        <a href="#" class="flex items-center px-1.5 py-2.5 mt-4 text-sm font-medium text-gray-900 hover:bg-[#22e4a6] hover:text-white rounded-lg">
                            <img className="w-5 ml-2.5 mr-4" src={settings} alt="" />
                            Settings
                        </a>
                        <div className="pt-16">
                            <a href="#" class="p-4 flex justify-center items-center bg-gray-100 rounded-lg">
                                    <img className="w-8 h-8 rounded-full" src={profile} alt="Perfil" />
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">Felipe Rosa</p>
                                        <p className="text-xs text-gray-500">LocalTED@teste.com</p>
                                    </div>
                            </a>
                        </div>
                        </nav>
                    </div>
                </div>
                <div className="w-full h-screen flex flex-col">
                        <p className="p-8 mt-6 font-semibold text-3xl">Dashboard</p>
                        <div className="flex justify-center flex-row gap-20">
                            <div className="ml-8 w-[260px] h-[140px] bg-transparent border-green-400 border-[2px] rounded-2xl">
                                <p className="flex justify-center mt-4 text-lg font-medium">Total de Visitas</p>
                                <p className="mt-8 flex justify-center items-center pr-2 text-3xl font-semibold"><img className="w-7 mr-2.5" src={eye} alt="" />1,374</p>
                            </div>
                        
                            <div className="ml-8 w-[260px] h-[140px] bg-transparent border-green-400 border-[2px] rounded-2xl">
                                <p className="flex justify-center mt-4 text-lg font-medium">Total de Visitas</p>
                                <p className="mt-8 flex justify-center items-center pr-2 text-3xl font-semibold"><img className="w-7 mr-2.5" src={eye} alt="" />1,374</p>
                            </div>
        
                            <div className="ml-8 w-[260px] h-[140px] bg-transparent border-green-400 border-[2px] rounded-2xl">
                                <p className="flex justify-center mt-4 text-lg font-medium">Total de Visitas</p>
                                <p className="mt-8 flex justify-center items-center pr-2 text-3xl font-semibold"><img className="w-7 mr-2.5" src={eye} alt="" />1,374</p>
                            </div>
        
                            <div className="ml-8 w-[260px] h-[140px] bg-transparent border-green-400 border-[2px] rounded-2xl">
                                <p className="flex justify-center mt-4 text-lg font-medium">Total de Visitas</p>
                                <p className="mt-8 flex justify-center items-center pr-2 text-3xl font-semibold"><img className="w-7 mr-2.5" src={eye} alt="" />1,374</p>
                            </div>
                        </div>
                    </div>
            </div>

        </>
    )
}
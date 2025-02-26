import { Search, Menu, CircleUser, Heart, History, Microchip, Cpu, CircleArrowRight, BookText, ChevronRight, House, ShoppingCart } from "lucide-react";
import Cart from "../assets/cart.png"
import Tloja from "../assets/logo-tech.png"
import Sloja from "../assets/logo-sec.png"
import crystal from "../assets/crystal-eyes.png"
import estrela from "../assets/estrela.png"

export default function InApp() {
    return (
        <div className="w-full h-screen max-w-md bg-white">
            <div className="w-full max-w-md flex justify-between items-center p-3">
                <Menu/>
                <h1 className="text-[#3482ff] text-2xl font-bold">HubConnect</h1>
                <CircleUser className="w-[37px] h-[40px]"/>
            </div>
            <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-lg">
                <div className="p-2 rounded-xl flex bg-gray-300">
                    <Search className="w-5 h-7 text-gray-900" />
                    <input type="text" placeholder="Search" className="bg-transparent ml-2 outline-none"/>
                </div>
                <div className="w-full mt-2 h-10 flex justify-between items-center">
                    <div className="flex justify-center items-center gap-1 bg-white border border-gray-400 rounded-xl w-[100px] h-8">
                        <Heart className="w-5"/>
                        <p className="font-medium">Favorites</p>
                    </div>

                    <div className="flex justify-center items-center gap-1 bg-white border border-gray-400 rounded-xl w-[100px] h-8">
                        <History className="w-5"/>
                        <p className="font-medium">Recents</p>
                    </div>

                    <div className="flex justify-center items-center gap-1 bg-white border border-gray-400 rounded-xl w-[100px] h-8">
                        <Cpu className="w-5"/>
                        <p className="font-medium">Tech</p>
                    </div>

                    
                </div>

                <div className="flex justify-center items-center mt-7">
                    <div className="flex justify-center items-center bg-gray-300 rounded-2xl w-[280px] h-[120px]">
                        <h1>imagem</h1>
                    </div>
                </div>

                <div className="flex items-center mt-5">
                    <button className="flex flex-row items-center gap-2">
                        <h3 className="font-medium text-lg ml-1 text-gray-800">Top Enterprises</h3>
                        <CircleArrowRight/>
                    </button>
                </div>

                <div className="flex  items-center mt-2 gap-5">
                    <div className="bg-gray-100 w-40 h-60 rounded-xl mt-2 flex justify-center flex-col ">
                        
                        <img className="w-24 ml-8 mb-4" src={Tloja} alt="" />
                        <h1 className="font-medium text-lg ml-3">Boop Store</h1>
                        <p className="text-sm ml-3 mt-1">Categorias</p>

                        <div className="flex justify-center items-center ml-3 mt-2 bg-gray-200 border border-gray-00 rounded-xl w-[70px] h-6">
                            <BookText className="w-4 mr-1"/>
                            <p className="font-medium">Tech</p>
                        </div>
                        
                    </div>
                    
                    <div className="bg-gray-100 w-40 h-60 rounded-xl mt-2 flex justify-center flex-col">
                        
                        <img className="w-24 ml-8 mb-4" src={Sloja} alt="" />
                        <h1 className="font-medium text-lg ml-3">PenSec</h1>
                        <p className="text-sm ml-3 mt-1">Categorias</p>

                        <div className="flex justify-center items-center ml-3 mt-2 bg-gray-200 border border-gray-00 rounded-xl w-[70px] h-6">
                            <Cpu className="w-4 mr-1"/>
                            <p className="font-medium">Tech</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center mt-5">
                    <button className="flex flex-row items-center gap-2">
                        <h3 className="font-medium text-lg ml-1 text-gray-800">Nearby Services</h3>
                        <CircleArrowRight/>
                    </button>
                </div>
                
                <div className="flex items-center mt-3">
                    <div className="bg-[#F4F6F8] w-96 h-24 rounded-2xl flex items-center hover:scale-105 hover:border duration-300">
                            <div className="w-16 h-16 ml-3">
                                <img src={crystal} alt="" />
                            </div>
                        <div className="flex flex-col ml-3">
                            <h1 className="font-semibold text-lg font-[Sora]">Crystal Eyes</h1>
                            <h3 className="font-light font-[Sora]">Desenvolvimento Web</h3>
                            <div className="flex flex-row">
                                <img className="w-5 h-5 mt-1 mr-2" src={estrela} alt="" />
                            <p className="font-medium text-lg">4,5</p>
                            </div>
                        </div>
                        <button className="ml-auto mr-3 w-10 h-10 shadow-xl bg-[#005eff] rounded-3xl flex justify-center items-center">
                                <ChevronRight className="text-white hover:text-black duration-300"/>
                        </button>
                    </div>
                </div>
                <div className="flex items-center mt-3">
                    <div className="bg-[#F4F6F8] w-96 h-24 rounded-2xl flex items-center hover:scale-105 hover:border duration-300">
                            <div className="w-16 h-16 ml-3">
                                <img src={crystal} alt="" />
                            </div>
                        <div className="flex flex-col ml-3">
                            <h1 className="font-semibold text-lg font-[Sora]">Crystal Eyes</h1>
                            <h3 className="font-light font-[Sora]">Desenvolvimento Web</h3>
                            <div className="flex flex-row">
                                <img className="w-5 h-5 mt-1 mr-2" src={estrela} alt="" />
                            <p className="font-medium text-lg">4,5</p>
                            </div>
                        </div>
                        <button className="ml-auto mr-3 w-10 h-10 shadow-xl bg-[#005eff] rounded-3xl flex justify-center items-center">
                                <ChevronRight className="text-white hover:text-black duration-300"/>
                        </button>
                    </div>
                </div>
                
            </div>
            
            <div className="w-full h-14 bg-gray-300">
                <div className="flex justify-between items-center h-14">
                    <House className="w-6 h-6 ml-3"/>
                    <ShoppingCart className="w-6 h-6 mr-3"/>
                </div>
            </div>
        </div>
    );
}

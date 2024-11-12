import React, { useState, useRef } from 'react';

const Navbar: React.FC = () => {
    return(
    <>
        <header className="bg-white fixed top-0 w-full z-10">
            <div className="border border-b border-slate-100">
                <div className="container mx-auto px-4 lg:px-8 py-2">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-5">
                            <div className="shrink-0">
                                <img src="/images/mark.svg" className="w-10 h-10" alt="Logo" />
                            </div>
                            <div className="hidden md:block">
                                <input className="h-10 p-4 rounded-md border border-slate-100 outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Búscar..." />
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <button  tabIndex={-1} className="p-2 m-auto cursor-pointer font-semibold text-sm hover:text-green-200">Registrarse</button>
                            <button  tabIndex={-1} className="p-2 m-auto cursor-pointer font-semibold border border-green-200 rounded-md text-green-200 text-sm hover:bg-green-500 hover:text-white">Acceso</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b border-slate-100">
                <div className="container mx-auto px-4 lg:px-8">
                    <ul className="flex items-center text-gray-400">
                        <li className="cursor-pointer px-2 py-2 hover:shadow-[0px_2px_0px_0px_rgba(34,197,94,1)]">Inicio</li>
                        <li className="cursor-pointer px-2 py-2 hover:shadow-[0px_2px_0px_0px_rgba(34,197,94,1)]">Ganar puntos</li>
                        <li className="cursor-pointer px-2 py-2 hover:shadow-[0px_2px_0px_0px_rgba(34,197,94,1)]">Recompensas</li>
                        <li className="cursor-pointer px-2 py-2 hover:shadow-[0px_2px_0px_0px_rgba(34,197,94,1)]">Promociones</li>
                        <li className="cursor-pointer px-2 py-2 hover:shadow-[0px_2px_0px_0px_rgba(34,197,94,1)]">Referidos</li>
                    </ul>
                </div>
            </div>
        </header>
    </>
    );
}

export default Navbar;
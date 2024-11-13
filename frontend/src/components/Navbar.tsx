import { useState, useRef, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [opciones, setOpciones] = useState<boolean>(false);
    const menuOpcionesRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuOpcionesRef.current && !menuOpcionesRef.current.contains(event.target as Node)) {
                setOpciones(false);
            }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    
    const manejarKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            setOpciones(!opciones);
        }
    };

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
                                <input className="h-10 p-4 rounded-md border border-slate-100 outline-none focus:ring-2 focus:ring-green-500" placeholder="Búscar..." />
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <button className="flex items-center gap-3">
                                    <div id="notificacion_count_alert" className="absolute right-2.5 bottom-2.5 bg-blue-500 rounded-full" style={{ display: 'none' }}>
                                        <span id="notification_alert" className="text-sm text-white p-1">0</span>
                                    </div>
                                    <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21" />
                                    </svg>
                                </button>
                            </div>

                            <div className="relative" ref={menuOpcionesRef}>
                                <div className="block text-center cursor-pointer" onClick={() => setOpciones(!opciones)} onKeyDown={manejarKeyDown} aria-haspopup="true" aria-expanded={opciones} aria-label="Opciones de perfil" tabIndex={0}>
                                    <img src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg" className="object-cover h-9 w-9 rounded-full mr-2 bg-gray-300" alt="Foto de perfil" />
                                </div>
                                <div className={`absolute shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none bg-white rounded-md right-0 w-48 py-2 z-10 ${opciones ? 'block' : 'hidden'}`} role="menu" aria-label="Menú de perfil">
                                    <span className="block font-semibold hover:bg-gray-50 px-3 py-2 cursor-pointer" role="menuitem" tabIndex={0}>Mi perfil</span>
                                    <span className="block font-semibold hover:bg-gray-50 px-3 py-2 cursor-pointer" role="menuitem" tabIndex={0}>
                                        Cerrar sesión
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b border-slate-100">
                <div className="container mx-auto px-4 lg:px-8">
                    <ul className="flex items-center text-gray-400 justify-between">
                        <li className="cursor-pointer px-2 py-2 hover:shadow-[0px_2px_0px_0px_rgba(34,197,94,1)]">Inicio</li>
                        <li className="cursor-pointer px-2 py-2 hover:shadow-[0px_2px_0px_0px_rgba(34,197,94,1)]">Encuestas</li>
                        <li className="cursor-pointer px-2 py-2 hover:shadow-[0px_2px_0px_0px_rgba(34,197,94,1)]">Juegos</li>
                        <li className="cursor-pointer px-2 py-2 hover:shadow-[0px_2px_0px_0px_rgba(34,197,94,1)]">Investigaciones</li>
                        <li className="cursor-pointer px-2 py-2 hover:shadow-[0px_2px_0px_0px_rgba(34,197,94,1)]">Microtareas</li>
                        <li className="cursor-pointer px-2 py-2 hover:shadow-[0px_2px_0px_0px_rgba(34,197,94,1)]">Recompensas</li>
                        <li className="cursor-pointer px-2 py-2 hover:shadow-[0px_2px_0px_0px_rgba(34,197,94,1)]">Ofertas</li>
                        <li className="cursor-pointer px-2 py-2 hover:shadow-[0px_2px_0px_0px_rgba(34,197,94,1)]">Compras</li>
                        <li className="cursor-pointer px-2 py-2 hover:shadow-[0px_2px_0px_0px_rgba(34,197,94,1)]">Más</li>
                    </ul>
                </div>
            </div>
        </header>
    </>
    );
}

export default Navbar;
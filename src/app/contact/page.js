'use client';
import {useEffect, useState} from "react";
import Image from "next/image";

export default function ContactPage() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  return (
    <section className="mt-8">
        <div className="grid sm:grid-cols-3 gap-4 mt-2">
            <div className="shadow-md p-2">
                <div className="text-center text-primary font-semibold">Endereço</div>
                <div className="text-center"><small>Bairro de Zimpeto, Estrada Nacional Nr. 1, Parcela 654</small></div>                
                <div className="text-center"><small>Maputo - Moçambique</small></div>                
            </div>
            <div className="shadow-md p-2">
                <div className="text-center text-primary font-semibold">Contactos</div>
                <div className="text-center flex flex-row gap-2 justify-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                    </div>
                    <div>
                    <small>(+258) 86 551 7841</small>
                    </div>
                </div>    
                <div className="text-center flex flex-row gap-2 justify-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                    </div>
                    <div>
                    <small>(+258) 87 119 1481</small>
                    </div>
                </div>    
                <div className="text-center flex flex-row gap-2 justify-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                        </svg>
                    </div>
                    <div>
                    <small>tlhavika.solar@gmail.com</small>
                    </div>
                </div>    
            </div>
            <div className="shadow-md p-2">
                <div className="text-center text-primary font-semibold">Redes Sociais</div>
            </div>
        </div>
      </section>
  );
}
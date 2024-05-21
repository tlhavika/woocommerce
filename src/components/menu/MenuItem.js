import Right from "@/components/icons/Right";
import Image from "next/image";
import Carouselt from "@/components/menu/Carosel";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {useEffect, useState} from "react";
export default function MenuItem() { 
  const router = useRouter();
  const [idProduto, setIdProduto] = useState("");
  useEffect(() => {
    localStorage.setItem("id", idProduto);
    if (idProduto === "") {      
    } else{
      router.push("/detalhesProduto");
    }
   
  }, [idProduto])
  return (
    <>
     {/* <div className="bg-cover bg-center bg-[url('/fundoSolar.png')] w-full"> */}
     <div className="flex flex-col justify-center max-w-6xl mx-auto">
      <section className="mt-8">
        <div className="grid sm:grid-cols-4 gap-4 mt-2">
            <div className="shadow-md p-2">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm rounded-xl w-full flex justify-centes text-center flex items-center">
                <small className="flex text-center font-bold ml-2 w-full">Preço: 8.000,00 Mt (+IVA)</small>
              </div>
              <Image  src={'/Painel Solar JA 440W.jpeg'}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto" alt={'sallad'} />
              <small className="text-primary font-bold">Painel Solar JA 440W</small>
              <Link href="https://api.whatsapp.com/send?phone=258871191481" onClick={() => setIdProduto("0")}>
                  <button className="flex justify-center bg-primary flex items-center gap-2 text-white px-2 py-2 rounded-full mt-4">            
                    Detalhes
                    <Right />
                  </button>
              </Link> 
            </div>
            <div className="shadow-md p-2">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm rounded-xl w-full flex justify-centes text-center flex items-center">
                <small className="flex text-center font-bold ml-2">Preço: 33.000,00 Mt (+IVA)</small>
              </div>
              <Image  src={'/Inversor 3200w VITO.jpeg'}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto" alt={'sallad'} />
                <small className="text-primary font-bold">Inversor 3200w VITO</small>
                <Link href="https://api.whatsapp.com/send?phone=258871191481" onClick={() => setIdProduto("1")}>
                    <button className="flex justify-center bg-primary flex items-center gap-2 text-white px-2 py-2 rounded-full mt-4">            
                    Detalhes
                      <Right />
                    </button>
                </Link>    
            </div>
            <div className="shadow-md p-2">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm rounded-xl w-full flex justify-centes text-center flex items-center">
                <small className="flex text-center font-bold ml-2">Preço: 13.500,00 Mt (+IVA)</small>
              </div>
                <Image  src={'/Growcol-51.8V.jpg'}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto" alt={'sallad'} />
                  <small className="text-primary font-bold">Growcol lithium 51.2V, 100ah</small>
                  <Link href="https://api.whatsapp.com/send?phone=258871191481" onClick={() => setIdProduto("2")}>
                      <button className="flex justify-center bg-primary flex items-center gap-2 text-white px-2 py-2 rounded-full mt-4">            
                      Detalhes
                        <Right />
                      </button>
                  </Link>
            </div>
            <div className="shadow-md p-2">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm rounded-xl w-full flex justify-centes text-center flex items-center">
                <small className="flex text-center font-bold ml-2">Preço: 80,00 Mt (+IVA) (p/m)</small>
              </div>
                <Image  src={'/Solar-Cables.jpg'}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto" alt={'sallad'} />
                  <small className="text-primary font-bold">Cabo 4mm PV</small>
                  <Link href="https://api.whatsapp.com/send?phone=258871191481" onClick={() => setIdProduto("3")}>
                      <button className="flex justify-center bg-primary flex items-center gap-2 text-white px-2 py-2 rounded-full mt-4">            
                      Detalhes
                        <Right />
                      </button>
                  </Link>
            </div>
        </div>
      </section>
      <section className="mt-8">
        <div className="grid sm:grid-cols-4 gap-4 mt-2">
            <div className="shadow-md p-2">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm rounded-xl w-full flex justify-centes text-center flex items-center">
                <small className="flex text-center font-bold ml-2">Preço: 200,00 Mt (+IVA) p/m</small>
              </div>
              <Image  src={'/GC16MMBC-BATTERY-CABLE-16MM-RED-GC-Solar.webp'}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto" alt={'sallad'} />
              <small className="text-primary font-bold">Cabo de Baterria 25mm Vermelho</small>
              <Link href="https://api.whatsapp.com/send?phone=258871191481" onClick={() => setIdProduto("4")}>
                  <button className="flex justify-center bg-primary flex items-center gap-2 text-white px-2 py-2 rounded-full mt-4">
                    Detalhes
                    <Right />
                  </button>
              </Link> 
            </div>
            <div className="shadow-md p-2">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm rounded-xl w-full flex justify-centes text-center flex items-center">
                <small className="flex text-center font-bold ml-2">Preço: 200,00 Mt (+IVA) p/m</small>
              </div>
              <Image  src={'/BATT35MM-BATTERY-CABLE-35MM-RED-GC-Solar-Black.webp'}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto" alt={'sallad'} />
              <small className="text-primary font-bold">Cabo de Baterria 25mm Preto</small>
              <Link href="https://api.whatsapp.com/send?phone=258871191481" onClick={() => setIdProduto("5")}>
                  <button className="flex justify-center bg-primary flex items-center gap-2 text-white px-2 py-2 rounded-full mt-4">
                    Detalhes
                    <Right />
                  </button>
              </Link> 
            </div>
            <div className="shadow-md p-2">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm rounded-xl w-full flex justify-centes text-center flex items-center">
                <small className="flex text-center font-bold ml-2">Preço: 3.000,00 Mt (+IVA)</small>
              </div>
                <Image  src={'/Controlador de Carga 50 Ah.jpeg'}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto" alt={'sallad'} />
                  <small className="text-primary font-bold">Controlador de Carga 50 Ah</small>
                  <Link href="https://api.whatsapp.com/send?phone=258871191481" onClick={() => setIdProduto("36")}>
                      <button className="flex justify-center bg-primary flex items-center gap-2 text-white px-2 py-2 rounded-full mt-4">            
                      Detalhes
                        <Right />
                      </button>
                  </Link>
            </div>
            <div className="shadow-md p-2">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm rounded-xl w-full flex justify-centes text-center flex items-center">
                <small className="flex text-center font-bold ml-2">Preço: 24.000,00 Mt (+IVA)</small>
              </div>
                <Image  src={'/Bateria de Gel AGM Solar KLC 12V.jpeg'}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto" alt={'sallad'} />
                  <small className="text-primary font-bold">Bateria de Gel AGM Solar KLC 12V</small>
                  <Link href="https://api.whatsapp.com/send?phone=258871191481" onClick={() => setIdProduto("14")}>
                      <button className="flex justify-center bg-primary flex items-center gap-2 text-white px-2 py-2 rounded-full mt-4">            
                      Detalhes
                        <Right />
                      </button>
                  </Link>
            </div>
        </div>
        <div className="flex gap-4 text-sm mt-16">
          <Link href="/todosProdutos">
            <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
              Ver Todos os Produtos
              <Right />
            </button>
          </Link>         
        </div>
      </section>
     </div>
    </>
  );
}
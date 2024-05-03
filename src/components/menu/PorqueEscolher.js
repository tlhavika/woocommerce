import Right from "@/components/icons/Right";
export default function PorqueEscolher() { 
  return (
    <>
    <section className="max-w-6xl mx-auto mt-8">
        <div className="grid sm:grid-cols-2 gap-4 mt-2">
            <div className="p-2">
            <small className="text-primary font-bold text-2xl italic">Por Quê Escolher-Nos</small><br/>
                    <small>Oferecemos produtos de alta qualidade a preços acessíveis com backup e pós-serviço. Nossos produtos possuem uma excelente garantia para a tranquilidade do cliente.</small>
                    <div className="flex flex-col justify-center content-center">
                        <div className="flex mt-4 mb-2">
                            <div className="flex flex-col w-1/2">
                                <small className="text-primary font-bold text-sm italic">Qualidade Suprema</small>
                                <small>Os componentes são de alta qualidade. Eixos soldados em aço inoxidável AISI 304. Propriedades anti-abrasão.</small>
                            </div>
                            <div className="flex flex-col w-1/2">
                                <small className="text-primary font-bold text-sm italic">Excelente Garantia</small>
                                <small>Se instalado de acordo com nossas diretrizes, garantimos nossos produtos com um mínimo de 2 anos.</small>
                            </div>
                        </div>
                    </div>  
                    <div className="flex flex-col justify-center content-center">
                        <div className="flex mt-4 mb-2">
                            <div className="flex flex-col w-1/2">
                                <small className="text-primary font-bold text-sm italic">Atendido Localmente</small>
                                <small>No deslocamos para a maioria das províncias caso haja necessidade de reparos em Moçambique.</small>
                            </div>
                            <div className="flex flex-col w-1/2">
                                <small className="text-primary font-bold text-sm italic">Soluções Especializadas</small>
                                <small>Caso você precise de assistência com aplicações básicas de produtos, nós podemos ajudar.</small>
                            </div>
                        </div>
                    </div>              
            </div>
            <div className="p-2">
                <small className="text-primary font-bold text-sm italic">Contacte-nos</small>
                <br/>
                    <label>Nome</label>
                    <input
                        type="text"
                        // value={basePrice}
                        // onChange={ev => setBasePrice(ev.target.value)}
                    />
                    <label>Email</label>
                    <input
                        type="text"
                        // value={basePrice}
                        // onChange={ev => setBasePrice(ev.target.value)}
                    />
                    <label>Contacto</label>
                    <input
                        type="text"
                        // value={basePrice}
                        // onChange={ev => setBasePrice(ev.target.value)}
                    />
                    <label>Mensagem</label>
                    <textarea id="w3review" name="w3review" rows="4" cols="50">
                    </textarea>
                    <button className="flex justify-center bg-primary flex items-center gap-2 text-white px-2 py-2 rounded-full mt-4">
                        Enviar
                    </button>   
            </div>
        </div>
      </section>
    </>
  );
}
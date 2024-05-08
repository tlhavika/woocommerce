'use client';
import {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Right from "@/components/icons/Right";
import { useRouter } from "next/navigation";
const listaProdutos = [
    {
    id: "0",
    nomeProduto: "Growcol 30W mono",
    img: "/paineis.png",
    descricao: "A Placa Solar de Growcol 30W mono com eficiência energética de 12.2%, é ideal para uso tanto em sistemas conectados à rede, quanto em sistemas isolados com baterias e controlador de carga. A escolha ideal para instalação residencial ou em grande escala. Há 7 anos se especializando em Energia Fotovoltaica!!! Caracteristicas Principais: 1. Desempenho Elevado: Eficiência líder com 144 células e tecnologia MBB; Saída do módulo de até 555W para máxima potência. 2. Eficiência em Condições de Pouca Luz: Texturização avançada para otimizar o desempenho em ambientes com pouca luz. 3. Design Inovador e Leve: Folha traseira transparente para fácil instalação e menor custo; Aumento de 5 a 25% na potência, reduzindo significativamente o LCOE e aumentando o IRR.",
    preco: "15.000,00 Mt",
    categoria: "Painel Solar",
    propriedades: "Potência Máxima (Pmax/W): 30",
    propriedades1: "Eficiência do Painel (%): 12.2",
    propriedades2: "Peso (kg): 2.4",
},
{
    id: "1",
    nomeProduto: "Growcol hybrid inverter 8Kw 48V + wifi",
    img: "/Growcol-hybrid.png",
    descricao: "O Inversor Híbrido GROWCOL 1P 8Kw 48V + WIFI é um dispositivo projetado para gerenciar e controlar o fluxo de energia em um sistema de energia solar. É um inversor híbrido, o que significa que é capaz de converter energia CC de painéis solares em energia CA para uso em sua casa ou empresa e também carregar um banco de baterias com excesso de energia solar para uso posterior. A classificação de 8Kw refere-se à potência máxima do inversor, o que significa que ele pode suportar até 8.000 watts de energia CA. A classificação de 48 V refere-se à tensão CC do banco de baterias que o inversor pode carregar. A capacidade WIFI permite monitorar e controlar o inversor remotamente usando um aplicativo de smartphone ou interface baseada na web. Isto é útil para acompanhar a produção de energia, verificar o estado do banco de baterias e fazer ajustes nas configurações do sistema. No geral, o inversor híbrido GROWCOL 1P 8Kw 48V + WIFI é um dispositivo versátil e de alta qualidade que pode ajudá-lo a maximizar a eficiência energética do seu sistema de energia solar.",
    preco: "25.000,00 Mt",
    categoria: "Inversor",
    propriedades: "Tipo de Inversor: Inversor Hibrido",
    propriedades1: "Voltagem de Entrada: 12 kW",
    propriedades2: "Voltagem de Saida: 220V - 230V - 240V",
},
{
    id: "2",
    nomeProduto: "Growcol lithium 51.2V, 100ah",
    img: "/Growcol-51.8V.jpg",
    descricao: "Growcol Lithium 51,2V, 100Ah, é uma bateria de lítio fabricada pela Growcol. Tensão: A bateria tem tensão nominal de 51,2V. Este nível de tensão é comumente usado para aplicações de tensão mais alta, como veículos elétricos, sistemas de armazenamento de energia renovável e aplicações industriais. Capacidade: A bateria tem capacidade de 100Ah (Amperes-hora). Isso indica a quantidade de carga que a bateria pode fornecer durante um período específico. Neste caso, a bateria pode teoricamente fornecer uma corrente contínua de 100A durante uma hora, ou 10A durante 10 horas. Química: A bateria utiliza tecnologia de íons de lítio, que é conhecida por sua alta densidade de energia, ciclo de vida longo e peso leve em comparação com outros produtos químicos de bateria. As baterias de íon-lítio são amplamente utilizadas em diversas aplicações, incluindo eletrônicos portáteis, veículos elétricos e sistemas de energia renovável.",
    preco: "13.500,00 Mt",
    categoria: "Bateria",
    propriedades: "Tipo de Baterria: Baterria de Lithium",
    propriedades1: "Voltagem Nominal: 51.2V",
    propriedades2: "Capacidade Nominal: 100 Ah",
},
{
    id: "3",
    nomeProduto: "Cabo 4mm PV",
    img: "/Solar-Cables.jpg",
    descricao: "O cabo fotovoltaico de 4 mm em vermelho/preto é um cabo de energia solar usado para conectar painéis solares. Tem um diâmetro de 4 mm e é codificado por cores em vermelho para conexões positivas e preto para conexões negativas. O cabo é feito de condutores de cobre estanhado com isolamento resistente às intempéries. É compatível com conectores MC4 e comumente usado em instalações solares de médio porte.",
    preco: "80,00 Mt (Por metro de cada cor)",
    categoria: "Cabos",
    propriedades: "Cores: Preto e Vermelho",
    propriedades1: "Intervalo de Temperatura: -10° a +80°C",
    propriedades2: "Voltagem Máxima: 1000V",
},
{
    id: "4",
    nomeProduto: "Cabo de Baterria 16mm Vermelho",
    img: "/GC16MMBC-BATTERY-CABLE-16MM-RED-GC-Solar.webp",
    descricao: "Aplicação: Para uso entre o gerador de soldagem, o eletrodo manual e a peça de trabalho. Para uso na indústria automobilística, na construção naval, nos transportes e sistemas de transporte, máquinas para fabricação de ferramentas, robôs de soldagem, etc. Eles são adequados para uso em condições secas e úmidas. Uso externo por tempo limitado período. O produto está em conformidade com a Diretiva de Baixa Tensão 2014/35/EU.",
    preco: "350,00 Mt (Por metro)",
    categoria: "Cabos",
    propriedades: "Tamanho: 16mm²",
    propriedades1: "Cor: Vermelho",
    propriedades2: "Comprimento: 1m",
},
{
    id: "5",
    nomeProduto: "Cabo de Baterria 25mm Preto",
    img: "/BATT35MM-BATTERY-CABLE-35MM-RED-GC-Solar-Black.webp",
    descricao: "Cabo automotivo de alto desempenho projetado para transferência eficiente de energia em aplicações automotivas e marítimas. Este cabo vermelho de 25 mm é construído com materiais duráveis, garantindo condutividade confiável e excelente resistência ao calor, abrasão e produtos químicos. Seu design flexível e robusto permite fácil instalação e roteamento, tornando-o a escolha ideal para conectar baterias e distribuir energia em vários veículos e embarcações marítimas. Confiável e seguro, este cabo de bateria garante um fluxo consistente de energia, contribuindo para o desempenho ideal dos sistemas elétricos.",
    preco: "550,00 Mt (Por metro)",
    categoria: "Cabos",
    propriedades: "Tamanho: 25mm²",
    propriedades1: "Cor: Preto",
    propriedades2: "Comprimento: 1m",
},
{
    id: "6",
    nomeProduto: "Cabo de extensão solar 1X6MM2 1M",
    img: "/solar-extension-cable-1m-1.png",
    descricao: "Um cabo de extensão solar 1x6mm2 1m refere-se a um cabo de núcleo único com área de seção transversal de 6 milímetros quadrados e comprimento de 1 metro. Este tipo de cabo é comumente usado em sistemas de energia solar para conectar painéis solares a inversores ou outros equipamentos elétricos. O cabo foi projetado para suportar condições externas adversas e geralmente é resistente a raios UV, tornando-o adequado para uso em ambientes de alta temperatura. Ao escolher um cabo de extensão solar, é importante garantir que as especificações do cabo sejam compatíveis com os requisitos do seu sistema solar. Fatores como a distância entre os painéis solares e o inversor, a quantidade de corrente gerada pelos painéis e a tensão do sistema afetarão a escolha do cabo. É sempre uma boa ideia consultar um eletricista profissional ou instalador solar para garantir que você escolheu o cabo certo para suas necessidades.",
    preco: "700,00 Mt",
    categoria: "Cabos",
    propriedades: "",
    propriedades1: "Cor: Preto e Vermelho",
    propriedades2: "Comprimento: 1m",
},
{
    id: "7",
    nomeProduto: "Victron – interface MK3-USB (VE.Bus para USB)",
    img: "/loop.jpg",
    descricao: "Interface Victron MK3-USB: Uma ferramenta versátil e essencial para produtos Victron Energy, permitindo comunicação e configuração perfeitas. Aqui está uma breve descrição com estatísticas: Interface Victron MK3-USB: Facilita a comunicação e configuração dos produtos Victron Energy. Permite transferência de dados e atualizações de firmware. Design compacto e fácil de usar. Compatível com uma gama de dispositivos Victron. Fornece uma interface confiável e eficiente para monitoramento e personalização do sistema.",
    preco: "5.300,00 Mt",
    categoria: "Cabos",
    propriedades: "Não Disponivel",
    propriedades1: "",
    propriedades2: "",
},
{
    id: "8",
    nomeProduto: "Bomba para piscina HPP1200 1200W 220",
    img: "/bomba2.jpg",
    descricao: "Esta bomba de alta qualidade é uma excelente escolha para suas piscinas, lagos de jardim e spas, servindo como uma parte do sistema de circulação para manter a água limpa. A tampa transparente de filtro permite que você verifique se o filtro está cheio, e o cesto do filtro pode ser facilmente retirado da bomba para limpeza. Graças ao motor poderoso, esta bomba é extremamente resistente e pode trabalhar de forma eficiente com pouco barulho. Com carcaça termoplástica reforçada, esta bomba de piscina durável, assegura uma longa vida de serviço mesmo em condições meteorológicas de desempenho.",
    preco: "78.000,00 Mt",
    categoria: "Bombas",
    propriedades: "Voltagem Normal: 220V ~ / 50Hz",
    propriedades1: "Tipo de Protecção: IPX4",
    propriedades2: "Altura Máxima: 16m",
},
{
    id: "9",
    nomeProduto: "HSP110/1000PMAC 3THS2.5-140-110/1000",
    img: "/BombaSolar.jpg",
    descricao: "A bomba de poço solar Hurricane HSP110/1000 vem completa com motor submersível de 1000W 110V e caixa de controle automático de bomba 110V com sensores de nível de água e é capaz de fornecer até 300L/hora a uma profundidade de 132m. (Painéis solares não incluídos, requerem painéis solares de 14 x 100W)",
    preco: "55.000,00 Mt",
    categoria: "Bombas Solares",
    propriedades: "Temperatura máxima do fluido: até 35°C",
    propriedades1: "Teor máximo de areia: 0,25%",
    propriedades2: "Diâmetro mínimo do furo: 4″ (10,16cm)",
},
{
    id: "10",
    nomeProduto: "Bomba Submersível HKS-1000PW 220V 1KW",
    img: "/BombaSubmercivel.jpg",
    descricao: "A bomba submersível Hurricane HKS-1000PW é uma bomba de 220V 1KW.",
    preco: "60.000,00 Mt",
    categoria: "Bombas",
    propriedades: "Tensão: 220V – 240V 50Hz ",
    propriedades1: "Potência: 1KW 1,3 HP",
    propriedades2: "Altura da cabeça: 11m Saída máxima: 250L/min",
}
]
export default function TodosProdutos() {
    const router = useRouter();
    const [categories, setCategories] = useState([]);
    const [categoriaClicked, setCategoriaClicked] = useState("");
    const [idProduto, setIdProduto] = useState("");
    useEffect(() => {
        localStorage.setItem("id", idProduto);
        if (idProduto === "") {      
        } else{
        router.push("/detalhesProduto");
        }
    
    }, [idProduto])
    function inversores() {
        setCategoriaClicked("Inversor")
    }
  return (
    <section className="mt-8">
        <div className="grid sm:grid-cols-9 gap-4 mt-2">
            <div className="shadow-md p-2">
                <div className="text-center text-primary font-semibold"  onClick={() => setCategoriaClicked("Inversor")}>Inversores</div>             
            </div>
            <div className="shadow-md p-2">
                <div className="text-center text-primary font-semibold"  onClick={() => setCategoriaClicked("Painel Solar")}>Paineis Solares</div>   
            </div>
            <div className="shadow-md p-2">
                <div className="text-center text-primary font-semibold"  onClick={() => setCategoriaClicked("Bateria")}>Baterias</div>
            </div>
            <div className="shadow-md p-2">
                <div className="text-center text-primary font-semibold"  onClick={() => setCategoriaClicked("Sistemas All In One")}>Sistemas All In One</div>
            </div>
            <div className="shadow-md p-2">
                <div className="text-center text-primary font-semibold"  onClick={() => setCategoriaClicked("Acessorios")}>Acessorios</div>
            </div>
            <div className="shadow-md p-2">
                <div className="text-center text-primary font-semibold"  onClick={() => setCategoriaClicked("Carregadores de Baterias")}>Carregadores de Baterias</div>
            </div>
            <div className="shadow-md p-2">
                <div className="text-center text-primary font-semibold"  onClick={() => setCategoriaClicked("Cabos")}>Cabos</div>
            </div>
            <div className="shadow-md p-2">
                <div className="text-center text-primary font-semibold"  onClick={() => setCategoriaClicked("Bombas Solares")}>Bombas Solares</div>
            </div>
            <div className="shadow-md p-2">
                <div className="text-center text-primary font-semibold"  onClick={() => setCategoriaClicked("Bombas")}>Bombas</div>
            </div>
        </div>
        <div className="flex flex-col justify-center max-w-6xl mx-auto">
            <section className="mt-8">
                
                <div className="text-center text-primary font-semibold text-3xl">Categoria: {categoriaClicked}</div>
                <div className="grid sm:grid-cols-4 gap-4 mt-2">
                    {listaProdutos.map((select) => 
                    <>
                    {select.categoria === categoriaClicked ? (
                    <div className="shadow-md p-2">
                        {select.categoria === categoriaClicked && (
                            <>
                                <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm rounded-xl w-full flex justify-centes text-center flex items-center"><small className="flex text-center font-bold ml-2">Preço: {select.preco}</small></div>
                                <Image  src={select.img}
                                width="0"
                                height="0"
                                sizes="100vw"
                                className="w-full h-auto" alt={'sallad'} />
                                <small className="text-primary font-bold">{select.nomeProduto}</small>
                                <Link href="#" onClick={() => setIdProduto(select.id)}>
                                    <button className="flex justify-center bg-primary flex items-center gap-2 text-white px-2 py-2 rounded-full mt-4">            
                                        Detalhes
                                        <Right />
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                ) : (
                
                <>
                {select.categoria === categoriaClicked && (
                    <>
                    <div className="shadow-md p-2">
                    <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm rounded-xl w-full flex justify-centes text-center flex items-center"><small className="flex text-center font-bold ml-2">Preço: {select.preco}</small></div>
                        <Image  src={select.img}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto" alt={'sallad'} />
                        <small className="text-primary font-bold">{select.nomeProduto}</small>
                        <Link href="#" onClick={() => setIdProduto(select.id)}>
                            <button className="flex justify-center bg-primary flex items-center gap-2 text-white px-2 py-2 rounded-full mt-4">            
                                Detalhes
                                <Right />
                            </button>
                        </Link>
                    </div>
                       
                    </>
                )}
                </>
                
        ) }               
                    </>
                    )}
                    
                </div>
            </section>
        </div>
    </section>
  );
}
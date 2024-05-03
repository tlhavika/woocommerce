import Right from "@/components/icons/Right";
import Image from "next/image";
import Carouselt from "@/components/menu/Carosel";

export default function MenuItem() { 
  return (
    <>
     {/* <div className="bg-cover bg-center bg-[url('/fundoSolar.png')] w-full"> */}
     <div className="max-w-6xl mx-auto">
      <div className="flex flex-col justify-center content-center">
      <div className="flex mt-4 mb-2">
        <div className="flex-none w-32 mr-4">
          <Image  src={'/paineis.png'}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto" alt={'sallad'} />
        </div>
        <div className="flex-none w-40 mr-4">
          <small className="text-primary font-bold">Placa Solar Modulo Fotovoltaico 550w Era Solar Bifacial</small>
          <button className="flex justify-center bg-primary flex items-center gap-2 text-white px-2 py-2 rounded-full mt-4">
            Add
            <Right />
          </button>
        </div>
        <div className="flex flex-col w-1/4">
          <small className="font-bold">Marca: ERA SOLAR</small>
          <small className="font-bold">Modelo: ESPHSC</small>
          <small className="font-bold">Quantidade de células: 144</small>
          <small className="font-bold">Potência máxima: 555 W</small>
          <small className="font-bold">Eficiência energética da placa solar: 21,5%</small>
          <small className="font-bold">Largura x Comprimento: 1134 cm x 2278 cm</small>
          <small className="font-bold">Peso: 27.2 kg</small>
          <small className="font-bold">Tipo da placa solar: BIFACIAL Monocristalino</small>
        </div>
        <div className="flex flex-col w-1/2">
          <small>A Placa Solar de 555W Era Solar com eficiência energética de 21.5%, é ideal para uso tanto em sistemas conectados à rede, quanto em sistemas isolados com baterias e controlador de carga.</small>
          <small>A escolha ideal para instalação residencial ou em grande escala. Há 7 anos se especializando em Energia Fotovoltaica!!!</small>
          <small>Caracteristicas Principais:</small>
          <small>1. Desempenho Elevado: Eficiência líder com 144 células e tecnologia MBB; Saída do módulo de até 555W para máxima potência.</small>
          <small>2. Eficiência em Condições de Pouca Luz: Texturização avançada para otimizar o desempenho em ambientes com pouca luz.</small>
          <small>3. Design Inovador e Leve: Folha traseira transparente para fácil instalação e menor custo; Aumento de 5 a 25% na potência, reduzindo significativamente o LCOE e aumentando o IRR.</small>
        </div>
      </div>
      <hr/>
      <div className="flex mt-4 mb-2">
        <div className="flex-none w-32 mr-4">
          <Image  src={'/inversor2.png'}width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto" alt={'sallad'} />
        </div>
        <div className="flex-none w-40 mr-4">
          <small className="text-primary font-bold">Inversor Solar 5kW 220v</small>
          <button className="flex justify-center bg-primary flex items-center gap-2 text-white px-2 py-2 rounded-full mt-4">
            Add
            <Right />
          </button>
        </div>
        <div className="flex flex-col w-1/4">
          <small className="font-bold">Potência Máxima de Operação: 5000 W</small>
          <small className="font-bold">Potência de Pico: 10000 W</small>
          <small className="font-bold">Altura: 137 mm</small>
          <small className="font-bold">Largura: 330 mm</small>
          <small className="font-bold">Comprimento: 415 mm</small>
          <small className="font-bold">Peso: 12 kg</small>
          <small className="font-bold">Tipo de onda: Onda senoidal</small>
        </div>
        <div className="flex flex-col w-1/2">
          <small>O inversor carregador 48V/220V gera 5000W para uso contínuo e até 10000W de pico, com onda senoidal pura. 
            Inclui controlador de carga interno que suporta até 6000W de potência solar. Permite instalação profissional e simplificada, ideal para instaladores não-especializados. 
            Conta com a qualidade LIVOLTEK e 2 anos de garantia contra defeitos de fabricação.</small>
          <small>Este inversor carregador LIVOLTEK é a alternativa perfeita para residências e empresas em locais remotos sem acesso à rede (Off-Grid) ou backup para regiões com queda frequente de rede. 
            Também é muito utilizado sem baterias em aplicações de uso diurno, como bombeamento de água em pequenas irrigações ou para abastecimento de caixas d’água de sítios, fazendas e chácaras. 
            Neste caso, utilize bomba monofásica 220V de 0,5cv, 3/4cv ou até 1cv, como: bomba de superfície tipo periférica ou centrífuga; bomba submersa tipo palito, caneta ou sapo.</small>
        </div>
      </div>
      <hr/>
      <div className="flex mt-4 mb-2">
        <div className="flex-none w-32 mr-4">
          <Image  src={'/baterias.png'}width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto" alt={'sallad'} />
        </div>
        <div className="flex-none w-40 mr-4">
          <small className="text-primary font-bold mx-4">Bateria Estacionaria 220ah Gel</small>
          <button className="flex justify-center bg-primary flex items-center gap-2 text-white px-2 py-2 rounded-full mt-4">
            Add
            <Right />
          </button>
        </div>
        <div className="flex flex-col w-1/4">
          <small className="font-bold">Marca: Super Som</small>
          <small className="font-bold">Linha: Estacionária</small>
          <small className="font-bold">Número de peça: BS220</small>
          <small className="font-bold">Voltagem: 12V</small>
          <small className="font-bold">Material: Agm VRLA</small>
          <small className="font-bold">Volume de eletrólito: 25 L</small>
        </div>
        <div className="flex flex-col w-1/2">
          <small>Antes de comprar BATERIA EXTREME POWER ou SUPER SOM, fique atento nas dicas abaixo, para não cair em golpes e ter prejuízos!</small>
          <small>As baterias SUPERSOM contam com a tecnologia AGM (Absorbent Glass Matt), que em português significa "separador de fibra de vidro absorvente", 
            tem como característica principal a absorção total da solução ácida (eletrólito) em seus separadores. Com isso, as placas fazem o contato com a solução ácida através do separador, 
            proporcionando muito mais durabilidade e performance que as baterias convencionais, além de serem mais resistentes à corrosão e à vibração, e mais seguras para você, por evitar o manuseio e 
            vazamento de ácido. Podem ser usadas em qualquer posição!</small>
        </div>
      </div>
      <hr/>
      <div className="flex mt-4 mb-2">
        <div className="flex-none w-32 mr-4">
          <Image  src={'/cabos.png'}width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto" alt={'sallad'} />
        </div>
        <div className="flex-none w-40 mr-4">
          <small className="text-primary font-bold mr-4">Cabo Fotovoltaico 4mm Energia Solar 30m Vermelho + 30m Preto</small>
          <button className="flex justify-center bg-primary flex items-center gap-2 text-white px-2 py-2 rounded-full mt-4">
            Add
            <Right />
          </button>
        </div>
        <div className="flex flex-col w-1/4">
          <small className="font-bold">Marca: New Cabos</small>
          <small className="font-bold">Tipo de cabo: Solar UVA - FLEXIVEL - 100% Cobre</small>
          <small className="font-bold">Tamanho da seção: 0.04 cm²</small>
          <small className="font-bold">Comprimento do cabo: 30 m</small>
          <small className="font-bold">Tipo de embalagem: Rolo</small>
          <small className="font-bold">Cor Da Cobertura: Preto e Vermelho</small>
          <small className="font-bold">Material da cobertura: XLPE</small>
          <small className="font-bold">Materiais do condutor: Cobre</small>
          <small className="font-bold">É inflamável: Não</small>
          <small className="font-bold">Normas aplicáveis: NBR 16612,NBR NM 280</small>
          <small className="font-bold">Tensão nominal: 1,8kv</small>
        </div>
        <div className="flex flex-col w-1/2">
          <small>Operação Versátil: Este cabo opera tanto em corrente contínua (CC) com tensão máxima de 1,8KV quanto em corrente alternada (CA) em 0,6/1KV, proporcionando flexibilidade e eficiência em diferentes sistemas.</small>
          <small>Condutores de Qualidade: Fabricado com condutores de cobre eletrolítico estanhado, garantindo uma condução elétrica eficaz e durável.</small>
          <small>Isolação Avançada: Sua isolação de XLPE Composto Termofixo livre de Halogênio oferece segurança adicional, enquanto sua cobertura também livre de Halogênio, com U.V.A. e U.V.B., garante resistência aos raios solares.</small>
          <small>Alta Resistência: Projetado para enfrentar uma ampla gama de condições climáticas, com uma faixa de temperatura ambiente entre -40°C e 90°C.</small>
          <small>Desempenho Confíavel: O cabo suporta uma temperatura interna no condutor de até 120°C por até 20.000 horas em regime contínuo, garantindo um desempenho consistente ao longo do tempo.</small>
          <small>Segurança: Com componentes retardantes de chamas em sua composição, este cabo ajuda a inibir a propagação de fogo, proporcionando tranquilidade e segurança.</small>
        </div>
      </div>
      </div>    
      <Carouselt />  
    </div>
    </>
  );
}
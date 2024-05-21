'use client';
import {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
const listaProdutos = [
  {
    id: "0",
    nomeProduto: "Painel Solar JA 440W",
    img: "/Painel Solar JA 440W.jpeg",
    descricao: "Montado com Células Percium Bifaciais Multi-Barramento e Configuração de Meia Célula.Capaz de absorver luz tanto frontal quanto traseira, produzindo alto rendimento de energia e baixas perdas de sombreamento. Melhor desempenho em todas as condições climáticas devido ao desempenho superior de baixa irradiância e aos baixos valores de coeficiente de temperatura. Maior confiabilidade e durabilidade com encapsulamento de painel de vidro duplo. Altamente tolerante a condições ambientais adversas e resistente a PID de acordo com IEC 62804. Certificado para suportar fortes cargas de vento (2400Pa) e fortes cargas de neve (5400Pa). Conectores MC4 EVO2 e cabos de saída de 1100 mm. Eficiência até 22%",
    preco: "8.000,00 Mt",
    categoria: "Painel Solar",
    propriedades: "Potência Máxima (Pmax/W): 440",
    propriedades1: "Tensão (V): 38,9",
    propriedades2: "Dimensões: 1762 x 1134 x 30 mm",
  },
{
  id: "1",
  nomeProduto: "Inversor 3200w VITO",
  img: "/Inversor 3200w VITO.jpeg",
  descricao: "O Inversor Híbrido GROWCOL 1P 8Kw 48V + WIFI é um dispositivo projetado para gerenciar e controlar o fluxo de energia em um sistema de energia solar. É um inversor híbrido, o que significa que é capaz de converter energia CC de painéis solares em energia CA para uso em sua casa ou empresa e também carregar um banco de baterias com excesso de energia solar para uso posterior. A classificação de 8Kw refere-se à potência máxima do inversor, o que significa que ele pode suportar até 8.000 watts de energia CA. A classificação de 48 V refere-se à tensão CC do banco de baterias que o inversor pode carregar. A capacidade WIFI permite monitorar e controlar o inversor remotamente usando um aplicativo de smartphone ou interface baseada na web. Isto é útil para acompanhar a produção de energia, verificar o estado do banco de baterias e fazer ajustes nas configurações do sistema. No geral, o inversor híbrido GROWCOL 1P 8Kw 48V + WIFI é um dispositivo versátil e de alta qualidade que pode ajudá-lo a maximizar a eficiência energética do seu sistema de energia solar.",
  preco: "33.000,00 Mt",
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
    preco: "80,00 Mt p/m",
    categoria: "Cabos",
    propriedades: "Cores: Preto e Vermelho",
    propriedades1: "Intervalo de Temperatura: -10° a +80°C",
    propriedades2: "Voltagem Máxima: 1000V",
},
{
    id: "4",
    nomeProduto: "Cabo de Baterria 25mm Vermelho",
    img: "/GC16MMBC-BATTERY-CABLE-16MM-RED-GC-Solar.webp",
    descricao: "Aplicação: Para uso entre o gerador de soldagem, o eletrodo manual e a peça de trabalho. Para uso na indústria automobilística, na construção naval, nos transportes e sistemas de transporte, máquinas para fabricação de ferramentas, robôs de soldagem, etc. Eles são adequados para uso em condições secas e úmidas. Uso externo por tempo limitado período. O produto está em conformidade com a Diretiva de Baixa Tensão 2014/35/EU.",
    preco: "200,00 Mt p/m",
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
    preco: "200,00 Mt p/m",
    categoria: "Cabos",
    propriedades: "Tamanho: 25mm²",
    propriedades1: "Cor: Preto",
    propriedades2: "Comprimento: 1m",
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
},

{
  id: "12",
  nomeProduto: "Painel Solar Trina 545WP",
  img: "/Painel Solar JA 440W.jpeg",
  descricao: "Módulo Trina fotovoltaico monocristalino para potência maiores. Estes módulos têm uma eficiência elevada 20,9%, podendo produzir até 545 Wp por módulo, utiliza tecnologia PERC.",
  preco: "9.000,00 Mt",
  categoria: "Painel Solar",
  propriedades: "Potência Máxima (Pmax/W): 545",
  propriedades1: "Eficiência (%): 20,9",
  propriedades2: "Dimensões: 1762 x 1134 x 30 mm",
},
{
    id: "13",
    nomeProduto: "Bateria de Gel INGLE AGM DG-12V",
    img: "/BateriadeGelINGLEAGMDG12V100Ah20HR.jpeg",
    descricao: "Bateria de gel Agm 100Ah bateria de ciclo profundo 12v - Kle 100ah/20hr",
    preco: "11.000,00 Mt",
    categoria: "Bateria",
    propriedades: "Tipo de Baterria: Baterria de Gel",
    propriedades1: "Voltagem Nominal: 12V",
    propriedades2: "Capacidade Nominal: 120 Ah",
},
{
  id: "14",
  nomeProduto: "Bateria de Gel AGM Solar KLC 12V",
  img: "/Bateria de Gel AGM Solar KLC12V.jpeg",
  descricao: "Bateria Agm de ciclo profundo KLE 12v 200ah 20hr - 4 unidades. Esta bateria é de 12 volts e tem capacidade de 200 A/hora.",
  preco: "25.000,00 Mt",
  categoria: "Bateria",
  propriedades: "Tipo de Baterria: Baterria de Gel",
  propriedades1: "Voltagem Nominal: 12V",
  propriedades2: "Capacidade Nominal: 200 Ah",
},
{
    id: "15",
    nomeProduto: "Bomba 2.2kw/3HP HURRICANE",
    img: "/2.2kw3HP HURRICANE.jpeg",
    descricao: "A temperatura do meio não excede 40 graus. O valor do pH (pH) do meio está entre 6,5-8,5. A proporção de volume de impurezas sólidas no meio não é superior a 0,25% e as partículas não são superiores a 2 mm. A frequência da fonte de alimentação é 50 Hz, a tensão é 220 V CA para uma fase monofásica e a tensão trifásica é 380 V. A faixa de flutuação de tensão é preferencialmente +-10% do valor nominal. A profundidade de mergulho mais profunda não é superior a 150m, e a mais rasa não é inferior a 5m.",
    preco: "9.000,00 Mt",
    categoria: "Bombas Solares",
    propriedades: "Tensão: 220V – 240V 50Hz ",
    propriedades1: "Potência: 1KW 1,3 HP",
    propriedades2: "Altura da cabeça: 11m Saída máxima: 250L/min",
},
{
    id: "16",
    nomeProduto: "Bomba 2.2kw/3HP HURRICANE 4SD12/12",
    img: "/Bomba 2.2kw3HP HURRICANE 4SD1212.jpeg",
    descricao:
      "A bomba de poço completa Hurricane 4SD12/12PMSC vem completa com um motor submersível de 2,2Kw 220V e caixa de controle padrão de 220V para acioná-la e é capaz de fornecer até 90L/min a uma profundidade de 64m.",
    preco: "12.000,00 Mt",
    categoria: "Bombas Solares",
    propriedades: "Tensão: 220V – 240V 50Hz ",
    propriedades1: "Potência: 2,2KW 3 HP",
    propriedades2: "Altura da cabeça: 32m Saída máxima: 90L/min",
  },
  {
    id: "17",
    nomeProduto: "Bomba 7.5kw/10HP HURRICANE 4SD16/25",
    img: "/Bomba 7.5kw10HP HURRICANE 4SD1625.jpeg",
    descricao:
      "A bomba de poço completa Hurricane 4SD16/25PMAC380 vem completa com um motor submersível de 7,5Kw 380V e caixa de controle automática de 380V para acioná-la e é capaz de fornecer até 50L/min a uma profundidade de 145m",
    preco: "19.000,00 Mt",
    categoria: "Bombas Solares",
    propriedades: "Tensão Trifásica: 380V / 50Hz",
    propriedades1: "Potência: 7,5KW 10 HP",
    propriedades2: "Altura da cabeça: 145m Saída máxima: 50L/min",
  },
  {
    id: "18",
    nomeProduto: "Bomba 5.5kw/7.5HP HURRICANE 4SD16/20",
    img: "/Bomba 5.5kw7.5HP HURRICANE 4SD1620.jpeg",
    descricao:
      "A extremidade da bomba submersível Hurricane 4SD16/20 requer um motor submersível de 5,5 Kw para acioná-la e é capaz de fornecer até 50 L/min a uma profundidade de 116 m.",
    preco: "16.500,00 Mt",
    categoria: "Bombas Solares",
    propriedades: "Tensão Trifásica: 380V – 415V / 50Hz",
    propriedades1: "Potência: 5,5KW 7,5 HP",
    propriedades2: "Altura da cabeça: 116m Saída máxima: 50L/min",
  },
  {
    id: "19",
    nomeProduto: "Bomba 4kw/5.5HP HURRICANE 4SD16/16-17",
    img: "/Bomba 5.5kw7.5HP HURRICANE 4SD1620.jpeg",
    descricao:
      "A extremidade da bomba submersível Hurricane 4SD16/16 requer um motor submersível de 4 Kw para acioná-la e é capaz de fornecer até 21000 L/h a uma profundidade de 93 m",
    preco: "14.000,00 Mt",
    categoria: "Bombas Solares",
    propriedades: "Tensão Trifásica: 380V – 415V / 50Hz",
    propriedades1: "Potência: 4KW 5,5 HP",
    propriedades2: "Altura da cabeça: 93m Saída máxima: 21000L/h",
  },
  {
    id: "20",
    nomeProduto: "Bomba 1.5kw/2HP HURRICANE 4SD4/18",
    img: "/Bomba 7.5kw10HP HURRICANE 4SD1625.jpeg",
    descricao:
      "A bomba e motor de poço Hurricane 4SD4/18PM220 vem completo com um motor submersível de 1,5 kW 220 V para acioná-lo e é capaz de fornecer até 20 L/min a uma profundidade de 124 m",
    preco: "9.200,00 Mt",
    categoria: "Bombas Solores",
    propriedades: "Tensão Monofásica: 220V - 240V  / 50Hz",
    propriedades1: "Potência: 2,2KW 3 HP",
    propriedades2: "Altura da cabeça: 124m Saída máxima: 20L/m",
  },
  {
    id: "21",
    nomeProduto: "Bomba 1.5kw/2HP HURRICANE 4SD2/28",
    img: "/Bomba 2.2kw3HP HURRICANE 4SD1212.jpeg",
    descricao:
      "A extremidade da bomba submersível do poço Hurricane 4SD2/28 requer um motor submersível de 1,5Kw para acioná-la e é capaz de fornecer até 10L/min a uma profundidade de 192m. Ele pode ser conectado a um motor submersível de poço monofásico de 220V de 1,5KW ou a um motor trifásico de 380V de 1,5KW.",
    preco: "8.600,00 Mt",
    categoria: "Bombas Solares",
    propriedades: "Tensão Monofásica: 220V - 240V 1,5KW 2HP / 50Hz",
    propriedades1: "Potência: 1,5KW 2 HP",
    propriedades2: "Altura da cabeça: 192m Saída máxima: 10L/m",
  },
  {
    id: "22",
    nomeProduto: "Motor 1.5kw/2HP 380v HURRICANE",
    img: "/Motor 1.5kw2HP 380v HURRICANE.jpeg",
    descricao:
      "O motor submersível de poço Hurricane 150380M foi projetado para acionar qualquer extremidade da bomba de poço submersível Hurricane 1.5KW. Pode ser controlado por uma caixa de controle automática de 1,5KW 380V.",
    preco: "11.300,00 Mt",
    categoria: "Motor",
    propriedades: "Tensão: 380V",
    propriedades1: "Potência: 1,5KW 2 HP",
    propriedades2: "Velocidade: 2850 RPM",
  },
  {
    id: "23",
    nomeProduto: "Motor 1.5kw/2HP 220v HURRICANE",
    img: "/Motor 1.5kw2HP 380v HURRICANE.jpeg",
    descricao:
      "O motor submersível de poço Hurricane 150220M foi projetado para acionar qualquer extremidade da bomba de poço submersível Hurricane 1.5KW. Pode ser controlado por caixas de controle padrão (manual) ou automáticas de 1,5KW 220V",
    preco: "12.400,00 Mt",
    categoria: "Motor",
    propriedades: "Tensão: 220V",
    propriedades1: "Potência: 1,5KW 2 HP",
    propriedades2: "Velocidade: 2850 RPM",
  },
  {
    id: "24",
    nomeProduto: "Motor 2.2kw/3HP 220v HURRICANE",
    img: "/Motor 1.5kw2HP 380v HURRICANE.jpeg",
    descricao:
      "O motor submersível de poço Hurricane 220220M foi projetado para acionar qualquer extremidade da bomba de poço submersível Hurricane 2.2KW. Pode ser controlado por caixas de controle padrão (manual) ou automáticas de 2,2KW 220V.",
    preco: "15.900,00 Mt",
    categoria: "Motor",
    propriedades: "Tensão: 220V",
    propriedades1: "Potência: 2,2KW 3 HP",
    propriedades2: "Velocidade: 2850 RPM",
  },
  {
    id: "25",
    nomeProduto: "Motor 4kw/5.5HP 380v HURRICANE",
    img: "/Motor 1.5kw2HP 380v HURRICANE.jpeg",
    descricao:
      "O motor submersível de poço Hurricane 400380M foi projetado para acionar qualquer extremidade da bomba de poço submersível Hurricane 4KW. Pode ser controlado por uma caixa de controle automática 4KW 380V",
    preco: "24.000,00 Mt",
    categoria: "Motor",
    propriedades: "Tensão: 380V",
    propriedades1: "Potência: 4KW 5,5 HP",
    propriedades2: "Velocidade: 2850 RPM",
  },
  {
    id: "26",
    nomeProduto: "Motor 7.5kw10HP HURRICANE",
    img: "/Motor 7.5kw10HP HURRICANE.jpeg",
    descricao:
      "O motor submersível de poço Hurricane 750380M foi projetado para acionar qualquer extremidade da bomba de poço submersível Hurricane 7.5KW. Pode ser controlado por uma caixa de controle automática de 7,5KW 380V.",
    preco: "30.100,00 Mt",
    categoria: "Motor",
    propriedades: "Tensão: 380V",
    propriedades1: "Potência: 7,5KW 10 HP",
    propriedades2: "Velocidade: 2850 RPM",
  },
  {
    id: "27",
    nomeProduto: "String Box 1/1",
    img: "/String Box 11.jpeg",
    descricao:
      "1 ENTRADA 1 SAÍDA 1000 VCC. IP65 DC string box é projetado para 1 string PV sistema. Para proteção contra sobretensão e proteção contra sobrecarga no lado solar DC. A String-box ecoSolys LT 1 entrada e 1 saída CC foi desenvolvida para garantir a proteção extra do circuito entre o módulo fotovoltaico e o inversor.",
    preco: "11.200,00 Mt",
    categoria: "Acessorios",
    propriedades: "Tensão máxima: 1000V",
    propriedades1:
      "Corrente máxima de curto-circuito CC por entrada (Isc): 15A (Mutável)",
    propriedades2: "Grau de proteção: IP65",
  },
  {
    id: "28",
    nomeProduto: "Inversor solar para bomba de água INVT 2.2kw 220V",
    img: "/Inversor solar para bomba de água INVT 2.2kw 220V.jpeg",
    descricao:
      "Os accionamentos solares vfd da série GD100-PV são os novos lançamentos da INVT especialmente para aplicações de bombagem solar. Com base nos produtos originais de inversores de bombas solares, que otimizam a usabilidade e o desempenho, e ampliam os níveis de tensão aplicáveis e a faixa de potência do produto. O nível de voltagem pode ser aplicado em bombas monofásicas/ trifásicas de 220V, bombas trifásicas de 380V, faixa de potência de 0,4kW a 110kW. Nível de tensão e faixa de potência abrangentes. Suporte monofásico/terceiro fase 220V, e inversor da bomba de água solar trifásica 380V, potência de 0,4kW a 110KW",
    preco: "35.100,00 Mt",
    categoria: "Inversor",
    propriedades: "Potência MÁX: 200.000 W",
    propriedades1: "Intensidade de corrente MÁX: 380 A MÍN: 2,5 A",
    propriedades2: "Grau de proteção: IP20, IP54",
  },
  {
    id: "29",
    nomeProduto: "Inversor monofásico Growatt FPS 5000 ES",
    img: "/Inversor monofásico Growatt FPS 5000 ES.jpeg",
    descricao:
      "Growatt FPS 5000 ES (Frequência de energia solar) é um tipo de inversor solar híbrido projetado para uso em sistemas de energia solar residenciais e comerciais. É uma combinação de um inversor, um carregador de bateria e uma chave de transferência que gerencia o fluxo de energia entre os painéis solares, as baterias e a rede elétrica. O inversor Growatt SPF é conhecido por sua alta eficiência, confiabilidade e flexibilidade. Ele pode funcionar com sistemas solares on-grid e off-grid e pode ser usado para energia de backup durante quedas de energia. Ele também possui uma variedade de recursos, como um controlador de carga MPPT integrado, display LCD e recursos de monitoramento remoto por meio de um aplicativo móvel. Inversor monofásico fora da rede projetado para aplicações residenciais e pequenas indústrias. Capacidades disponíveis: 3.5kW, 5kW. O inversor também está equipado com uma variedade de recursos avançados que facilitam a instalação e o uso. Possui uma interface amigável que permite aos proprietários e instaladores monitorar o desempenho do sistema e ajustar as configurações conforme necessário. O inversor também é compatível com uma variedade de sistemas de monitoramento, incluindo WiFi, Ethernet e GPRS.",
    preco: "55.000,00 Mt",
    categoria: "Inversor",
    propriedades: "Potência MÁX: 6000 W",
    propriedades1: "Intensidade de corrente: 80 A",
    propriedades2: "Grau de proteção: IP20",
  },
  {
    id: "31",
    nomeProduto: "Bateria de Lithium 5,12kw 100AH DYNESS",
    img: "/Bateria de Lithium 5,12kw 100AH DYNESS.jpg",
    descricao: "",
    preco: "100.000,00 Mt",
    categoria: "Bateria",
    propriedades: "Voltagem: 51,2Vdc",
    propriedades1: "Potência: 5,12kw",
    propriedades2: "Corrente: 100AH",
  },
  {
    id: "32",
    nomeProduto: "Led Flood Light 30w",
    img: "/Led Flood Light 30w.png",
    descricao:
      "Projeto de iluminação e circuitos, layout DIALux evo, layout LitePro DLX, layout Agi32, layout CAD automático, medição no local, instalação do projeto",
    preco: "900,00 Mt",
    categoria: "Acessorios",
    propriedades:
      "Tensão de entrada (V): CA LINEAR 110-130V OU 220-240V MALHA TUYA",
    propriedades1: "Vida útil de trabalho (hora): 	50000",
    propriedades2: "Factor de Potência: >0.9",
  },
  {
    id: "33",
    nomeProduto: "Solar Lighting System",
    img: "/Solar Lighting System.png",
    descricao:
      "O EverGen-M é uma solução de iluminação solar autônoma, confiável e de alta potência para todas as aplicações. Este produto inovador oferece uma instalação simples e rápida com desempenho incomparável e serviços conectados no SunnApp. Você tem um projeto semelhante ou algum outro projeto? Fale com nossa equipe de vendas!",
    preco: "1.900,00 Mt",
    categoria: "Acessorios",
    propriedades: "Tensão de entrada (V): DC 6V",
    propriedades1: "Vida útil de trabalho (hora): 	50000",
    propriedades2: "O tempo de carga: 4-6H",
  },
  {
    id: "34",
    nomeProduto: "Led Flood Light 100",
    img: "/Led Flood Light 100.jpg",
    descricao: "",
    preco: "1.800,00 Mt",
    categoria: "Acessorios",
    propriedades: "Tensão de entrada (V): AC 85-265V",
    propriedades1: "Vida útil de trabalho (hora): 	50000",
    propriedades2: "O tempo de carga: 4-6H",
  },
  {
    id: "35",
    nomeProduto: "Led Flood Light 200",
    img: "/Led Flood Light 100.jpg",
    descricao: "",
    preco: "5.900,00 Mt",
    categoria: "Acessorios",
    propriedades: "Tensão de entrada (V): AC 85-265V",
    propriedades1: "Vida útil de trabalho (hora): 	50000",
    propriedades2: "O tempo de carga: 4-6H",
  },
  {
    id: "36",
    nomeProduto: "Controlador de Carga 50 Ah",
    img: "/Controlador de Carga 50 Ah.jpeg",
    descricao: "",
    preco: "4.800,00 Mt",
    categoria: "Acessorios",
    propriedades: "Potência (W): 5000 W",
    propriedades1: "Tensão (V): 1000",
    propriedades2: "Corrente nominal: 10A/20A/30A/40A",
  },
  {
    id: "37",
    nomeProduto: "Controlador de Carga 20 Ah",
    img: "/Controlador de Carga 20 Ah.jpeg",
    descricao: "",
    preco: "1.850,00 Mt",
    categoria: "Acessorios",
    propriedades: "Potência (W): 2000 W",
    propriedades1: "Tensão (V): 1000",
    propriedades2: "Corrente nominal: 10A/20A/30A/40A",
  },
  {
    id: "38",
    nomeProduto: "Alarme Solar",
    img: "/Alarme Solar.webp",
    descricao: "",
    preco: "1.000,00 Mt",
    categoria: "Acessorios",
    propriedades: "Capacidade de carga: 1800mah",
    propriedades1: "Fonte de energia: Alimentado por energia solar/bateria",
    propriedades2: "Material: ABS+PC",
  },
  {
    id: "39",
    nomeProduto: "Disjuntor Duplo 63A",
    img: "/Disjuntor Duplo 63A.webp",
    descricao: "",
    preco: "900,00 Mt",
    categoria: "Acessorios",
    propriedades: "Tensão: 220/380VAC",
    propriedades1: "Corrente de Corte: 63A",
    propriedades2: "Frequência: 50 Hz",
  },
  {
    id: "40",
    nomeProduto: "Fusivel Solar 32",
    img: "/Fusivel Solar 32.webp",
    descricao:
      "Fusível aplicado em porta fusível de string box em sistemas fotovoltaicos.",
    preco: "1,200,00 Mt",
    categoria: "Acessorios",
    propriedades: "Tensão: 1000 Vcc",
    propriedades1: "Corrente de Corte: 32A",
    propriedades2: "Dimensões: 10 x 38 mm (Diâmetro x Comprimento)",
  },
  {
    id: "41",
    nomeProduto: "Porta Fusivel de Bateria",
    img: "/Porta Fusivel de Bateria.webp",
    descricao:
      "Porta fusível aplicado para alojar fusíveis, com dimensões de 10x38mm, em string box de sistemas de energia solar fotovoltaica. Fusível aplicado especificamente string box de sistemas fotovoltaicos on-grid ou off-grid. ",
    preco: "1,500,00 Mt",
    categoria: "Acessorios",
    propriedades: "Tensão: 1000V",
    propriedades1: "Corrente: 32A",
    propriedades2: "Dimensões: 10 x 38 mm (Diâmetro x Comprimento)",
  },
  {
    id: "42",
    nomeProduto: "Cordão de Luz Eletrica",
    img: "/cordao_de_luz.webp",
    descricao:
      "Ideal para decoração e iluminação de eventos, tais como casamentos, aniversários, áreas externas e internas, trilhas etc.",
    preco: "2,900,00 Mt",
    categoria: "Acessorios",
    propriedades: "Comprimento do Cabo: 10M",
    propriedades1: "Tensão Máxima: 250V",
    propriedades2: "Potência por Soquete: 800W / 40W",
  },
  {
    id: "43",
    nomeProduto: "Kit de Ligação Resina",
    img: "/kit_resina.webp",
    descricao:
      "Elevada resistência ao desgaste, o que possibilita seu uso em áreas extensas e sujeitas a grande esforço mastigatório.",
    preco: "650,00 Mt",
    categoria: "Acessorios",
    propriedades: "Preenchimento: 2,5mm",
    propriedades1:
      "Composição: TEGDMA, BisGMA, Cerâmica silanizada tratada, 2-Benzotriazolil-4-metilfenol",
    propriedades2: "Consistência: Composta",
  },
  {
    id: "44",
    nomeProduto: "Motor Solar 1500w",
    img: "/dc-motor-1500.webp",
    descricao: "",
    preco: "34,700,00 Mt",
    categoria: "Motor",
    propriedades: "Tensão: 380V",
    propriedades1: "Potência: 1,5KW 2 HP",
    propriedades2: "Velocidade: 2850 RPM",
  },
  {
    id: "45",
    nomeProduto: "Bomba de Pressao Certifuga 750PW",
    img: "/Certifuga 750PW.webp",
    descricao: "Adequada para água, óleo e outros líquidos não agressivos",
    preco: "4,300,00 Mt",
    categoria: "Bombas",
    propriedades: "Dimensões: 405 mm x 175 mm x 165 mm",
    propriedades1: "Potência (W): 750",
    propriedades2: "Peso: 9kg",
  },
  {
    id: "46",
    nomeProduto: "Bomba de Pressao Certifuga 550PW",
    img: "/bomba-centrifuga-550.webp",
    descricao: "Adequada para água, óleo e outros líquidos não agressivos",
    preco: " 3,700,00 Mt",
    categoria: "Bombas",
    propriedades: "Presão: 4,0 bar",
    propriedades1: "Potência (W): 550",
    propriedades2: "Altura máxima de entrega: 40m",
  },
  {
    id: "47",
    nomeProduto: "Corda Para Bomba 6mm",
    img: "/corda-para-Bomba-8mm.webp",
    descricao: "",
    preco: "  650,00 Mt",
    categoria: "Acessorios",
    propriedades: "Diametro: 6mm",
    propriedades1: "Comprimento: 100m",
    propriedades2: "",
  },
  {
    id: "48",
    nomeProduto: "Corda Para Bomba 8mm",
    img: "/cordaParaBomba8mm.webp",
    descricao: "",
    preco: "1.000,00 Mt",
    categoria: "Acessorios",
    propriedades: "Diametro: 8mm",
    propriedades1: "Comprimento: 100m",
    propriedades2: "",
  },
  {
    id: "49",
    nomeProduto: "Corda Para Bomba 10mm",
    img: "/corda_trancada_pet_10mm.webp",
    descricao: "",
    preco: "1.500,00 Mt",
    categoria: "Acessorios",
    propriedades: "Diametro: 10mm",
    propriedades1: "Comprimento: 100m",
    propriedades2: "",
  },
  {
    id: "50",
    nomeProduto: "Rolo de Tubo 50mm",
    img: "/tubo-flexivel-01.jpeg",
    descricao:
      "Uma das principais vantagens do uso de canos flexíveis é a flexibilidade que eles oferecem, permitindo que eles sejam instalados em espaços apertados e curvas acentuadas. Além disso, os canos flexíveis são mais leves e fáceis de manusear do que os canos rígidos, o que torna a instalação mais fácil e rápida. Outra vantagem é a capacidade de absorver vibrações, o que ajuda a reduzir o ruído e a aumentar a vida útil do sistema.",
    preco: "15.000,00 Mt",
    categoria: "Acessorios",
    propriedades: "Diametro: 50mm",
    propriedades1: "Comprimento: 100m",
    propriedades2: "",
  },
  {
    id: "51",
    nomeProduto: "Cabo submersivel 3/2.5",
    img: "/caboSubmersivel.webp",
    descricao:
      "Uma das principais vantagens do uso de canos flexíveis é a flexibilidade que eles oferecem, permitindo que eles sejam instalados em espaços apertados e curvas acentuadas. Além disso, os canos flexíveis são mais leves e fáceis de manusear do que os canos rígidos, o que torna a instalação mais fácil e rápida. Outra vantagem é a capacidade de absorver vibrações, o que ajuda a reduzir o ruído e a aumentar a vida útil do sistema.",
    preco: "100,00 Mt p/m",
    categoria: "Cabos",
    propriedades: "Material da cobertura: PVC",
    propriedades1: "CMateriais do condutor: Cobre",
    propriedades2: "Modelo: 3x2,50",
  },
  {
    id: "52",
    nomeProduto: "Rolo de Tubo 40mmx100m",
    img: "/Rolo de Tubo 40mmx100m.webp",
    descricao: "",
    preco: "16.000,00 Mt p/m",
    categoria: "Acessorios",
    propriedades: "Pressão: 40 Bar",
    propriedades1: "Rolo: 100 Metros",
    propriedades2: "Medida: 8x14",
  },
  {
    id: "53",
    nomeProduto: "Bomba 0.37kw/0.5HP HURRICANE",
    img: "/Bomba 0.37kw0.5HP HURRICANE.jpeg",
    descricao: "A bomba e motor de poço Hurricane 3SD2/15 vêm completos com um motor submersível de 0,37Kw 220V para acioná-la e é capaz de fornecer até 10L/min a uma profundidade de 62m.",
    preco: "14.100,00 Mt",
    categoria: "Bombas Solares",
    propriedades: "Voltagem Normal: 220V – 240V / 50Hz",
    propriedades1: "Potência: 0,37KW 0,5HP",
    propriedades2: "Diâmetro da bomba: 750mm",
  },
  {
    id: "54",
    nomeProduto: "Bomba 0.75kw1HP HURRICANE",
    img: "/Bomba 0.75kw1HP HURRICANE.jpeg",
    descricao: "A bomba e motor de poço Hurricane 3SD2/27 vem completo com um motor submersível de 0,75 kW 220 V para acioná-lo e é capaz de fornecer até 10 L/min a uma profundidade de 112 m.",
    preco: "17.200,00 Mt",
    categoria: "Bombas Solares",
    propriedades: "Voltagem Normal: 220V – 240V / 50Hz",
    propriedades1: "Potência: 0,75KW 1HP",
    propriedades2: "Diâmetro da bomba: 750mm",
  },
  {
    id: "55",
    nomeProduto: "Bomba 1.1kw/1.5HP HURRICANE 3SDM2/39",
    img: "/Bomba 0.75kw1HP HURRICANE.jpeg",
    descricao: "A bomba e motor de poço Hurricane 3SD2/27 vem completo com um motor submersível de 0,75 kW 220 V para acioná-lo e é capaz de fornecer até 10 L/min a uma profundidade de 112 m.",
    preco: "22,100,00 Mt",
    categoria: "Bombas Solares",
    propriedades: "Voltagem Normal: 220V – 240V / 50Hz",
    propriedades1: "Potência: 1,1KW 1,5HP",
    propriedades2: "Diâmetro da bomba: 750mm",
  },
  {
    id: "56",
    nomeProduto: "Bomba 2,2kw/3HP HURRICANE",
    img: "/Bomba 2,2kw3HP HURRICANE.jpeg",
    descricao: "A extremidade da bomba submersível do poço Hurricane 4SD4/24 requer um motor submersível de 2,2Kw para acioná-la e é capaz de fornecer até 20L/min a uma profundidade de 165m. Ele pode ser conectado a um motor submersível de poço monofásico de 220V de 2,2KW ou a um motor submersível de poço trifásico de 380V de 2,2KW.",
    preco: "10,000,00 Mt",
    categoria: "Bombas Solares",
    propriedades: "Voltagem Normal: 220V – 240V / 50Hz",
    propriedades1: "Potência:  2,2KW 3HP",
    propriedades2: "Diâmetro da bomba: 938mm",
  },
  {
    id: "57",
    nomeProduto: "Bomba Solar SE1 Sem Painel Solar",
    img: "/Bomba Solar SE1 Sem Painel Solar.jpeg",
    descricao: "A extremidade da bomba submersível do poço Hurricane 4SD4/24 requer um motor submersível de 2,2Kw para acioná-la e é capaz de fornecer até 20L/min a uma profundidade de 165m. Ele pode ser conectado a um motor submersível de poço monofásico de 220V de 2,2KW ou a um motor submersível de poço trifásico de 380V de 2,2KW.",
    preco: "39,000,00 Mt",
    categoria: "Bombas",
    propriedades: "Peso da bomba: 12,7 kg",
    propriedades1: "Dimensões: 700x100x680mm",
    propriedades2: "Peso do painel de 60 W: 9 kg",
  },
  {
    id: "58",
    nomeProduto: "Painel Solar 60W Para SF2 e SF1",
    img: "/paineis.png",
    descricao: "A extremidade da bomba submersível do poço Hurricane 4SD4/24 requer um motor submersível de 2,2Kw para acioná-la e é capaz de fornecer até 20L/min a uma profundidade de 165m. Ele pode ser conectado a um motor submersível de poço monofásico de 220V de 2,2KW ou a um motor submersível de poço trifásico de 380V de 2,2KW.",
    preco: "8,000,00 Mt",
    categoria: "Painel Solar",
    propriedades: "Tensão Nominal: 29,68V",
    propriedades1: "Corrente nominal: 2.03A",
    propriedades2: "Tensão de circuito aberto: 35,22V",
  },
  {
    id: "59",
    nomeProduto: "Bomba solar SF2 sem painel",
    img: "/Bomba solar SF2 sem painel.jpeg",
    descricao: "A Futurepump SF2 é uma bomba de superfície robusta projetado para pequenos agricultores com águas rasas fontes, pode bombear até 1 litro por segundo de água usando apenas a energia do sol.",
    preco: "45,000,00 Mt",
    categoria: "Bombas",
    propriedades: "Corrente: 3A DC",
    propriedades1: "Potência: 360 W",
    propriedades2: "Peso do painel de 60 W: 9 kg",
  },
  {
    id: "61",
    nomeProduto: "Cabo de Bateria Vermelho 25mm",
    img: "/Cabo de Bateria Vermelho 25mm.jpeg",
    descricao: "Cabo automotivo de alto desempenho projetado para transferência eficiente de energia em aplicações automotivas e marítimas. Este cabo vermelho de 25 mm é construído com materiais duráveis, garantindo condutividade confiável e excelente resistência ao calor, abrasão e produtos químicos. Seu design flexível e robusto permite fácil instalação e roteamento, tornando-o a escolha ideal para conectar baterias e distribuir energia em vários veículos e embarcações marítimas. Confiável e seguro, este cabo de bateria garante um fluxo consistente de energia, contribuindo para o desempenho ideal dos sistemas elétricos.",
    preco: "200,00 Mt p/m",
    categoria: "Cabos",
    propriedades: "",
    propriedades1: "Cor: Vermelho",
    propriedades2: "Comprimento: 1m",
  },
  {
    id: "62",
    nomeProduto: "Par de Conector Mc4 Solar",
    img: "/Par de Conector Mc4 Solar.jpeg",
    descricao: "Os conectores Mc4 da Staubli são extremamente resistentes e profissionais em sua construção permitindo uma conexão segura dos cabos de painéis solares. Possuem borracha para vedação e terminais metálicos de alta condutibilidade compostos por cobre estanhado.",
    preco: "200,00 Mt p/m",
    categoria: "Acessorios",
    propriedades: "Tensão suportada: 1500Vdc",
    propriedades1: "Sistema de contato: MULTILAM",
    propriedades2: "Faixa de temperatura ambiente suportada: -40°c a 85°c",
  },
  {
    id: "63",
    nomeProduto: "Adaptador Macho de 25mm",
    img: "/Adaptador Macho de 25mm.jpeg",
    descricao: "Adaptador de Transição PPR Fêmea/Macho Amanco é a escolha ideal para condução de água quente e fria em instalações hidráulicas. Adaptador de Transição PPR Fêmea/Macho Amanco é produzido com um material inovador e de última geração, o Polipropileno Copolímero Random - tipo 3. Adaptador de Transição PPR Fêmea/Macho Amanco suporta altas temperaturas, trabalha com temperaturas de serviço de 70°C a 60 m.c.a., suportando picos de 95°C a 60 m.c.a.",
    preco: "75,00 Mt p/m",
    categoria: "Acessorios",
    propriedades: "",
    propriedades1: "",
    propriedades2: "",
  },
  {
    id: "64",
    nomeProduto: "Adaptador Macho de 32mm",
    img: "/Adaptador Macho de 32mm.jpeg",
    descricao: "O Adaptador PPR 32x1 Fêmea Macho Transição Amanco é um acessório utilizado em instalações hidráulicas para realizar a transição entre tubulações de diferentes materiais. Ele é fabricado em PPR (Polipropileno Copolímero Random), um material resistente, durável e com alta resistência química. Com um diâmetro de 32mm e uma rosca de 1 polegada, este adaptador é indicado para uso em instalações hidráulicas residenciais e comerciais. Ele possui uma extremidade com rosca macho e outra com rosca fêmea, o que permite sua conexão com diferentes tipos de tubulação, como PVC, ferro galvanizado, cobre, entre outros.",
    preco: "100,00 Mt p/m",
    categoria: "Acessorios",
    propriedades: "",
    propriedades1: "",
    propriedades2: "",
  },
  {
    id: "65",
    nomeProduto: "Adaptador Macho de 40mm",
    img: "/Adaptador Macho de 32mm.jpeg",
    descricao: "Em Polipropileno Copolímero Random - tipo 3, na cor verde, para água quente e fria. Solda feita por termofusão (260oC), não apresenta emendas. Alta resistência química a substâncias ácidas ou básicas, como ferro,cloro ou flúor; Resistente ao impacto, não amassa, não incrusta e não reduz o diâmetro com o tempo.",
    preco: "200,00 Mt p/m",
    categoria: "Acessorios",
    propriedades: "",
    propriedades1: "",
    propriedades2: "",
  },
  {
    id: "66",
    nomeProduto: "Cabo solar vermelho 4mm",
    img: "/Cabo solar vermelho 4mm.jpeg",
    descricao: "",
    preco: "7.300,00 Mt p/m",
    categoria: "Cabos",
    propriedades: "Diâmetro: 4mm",
    propriedades1: "Peso [Kg]: 37,5",
    propriedades2: "",
  },
  {
    id: "67",
    nomeProduto: "Cabo solar preto 4mm",
    img: "/Cabo solar preto 4mm.jpeg",
    descricao: "",
    preco: "7.300,00 Mt p/m",
    categoria: "Cabos",
    propriedades: "Diâmetro: 4mm",
    propriedades1: "Peso [Kg]: 37,5",
    propriedades2: "",
  },
]
const listaSelecionada = [];
export default function DetalhesProdutos() {
  const [idProduto, setIdProduto] = useState("");
  const [listaProduto, setListaProduto] = useState([]);
  useEffect(() => {
    setIdProduto(localStorage.getItem("id"));
  }, [])
  
  return (
    <section className="mt-8">
        {listaProdutos.map((select) => 
                <>
                {select.id === idProduto && (
                  <>
                    <div className="grid sm:grid-cols-3 gap-4 mt-2 mb-12">
                      <div className="shadow-md p-2">
                      <Image  src={select.img}
                              width="0"
                              height="0"
                              sizes="100vw"
                              className="w-full h-auto" alt={'sallad'} />
                          
                      </div>
                      <div className="shadow-md p-2">
                          <div className="text-center text-primary font-semibold text-3xl">{select.nomeProduto}</div>
                          <div className="flex flex-row gap-2">
                              <div>
                              <small className="flex flex-row">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-4 h-4 text-primary">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-4 h-4 text-primary">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-4 h-4 text-primary">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-4 h-4 text-primary">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-4 h-4 text-primary">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-4 h-4 text-primary">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                  </svg>
                                  <h3>Quantas estrelas da a este produto?</h3>
                              </small>
                              </div>
                          </div>
                          <div className="text-primary font-semibold text-xl mt-4">Propriedades</div>                        
                          <ul className="list-disc ml-6">
                              <li><small className=" flex text-justify font-semibold">{select.propriedades}</small></li>
                              <li><small className=" flex text-justify font-semibold">{select.propriedades1}</small></li>
                              <li><small className=" flex text-justify font-semibold">{select.propriedades2}</small></li>
                          </ul>
                          <div className="text-primary font-semibold text-xl mt-4">Descrição</div>
                          <small className=" flex text-justify">{select.descricao}</small>
                          <div className="text-primary font-semibold text-xl mt-4">Categoria</div>
                          <ul className="list-disc ml-6">
                              <li><small className=" flex text-justify font-bold">{select.categoria}</small></li>
                          </ul>
                      </div>
                      <div className="shadow-md p-2">
                      <div className="text-primary font-semibold text-3xl">Preço: {select.preco}</div>
                      <div className="text-primary font-semibold text-xl">Em Estoque</div>
                      <div className="mt-64">
                          <Link href="https://api.whatsapp.com/send?phone=258871191481">
                              <button className="flex justify-center bg-primary flex items-center gap-2 text-white px-2 py-2 rounded-full mt-4">            
                              Solicitar Cotação
                              </button>
                          </Link> 
                      </div>          
                      </div>
                    </div>
                    
                    <span className="text-primary font-bold">
                      Produtos Relacionados
                    </span>
                    <div className="grid sm:grid-cols-9 gap-4 mt-2">
                    {listaProdutos.map((lect) => 
                      <>
                        {select.categoria === lect.categoria && (
                          <div className="shadow-md p-2" onClick={() => setIdProduto(lect.id)}>
                            <Image  src={lect.img}
                              width="0"
                              height="0"
                              sizes="100vw"
                              className="w-full h-auto" alt={'sallad'} />             
                          </div>
                        )}
                      </>
                    )}                    
                    </div>
                  </>
                )}
                
                </>
                )}
        
      </section>
  );
}
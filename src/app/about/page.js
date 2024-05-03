'use client';
import {useEffect, useState} from "react";
import Image from "next/image";

export default function AboutPage() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  return (
    <section className="mt-8">
    <Image src={'/tlhavikaFundo.jpg'} 
    alt="Logo"
    width="0"
    height="0"
    sizes="100vw"
    className="w-full h-auto"/>
      <h3 className="text-primary font-semibold mt-4">Sobre Nós</h3>
      <hr/>
      <p className="text-justify">Nossa empresa é líder no fornecimento de soluções energéticas renováveis, com foco especializado em painéis solares e equipamentos relacionados. Estamos comprometidos em impulsionar a transição global para uma economia de baixo carbono, fornecendo produtos e serviços de alta qualidade que capacitam indivíduos, empresas e comunidades a adotarem fontes de energia limpa e sustentável.</p>
      <h3 className="text-primary font-semibold mt-4">Missão</h3>
      <hr/>
      <p className="text-justify">Nossa missão é capacitar o mundo com energia limpa e renovável, transformando a maneira como a energia é produzida e consumida. Estamos empenhados em fornecer soluções acessíveis, eficientes e confiáveis que promovam um futuro sustentável para as gerações atuais e futuras.</p>
      <h3 className="text-primary font-semibold mt-4">Visão</h3>
      <hr/>
      <p className="text-justify">Nossa visão é a de um mundo onde a energia é uma força para o bem, impulsionando o progresso humano sem comprometer o planeta que chamamos de lar. Visualizamos um futuro onde a energia solar renovável é a principal fonte de energia, alimentando comunidades, empresas e indústrias de forma limpa, eficiente e acessível.</p>
      <h3 className="text-primary font-semibold mt-4">Valores</h3>
      <hr/>
      <p className="text-justify"><span className="font-semibold">1.Sustentabilidade: </span>Colocamos a sustentabilidade no centro de tudo o que fazemos, buscando constantemente minimizar nosso impacto ambiental e promover práticas comerciais responsáveis que protejam e regenerem o planeta.</p>
      <p className="text-justify mt-2"><span className="font-semibold">2.Inovação: </span>Estimulamos a inovação contínua em tecnologia, processos e modelos de negócios, buscando constantemente maneiras de melhorar e oferecer soluções mais eficientes e eficazes para nossos clientes e para o mundo.</p>
      <p className="text-justify mt-2"><span className="font-semibold">3.Integridade: </span>Operamos com os mais altos padrões éticos e de integridade em todas as nossas interações, mantendo a transparência, honestidade e respeito em nossos relacionamentos com clientes, parceiros e comunidades.</p>
      <p className="text-justify mt-2"><span className="font-semibold">4.Qualidade: </span>Comprometemo-nos a fornecer produtos e serviços da mais alta qualidade, garantindo a satisfação do cliente, a confiabilidade dos sistemas solares e a durabilidade a longo prazo.</p>
      <p className="text-justify mt-2"><span className="font-semibold">5.Empoderamento: </span>Capacitamos nossos clientes, funcionários e comunidades a adotarem a energia solar e a agirem como agentes de mudança em direção a um futuro mais sustentável e resiliente.</p>
      <p className="text-justify mt-2"><span className="font-semibold">6.Colaboração: </span>Reconhecemos a importância da colaboração e do trabalho em equipe, tanto internamente quanto com nossos parceiros e partes interessadas, para alcançar nossos objetivos comuns e impulsionar a transição global para a energia solar renovável.</p>
      <p className="text-justify mt-2"><span className="font-semibold">7.Diversidade e Inclusão: </span>Valorizamos e celebramos a diversidade em todas as suas formas, promovendo um ambiente inclusivo onde todas as vozes são ouvidas, respeitadas e valorizadas.</p>
      <p className="text-justify mt-2"><span className="font-semibold">8.Responsabilidade Social: </span>Comprometemo-nos a retribuir às comunidades em que operamos, investindo em programas e iniciativas que promovam o desenvolvimento comunitário, a igualdade de acesso à energia limpa e o bem-estar social.</p>
    </section>
  );
}
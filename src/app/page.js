import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      {/* <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Nossa História'}
          mainHeader={'Sobre Nós'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          Nossa empresa é líder no fornecimento de soluções energéticas renováveis, com foco especializado em painéis solares e equipamentos relacionados. Estamos comprometidos em impulsionar a transição global para uma economia de baixo carbono, fornecendo produtos e serviços de alta qualidade que capacitam indivíduos, empresas e comunidades a adotarem fontes de energia limpa e sustentável.
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Não hesite'}
          mainHeader={'Contacte-nos'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:(+258) 86 551 7841">
            (+258) 86 551 7841
          </a>
        </div>
      </section>  */}
    </>
  )
}

'use client';
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import PorqueEscolher from "@/components/menu/PorqueEscolher";
export default function HomeMenu() {
  return (
    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          {/* <Image src={'/cabo.png'} width={109} height={189}  alt={'sallad'} /> */}
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          {/* <Image src={'/conector2.png'} width={107} height={195} alt={'sallad'} /> */}
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders
          subHeader={'confira'}
          mainHeader={'Os Nossos Melhores Produtos e Serviços'} />
      </div>
      <div className="flex justify-center w-full">
        <MenuItem />
      </div>
      <div className="flex justify-center w-full">
        <PorqueEscolher />
      </div>
      
    </section>
  );
}
import Right from "@/components/icons/Right";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero md:mt-4 max-w-6xl mx-auto">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          A Vida<br />
          Ganha Mais Brilho<br />
          Com A&nbsp;
          <span className="text-primary">
            Tlhavika
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Tlhavika é a peça que faltava para completar cada dia da sua vida, uma alegria de vida simples e com mais brilho
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Saiba mais..
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image src={'/inicioTop.png'} layout={'fill'} fill={true} objectFit={'contain'} alt={'Tlhavika'} />
      </div>
    </section>
  );
}
import {AppProvider} from "@/components/AppContext";
import Header from "@/components/layout/Header";
import { Roboto } from 'next/font/google'
import './globals.css'
import {Toaster} from "react-hot-toast";
import Image from "next/image";

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'Tlhavika',
  description: 'Venda de Produtos e Serviços',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        <Image  src={'/energy.png'}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto" 
          alt={'sallad'} />
        <main className="p-4">
          <AppProvider>
            <Toaster />
            <Header />
            {children}
            <footer className="border-t p-8 text-center text-gray-500 mt-16">
              &copy; 2024 Tlhavika. Todos os direitos reservados 
            </footer>
          </AppProvider>
        </main>
      </body>
    </html>
  )
}

import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
import SectionHeaders from "@/components/layout/SectionHeaders";
import Image from "next/image";

export default function Carouselt() { 
  return (
    <>
    <div className="max-w-2xl mx-auto mt-6"> 
        <div className="text-center mb-4">
            <SectionHeaders
            subHeader={'historico'}
            mainHeader={'Serviços Prestados'} />
        </div>
        <Carousel className='min-h-24'> 
            <div> 
                <Image src={'/slayde1.png'} alt="image1" height="300" width="200" className='h-full max-h-96'/>
            </div> 
            <div> 
                <Image src="/slayde2.png" alt="image2" height="300" width="200" className='h-full max-h-96' />
            </div> 
            <div> 
                <Image src="/slayde3.png" alt="image3" height="300" width="200" className='h-full max-h-96' />
            </div> 
            <div> 
                <Image src="/slayde4.png" alt="image4" height="300" width="200" className='h-full max-h-96' />
            </div> 
            <div> 
                <Image src="/slayde5.png" alt="image5" height="300" width="200" className='h-full max-h-96' />
            </div> 
            <div> 
                <Image src="/slayde6.png" alt="image6" height="300" width="200" className='h-full max-h-96' />
            </div> 
            <div> 
                <Image src="/slayde7.png" alt="image7" height="300" width="200" className='h-full max-h-96' />
            </div> 
            <div> 
                <Image src="/slayde8.png" alt="image8" height="300" width="200" className='h-full max-h-96' />
            </div> 
        </Carousel> 
    </div> 
    </>
  );
}
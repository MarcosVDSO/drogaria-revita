// src/components/HeroSection.tsx
import { Button } from './ui/button';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

export function HeroSection() {
    const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Avenida+principal,+84,+jardim+América,+São+Luís+-MA,+65058-284";

    return (
        <section id="home" className="h-screen w-full flex items-center justify-center pt-20">
            <div className="container mx-auto text-center flex flex-col items-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
                    Drogaria Revita: <br /> <span className="text-brand-green">Confiança e economia</span> para sua saúde.
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-gray-600">
                    O melhor atendimento da região com uma grande variedade de produtos e genéricos com descontos imperdíveis.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-brand-green hover:bg-brand-green/90 w-full sm:w-auto">
                            <MapPin className="mr-2 h-5 w-5" />
                            Ver Rota no Mapa
                        </Button>
                    </a>
                    <a href="https://wa.me/5598985877631" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="outline" className="w-full sm:w-auto">
                            Ou peça sua entrega para toda São Luís
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
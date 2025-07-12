// src/components/ServicesSection.tsx
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Bike, Syringe, Gauge, Ear } from 'lucide-react';

const services = [
    { icon: <Bike className="h-10 w-10 text-brand-green" />, title: "Entrega em Domicílio", description: "Receba seus produtos com rapidez e segurança em toda São Luís." },
    { icon: <Syringe className="h-10 w-10 text-brand-green" />, title: "Aplicação de Injetáveis", description: "Procedimento seguro realizado por profissionais qualificados." },
    { icon: <Gauge className="h-10 w-10 text-brand-green" />, title: "Aferição de Pressão e Glicemia", description: "Monitore sua saúde com precisão e cuidado." },
    { icon: <Ear className="h-10 w-10 text-brand-green" />, title: "Perfuração de Orelha", description: "Primeiro furo humanizado e seguro para todas as idades." },
];

export function ServicesSection() {
    return (
        <section id="servicos" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Nossos Serviços e Facilidades</h2>
                    <p className="text-gray-600 mt-2">Cuidamos de você com uma gama completa de serviços.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="text-center flex flex-col items-center p-6 hover:shadow-lg transition-shadow">
                            <CardHeader className="items-center">
                                {service.icon}
                                <CardTitle className="mt-4">{service.title}</CardTitle>
                            </CardHeader>
                            <CardDescription>{service.description}</CardDescription>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
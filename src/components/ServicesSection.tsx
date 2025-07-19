import { Card, CardTitle, CardDescription } from './ui/card';
import { Bike, Syringe, Gauge, Ear } from 'lucide-react';

const services = [
    {
        icon: <Bike className="h-10 w-10 text-white transition-colors duration-300 group-hover:text-[#014424]" />,
        title: "Entrega em Domicílio",
        description: "Receba seus produtos com rapidez e segurança em toda São Luís.",
    },
    {
        icon: <Syringe className="h-10 w-10 text-white transition-colors duration-300 group-hover:text-[#014424]" />,
        title: "Aplicação de Injetáveis",
        description: "Procedimento seguro realizado por profissionais qualificados.",
    },
    {
        icon: <Gauge className="h-10 w-10 text-white transition-colors duration-300 group-hover:text-[#014424]" />,
        title: "Aferição de Pressão e Glicemia",
        description: "Monitore sua saúde com precisão e cuidado.",
    },
    {
        icon: <Ear className="h-10 w-10 text-white transition-colors duration-300 group-hover:text-[#014424]" />,
        title: "Perfuração de Orelha",
        description: "Primeiro furo humanizado e seguro para todas as idades.",
    },
];

export function ServicesSection() {
    return (
        <section id="servicos" className="py-20 bg-gray-50 mt-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Nossos Serviços e Facilidades</h2>
                    <p className="text-gray-600 mt-2">
                        Cuidamos de você com uma gama completa de serviços.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="group bg-[#014424] text-white flex flex-col items-center text-center p-6 transition-all duration-300 hover:bg-white hover:text-[#014424] hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
                        >
                            <div className="flex flex-col items-center">
                                {service.icon}
                                <CardTitle className="mt-4 transition-colors duration-300 group-hover:text-[#014424]">
                                    {service.title}
                                </CardTitle>
                            </div>
                            <CardDescription className="text-white transition-colors duration-300 group-hover:text-[#014424]">
                                {service.description}
                            </CardDescription>

                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
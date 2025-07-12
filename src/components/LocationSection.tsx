// src/components/LocationSection.tsx
import { Button } from './ui/button';
import { MapPin, Clock, Phone } from 'lucide-react';

export function LocationSection() {
    const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Avenida+principal,+84,+jardim+América,+São+Luís+-MA,+65058-284";

    return (
        <section id="localizacao" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Venha nos Visitar!</h2>
                    <p className="text-gray-600 mt-2">Estamos de portas abertas para te receber.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.434608750805!2d-44.2255850852438!3d-2.580195998188151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f695a452d3a37b%3A0xe8d0774a387532d8!2sAv.%20Principal%2C%2084%20-%20Jardim%20Am%C3%A9rica%2C%20S%C3%A3o%20Lu%C3%ADs%20-%20MA%2C%2065058-284!5e0!3m2!1spt-BR!2sbr!4v1672856407519!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg shadow-md"
                        ></iframe>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <MapPin className="h-6 w-6 text-brand-green mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg">Endereço</h3>
                                <p className="text-gray-600">Avenida Principal, 84, Jardim América, São Luís - MA, 65058-284</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Clock className="h-6 w-6 text-brand-green mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg">Horário de Funcionamento</h3>
                                <p className="text-gray-600">Todos os dias, incluindo feriados, das 7h às 22h.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="h-6 w-6 text-brand-green mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg">Contato</h3>
                                <p className="text-gray-600">Fone/Whatsapp: (98) 98587-7631</p>
                            </div>
                        </div>
                        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="w-full bg-brand-green hover:bg-brand-green/90">
                                Ver Rota no Google Maps
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
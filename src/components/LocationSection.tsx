// src/components/LocationSection.tsx
import { Button } from './ui/button';
import { MapPin, Clock, Phone } from 'lucide-react';

export function LocationSection() {
    const googleMapsUrl = "https://www.google.com/maps/place/Drogaria+Revita+%7C+Delivery+%7C+Farm%C3%A1cia+em+S%C3%A3o+Luiz/@-2.5844364,-44.1993205,17z/data=!3m1!4b1!4m6!3m5!1s0x7f69b000717b7c9:0x1c02cab4883d2e5b!8m2!3d-2.5844418!4d-44.1967456!16s%2Fg%2F11v_5r4nj8?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D";

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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4904.353244506261!2d-44.201616515383876!3d-2.5844364316855564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f69b000717b7c9%3A0x1c02cab4883d2e5b!2sDrogaria%20Revita%20%7C%20Delivery%20%7C%20Farm%C3%A1cia%20em%20S%C3%A3o%20Luiz!5e1!3m2!1spt-BR!2sbr!4v1752356290027!5m2!1spt-BR!2sbr"
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
                            <MapPin className="h-6 w-6 text-[#014424] mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg">Endereço</h3>
                                <p className="text-gray-600">Avenida Principal, 84, Jardim América, São Luís - MA, 65058-284</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Clock className="h-6 w-6 text-[#014424] mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg">Horário de Funcionamento</h3>
                                <p className="text-gray-600">Todos os dias, incluindo feriados, das 7h às 22h.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="h-6 w-6 text-[#014424] mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg">Contato</h3>
                                <p className="text-gray-600">Fone/Whatsapp: (98) 98587-7631</p>
                            </div>
                        </div>
                        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="w-full bg-[#014424] hover:bg-[#014424]/90">
                                Ver Rota no Google Maps
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
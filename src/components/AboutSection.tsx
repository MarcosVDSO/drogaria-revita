// src/components/AboutSection.tsx
import Image from 'next/image';

export function AboutSection() {
    return (
        <section id="sobre" className="py-20">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <h2 className="text-3xl font-bold text-gray-800">A farmácia de confiança do Jardim América</h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Na Drogaria Revita, nosso compromisso é com seu bem-estar. Somos conhecidos pelo atendimento <strong>carismático</strong> e <strong>confiável</strong>, oferecendo sempre os melhores preços e uma equipe pronta para ajudar.
                    </p>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Nossa missão é ser a farmácia em que você e sua família podem confiar, sempre com a <strong>agilidade</strong> que você precisa.
                    </p>
                </div>
                <div className="order-1 md:order-2">
                    <Image
                        src="/facode.jpg"
                        alt="Fachada da Drogaria Revita"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
                    />
                </div>
            </div>
        </section>
    );
}
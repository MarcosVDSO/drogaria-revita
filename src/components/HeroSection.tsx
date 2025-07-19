"use client"; // Marca este como um Componente de Cliente

// src/components/HeroSection.tsx
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

// Array com as URLs das imagens para o carrossel
const backgroundImages = [
    '/foto-remedios.jpeg',
    '/foto-maos.jpeg',
    '/imagem-revita.jpg',
];

export function HeroSection() {
    const googleMapsUrl = "https://www.google.com/maps/place/Drogaria+Revita+%7C+Delivery+%7C+Farm%C3%A1cia+em+S%C3%A3o+Luiz/@-2.5844364,-44.1993205,17z/data=!3m1!4b1!4m6!3m5!1s0x7f69b000717b7c9:0x1c02cab4883d2e5b!8m2!3d-2.5844418!4d-44.1967456!16s%2Fg%2F11v_5r4nj8?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D";
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Armazena o índice da imagem anterior para mantê-la visível durante a transição
    const [previousImageIndex, setPreviousImageIndex] = useState(backgroundImages.length - 1);

    // Efeito para pré-carregar as imagens
    useEffect(() => {
        backgroundImages.forEach((imageUrl) => {
            const img = new Image();
            img.src = imageUrl;
        });
    }, []);

    // Efeito para trocar a imagem a cada 5 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            // A imagem atual se tornará a anterior na próxima renderização
            setPreviousImageIndex(currentImageIndex);

            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % backgroundImages.length
            );
        }, 5000); // Muda a cada 5 segundos

        // Limpa o timer quando o componente é desmontado
        return () => clearInterval(timer);
    }, [currentImageIndex]); // Depende do índice atual para o ciclo continuar

    return (
        <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Contêiner do Carrossel de Imagens de Fundo */}
            {backgroundImages.map((imageUrl, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full bg-cover bg-center 
                        ${
                        // A imagem ATUAL tem transição de opacidade, fica visível e na frente (z-10)
                        index === currentImageIndex
                            ? 'opacity-100 z-10 transition-opacity duration-1000 ease-in-out'
                            // A imagem ANTERIOR fica visível, mas atrás (z-0), servindo de fundo sólido
                            : index === previousImageIndex
                                ? 'opacity-100 z-0'
                                // Todas as outras ficam invisíveis
                                : 'opacity-0'
                        }`}
                    style={{ backgroundImage: `url(${imageUrl})` }}
                />
            ))}

            {/* Overlay para melhorar a legibilidade do texto (agora com z-20 para ficar acima das imagens) */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-20"></div>

            {/* Conteúdo da Hero Section (com z-30 para ficar acima do overlay) */}
            <div className="relative z-30 container mx-auto text-center flex flex-col items-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                    Drogaria Revita: <br /> <span className="text-green-300">Confiança e economia</span> para sua saúde.
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-gray-200 drop-shadow-md">
                    Entre em contato agora mesmo pelo nosso telefone ou por mensagem. Faça o seu orçamento ou o seu pedido e receba no conforto do seu lar. As melhores ofertas estão aqui para você!
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#014424] hover:bg-[#014424]/90 text-white w-full sm:w-auto cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
                            <MapPin className="mr-0 h-5 w-5" />
                            Ver Rota no Mapa
                        </Button>
                    </a>
                    <a href="https://wa.me/5598985877631" target="_blank" rel="noopener noreferrer">
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-black border-white hover:bg-white hover:text-black w-full sm:w-auto cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
                        >
                            <img src="/icone-whats.png" alt="Ícone do WhatsApp" className="h-6 w-6 mr-0" />
                            WhatsApp
                        </Button>

                    </a>
                </div>
            </div>
        </section>
    );
}
"use client"; // Marca este como um Componente de Cliente

// src/components/HeroSection.tsx
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

// Array com as URLs das imagens para o carrossel
const backgroundImages = [
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1620510493432-57419814a533?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
                    O melhor atendimento da região com uma grande variedade de medicamentos e produtos com preços imperdíveis.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#014424] hover:bg-[#014424]/90 text-white w-full sm:w-auto">
                            <MapPin className="mr-0 h-5 w-5" />
                            Ver Rota no Mapa
                        </Button>
                    </a>
                    <a href="https://wa.me/5598985877631" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="outline" className="text-black border-white hover:bg-white hover:text-black w-full sm:w-auto">
                            <img src="/icone-whats.png" alt="Ícone do WhatsApp" className="h-6 w-6 mr-0" />
                            WhatsApp
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
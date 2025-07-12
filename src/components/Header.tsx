// src/components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Pill } from 'lucide-react';

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#014424] backdrop-blur-sm shadow-sm">
            <div className="container mx-auto flex items-center justify-between h-20 px-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.jpg" alt="Drogaria Revita Logo" width={150} height={50} priority />
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="#servicos" className="text-gray-200 hover:text-gray-400 transition-colors">Serviços</Link>
                    <Link href="#sobre" className="text-gray-200 hover:text-gray-400 transition-colors">Sobre Nós</Link>
                    <Link href="#localizacao" className="text-gray-200 hover:text-gray-400 transition-colors">Localização</Link>
                </nav>
                <a href="https://www.ifood.com.br/delivery/sao-luis-ma/drogaria-revita-jardim-america/65ef62c4-edd1-4b50-a0e6-a5ebb1236d49?utm_medium=share" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#D92D20] hover:bg-[#D92D20]/90">
                        <Pill className="mr-2 h-4 w-4" />
                        Peça pelo Ifood
                    </Button>
                </a>
            </div>
        </header>
    );
}
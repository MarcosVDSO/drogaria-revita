// src/components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Phone } from 'lucide-react';

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
            <div className="container mx-auto flex items-center justify-between h-20 px-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.jpg" alt="Drogaria Revita Logo" width={200} height={50} priority />
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="#servicos" className="text-gray-600 hover:text-brand-green transition-colors">Serviços</Link>
                    <Link href="#sobre" className="text-gray-600 hover:text-brand-green transition-colors">Sobre Nós</Link>
                    <Link href="#localizacao" className="text-gray-600 hover:text-brand-green transition-colors">Localização</Link>
                </nav>
                <a href="https://wa.me/5598985877631" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-brand-red hover:bg-brand-red/90">
                        <Phone className="mr-2 h-4 w-4" />
                        Peça pelo WhatsApp
                    </Button>
                </a>
            </div>
        </header>
    );
}
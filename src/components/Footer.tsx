// src/components/Footer.tsx
import Image from 'next/image';


export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#014424] text-white w-full">
            <div className="px-4 py-12 max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <Image
                            src="/logo.jpg"
                            alt="Drogaria Revita Logo"
                            width={180}
                            height={45}
                        // className="mx-auto md:mx-0 filter invert brightness-0"
                        />
                        <p className="mt-4 text-sm text-gray-300">CNPJ: 53.412.477/0001-40</p>
                    </div>
                    <div>
                        <h4 className="font-bold">Endereço</h4>
                        <p className="mt-2 text-sm text-gray-300">
                            Av. Principal, 84, Jardim América<br />
                            São Luís - MA, 65058-284
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold">Contato</h4>
                        <p className="mt-2 text-sm text-gray-300">Fone/Whatsapp: (98) 98587-7631</p>
                        <p className="text-sm text-gray-300">drogariarevita@gmail.com</p>
                    </div>
                </div>
                <div className="border-t border-gray-600 mt-8 pt-6 text-center text-xs text-gray-400">
                    <p>Farmacêutico Responsável: Danilo Pinheiro Aroucha, CRF/MA: 9190</p>
                    <p className="mt-2">&copy; {currentYear} Drogaria Revita. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface PageProps {
    onNavigateToHome: () => void;
    onNavigateToDentistry: () => void;
    onNavigateToDermatology: () => void;
    onNavigateToLegal: () => void;
}

const Novica1Page: React.FC<PageProps> = ({ onNavigateToHome, onNavigateToDentistry, onNavigateToDermatology, onNavigateToLegal }) => {
    return (
        <div className="bg-white text-brand-text font-sans">
            <Header
                activePage="dentistry"
                onNavigateToHome={onNavigateToHome}
                onNavigateToDentistry={onNavigateToDentistry}
                onNavigateToDermatology={onNavigateToDermatology}
                onNavigateToLegal={onNavigateToLegal}
            />
            <main className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); onNavigateToDentistry(); }}
                        className="inline-flex items-center text-brand-green hover:underline mb-8 text-lg"
                        aria-label="Nazaj na zobozdravstvo"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        Nazaj
                    </a>

                    <article>
                        <h1 className="text-4xl md:text-5xl font-bold text-brand-green-dark mb-6">
                            Kako ohraniti zdrave dlesni?
                        </h1>
                        <img
                            src="https://images.unsplash.com/photo-1583344498158-3c3e5c1a8a0c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Oseba si umiva zobe"
                            className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-8 shadow-md"
                        />
                        <div className="prose lg:prose-xl max-w-none text-brand-text space-y-6 text-lg leading-relaxed">
                            <p>Zdrave dlesni so temelj zdravega nasmeha. Vnetje dlesni, znano tudi kot gingivitis, je pogosta težava, ki jo povzroča nabiranje zobnih oblog. Če se ne zdravi, lahko napreduje v parodontozo, resnejše stanje, ki lahko vodi do izgube zob. Na srečo je gingivitis mogoče preprečiti in zdraviti z ustrezno ustno higieno.</p>
                            
                            <h2 className="text-3xl font-semibold text-brand-green-dark mt-10 mb-4">Ključni koraki za zdrave dlesni</h2>
                            <ul className="list-disc list-inside space-y-3">
                                <li><strong>Redno ščetkanje:</strong> Zobe si ščetkajte vsaj dvakrat na dan z mehko zobno ščetko in fluoridno zobno pasto. Bodite pozorni, da očistite vse površine zob, vključno z notranjimi in žvečilnimi ploskvami. Ne pozabite na jezik, kjer se prav tako nabirajo bakterije.</li>
                                <li><strong>Uporaba zobne nitke:</strong> Nitkanje je ključnega pomena za odstranjevanje oblog in delcev hrane iz medzobnih prostorov, kamor zobna ščetka ne seže. Nitkajte vsaj enkrat na dan, najbolje pred spanjem.</li>
                                <li><strong>Uravnotežena prehrana:</strong> Omejite uživanje sladkih pijač in prigrizkov, ki prispevajo k nastanku kariesa in vnetja dlesni. Uživajte v raznoliki prehrani, bogati z vitamini in minerali, ki krepijo zobe in dlesni.</li>
                                <li><strong>Redni obiski pri zobozdravniku:</strong> Priporočamo preventivni pregled vsaj enkrat letno, tudi če nimate težav. Profesionalno čiščenje zobnega kamna bo odstranilo trdovratne obloge, ki jih sami ne morete.</li>
                            </ul>
                            
                            <p className="mt-8">Z upoštevanjem teh preprostih nasvetov boste ohranili zdrave dlesni, preprečili resnejše težave in poskrbeli za sijoč nasmeh skozi vse življenje. Za osebni nasvet se posvetujte z našo ekipo.</p>
                        </div>
                    </article>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Novica1Page;
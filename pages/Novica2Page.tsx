import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface PageProps {
    onNavigateToHome: () => void;
    onNavigateToDentistry: () => void;
    onNavigateToDermatology: () => void;
    onNavigateToLegal: () => void;
}

const Novica2Page: React.FC<PageProps> = ({ onNavigateToHome, onNavigateToDentistry, onNavigateToDermatology, onNavigateToLegal }) => {
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
                            Prednosti beljenja zob v ordinaciji
                        </h1>
                        <img
                            src="/slike/zobozdravstvo-dermadent.png"
                            alt="Sijoč nasmeh po beljenju zob"
                            className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-8 shadow-md"
                        />
                        <div className="prose lg:prose-xl max-w-none text-brand-text space-y-6 text-lg leading-relaxed">
                            <p>Sijoč nasmeh je pogosto prva stvar, ki jo opazimo na človeku. Če razmišljate o beljenju zob, je pomembno poznati razlike med profesionalnimi postopki v ordinaciji in rešitvami za domačo uporabo. Profesionalno beljenje zob je varen in učinkovit postopek, ki vam lahko povrne samozavest.</p>
                            
                            <h2 className="text-3xl font-semibold text-brand-green-dark mt-10 mb-4">Zakaj izbrati profesionalno beljenje?</h2>
                             <ul className="list-disc list-inside space-y-3">
                                <li><strong>Varnost in nadzor:</strong> Zobozdravnik najprej pregleda stanje vaših zob in dlesni ter se prepriča, da je postopek za vas varen. Med beljenjem so dlesni zaščitene, kar preprečuje draženje.</li>
                                <li><strong>Močnejši belilni geli:</strong> V ordinaciji uporabljamo gele z višjo koncentracijo aktivnih sestavin, ki jih ni mogoče dobiti v prosti prodaji. To omogoča hitrejše in opaznejše rezultate.</li>
                                <li><strong>Takojšnji rezultati:</strong> Medtem ko domači kompleti zahtevajo več tednov uporabe za vidne spremembe, lahko profesionalno beljenje posvetli vaše zobe za več odtenkov v samo enem obisku.</li>
                                <li><strong>Prilagojen pristop:</strong> Zobozdravnik prilagodi postopek vašim potrebam in željam ter zagotovi enakomeren rezultat.</li>
                            </ul>
                            
                            <p className="mt-8">Čeprav so izdelki za domačo uporabo lahko cenejši, pogosto prinašajo manjše rezultate in večje tveganje za poškodbe sklenine ali dlesni. Za najboljši in najvarnejši rezultat se odločite za profesionalno beljenje pod strokovnim nadzorom. Naročite se na posvet in odkrijte, kako lahko zasijete s svojim novim nasmehom.</p>
                        </div>
                    </article>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Novica2Page;
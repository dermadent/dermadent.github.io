import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface PageProps {
    onNavigateToHome: () => void;
    onNavigateToDentistry: () => void;
    onNavigateToDermatology: () => void;
    onNavigateToLegal: () => void;
}

const Novica3Page: React.FC<PageProps> = ({ onNavigateToHome, onNavigateToDentistry, onNavigateToDermatology, onNavigateToLegal }) => {
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
                            Otroci in prvi obisk pri zobozdravniku
                        </h1>
                        <img
                            src="https://images.unsplash.com/photo-1559743343-a6e5226c6f66?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Otrok pri zobozdravniku"
                            className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-8 shadow-md"
                        />
                        <div className="prose lg:prose-xl max-w-none text-brand-text space-y-6 text-lg leading-relaxed">
                            <p>Prvi obisk pri zobozdravniku je pomemben mejnik v življenju otroka, ki lahko pomembno vpliva na njegov odnos do ustnega zdravja v prihodnosti. Pravilna priprava in pozitivna izkušnja sta ključnega pomena za preprečevanje strahu pred zobozdravnikom.</p>
                            
                            <h2 className="text-3xl font-semibold text-brand-green-dark mt-10 mb-4">Kako otroka pripraviti na pozitivno izkušnjo?</h2>
                             <ul className="list-disc list-inside space-y-3">
                                <li><strong>Začnite zgodaj:</strong> Priporočljivo je, da otrok prvič obišče zobozdravnika ob izraščanju prvega zobka oziroma najkasneje do prvega leta starosti. Zgodnji obiski so običajno kratki in namenjeni spoznavanju okolja.</li>
                                <li><strong>Govorite pozitivno:</strong> Pred obiskom se z otrokom pogovarjajte o zobozdravniku na pozitiven način. Izogibajte se besedam, kot so "bolečina", "strah" ali "sveder". Uporabite preproste in prijazne izraze, na primer "zobozdravnik bo preštel tvoje zobke".</li>
                                <li><strong>Igrajte se zobozdravnika:</strong> Doma se lahko igrate, da ste zobozdravnik in pregledujete zobe plišastih igrač ali drug drugemu. To otroku pomaga razumeti, kaj lahko pričakuje.</li>
                                <li><strong>Izberite otrokom prijazno ordinacijo:</strong> Naša ekipa ima izkušnje z delom z otroki in ustvarja sproščeno ter prijazno vzdušje, da se mali pacienti počutijo varno in udobno.</li>
                            </ul>
                            
                            <p className="mt-8">Cilj prvega obiska ni le pregled, ampak predvsem gradnja zaupanja. Zobozdravnik bo na igriv način predstavil instrumente, otroka popeljal na "vožnjo" z zobozdravstvenim stolom in odgovoril na vsa vprašanja. S pravilnim pristopom bo vsak naslednji obisk lažji in prijetnejši.</p>
                        </div>
                    </article>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Novica3Page;
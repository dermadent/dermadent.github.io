import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface PageProps {
    onNavigateToHome: () => void;
    onNavigateToDentistry: () => void;
    onNavigateToDermatology: () => void;
    onNavigateToLegal: () => void;
}

const services = [
    {
        title: 'Zagon in vodenje zdravstvenega podjetja',
        description: 'Nudimo celovito pravno svetovanje pri ustanavljanju in upravljanju podjetji, ki delujejo na področju zdravstva in zdravstvenih storitev.\nNekateri primeri:',
        points: [
            'svetovanje pri izbiri ustrezne pravne oblike (d.o.o., s.p., zavod, ipd.)',
            'priprava ustanovitvenih aktov in registracija podjetja',
            'pridobivanje dovoljenja za opravljanj zdravstvene dejavnosti',
            'izdelava finančne konstrukcije in poslovnega načrta',
            'usklajevanje pogojev glede prostora, kadra in opreme',
            'priprava pogodb in notranjih aktov',
            'zastopanje izvajalca v postopkih varstva pacientovih pravic',
            'pogodbe o zaposlitvi, pogodbe z zunanjimi sodelavci',
            'pravilniki (npr. varovanje osebnih podatkov, dokumentacije, pravice pacientov)',
            'svetovanje glede skladnosti z zakonodajo',
            'postopki po Zakonu o zdravstveni dejavnosti,',
            'Zakon o pacientovih pravicah',
            'GDPR (varstvo osebnih podatkov)',
            'podpora pri nadzorih (inšpekcijski postopki)',
        ]
    },
    {
        title: 'Delovna razmerja in socialno varstvo',
        description: 'Zagotavljamo stokovno pravno podporo pri vseh vidikih delovnih razmerij, tako za podjetja kot za zaposlene.\nNekaj primerov:',
        points: [
            'priprava in pregled pogodb o zaposlitvi in sodelovanju',
            'pogodbe za zdravstvene delavce',
            'pogodbe z zunanjimi sodelavci',
            'prilagoditve obstoječih pogodb',
            'oblikovanje internih aktov',
            'delovni red',
            'pravilniki o disciplinskih postopkih',
            'sistemizacija delovnih mest',
            'pravila o varstvu pri delu',
            'svetovanje pri pravicah in obveznostih zaposlenih in delodajalcev',
            'delovni čas, dopusti, nadure',
            'varstvo osebnih podatkov zaposlenih',
            'pravice do dodatnih izobraževanj in usposabljanj',
            'sodelovanje s sindikati',
            'podpora pri pogajanjih',
            'priprava kolektivnih pogodb in dogovorov',
            'usklajevanj sporazumov z zakonodajo',
            'upravljanje sporov med delavci in delodajalci',
            'disciplinski postopki',
            'opozorila in odpovedi',
            'mediacija in zastopanje pred delovnimi sodišči',
            'usklajevanje delovnopravne zakonodaje s predpisi za zdravstveni sektor',
            'postopki po Zakonu o delovnih razmerjih (ZDR-1)',
            'tolmačenje kolektivne pogodb na področju zdravstva in socialnega varstva',
            'predpisi o sodelovanju s sindikati',
        ]
    },
    {
        title: 'Pravna pomoč na področju šolstva',
        description: 'Pomagamo vam razumeti in uveljaviti pravico do izobraževanja otrok in odraslih v vseh javnih zasebnih, strokovnih, specialističnih programih, na primer:',
        points: [
            'zavrnitev vpisa otroka v želen vrtec ali šolo',
            'vpis izven matičnega območja',
            'težave s kapacitetami (npr. "ni prostora")',
            'postopki zaradi diskriminacije ali nepravilnosti pri vpisu',
            'priprava pritožb in drugih pravnih sredstev (npr. nestrinjanje z oceno, popravljanje ocene)',
            'otroke s posebnimi potrebami (npr. odločbe o usmerjanju, inkluzija ipd.)',
            'postopki priznavanja tujih spričeval in drugih potrdil o izobraževanju',
            'pravni postopki za izobraževanja v tujini.',
        ]
    }
];


const LegalPage: React.FC<PageProps> = ({ onNavigateToHome, onNavigateToDentistry, onNavigateToDermatology, onNavigateToLegal }) => {
    return (
        <div className="bg-white text-brand-text font-sans">
            <Header 
                activePage="legal" 
                onNavigateToHome={onNavigateToHome}
                onNavigateToDentistry={onNavigateToDentistry}
                onNavigateToDermatology={onNavigateToDermatology}
                onNavigateToLegal={onNavigateToLegal}
            />
            <main>
                <section 
                    className="relative bg-cover bg-center text-white text-center px-4 h-[500px] flex items-center justify-center" 
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                    role="banner"
                    aria-labelledby="hero-heading"
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="relative z-10 container mx-auto">
                        <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-4">Strokovno pravno svetovanje</h1>
                        <p className="text-2xl max-w-2xl mx-auto">Zanesljiva pravna podpora za vaše izzive.</p>
                    </div>
                </section>

                <section id="storitve" className="py-20 px-4 container mx-auto" aria-labelledby="storitve-heading">
                    <h2 id="storitve-heading" className="text-4xl font-bold text-center mb-16 text-brand-green-dark">Področja delovanja</h2>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12 max-w-4xl mx-auto">
                        {services.map(service => (
                            <div key={service.title} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-xl hover:border-brand-green-accent transition-all duration-300">
                                <h3 className="text-3xl font-semibold mb-4 text-brand-green-dark">{service.title}</h3>
                                <p className="text-brand-text mb-6 text-lg leading-relaxed whitespace-pre-line">{service.description}</p>
                                <ul className="list-disc list-inside space-y-2 text-brand-text">
                                    {service.points.map((point, index) => (
                                        <li key={index} className="leading-relaxed">{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
                
                <section id="kontakt" className="bg-brand-green-light py-20 px-4" aria-labelledby="kontakt-heading">
                  <div className="container mx-auto text-center">
                    <h2 id="kontakt-heading" className="text-4xl font-bold mb-8 text-brand-green-dark">Kontaktirajte nas</h2>
                    <p className="text-xl text-brand-text mb-4 max-w-3xl mx-auto">Cena storitev: po odvetniški tarifi ali na podlagi posebnega dogovora s stranko.</p>
                    <p className="text-xl text-brand-text mb-8 max-w-3xl mx-auto">Za več informacij in dogovor za termin nas kontaktirajte.</p>

                    <div className="mt-8">
                         <a href="mailto:bojan.popovic@dermadent.si" className="bg-brand-green-accent hover:bg-brand-green text-white text-xl font-medium py-3 px-12 rounded-lg transition-colors">
                            Pošljite povpraševanje
                        </a>
                    </div>
                  </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default LegalPage;
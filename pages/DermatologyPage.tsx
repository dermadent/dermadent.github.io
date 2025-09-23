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
    { title: 'Prvi dermatološki pregled', description: 'Natančen pregled kože, lasišča in nohtov za oceno vašega stanja in svetovanje o nadaljnjem zdravljenju.', price: 'od 80€' iconUrl: '/slike/dermaskopski.jpg' },
    { title: 'Dermoskopski pregled znamenj', description: 'Specialistični pregled kožnih znamenj za zgodnje odkrivanje morebitnih nevarnih sprememb.', price: 'od 80€' },
    { title: 'Neoperativno odstranjevanje znamenj', description: 'Učinkovita in varna odstranitev motečih kožnih izrastkov brez kirurškega posega.', price: 'od 80€' },
    { title: 'Odstranjevanje ne-rakastih sprememb', description: 'Kirurška odstranitev benignih kožnih sprememb, kot so fibromi ali ciste, z minimalnimi brazgotinami.', price: 'od 220€' },
    { title: 'Zdravljenje rakastih sprememb', description: 'Strokovna kirurška oskrba kožnega raka za povrnitev zdravja vaše kože.', price: 'od 450€' },
    { title: 'Testiranja na alergije', description: 'Ugotavljanje vzrokov alergijskih reakcij s pomočjo zanesljivih epikutanih in drugih testov.', price: 'od 100€' },
];

const team = [
    { name: 'Bojan Popovič', title: 'dr.med.,univ.dipl.prav.', description: 'specialist dermatovenerolog' },
    { name: 'prim.mag. Ranka Rajakovič Popovič', title: 'dr.med.', description: 'specialistka dermatovenerologinja' },
    { name: 'Petra Žniderič', title: 'medicinska tehnica', description: '' },
    { name: 'Sebahije Bilali', title: 'medicinska tehnica', description: '' },
];

const bookingInfo = [
    { title: 'Prvi obisk', content: ['Pokličite na telefonsko številko 01 519 77 14 ali pošljite priložen obrazec po telefaksu na številko 01 519 78 25.', 'Izbira zdravnika in termin: Če želite, si lahko sami izberete zdravnika Dermadenta, sicer vam zdravnika dodeli asistentka glede na vrsto težav in proste termine.', 'Ob obisku s seboj prinesite:\n· osebni dokument (os. izkaznica, potni list ali vozniško dovoljenje);\n· nekaj gotovine ali plačilno kartico.', 'Cena prvega pregleda: 80,00 €'] },
    { title: 'Ponovni obisk', content: ['Če ste se za termin dogovorili ob predhodnem obisku, se vam ni treba posebej naročati.', 'Če za termin niste dogovorjeni pokličite na telefonsko številko 01 519 77 14 ali pošljite priložen obrazec na številko 01 519 78 25.', 'Če želite že dogovorjeni termin spremeniti, pokličite na telefonsko številko 01 519 77 14.', 'Ob obisku s seboj prinesite naročilni kartonček, ostale dokumente, ki sta jih naročila zdravnik ali asistentka.'] },
    { title: 'Preventivni pregled', content: ['Ali je minilo že 6 mesecev od vašega zadnjega obiska v Dermadentu?', 'V tem primeru vam priporočamo, da se zglasite na preventivni pregled.', 'S preventivnim pregledom skrbite za zdravje svoje kože in zmanjšujete potrebo po zahtevnih dermatoloških postopkih v prihodnosti.'] },
    { title: 'Nujna stanja', content: ['· pokličite telefonsko številko 01 519 77 14 in povejte, da kličete zaradi nujnega stanja;', '· dobili boste prvi možni termin za obisk in navodila za ravnanje do obiska;', '· če ste že stranka Dermadenta ob obisku prinesite naročilni kartonček, če pa še niste stranka Dermadenta pa osebni dokument'] },
];


const DermatologyPage: React.FC<PageProps> = ({ onNavigateToHome, onNavigateToDentistry, onNavigateToDermatology, onNavigateToLegal }) => {
    return (
        <div className="bg-white text-brand-text font-sans">
            <Header 
                activePage="dermatology" 
                onNavigateToHome={onNavigateToHome}
                onNavigateToDentistry={onNavigateToDentistry}
                onNavigateToDermatology={onNavigateToDermatology}
                onNavigateToLegal={onNavigateToLegal}
            />
            <main>
                <section 
                    className="relative bg-cover bg-center text-white text-center px-4 h-[500px] flex items-center justify-center" 
                    style={{ backgroundImage: "url('/slike/dermatologija-dermadent.jpg')" }}
                    role="banner"
                    aria-labelledby="hero-heading"
                >
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="relative z-10 container mx-auto">
                        <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-4">Zdrava koža, srečno življenje.</h1>
                        <p className="text-2xl max-w-2xl mx-auto">Strokovna dermatološka oskrba za vse vaše potrebe.</p>
                    </div>
                </section>

                <section id="storitve" className="py-20 px-4 container mx-auto" aria-labelledby="storitve-heading">
                    <h2 id="storitve-heading" className="text-4xl font-bold text-center mb-16 text-brand-green-dark">Naše dermatološke storitve</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map(service => (
                            <div key={service.title} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center shadow-sm hover:shadow-xl hover:border-brand-green-accent transition-all duration-300">
                                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-brand-green-light" aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M2 9.5C2 9.5 5 11 8 11C11 11 13 8 16 8C19 8 22 9.5 22 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M2 14.5C2 14.5 5 16 8 16C11 16 13 13 16 13C19 13 22 14.5 22 14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                </div>
                                <h3 className="text-2xl font-semibold mb-3 text-brand-green-dark text-center">{service.title}</h3>
                                <p className="text-brand-text mb-5 flex-grow text-base leading-relaxed text-center w-full">{service.description}</p>
                                <p className="text-brand-green font-medium text-base mt-auto text-center">{service.price}</p>
                            </div>
                        ))}
                    </div>
                </section>
                
                <section id="narocanje" className="bg-brand-green-light py-20 px-4" aria-labelledby="narocanje-heading">
                  <div className="container mx-auto">
                    <h2 id="narocanje-heading" className="text-4xl font-bold text-center mb-16 text-brand-green-dark">Naročanje</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {bookingInfo.map(info => (
                           <div key={info.title} className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                               <h3 className="text-2xl font-semibold mb-4 text-brand-green-dark">{info.title}</h3>
                               <div className="space-y-4">
                                   {info.content.map((p, i) => (
                                       <p key={i} className="text-brand-text whitespace-pre-line leading-relaxed">{p}</p>
                                   ))}
                               </div>
                           </div>
                        ))}
                    </div>
                    <div className="text-center mt-16">
                        <p className="text-2xl text-brand-text mb-6 max-w-2xl mx-auto">Pripravljeni na zdravo in sijočo kožo? Naročite se na pregled še danes.</p>
                        <button className="bg-brand-green-accent hover:bg-brand-green text-white text-xl font-medium py-3 px-12 rounded-lg transition-colors">
                            Naročite se
                        </button>
                    </div>
                  </div>
                </section>

                <section id="ekipa" className="py-20 px-4 container mx-auto" aria-labelledby="ekipa-heading">
                    <h2 id="ekipa-heading" className="text-4xl font-bold text-center mb-16 text-brand-green-dark">Naša ekipa</h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                       {team.map(member => (
                           <div key={member.name} className="flex items-center">
                               <div className="w-24 h-24 bg-brand-green-light rounded-full mr-6 flex-shrink-0 border border-brand-green/20" aria-hidden="true"></div>
                               <div>
                                   <h3 className="text-xl font-bold text-brand-green-dark">{member.name}</h3>
                                   <p className="text-lg text-brand-green">{member.title}</p>
                                   {member.description && <p className="text-brand-text text-base">{member.description}</p>}
                               </div>
                           </div>
                       ))}
                    </div>
                </section>

                <div className="border-t border-gray-200 container mx-auto my-10"></div>

                <section id="lokacija" className="py-20 px-4 container mx-auto" aria-labelledby="lokacija-heading">
                    <h2 id="lokacija-heading" className="text-4xl font-bold text-center mb-16 text-brand-green-dark">Kje smo</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold mb-3 text-brand-green-dark">Dermadent Dermatologija</h3>
                            <address className="text-brand-text text-lg space-y-1 mb-4 not-italic">
                                <p>Naselje Vodnikov dvor, Šiška</p>
                                <p>Na jami 16,</p>
                                <p>1000 Ljubljana</p>
                            </address>
                            <div className="text-brand-text text-lg space-y-1 mb-6">
                                <p><a href="tel:+38615197714" className="hover:text-brand-green">+386 1 5197714</a></p>
                                <p><a href="mailto:info@dermadent.si" className="hover:text-brand-green">info@dermadent.si</a></p>
                            </div>
                            <h4 className="text-xl font-semibold mb-2 text-brand-green-dark">Delovni čas:</h4>
                            <p className="text-brand-text text-lg">ponedeljek - petek: 08:00-18:30</p>
                        </div>
                        <div className="h-96 rounded-lg overflow-hidden border border-brand-green-light shadow-md">
                             <iframe
                                title="Zemljevid lokacije Dermadent Dermatologija"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2764.571064943962!2d14.48424167691656!3d46.07722797108929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4770fd5a468641a1%3A0x6334ba67794b63e5!2sNa%20jami%2016%2C%201000%20Ljubljana%2C%20Slovenia!5e0!3m2!1sen!2sus!4v1719504818785!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                             ></iframe>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default DermatologyPage;
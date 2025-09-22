import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface PageProps {
    onNavigateToHome: () => void;
    onNavigateToDentistry: () => void;
    onNavigateToDermatology: () => void;
    onNavigateToLegal: () => void;
    onNavigateToNovica1: () => void;
    onNavigateToNovica2: () => void;
    onNavigateToNovica3: () => void;
}

const services = [
    { title: 'Zalivke', description: 'Obnovimo poškodovan ali kariozen zob z estetsko in trpežno zalivko.', price: 'od 80€' },
    { title: 'Zdravljenje zoba - endodontija', description: 'Odpravimo vnetje in bolečino ter ohranimo naravno zobno strukturo.', price: 'od 200€' },
    { title: 'Keramična prevleka', description: 'Povrnemo naraven videz in funkcijo z estetsko keramično krono.', price: 'od 330€' },
    { title: 'Proteza', description: 'Nadomestimo manjkajoče zobe z udobno in funkcionalno zobno protezo.', price: 'od 950€' },
    { title: 'Čiščenje zobnega kamna', description: 'Odstranimo zobni kamen in obloge za bolj zdrave dlesni.', price: 'od 80€' },
    { title: 'Beljenje zob', description: 'Posvetlimo zobe za sijoč in naravno bel nasmeh.', price: 'od 350€' },
    { title: 'Higienski paket', description: 'Čiščenje zobnega kamna + peskanje + poliranje.', price: 'od 80€' },
    { title: 'Paket zdravljenja', description: 'Zdravljenje zoba + keramična prevleka.', price: 'od 500€' },
    { title: '... druge storitve', description: 'Opravljamo tudi druge zobozdravstvene storitve.', price: 'Kontaktirajte nas' },
];

const team = [
    { name: 'mag. Drago Popovič', title: 'dr.dent.med.', description: 'Specialist za ustne in zobne bolezni' },
    { name: 'Peter Vezočnik', title: 'dr.dent.med.', description: '' },
    { name: 'Sebahije Bilali', title: 'medicinska tehnica', description: '' },
    { name: 'Petra Žniderič', title: 'medicinska tehnica', description: '' },
];

const bookingInfo = [
    { title: 'Prvi obisk', content: ['Pokličite na telefonsko številko 01 519 77 14 ali pošljite priložen obrazec po telefaksu na številko 01 519 78 25.', 'Izbira zobozdravnika in termin: Če želite, si lahko sami izberete zobozdravnika Dermadenta, sicer vam zobozdravnika dodeli asistentka glede na vrsto težav in proste termine.', 'Ob obisku s seboj prinesite:\n· osebni dokument (os. izkaznica, potni list ali vozniško dovoljenje);\n· nekaj gotovine ali plačilno kartico.', 'Cena prvega pregleda: 45,00 €'] },
    { title: 'Ponovni obisk', content: ['Če ste se za termin dogovorili ob predhodnem obisku, se vam ni treba posebej naročati.', 'Če za termin niste dogovorjeni pokličite na telefonsko številko 01 519 77 14 ali pošljite priložen obrazec na številko 01 519 78 25.', 'Če želite že dogovorjeni termin spremeniti, pokličite na telefonsko številko 01 519 77 14.', 'Ob obisku s seboj prinesite naročilni kartonček, ostale dokumente, ki sta jih naročila zdravnik ali asistentka.'] },
    { title: 'Preventivni pregled', content: ['Ali je minilo že 6 mesecev od vašega zadnjega obiska v Dermadentu?', 'V tem primeru vam priporočamo, da se zglasite na preventivni pregled, ki je brezplačen.', 'S preventivnim pregledom skrbite za zdravje svojih zob, zmanjšujete potrebo po zahtevnih zobozdravstvenih postopkih v naslednjih letih in desetletjih življenja.'] },
    { title: 'Bolečina', content: ['· pokličite telefonsko številko 01 519 77 14 in povejte, da kličete zaradi bolečine;', '· dobili boste prvi možni termin za obisk in navodila za ravnanje do obiska;', '· če ste že stranka Dermadenta ob obisku prinesite naročilni kartonček, če pa še niste stranka Dermadenta pa osebni dokument'] },
];

const DentistryPage: React.FC<PageProps> = ({ onNavigateToHome, onNavigateToDentistry, onNavigateToDermatology, onNavigateToLegal, onNavigateToNovica1, onNavigateToNovica2, onNavigateToNovica3 }) => {
    
    const news = [
        {
            title: 'Kako ohraniti zdrave dlesni?',
            description: 'Zdrave dlesni so temelj zdravega nasmeha. Preberite naše nasvete za preprečevanje vnetja in ohranjanje ustne higiene.',
            imageUrl: 'slike/zobozdravstvo-dermadent.png',
            action: onNavigateToNovica1,
        },
        {
            title: 'Prednosti beljenja zob v ordinaciji',
            description: 'Profesionalno beljenje zob je varen in učinkovit postopek, ki vam lahko povrne samozavest. Odkrijte, zakaj je boljše od domačih rešitev.',
            imageUrl: 'https://images.unsplash.com/photo-1619451433581-9a71156a6d5a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            action: onNavigateToNovica2,
        },
        {
            title: 'Otroci in prvi obisk pri zobozdravniku',
            description: 'Prvi obisk pri zobozdravniku je pomemben mejnik. Pripravili smo nekaj nasvetov, kako otroka pripraviti na pozitivno izkušnjo.',
            imageUrl: 'https://images.unsplash.com/photo-1559743343-a6e5226c6f66?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            action: onNavigateToNovica3,
        },
    ];

    return (
        <div className="bg-white text-brand-text font-sans">
            <Header 
                activePage="dentistry" 
                onNavigateToHome={onNavigateToHome}
                onNavigateToDentistry={onNavigateToDentistry}
                onNavigateToDermatology={onNavigateToDermatology}
                onNavigateToLegal={onNavigateToLegal}
            />
            <main>
                <section 
                    className="relative bg-cover bg-center text-white text-center px-4 h-[500px] flex items-center justify-center" 
                    style={{ backgroundImage: "url('slike/zobozdravstvo-dermadent.png')" }}
                    role="banner"
                    aria-labelledby="hero-heading"
                >
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="relative z-10 container mx-auto">
                        <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-4">Vaš nasmeh, naša skrb.</h1>
                        <p className="text-2xl max-w-2xl mx-auto">Zanesljiva zobozdravstvena oskrba za vse potrebe.</p>
                    </div>
                </section>

                <section id="storitve" className="py-20 px-4 container mx-auto" aria-labelledby="storitve-heading">
                    <h2 id="storitve-heading" className="text-4xl font-bold text-center mb-16 text-brand-green-dark">Najpogostejše storitve</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map(service => (
                            <div key={service.title} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center shadow-sm hover:shadow-xl hover:border-brand-green-accent transition-all duration-300">
                                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-brand-green-light" aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 2H7C5.34315 2 4 3.34315 4 5V13C4 16.711 7.23401 19.344 11.0028 21.6572C11.5542 22.0163 12.4458 22.0163 12.9972 21.6572C16.766 19.344 20 16.711 20 13V5C20 3.34315 18.6569 2 17 2Z" />
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
                        <p className="text-2xl text-brand-text mb-6 max-w-2xl mx-auto">Pripravljeni na nasmeh, ki bo trajal? Naročite se na pregled še danes.</p>
                        <button className="bg-brand-green-accent hover:bg-brand-green text-white text-xl font-medium py-3 px-12 rounded-lg transition-colors">
                            Naročite se
                        </button>
                    </div>
                  </div>
                </section>
                
                <section id="novice" className="py-20 px-4 container mx-auto" aria-labelledby="novice-heading">
                    <h2 id="novice-heading" className="text-4xl font-bold text-center mb-16 text-brand-green-dark">Zadnje novice</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {news.map(item => (
                            <div key={item.title} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-green-accent transition-all duration-300 flex flex-col group">
                                <a href="#" onClick={(e) => { e.preventDefault(); item.action(); }} aria-label={`Preberi več o ${item.title}`} className="block overflow-hidden">
                                    <img src={item.imageUrl} alt={item.title} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" />
                                </a>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-semibold mb-3 text-brand-green-dark">
                                        <a href="#" onClick={(e) => { e.preventDefault(); item.action(); }} className="hover:underline">
                                            {item.title}
                                        </a>
                                    </h3>
                                    <p className="text-brand-text mb-5 flex-grow text-base leading-relaxed">{item.description}</p>
                                    <a href="#" onClick={(e) => { e.preventDefault(); item.action(); }} className="text-brand-green font-semibold hover:underline mt-auto self-start">
                                        Preberi več &rarr;
                                    </a>
                                </div>
                            </div>
                        ))}
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
                            <h3 className="text-2xl font-semibold mb-3 text-brand-green-dark">Dermadent Zobozdravstvo</h3>
                            <address className="text-brand-text text-lg space-y-1 mb-4 not-italic">
                                <p>Poslovno trgovski center (PTC) Dravlje, 1. nadstropje,</p>
                                <p>Ulica bratov Babnik 10,</p>
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
                                title="Zemljevid lokacije Dermadent Zobozdravstvo"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2764.281829396159!2d14.460166315580017!3d46.08272597911308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4770fe0084323c6d%3A0x86831d1d64385202!2sUlica%20bratov%20Babnik%2010%2C%201000%20Ljubljana%2C%20Slovenia!5e0!3m2!1sen!2sus!4v1684321098765!5m2!1sen!2sus"
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

export default DentistryPage;
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

interface HomePageProps {
    onNavigateToHome: () => void;
    onNavigateToDentistry: () => void;
    onNavigateToDermatology: () => void;
    onNavigateToLegal: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigateToHome, onNavigateToDentistry, onNavigateToDermatology, onNavigateToLegal }) => {
    const services = [
        {
            title: 'Zobozdravstvo',
            description: 'V naši zobozdravstveni ambulanti nudimo celovite storitve, od preventivnih pregledov do zahtevnejših posegov. Skrbimo za zdravje in estetiko vašega nasmeha.',
            imageUrl: '/slike/Dermadent-zobozdravstvo-ordinacija.jpg',
            action: onNavigateToDentistry,
        },
        {
            title: 'Dermatologija',
            description: 'V naši dermatološki ambulanti se posvečamo zdravju vaše kože. Nudimo diagnostiko in zdravljenje kožnih bolezni ter estetske posege.',
            imageUrl: '/slike/Dermadent-dermatologija-ordinacija.jpg',
            action: onNavigateToDermatology,
        },
    ];

    return (
        <div className="bg-white min-h-screen flex flex-col font-sans text-brand-text">
            <Header 
                onNavigateToHome={onNavigateToHome}
                onNavigateToDentistry={onNavigateToDentistry}
                onNavigateToDermatology={onNavigateToDermatology}
                onNavigateToLegal={onNavigateToLegal}
            />
            <main className="flex-grow w-full">
                <section className="bg-brand-green-light">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                        <h1 className="text-4xl md:text-5xl text-center mb-16 font-semibold text-brand-green-dark">
                            Dobrodošli! Izberite kliniko.
                        </h1>
                        <div className="flex flex-wrap justify-center items-stretch gap-10">
                            {services.map((service) => (
                                <ServiceCard
                                    key={service.title}
                                    title={service.title}
                                    description={service.description}
                                    imageUrl={service.imageUrl}
                                    onAction={service.action}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import DentistryPage from './pages/DentistryPage';
import DermatologyPage from './pages/DermatologyPage';
import LegalPage from './pages/LegalPage';
import Novica1Page from './pages/Novica1Page';
import Novica2Page from './pages/Novica2Page';
import Novica3Page from './pages/Novica3Page';

interface NavProps {
    onNavigateToHome: () => void;
    onNavigateToDentistry: () => void;
    onNavigateToDermatology: () => void;
    onNavigateToLegal: () => void;
    onNavigateToNovica1: () => void;
    onNavigateToNovica2: () => void;
    onNavigateToNovica3: () => void;
}

const App: React.FC = () => {
    const [page, setPage] = useState<'home' | 'dentistry' | 'dermatology' | 'legal' | 'novica1' | 'novica2' | 'novica3'>('home');

    const navigateToHome = () => setPage('home');
    const navigateToDentistry = () => setPage('dentistry');
    const navigateToDermatology = () => setPage('dermatology');
    const navigateToLegal = () => setPage('legal');
    const navigateToNovica1 = () => setPage('novica1');
    const navigateToNovica2 = () => setPage('novica2');
    const navigateToNovica3 = () => setPage('novica3');
    
    const navProps: NavProps = {
        onNavigateToHome: navigateToHome,
        onNavigateToDentistry: navigateToDentistry,
        onNavigateToDermatology: navigateToDermatology,
        onNavigateToLegal: navigateToLegal,
        onNavigateToNovica1: navigateToNovica1,
        onNavigateToNovica2: navigateToNovica2,
        onNavigateToNovica3: navigateToNovica3,
    };

    if (page === 'dentistry') {
        return <DentistryPage {...navProps} />;
    }
    
    if (page === 'dermatology') {
        return <DermatologyPage {...navProps} />;
    }

    if (page === 'legal') {
        return <LegalPage {...navProps} />;
    }
    
    if (page === 'novica1') {
        return <Novica1Page {...navProps} />;
    }

    if (page === 'novica2') {
        return <Novica2Page {...navProps} />;
    }

    if (page === 'novica3') {
        return <Novica3Page {...navProps} />;
    }

    return <HomePage {...navProps} />;
};

export default App;
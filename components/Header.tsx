import React, { useState } from 'react';

interface HeaderProps {
    activePage?: 'dermatology' | 'dentistry' | 'legal';
    onNavigateToHome: () => void;
    onNavigateToDermatology: () => void;
    onNavigateToDentistry: () => void;
    onNavigateToLegal: () => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, onNavigateToHome, onNavigateToDermatology, onNavigateToDentistry, onNavigateToLegal }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, action: () => void) => {
        e.preventDefault();
        action();
        setIsMenuOpen(false); 
    };

    // Desktop styles
    const navLinkClasses = "text-brand-text text-lg hover:text-brand-green transition-colors";
    const activeNavLinkClasses = "text-brand-green text-lg font-semibold border-b-2 border-brand-green pb-1";

    // Mobile styles
    const mobileNavLinkClasses = "block py-2 text-lg text-brand-text hover:text-brand-green transition-colors w-full";
    const mobileActiveNavLinkClasses = "block py-2 text-lg text-brand-green font-semibold w-full";

    return (
        <header className="bg-white w-full sticky top-0 z-40 shadow-sm">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="/" onClick={(e) => handleLinkClick(e, onNavigateToHome)} aria-label="Dermadent homepage">
                        <img 
                            src="/slike/dermadent-logo.jpg" 
                            alt="Dermadent Logo" 
                            className="h-12"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <nav className="flex items-center space-x-8">
                            <a href="#" onClick={(e) => handleLinkClick(e, onNavigateToDermatology)} className={activePage === 'dermatology' ? activeNavLinkClasses : navLinkClasses}>Dermatologija</a>
                            <a href="#" onClick={(e) => handleLinkClick(e, onNavigateToDentistry)} className={activePage === 'dentistry' ? activeNavLinkClasses : navLinkClasses}>Zobozdravstvo</a>
                            <a href="#" onClick={(e) => handleLinkClick(e, onNavigateToLegal)} className={activePage === 'legal' ? activeNavLinkClasses : navLinkClasses}>Pravne storitve</a>
                        </nav>
                        <button className="bg-brand-green-accent hover:bg-brand-green text-white text-lg font-medium py-2 px-6 rounded-lg transition-colors">
                            Naroči se
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className="text-brand-text focus:outline-none p-2"
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            {isMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div id="mobile-menu" className="md:hidden bg-white absolute w-full shadow-lg">
                    <nav className="flex flex-col items-start px-6 py-4 space-y-2">
                        <a href="#" onClick={(e) => handleLinkClick(e, onNavigateToDermatology)} className={activePage === 'dermatology' ? mobileActiveNavLinkClasses : mobileNavLinkClasses}>Dermatologija</a>
                        <a href="#" onClick={(e) => handleLinkClick(e, onNavigateToDentistry)} className={activePage === 'dentistry' ? mobileActiveNavLinkClasses : mobileNavLinkClasses}>Zobozdravstvo</a>
                        <a href="#" onClick={(e) => handleLinkClick(e, onNavigateToLegal)} className={activePage === 'legal' ? mobileActiveNavLinkClasses : mobileNavLinkClasses}>Pravne storitve</a>
                        <button className="w-full mt-4 bg-brand-green-accent hover:bg-brand-green text-white text-lg font-medium py-3 px-6 rounded-lg transition-colors">
                            Naroči se
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-green-dark text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4 opacity-90">Dermadent d.o.o.</h3>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4 opacity-90">Dermatologija</h3>
                        <p className="mb-1 opacity-70">Naselje Vodnikov dvor, Šiška</p>
                        <p className="mb-1 opacity-70">Na jami 16</p>
                        <p className="mb-3 opacity-70">1000 Ljubljana</p>
                        <p className="mb-1 opacity-70">tel.: <a href="tel:+38615197714" className="hover:underline opacity-100 transition-opacity">01 5197714</a></p>
                        <p className="opacity-70"><a href="mailto:info@dermadent.si" className="hover:underline opacity-100 transition-opacity">info@dermadent.si</a></p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4 opacity-90">Zobozdravstvo</h3>
                        <p className="mb-1 opacity-70">Poslovno trgovski center (PTC)</p>
                        <p className="mb-1 opacity-70">Dravlje, 1. nadstropje</p>
                        <p className="mb-1 opacity-70">Ulica bratov Babnik 10</p>
                        <p className="mb-3 opacity-70">1000 Ljubljana</p>
                        <p className="mb-1 opacity-70">tel.: <a href="tel:+38615197714" className="hover:underline opacity-100 transition-opacity">01 5197714</a></p>
                        <p className="opacity-70"><a href="mailto:info@dermadent.si" className="hover:underline opacity-100 transition-opacity">info@dermadent.si</a></p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4 opacity-90">Pravne storitve</h3>
                        <p className="mb-1 opacity-70">tel.: <a href="tel:+38612562854" className="hover:underline opacity-100 transition-opacity">01 2562854</a></p>
                        <p className="opacity-70"><a href="mailto:bojan.popovic@dermadent.si" className="hover:underline opacity-100 transition-opacity">bojan.popovic@dermadent.si</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    graphic: 'dentistry' | 'dermatology';
    onAction: () => void;
}

const DentistryGraphic: React.FC = () => (
  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-28 text-brand-green transition-transform duration-300 group-hover:scale-110">
    <path d="M17 2H7C5.34315 2 4 3.34315 4 5V13C4 16.711 7.23401 19.344 11.0028 21.6572C11.5542 22.0163 12.4458 22.0163 12.9972 21.6572C16.766 19.344 20 16.711 20 13V5C20 3.34315 18.6569 2 17 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DermatologyGraphic: React.FC = () => (
    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-28 text-brand-green transition-transform duration-300 group-hover:scale-110">
        <path d="M2 9.5C2 9.5 5 11 8 11C11 11 13 8 16 8C19 8 22 9.5 22 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 14.5C2 14.5 5 16 8 16C11 16 13 13 16 13C19 13 22 14.5 22 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, graphic, onAction }) => {
    return (
        <div className="w-full max-w-md bg-white rounded-2xl border border-gray-200 p-6 flex flex-col group transition-all duration-300 hover:shadow-xl hover:border-brand-green-accent">
            <div className="bg-brand-green-light rounded-lg h-60 mb-8 flex items-center justify-center overflow-hidden">
                {graphic === 'dentistry' && <DentistryGraphic />}
                {graphic === 'dermatology' && <DermatologyGraphic />}
            </div>
            <div className="text-center flex flex-col flex-grow">
                <h2 className="text-4xl font-semibold text-brand-green-dark mb-4">{title}</h2>
                <p className="text-brand-text text-base leading-relaxed mb-8 mx-auto max-w-xs flex-grow">{description}</p>
                <div className="mt-auto">
                    <button onClick={onAction} className="inline-block bg-brand-green-accent hover:bg-brand-green text-white text-xl font-medium py-3 px-12 rounded-lg transition-colors">
                        VSTOPI
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

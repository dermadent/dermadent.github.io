import React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    imageUrl: string;
    onAction: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl, onAction }) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onAction();
        }
    };

    return (
        <div 
            className="w-full max-w-md bg-white rounded-2xl p-6 flex flex-col group transition-all duration-300 shadow-lg hover:shadow-xl hover:ring-2 hover:ring-offset-2 hover:ring-brand-green-accent cursor-pointer"
            onClick={onAction}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label={`Izberite ${title}`}
        >
            <div className="bg-gray-100 rounded-lg h-60 mb-8 overflow-hidden">
                <img 
                    src={imageUrl} 
                    alt={title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="text-center flex flex-col flex-grow">
                <h2 className="text-4xl font-semibold text-brand-green-dark mb-4">{title}</h2>
                <p className="text-brand-text text-base leading-relaxed mb-8 mx-auto max-w-xs flex-grow">{description}</p>
                <div className="mt-auto">
                    <span className="inline-block bg-brand-green-accent group-hover:bg-brand-green text-white text-xl font-medium py-3 px-12 rounded-lg transition-colors">
                        VSTOPI
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
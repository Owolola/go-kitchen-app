import React from 'react';
import StarIcon from './icons/StarIcon';
import TruckIcon from './icons/TruckIcon';
import LeafIcon from './icons/LeafIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';
import EmailIcon from './icons/EmailIcon';

const SubscriptionPage: React.FC = () => {

    const contactLinks = (planName: string) => {
        const whatsappUrl = `https://wa.me/2348187924887?text=Hello,%20I'm%20interested%20in%20the%20${encodeURIComponent(planName)}%20subscription%20plan.`;
        const emailUrl = `mailto:owololagabriel@gmail.com?subject=Subscription%20Inquiry:%20${encodeURIComponent(planName)}&body=Hello,%20I'd%20like%20to%20know%20more%20about%20the%20${encodeURIComponent(planName)}%20subscription%20plan.`;

        const baseButtonClasses = "w-full flex items-center justify-center gap-2 font-bold py-3 rounded-lg transition-colors duration-300";

        return (
            <div className="w-full mt-auto space-y-3">
                <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`${baseButtonClasses} bg-green-500 text-white hover:bg-green-600`}
                >
                    <WhatsAppIcon className="h-5 w-5" />
                    Contact via WhatsApp
                </a>
                <a 
                    href={emailUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`${baseButtonClasses} bg-gray-600 text-white hover:bg-gray-700`}
                >
                    <EmailIcon className="h-5 w-5" />
                    Contact via Email
                </a>
            </div>
        );
    };


    return (
        <div className="animate-fade-in">
            <section className="bg-brand-dark text-white text-center py-20 px-4">
                <div className="container mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{fontFamily: "'Playfair Display', serif"}}>Join Our Culinary Club</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Never worry about what's for dinner again. Get delicious, chef-prepared meals delivered right to your door.</p>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    
                    {/* Plan 1: Weekly Taster */}
                    <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-t-4 border-transparent hover:border-brand-secondary">
                        <h2 className="text-3xl font-bold mb-2" style={{fontFamily: "'Playfair Display', serif"}}>Weekly Taster</h2>
                        <p className="text-gray-500 mb-6">Perfect for the busy individual.</p>
                        <p className="text-5xl font-bold text-brand-dark mb-4">₦80,000<span className="text-lg font-normal text-gray-500">/mo</span></p>
                        <ul className="text-left space-y-4 mb-8 flex-grow">
                            <li className="flex items-center"><LeafIcon className="h-5 w-5 text-brand-secondary mr-3" />3 Meals Per Week</li>
                            <li className="flex items-center"><TruckIcon className="h-5 w-5 text-brand-secondary mr-3" />Standard Delivery</li>
                            <li className="flex items-center"><StarIcon className="h-5 w-5 text-brand-secondary mr-3" />Choose from our weekly menu</li>
                        </ul>
                        {contactLinks('Weekly Taster')}
                    </div>

                    {/* Plan 2: Monthly Feast (Featured) */}
                    <div className="bg-brand-dark text-white rounded-lg shadow-2xl p-8 flex flex-col text-center transform scale-105 z-10 border-t-4 border-brand-primary">
                        <span className="bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full self-center mb-4">Most Popular</span>
                        <h2 className="text-3xl font-bold mb-2" style={{fontFamily: "'Playfair Display', serif"}}>Monthly Feast</h2>
                        <p className="text-gray-300 mb-6">The ideal choice for couples or foodies.</p>
                        <p className="text-5xl font-bold mb-4">₦150,000<span className="text-lg font-normal text-gray-400">/mo</span></p>
                         <ul className="text-left space-y-4 mb-8 flex-grow">
                            <li className="flex items-center"><LeafIcon className="h-5 w-5 text-brand-primary mr-3" />5 Meals Per Week</li>
                            <li className="flex items-center"><TruckIcon className="h-5 w-5 text-brand-primary mr-3" />Free Priority Delivery</li>
                            <li className="flex items-center"><StarIcon className="h-5 w-5 text-brand-primary mr-3" />Full menu access + specials</li>
                        </ul>
                        {contactLinks('Monthly Feast')}
                    </div>
                    
                    {/* Plan 3: Gourmet Explorer */}
                    <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-t-4 border-transparent hover:border-brand-secondary">
                        <h2 className="text-3xl font-bold mb-2" style={{fontFamily: "'Playfair Display', serif"}}>Gourmet Explorer</h2>
                        <p className="text-gray-500 mb-6">For the ultimate food lover's experience.</p>
                        <p className="text-5xl font-bold text-brand-dark mb-4">₦250,000<span className="text-lg font-normal text-gray-500">/mo</span></p>
                        <ul className="text-left space-y-4 mb-8 flex-grow">
                            <li className="flex items-center"><LeafIcon className="h-5 w-5 text-brand-secondary mr-3" />7 Meals Per Week + Desserts</li>
                            <li className="flex items-center"><TruckIcon className="h-5 w-5 text-brand-secondary mr-3" />Free Priority Delivery</li>
                            <li className="flex items-center"><StarIcon className="h-5 w-5 text-brand-secondary mr-3" />Exclusive access to new dishes</li>
                        </ul>
                        {contactLinks('Gourmet Explorer')}
                    </div>

                </div>
            </section>
        </div>
    );
};

export default SubscriptionPage;
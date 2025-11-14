import React from 'react';
import LeafIcon from './icons/LeafIcon';
import StarIcon from './icons/StarIcon';

const AboutPage: React.FC = () => {
    const teamMembers = [
        { name: 'Owolola Gabriel Abodunrin', role: 'Founder & Head Chef', imageUrl: 'https://i.imgur.com/cyWrutS.jpeg' },
        { name: 'Tunde Bakare', role: 'Operations Manager', imageUrl: 'https://picsum.photos/seed/manager/400/400' },
        { name: 'Chiamaka Eze', role: 'Lead Pastry Chef', imageUrl: 'https://picsum.photos/seed/chef2/400/400' },
    ];

    return (
        <div className="animate-fade-in">
            <section className="relative text-center py-20 md:py-32 px-4 bg-gray-800 text-white" style={{backgroundImage: 'url(https://picsum.photos/seed/about-hero/1600/800)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{fontFamily: "'Playfair Display', serif"}}>Crafting Culinary Stories</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">We believe food is more than sustenance—it's an experience, a memory, and a way to connect.</p>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6" style={{fontFamily: "'Playfair Display', serif"}}>Our Story</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Go Kitchen was born from a simple idea: to make exceptional, globally-inspired food accessible to everyone. Our founder, Chef Owolola, started by sharing his passion for Nigerian and international cuisine from his home kitchen. What began as a small weekend pop-up quickly grew into a beloved local gem, thanks to our commitment to flavor, quality, and community.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Today, Go Kitchen is a bustling virtual restaurant, but our core values remain the same. We are a team of passionate food lovers dedicated to creating unforgettable meals that you can enjoy from the comfort of your home.
                        </p>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-2xl">
                        <img src="https://picsum.photos/seed/our-story/600/500" alt="Go Kitchen's team" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>
            
            <section className="bg-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-10" style={{fontFamily: "'Playfair Display', serif"}}>Our Philosophy</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="p-6">
                            <div className="flex justify-center items-center mb-4">
                                <LeafIcon className="h-12 w-12 text-brand-secondary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Fresh & Local</h3>
                            <p className="text-gray-600">We partner with local farmers and suppliers to source the freshest ingredients, ensuring every dish is vibrant and full of flavor.</p>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-center items-center mb-4">
                               <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Culinary Passion</h3>
                            <p className="text-gray-600">Our chefs are artists. They pour their heart and soul into every recipe, constantly innovating while honoring traditional techniques.</p>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-center items-center mb-4">
                                <StarIcon className="h-12 w-12 text-brand-secondary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Customer First</h3>
                            <p className="text-gray-600">Your satisfaction is our top priority. From easy ordering to exceptional service, we strive to make your experience seamless and delightful.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="container mx-auto px-4 py-16">
                 <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4" style={{fontFamily: "'Playfair Display', serif"}}>Meet Our Team</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">The passionate individuals who make Go Kitchen possible.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map(member => (
                        <div key={member.name} className="text-center">
                            <div className="relative inline-block mb-4">
                                <img src={member.imageUrl} alt={member.name} className="h-48 w-48 rounded-full object-cover shadow-lg" />
                            </div>
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <p className="text-brand-secondary font-semibold">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default AboutPage;
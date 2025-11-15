import React from 'react';
import FacebookIcon from './icons/FacebookIcon';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

type Page = 'home' | 'menu' | 'subscription' | 'blog' | 'about';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="bg-brand-dark text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Info */}
                    <div className="md:col-span-1">
                        <h2 className="text-2xl font-bold mb-4" style={{fontFamily: "'Playfair Display', serif"}}>Go Kitchen</h2>
                        <p className="text-gray-400">Crafting culinary experiences, one dish at a time.</p>
                        <div className="flex space-x-4 mt-6">
                            <a href="https://www.facebook.com/share/1K5B8Ugv29/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon className="h-6 w-6" /></a>
                            <a href="https://github.com/Owolola/webshield-institute-" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors"><GitHubIcon className="h-6 w-6" /></a>
                            <a href="https://www.linkedin.com/in/owolola-gabriel-446812213" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors"><LinkedInIcon className="h-6 w-6" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><button onClick={() => onNavigate('home')} className="text-gray-400 hover:text-white transition-colors">Home</button></li>
                            <li><button onClick={() => onNavigate('menu')} className="text-gray-400 hover:text-white transition-colors">Menu</button></li>
                            <li><button onClick={() => onNavigate('subscription')} className="text-gray-400 hover:text-white transition-colors">Subscriptions</button></li>
                            <li><button onClick={() => onNavigate('blog')} className="text-gray-400 hover:text-white transition-colors">Blog</button></li>
                            <li><button onClick={() => onNavigate('about')} className="text-gray-400 hover:text-white transition-colors">About Us</button></li>
                        </ul>
                    </div>
                    
                    {/* Contact Info */}
                     <div>
                        <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-gray-400">
                           <li><a href="mailto:owololagabriel@gmail.com" className="hover:text-white">owololagabriel@gmail.com</a></li>
                           <li><a href="tel:+2348187924887" className="hover:text-white">+234 818 792 4887</a></li>
                           <li>17, Akinfe street Anthony village lagos</li>
                        </ul>
                    </div>

                     {/* Newsletter (Optional) */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
                        <p className="text-gray-400 mb-4">Get the latest news and special offers.</p>
                        <form>
                            <div className="flex">
                                <input type="email" placeholder="Your email" className="w-full rounded-l-md px-3 py-2 text-gray-800 focus:outline-none" />
                                <button type="submit" className="bg-brand-primary px-4 py-2 rounded-r-md font-semibold hover:bg-amber-600">Go</button>
                            </div>
                        </form>
                    </div>

                </div>

                <div className="text-center text-gray-500 border-t border-gray-700 mt-8 pt-6">
                    <p>&copy; {new Date().getFullYear()} Go Kitchen. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
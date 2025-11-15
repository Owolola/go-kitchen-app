import React from 'react';
import { MenuItemData } from '../types';
import MenuItem from './MenuItem';

interface HomePageProps {
    menuItems: MenuItemData[];
    onAddToCart: (item: MenuItemData) => void;
    onNavigateToMenu: () => void;
    favoriteItems: string[];
    onToggleFavorite: (item: MenuItemData) => void;
}

const HomePage: React.FC<HomePageProps> = ({ menuItems, onAddToCart, onNavigateToMenu, favoriteItems, onToggleFavorite }) => {
    
    const featuredItems = menuItems.filter(item => item.category === 'Nigerian Cuisine').slice(0, 3);

    return (
        <div>
            {/* Hero Section */}
            <section className="relative text-center py-20 md:py-32 px-4 bg-gray-800 text-white" style={{backgroundImage: 'url(https://picsum.photos/seed/restaurant/1600/800)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{fontFamily: "'Playfair Display', serif"}}>Taste the Extraordinary</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">Discover a world of culinary excellence, where every dish tells a story.</p>
                    <button 
                        onClick={onNavigateToMenu}
                        className="bg-brand-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105"
                    >
                        Explore Our Menu
                    </button>
                </div>
            </section>

            {/* Featured Dishes Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4" style={{fontFamily: "'Playfair Display', serif"}}>Featured Dishes</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Handpicked by our chefs, these are the flavors you don't want to miss.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredItems.map(item => (
                        <MenuItem 
                            key={item.id} 
                            item={item} 
                            onAddToCart={onAddToCart} 
                            isFavorited={favoriteItems.includes(item.id)}
                            onToggleFavorite={onToggleFavorite}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;

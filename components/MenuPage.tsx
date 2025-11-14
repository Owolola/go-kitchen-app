import React, { useState, useMemo } from 'react';
import { MenuItemData } from '../types';
import MenuItem from './MenuItem';

interface MenuPageProps {
    menuItems: MenuItemData[];
    onAddToCart: (item: MenuItemData) => void;
    favoriteItems: string[];
    onToggleFavorite: (item: MenuItemData) => void;
}

const MenuPage: React.FC<MenuPageProps> = ({ menuItems, onAddToCart, favoriteItems, onToggleFavorite }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = useMemo(() => 
        ['All', ...Array.from(new Set(menuItems.map(item => item.category)))]
    , [menuItems]);

    const filteredItems = useMemo(() => {
        const lowercasedQuery = searchQuery.toLowerCase().trim();
        
        return menuItems.filter(item => {
            const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
            if (!categoryMatch) {
                return false;
            }

            if (lowercasedQuery === '') {
                return true;
            }
            
            const searchMatch = item.name.toLowerCase().includes(lowercasedQuery) ||
                                item.description.toLowerCase().includes(lowercasedQuery);
            return searchMatch;
        });

    }, [selectedCategory, searchQuery, menuItems]);

    const activeFilterClasses = "bg-brand-dark text-white";
    const inactiveFilterClasses = "bg-white text-gray-700 hover:bg-gray-100";

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-bold text-brand-dark mb-4" style={{fontFamily: "'Playfair Display', serif"}}>Our Culinary Delights</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Experience flavors from around the world, crafted with passion and the freshest ingredients.</p>
            </div>
            
            <div className="mb-8 w-full max-w-lg mx-auto">
                <input
                    type="search"
                    placeholder="Search for your favorite dish..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-5 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
            </div>

            <div className="flex justify-center flex-wrap gap-3 mb-12">
                {categories.map(category => (
                    <button 
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-5 py-2 rounded-full font-semibold transition-colors duration-300 shadow-sm ${selectedCategory === category ? activeFilterClasses : inactiveFilterClasses}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map(item => (
                        <MenuItem 
                            key={item.id} 
                            item={item} 
                            onAddToCart={onAddToCart}
                            isFavorited={favoriteItems.includes(item.id)}
                            onToggleFavorite={onToggleFavorite} 
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <h3 className="text-2xl font-semibold text-brand-dark mb-2">No Dishes Found</h3>
                    <p className="text-gray-500">Try adjusting your search or category filters.</p>
                </div>
            )}
        </div>
    );
};

export default MenuPage;

import React, { useState, useEffect } from 'react';
import { MenuItemData } from '../types';

interface AdminPageProps {
    onAddItem: (item: Omit<MenuItemData, 'id' | 'reviews'>) => void;
    menuItems: MenuItemData[];
    onUpdateItems: (items: MenuItemData[]) => void;
}

const AdminPage: React.FC<AdminPageProps> = ({ onAddItem, menuItems, onUpdateItems }) => {
    // State for the "Add New Item" form
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [isInStock, setIsInStock] = useState(true);

    // State for managing stock of existing items
    const [editableMenuItems, setEditableMenuItems] = useState<MenuItemData[]>(menuItems);

    useEffect(() => {
        setEditableMenuItems(menuItems);
    }, [menuItems]);
    
    const handleAddNewItem = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !description || !price || !category || !imageUrl) {
            alert('Please fill out all fields.');
            return;
        }
        
        onAddItem({
            name,
            description,
            price: Number(price),
            category,
            imageUrl,
            isInStock,
        });

        // Reset form
        setName('');
        setDescription('');
        setPrice('');
        setCategory('');
        setImageUrl('');
        setIsInStock(true);
    };

    const handleStockToggle = (itemId: string) => {
        setEditableMenuItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId ? { ...item, isInStock: !item.isInStock } : item
            )
        );
    };

    const handleSaveChanges = () => {
        onUpdateItems(editableMenuItems);
    };


    return (
        <div className="container mx-auto px-4 py-8 animate-fade-in">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-bold text-brand-dark" style={{fontFamily: "'Playfair Display', serif"}}>Admin Dashboard</h1>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-xl mb-12">
                     <h2 className="text-3xl font-bold text-brand-dark mb-6 text-center" style={{fontFamily: "'Playfair Display', serif"}}>Add New Menu Item</h2>
                    <form onSubmit={handleAddNewItem} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Dish Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                placeholder="e.g., Spicy Suya Skewers"
                            />
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={3}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                placeholder="A brief, enticing description of the dish."
                            ></textarea>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="price" className="block text-sm font-semibold text-gray-700 mb-1">Price (₦)</label>
                                <input
                                    type="number"
                                    id="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                    placeholder="e.g., 15000"
                                />
                            </div>
                            <div>
                                <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                                <input
                                    type="text"
                                    id="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                    placeholder="e.g., Nigerian Cuisine"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="imageUrl" className="block text-sm font-semibold text-gray-700 mb-1">Image URL</label>
                            <input
                                type="text"
                                id="imageUrl"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                placeholder="https://example.com/image.jpg"
                            />
                        </div>
                        
                        <div className="flex items-center">
                            <input
                                id="isInStock"
                                type="checkbox"
                                checked={isInStock}
                                onChange={(e) => setIsInStock(e.target.checked)}
                                className="h-4 w-4 rounded border-gray-300 text-brand-secondary focus:ring-brand-secondary"
                            />
                            <label htmlFor="isInStock" className="ml-3 block text-sm font-medium text-gray-900">
                                Item is in stock
                            </label>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-brand-secondary text-white font-bold py-3 px-6 rounded-lg hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105"
                            >
                                Add Menu Item
                            </button>
                        </div>
                    </form>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-xl">
                    <h2 className="text-3xl font-bold text-brand-dark mb-6 text-center" style={{fontFamily: "'Playfair Display', serif"}}>Manage Menu Stock</h2>
                    <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                        {[...editableMenuItems].sort((a, b) => a.name.localeCompare(b.name)).map(item => (
                            <div key={item.id} className="flex justify-between items-center p-4 border rounded-lg bg-gray-50">
                                <div>
                                    <p className="font-semibold text-brand-dark">{item.name}</p>
                                    <p className={`text-sm font-medium ${item.isInStock ? 'text-green-600' : 'text-red-600'}`}>
                                        {item.isInStock ? 'In Stock' : 'Out of Stock'}
                                    </p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={item.isInStock}
                                        onChange={() => handleStockToggle(item.id)}
                                        className="sr-only peer"
                                        aria-label={`Toggle stock status for ${item.name}`}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-brand-primary/50 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-secondary"></div>
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8">
                        <button
                            onClick={handleSaveChanges}
                            className="w-full bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105"
                        >
                            Save Stock Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
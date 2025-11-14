import React from 'react';
import { CartItem } from '../types';
import CloseIcon from './icons/CloseIcon';

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
    items: CartItem[];
    onUpdateQuantity: (itemId: string, quantity: number) => void;
    onProceedToCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity, onProceedToCheckout }) => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <>
            <div 
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            ></div>
            <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-6 border-b">
                        <h2 className="text-2xl font-bold" style={{fontFamily: "'Playfair Display', serif"}}>Your Cart</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                            <CloseIcon className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="flex-grow overflow-y-auto p-6">
                        {items.length === 0 ? (
                            <p className="text-gray-500">Your cart is empty.</p>
                        ) : (
                            <ul className="divide-y divide-gray-200">
                                {items.map(item => (
                                    <li key={item.id} className="py-4 flex items-center">
                                        <img src={item.imageUrl} alt={item.name} className="h-20 w-20 object-cover rounded-md mr-4" />
                                        <div className="flex-grow">
                                            <h3 className="font-semibold text-brand-dark">{item.name}</h3>
                                            <p className="text-gray-500">₦{item.price.toLocaleString()}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="h-8 w-8 rounded-full border flex items-center justify-center hover:bg-gray-100">-</button>
                                            <span className="mx-2 w-6 text-center">{item.quantity}</span>
                                            <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="h-8 w-8 rounded-full border flex items-center justify-center hover:bg-gray-100">+</button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    
                    {items.length > 0 && (
                        <div className="p-6 border-t">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg font-semibold">Subtotal</span>
                                <span className="text-xl font-bold">₦{subtotal.toLocaleString()}</span>
                            </div>
                            <button 
                                onClick={onProceedToCheckout}
                                className="w-full bg-brand-primary text-white font-bold py-3 rounded-lg hover:bg-amber-600 transition-colors duration-300"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;
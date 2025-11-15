import React, { useState, useEffect } from 'react';
import { CartItem } from '../types';
import CloseIcon from './icons/CloseIcon';
import CreditCardIcon from './icons/CreditCardIcon';
import DevicePhoneMobileIcon from './icons/DevicePhoneMobileIcon';

interface CheckoutProps {
    isOpen: boolean;
    onClose: () => void;
    items: CartItem[];
    onSubmit: () => void;
}

type PaymentMethod = 'delivery' | 'card' | 'mobile';

const Checkout: React.FC<CheckoutProps> = ({ isOpen, onClose, items, onSubmit }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('delivery');

    // Card details state
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');
    
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Reset form state when modal is opened/closed
    useEffect(() => {
        if (!isOpen) {
            setName('');
            setAddress('');
            setPaymentMethod('delivery');
            setCardNumber('');
            setExpiryDate('');
            setCvc('');
        }
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!name.trim()) {
            alert('Please fill in your full name.');
            return;
        }

        if (address.trim().length < 10) {
            alert('Please enter a valid delivery address (at least 10 characters).');
            return;
        }

        if (paymentMethod === 'card') {
            if (!cardNumber.trim() || !expiryDate.trim() || !cvc.trim()) {
                alert('Please fill in all card details.');
                return;
            }
             // Basic validation for card number format could be added here
        }
        
        onSubmit();
    };

    if (!isOpen) return null;

    const getButtonText = () => {
        switch (paymentMethod) {
            case 'card':
            case 'mobile':
                return `Pay ₦${subtotal.toLocaleString()}`;
            case 'delivery':
            default:
                return 'Place Order (Pay on Delivery)';
        }
    };
    
    const paymentOptionClasses = (method: PaymentMethod) => 
        `flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
            paymentMethod === method 
            ? 'bg-amber-50 border-brand-primary ring-2 ring-brand-primary' 
            : 'bg-gray-50 hover:bg-gray-100'
        }`;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg transform transition-all duration-300 scale-100 animate-fade-in-up max-h-[95vh] flex flex-col">
                <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white">
                    <h2 className="text-2xl font-bold" style={{fontFamily: "'Playfair Display', serif"}}>Checkout</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        <CloseIcon className="h-6 w-6" />
                    </button>
                </div>
                
                <form onSubmit={handleSubmit} className="flex-grow overflow-y-auto">
                    <div className="p-6">
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-4">Delivery Information</h3>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                                        required 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Delivery Address</label>
                                    <textarea 
                                        id="address" 
                                        rows={3}
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                                        required
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                            <div className="space-y-4">
                                <div onClick={() => setPaymentMethod('delivery')} className={paymentOptionClasses('delivery')}>
                                    <input type="radio" name="paymentMethod" value="delivery" checked={paymentMethod === 'delivery'} onChange={() => {}} className="h-4 w-4 text-brand-primary focus:ring-brand-primary"/>
                                    <label className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer">Pay on Delivery</label>
                                </div>

                                <div onClick={() => setPaymentMethod('card')} className={paymentOptionClasses('card')}>
                                    <input type="radio" name="paymentMethod" value="card" checked={paymentMethod === 'card'} onChange={() => {}} className="h-4 w-4 text-brand-primary focus:ring-brand-primary"/>
                                    <label htmlFor="card" className="ml-3 flex items-center text-sm font-medium text-gray-700 cursor-pointer">
                                        <CreditCardIcon className="h-5 w-5 mr-2 text-gray-600"/>
                                        Pay with Card
                                    </label>
                                </div>
                                {paymentMethod === 'card' && (
                                    <div className="pl-8 pt-4 space-y-4 animate-fade-in-up">
                                         <div>
                                            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                                            <input type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="0000 0000 0000 0000" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary" required />
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="flex-1">
                                                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry (MM/YY)</label>
                                                <input type="text" id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} placeholder="MM/YY" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary" required />
                                            </div>
                                            <div className="flex-1">
                                                <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
                                                <input type="text" id="cvc" value={cvc} onChange={(e) => setCvc(e.target.value)} placeholder="123" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary" required />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div onClick={() => setPaymentMethod('mobile')} className={paymentOptionClasses('mobile')}>
                                    <input type="radio" name="paymentMethod" value="mobile" checked={paymentMethod === 'mobile'} onChange={() => {}} className="h-4 w-4 text-brand-primary focus:ring-brand-primary"/>
                                     <label htmlFor="mobile" className="ml-3 flex items-center text-sm font-medium text-gray-700 cursor-pointer">
                                        <DevicePhoneMobileIcon className="h-5 w-5 mr-2 text-gray-600"/>
                                        Mobile Payment
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-6 bg-gray-50 rounded-b-lg sticky bottom-0 border-t">
                        <div className="flex justify-between items-center text-xl font-bold mb-4">
                            <span>Total</span>
                            <span>₦{subtotal.toLocaleString()}</span>
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-brand-primary text-white font-bold py-3 rounded-lg hover:bg-amber-600 transition-colors duration-300 transform hover:scale-105"
                        >
                            {getButtonText()}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
import React, { useState, useEffect } from 'react';
import { User } from '../types';
import CloseIcon from './icons/CloseIcon';

type AuthMode = 'signIn' | 'signUp';

interface AuthModalProps {
    isOpen: boolean;
    mode: AuthMode;
    onClose: () => void;
    onSignIn: (user: Omit<User, 'name'>) => void;
    onSignUp: (user: User) => void;
    onSwitchMode: (mode: AuthMode) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({
    isOpen,
    mode,
    onClose,
    onSignIn,
    onSignUp,
    onSwitchMode,
}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        // Clear form when modal opens or mode changes
        if (isOpen) {
            setName('');
            setEmail('');
            setPassword('');
        }
    }, [isOpen, mode]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (mode === 'signUp') {
            if (name.trim() && email.trim() && password.trim()) {
                onSignUp({ name, email });
            }
        } else {
            if (email.trim() && password.trim()) {
                onSignIn({ email });
            }
        }
    };

    if (!isOpen) return null;

    const isSignUp = mode === 'signUp';

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100 animate-fade-in-up">
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-2xl font-bold" style={{fontFamily: "'Playfair Display', serif"}}>
                        {isSignUp ? 'Create Your Account' : 'Sign In'}
                    </h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        <CloseIcon className="h-6 w-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="p-6">
                        <div className="space-y-4">
                            {isSignUp && (
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                        required 
                                    />
                                </div>
                            )}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="px-6 py-4 bg-gray-50 rounded-b-lg">
                        <button 
                            type="submit"
                            className="w-full bg-brand-primary text-white font-bold py-3 rounded-lg hover:bg-amber-600 transition-colors duration-300"
                        >
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </button>
                        <p className="text-center text-sm text-gray-600 mt-4">
                            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                            <button 
                                type="button" 
                                onClick={() => onSwitchMode(isSignUp ? 'signIn' : 'signUp')}
                                className="font-semibold text-brand-secondary hover:text-emerald-700 ml-1"
                            >
                                {isSignUp ? 'Sign In' : 'Sign Up'}
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AuthModal;

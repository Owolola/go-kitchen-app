import React from 'react';
import ShoppingCartIcon from './icons/ShoppingCartIcon';
import { User } from '../types';

type Page = 'home' | 'menu' | 'subscription' | 'blog' | 'about' | 'admin';

interface HeaderProps {
    cartItemCount: number;
    onCartClick: () => void;
    onNavigate: (page: Page) => void;
    currentPage: Page;
    currentUser: User | null;
    onSignInClick: () => void;
    onSignUpClick: () => void;
    onSignOut: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
    cartItemCount, 
    onCartClick, 
    onNavigate, 
    currentPage,
    currentUser,
    onSignInClick,
    onSignUpClick,
    onSignOut
}) => {
    
    const navLinkClasses = "text-gray-600 hover:text-brand-primary transition-colors";
    const activeLinkClasses = "text-brand-primary font-semibold";

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <button onClick={() => onNavigate('home')} className="text-2xl font-bold text-brand-dark" style={{fontFamily: "'Playfair Display', serif"}}>
                    Go Kitchen
                </button>
                <nav className="hidden md:flex gap-8 items-center">
                    <button onClick={() => onNavigate('home')} className={`${navLinkClasses} ${currentPage === 'home' ? activeLinkClasses : ''}`}>Home</button>
                    <button onClick={() => onNavigate('menu')} className={`${navLinkClasses} ${currentPage === 'menu' ? activeLinkClasses : ''}`}>Menu</button>
                    <button onClick={() => onNavigate('subscription')} className={`${navLinkClasses} ${currentPage === 'subscription' ? activeLinkClasses : ''}`}>Subscriptions</button>
                    <button onClick={() => onNavigate('blog')} className={`${navLinkClasses} ${currentPage === 'blog' ? activeLinkClasses : ''}`}>Blog</button>
                    <button onClick={() => onNavigate('about')} className={`${navLinkClasses} ${currentPage === 'about' ? activeLinkClasses : ''}`}>About</button>
                    {currentUser?.isAdmin && (
                        <button onClick={() => onNavigate('admin')} className={`${navLinkClasses} ${currentPage === 'admin' ? activeLinkClasses : ''}`}>Admin</button>
                    )}
                </nav>
                <div className="flex items-center gap-4">
                    <button onClick={onCartClick} className="relative text-gray-600 hover:text-brand-primary transition-colors">
                        <ShoppingCartIcon className="h-6 w-6" />
                        {cartItemCount > 0 && (
                            <span 
                                key={cartItemCount}
                                className="absolute -top-2 -right-2 bg-brand-secondary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pop">
                                {cartItemCount}
                            </span>
                        )}
                    </button>
                    {currentUser ? (
                         <div className="hidden sm:flex items-center gap-4">
                            <span className="font-semibold text-sm">Welcome, {currentUser.name}!</span>
                            <button 
                                onClick={onSignOut}
                                className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-full hover:bg-gray-300 transition-colors duration-300">
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <div className="hidden sm:flex items-center gap-2">
                             <button 
                                onClick={onSignInClick}
                                className="font-semibold text-gray-600 py-2 px-4 rounded-full hover:bg-gray-100 transition-colors duration-300">
                                Sign In
                            </button>
                            <button 
                                onClick={onSignUpClick}
                                className="bg-brand-primary text-white font-semibold py-2 px-4 rounded-full hover:bg-amber-600 transition-all duration-300 transform hover:scale-105">
                                Sign Up
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
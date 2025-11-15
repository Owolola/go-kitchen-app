
import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { CartItem, MenuItemData, User } from './types';
import { INITIAL_MENU_ITEMS } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Chatbot from './components/Chatbot';
import Checkout from './components/icons/Checkout';
import OrderSuccess from './components/OrderSuccess';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import SubscriptionPage from './components/SubscriptionPage';
import BlogPage from './components/BlogPage';
import AboutPage from './components/AboutPage';
import AuthModal from './components/AuthModal';
import AdminPage from './components/AdminPage';
import StarFilledIcon from './components/icons/StarFilledIcon';
import CloseIcon from './components/icons/CloseIcon';

type Page = 'home' | 'menu' | 'subscription' | 'blog' | 'about' | 'admin';
type AuthModalState = 'signIn' | 'signUp' | null;
type OrderStatus = 'Preparing' | 'Out for Delivery' | 'Delivered';


const App: React.FC = () => {
    const [menuItems, setMenuItems] = useState<MenuItemData[]>(INITIAL_MENU_ITEMS);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [isOrderSuccessOpen, setIsOrderSuccessOpen] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null);
    const [currentPage, setCurrentPage] = useState<Page>('home');
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [authModal, setAuthModal] = useState<AuthModalState>(null);
    const [favoriteItems, setFavoriteItems] = useState<string[]>([]);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const toastTimerRef = useRef<number | null>(null);
    const orderStatusTimerRef = useRef<number[]>([]);

    useEffect(() => {
        try {
            const storedFavorites = localStorage.getItem('goKitchenFavorites');
            if (storedFavorites) {
                setFavoriteItems(JSON.parse(storedFavorites));
            }
        } catch (error) {
            console.error("Failed to parse favorites from localStorage", error);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('goKitchenFavorites', JSON.stringify(favoriteItems));
    }, [favoriteItems]);

    const showToast = useCallback((message: string) => {
        if (toastTimerRef.current) {
            clearTimeout(toastTimerRef.current);
        }
        setToastMessage(message);
        toastTimerRef.current = window.setTimeout(() => {
            setToastMessage(null);
        }, 3000);
    }, []);

    const handleToggleFavorite = useCallback((item: MenuItemData) => {
        let message = '';
        setFavoriteItems(prevFavorites => {
            if (prevFavorites.includes(item.id)) {
                message = `${item.name} removed from favorites.`;
                return prevFavorites.filter(id => id !== item.id);
            } else {
                message = `${item.name} added to favorites!`;
                return [...prevFavorites, item.id];
            }
        });
        showToast(message);
    }, [showToast]);

    const handleAddToCart = useCallback((item: MenuItemData) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
        setIsCartOpen(true);
    }, []);

    const handleUpdateQuantity = useCallback((itemId: string, quantity: number) => {
        setCartItems(prevItems => {
            if (quantity <= 0) {
                return prevItems.filter(item => item.id !== itemId);
            }
            return prevItems.map(item =>
                item.id === itemId ? { ...item, quantity } : item
            );
        });
    }, []);

    const handleProceedToCheckout = () => {
        setIsCartOpen(false);
        setIsCheckoutOpen(true);
    };

    const handlePlaceOrder = () => {
        const newOrderId = Math.random().toString(36).substr(2, 9).toUpperCase();
        setOrderId(newOrderId);
        setOrderStatus('Preparing');
        
        orderStatusTimerRef.current.forEach(clearTimeout);
        orderStatusTimerRef.current = [];

        const timer1 = window.setTimeout(() => {
            setOrderStatus('Out for Delivery');
        }, 5000);

        const timer2 = window.setTimeout(() => {
            setOrderStatus('Delivered');
        }, 10000);
        
        orderStatusTimerRef.current = [timer1, timer2];

        setCartItems([]);
        setIsCheckoutOpen(false);
        setIsOrderSuccessOpen(true);
    };

    const handleCloseSuccessModal = () => {
        setIsOrderSuccessOpen(false);
        setOrderId('');
        setOrderStatus(null);
        orderStatusTimerRef.current.forEach(clearTimeout);
        orderStatusTimerRef.current = [];
    };

    const handleCancelOrder = useCallback(() => {
        handleCloseSuccessModal();
        showToast("Your order has been cancelled.");
    }, [showToast]);
    
    const handleNavigate = (page: Page) => {
        if ((page === 'subscription' || page === 'admin') && !currentUser) {
            setAuthModal('signIn');
            return;
        }
        if (page === 'admin' && !currentUser?.isAdmin) {
             alert("Access Denied: You must be an administrator to view this page.");
             return;
        }
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };
    
    const handleSignUp = (user: User) => {
        setCurrentUser(user);
        setAuthModal(null);
    };
    
    const handleSignIn = (user: Omit<User, 'name'>) => {
        const name = user.email.split('@')[0];
        const isAdmin = user.email.toLowerCase() === 'admin@gokitchen.com';
        setCurrentUser({ ...user, name, isAdmin });
        setAuthModal(null);
        if (isAdmin) {
            handleNavigate('admin');
        }
    };
    
    const handleSignOut = () => {
        setCurrentUser(null);
        if (currentPage === 'subscription' || currentPage === 'admin') {
            setCurrentPage('home');
        }
    };
    
    const handleAddItem = (item: Omit<MenuItemData, 'id' | 'reviews'>) => {
        const newItem: MenuItemData = {
            id: `gok-${Date.now()}`,
            reviews: [],
            ...item
        };
        setMenuItems(prevItems => [...prevItems, newItem]);
        alert("New item added successfully!");
        handleNavigate('menu');
    };
    
    const handleUpdateMenuItems = useCallback((updatedItems: MenuItemData[]) => {
        setMenuItems(updatedItems);
        showToast("Menu stock status has been updated.");
    }, [showToast]);

    const totalCartItems = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }, [cartItems]);

    return (
        <div className="min-h-screen font-sans text-brand-dark bg-brand-light flex flex-col">
            <Header 
                cartItemCount={totalCartItems} 
                onCartClick={() => setIsCartOpen(true)}
                onNavigate={handleNavigate}
                currentPage={currentPage}
                currentUser={currentUser}
                onSignInClick={() => setAuthModal('signIn')}
                onSignUpClick={() => setAuthModal('signUp')}
                onSignOut={handleSignOut}
            />

            <main className="flex-grow">
                {currentPage === 'home' && (
                    <HomePage
                        menuItems={menuItems}
                        onAddToCart={handleAddToCart} 
                        onNavigateToMenu={() => handleNavigate('menu')} 
                        favoriteItems={favoriteItems}
                        onToggleFavorite={handleToggleFavorite}
                    />
                )}
                {currentPage === 'menu' && (
                    <MenuPage
                        menuItems={menuItems}
                        onAddToCart={handleAddToCart}
                        favoriteItems={favoriteItems}
                        onToggleFavorite={handleToggleFavorite} 
                    />
                )}
                {currentPage === 'subscription' && <SubscriptionPage />}
                {currentPage === 'blog' && <BlogPage />}
                {currentPage === 'about' && <AboutPage />}
                {currentPage === 'admin' && currentUser?.isAdmin && <AdminPage menuItems={menuItems} onAddItem={handleAddItem} onUpdateItems={handleUpdateMenuItems} />}
            </main>

            <Footer onNavigate={handleNavigate} />

            <Cart
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                items={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onProceedToCheckout={handleProceedToCheckout}
            />
            
            <Checkout 
                isOpen={isCheckoutOpen}
                onClose={() => setIsCheckoutOpen(false)}
                items={cartItems}
                onSubmit={handlePlaceOrder}
            />

            <OrderSuccess
                isOpen={isOrderSuccessOpen}
                onClose={handleCloseSuccessModal}
                orderNumber={orderId}
                orderStatus={orderStatus}
                onCancelOrder={handleCancelOrder}
            />
            
            <AuthModal
                isOpen={!!authModal}
                mode={authModal || 'signIn'}
                onClose={() => setAuthModal(null)}
                onSignIn={handleSignIn}
                onSignUp={handleSignUp}
                onSwitchMode={(newMode) => setAuthModal(newMode)}
            />

            <Chatbot currentUser={currentUser} />
            
            {toastMessage && (
                <div className="fixed bottom-24 right-6 bg-brand-dark text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-pop">
                    <div className="flex items-center gap-3">
                        {toastMessage.includes('cancelled') ? <CloseIcon className="h-5 w-5 text-red-400"/> : <StarFilledIcon className="h-5 w-5 text-brand-primary" />}
                        <span>{toastMessage}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
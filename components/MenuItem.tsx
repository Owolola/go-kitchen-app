import React, { useState, useMemo } from 'react';
import { MenuItemData } from '../types';
import StarRating from './StarRating';
import ReviewsModal from './ReviewsModal';
import StarIcon from './icons/StarIcon';
import StarFilledIcon from './icons/StarFilledIcon';

interface MenuItemProps {
    item: MenuItemData;
    onAddToCart: (item: MenuItemData) => void;
    isFavorited: boolean;
    onToggleFavorite: (item: MenuItemData) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onAddToCart, isFavorited, onToggleFavorite }) => {
    const [isReviewsModalOpen, setIsReviewsModalOpen] = useState(false);

    const { averageRating, totalReviews } = useMemo(() => {
        if (!item.reviews || item.reviews.length === 0) {
            return { averageRating: 0, totalReviews: 0 };
        }
        const total = item.reviews.length;
        const sum = item.reviews.reduce((acc, review) => acc + review.rating, 0);
        return { averageRating: sum / total, totalReviews: total };
    }, [item.reviews]);


    return (
        <>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="overflow-hidden relative">
                    <img src={item.imageUrl} alt={item.name} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                    {!item.isInStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-10">
                            <span className="text-white text-xl font-bold tracking-wider uppercase">Out of Stock</span>
                        </div>
                    )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-brand-dark" style={{fontFamily: "'Playfair Display', serif"}}>{item.name}</h3>
                        {isFavorited && <StarFilledIcon className="h-5 w-5 text-brand-primary" aria-label="Favorited item"/>}
                    </div>
                    
                    {totalReviews > 0 && (
                        <button 
                            onClick={() => setIsReviewsModalOpen(true)}
                            className="flex items-center gap-2 mb-3 text-sm text-gray-600 hover:text-brand-primary transition-colors"
                            aria-label={`View ${totalReviews} reviews for ${item.name}`}
                        >
                            <StarRating rating={averageRating} />
                            <span>({totalReviews} review{totalReviews > 1 ? 's' : ''})</span>
                        </button>
                    )}

                    <p className="text-gray-600 flex-grow mb-4">{item.description}</p>
                    <div className="flex justify-between items-center mt-auto">
                        <span className="text-2xl font-semibold text-brand-dark">₦{item.price.toLocaleString()}</span>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => onToggleFavorite(item)}
                                className="p-2 rounded-full text-gray-400 hover:bg-amber-100 hover:text-brand-primary transition-colors"
                                aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
                            >
                                {isFavorited ? <StarFilledIcon className="h-6 w-6 text-brand-primary" /> : <StarIcon className="h-6 w-6" />}
                            </button>
                            <button 
                                onClick={() => onAddToCart(item)}
                                className="bg-brand-secondary text-white font-semibold py-2 px-5 rounded-full hover:bg-emerald-600 transition-colors duration-300 transform group-hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
                                disabled={!item.isInStock}
                            >
                                {item.isInStock ? 'Add to Cart' : 'Out of Stock'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <ReviewsModal 
                isOpen={isReviewsModalOpen}
                onClose={() => setIsReviewsModalOpen(false)}
                itemName={item.name}
                reviews={item.reviews}
            />
        </>
    );
};

export default MenuItem;
import React from 'react';
import StarIcon from './icons/StarIcon';

interface StarRatingProps {
    rating: number;
    className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, className = 'h-5 w-5' }) => {
    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, index) => {
                const starRating = index + 1;
                return (
                    <StarIcon
                        key={starRating}
                        className={`${className} ${
                            starRating <= Math.round(rating) ? 'text-brand-primary' : 'text-gray-300'
                        }`}
                    />
                );
            })}
        </div>
    );
};

export default StarRating;
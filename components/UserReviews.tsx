import React from 'react';
import { Review } from '../types';
import StarRating from './StarRating';

interface UserReviewsProps {
    reviews: Review[];
}

const UserReviews: React.FC<UserReviewsProps> = ({ reviews }) => {
    if (!reviews || reviews.length === 0) {
        return (
            <div className="text-center py-8">
                <p className="text-gray-500">No reviews yet for this item.</p>
            </div>
        );
    }
    
    const totalReviews = reviews.length;
    const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews;

    return (
        <div>
            {/* Summary Section */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                     <p className="text-4xl font-bold text-brand-dark">{averageRating.toFixed(1)}</p>
                     <p className="text-sm text-gray-500">out of 5</p>
                </div>
                <div className="flex-grow text-center sm:text-left">
                    <StarRating rating={averageRating} className="h-7 w-7 mx-auto sm:mx-0" />
                    <p className="text-gray-600 mt-1">Based on {totalReviews} review{totalReviews > 1 ? 's' : ''}</p>
                </div>
            </div>

            {/* Individual Reviews */}
            <div className="space-y-6">
                {reviews.map(review => (
                    <div key={review.id} className="pb-6 border-b last:border-b-0">
                        <div className="flex items-center mb-2">
                            <StarRating rating={review.rating} className="h-4 w-4" />
                            <p className="ml-3 font-semibold text-brand-dark">{review.userName}</p>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserReviews;
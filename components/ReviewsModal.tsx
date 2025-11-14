import React from 'react';
import { Review } from '../types';
import CloseIcon from './icons/CloseIcon';
import UserReviews from './UserReviews';

interface ReviewsModalProps {
    isOpen: boolean;
    onClose: () => void;
    itemName: string;
    reviews: Review[];
}

const ReviewsModal: React.FC<ReviewsModalProps> = ({ isOpen, onClose, itemName, reviews }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl transform transition-all duration-300 scale-100 animate-fade-in-up max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white">
                    <h2 className="text-2xl font-bold" style={{fontFamily: "'Playfair Display', serif"}}>Reviews for {itemName}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        <CloseIcon className="h-6 w-6" />
                    </button>
                </div>
                
                <div className="p-6 overflow-y-auto">
                    <UserReviews reviews={reviews} />
                </div>

                 <div className="p-4 bg-gray-50 rounded-b-lg text-right sticky bottom-0">
                    <button 
                        onClick={onClose}
                        className="bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewsModal;
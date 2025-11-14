import React from 'react';
import CheckCircleIcon from './icons/CheckCircleIcon';
import TruckIcon from './icons/TruckIcon';
import FireIcon from './icons/FireIcon';

type OrderStatus = 'Preparing' | 'Out for Delivery' | 'Delivered' | null;

interface OrderSuccessProps {
    isOpen: boolean;
    onClose: () => void;
    orderNumber: string;
    orderStatus: OrderStatus;
    onCancelOrder: () => void;
}

const OrderSuccess: React.FC<OrderSuccessProps> = ({ isOpen, onClose, orderNumber, orderStatus, onCancelOrder }) => {
    if (!isOpen) return null;

    const statuses: Exclude<OrderStatus, null>[] = ['Preparing', 'Out for Delivery', 'Delivered'];
    const currentStatusIndex = orderStatus ? statuses.indexOf(orderStatus) : -1;

    const getStatusClasses = (index: number) => {
        const isActive = index <= currentStatusIndex;
        return {
            iconColor: isActive ? 'text-white' : 'text-gray-500',
            bgColor: isActive ? 'bg-brand-secondary' : 'bg-gray-200',
            textColor: isActive ? 'text-brand-dark font-semibold' : 'text-gray-500',
            lineColor: index < currentStatusIndex ? 'bg-brand-secondary' : 'bg-gray-200',
        };
    };

    const handleCancelClick = () => {
        if (window.confirm('Are you sure you want to cancel your order? This action cannot be undone.')) {
            onCancelOrder();
        }
    };

    const statusIcons = [
        <FireIcon key="preparing" className="h-6 w-6" />,
        <TruckIcon key="delivery" className="h-6 w-6" />,
        <CheckCircleIcon key="delivered" className="h-6 w-6" />,
    ];
    
    const renderMainIcon = () => {
        switch (orderStatus) {
            case 'Delivered':
                return <CheckCircleIcon className="h-20 w-20 text-brand-secondary mx-auto mb-4" />;
            case 'Out for Delivery':
                return (
                    <div className="animate-pulse mx-auto mb-4 h-20 w-20 text-brand-secondary flex items-center justify-center">
                        <TruckIcon className="h-16 w-16" />
                    </div>
                );
            case 'Preparing':
            default:
                 return (
                    <div className="mx-auto mb-4 h-20 w-20 text-brand-secondary flex items-center justify-center">
                        <FireIcon className="h-16 w-16" />
                    </div>
                );
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8 text-center transform transition-all duration-300 scale-100 animate-fade-in-up">
                {renderMainIcon()}
                <h2 className="text-2xl font-bold mb-2" style={{fontFamily: "'Playfair Display', serif"}}>
                    {orderStatus === 'Delivered' ? 'Order Delivered!' : 'Order Placed Successfully!'}
                </h2>
                <p className="text-gray-600 mb-6">Thank you for your purchase. You can track the status of your order below.</p>
                <p className="text-lg font-semibold text-brand-dark mb-8">Your Order ID: #{orderNumber}</p>
                
                {/* Order Status Tracker */}
                <div className="mb-8">
                    <div className="flex items-center">
                        {statuses.map((status, index) => (
                            <React.Fragment key={status}>
                                <div className="flex flex-col items-center">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500 ${getStatusClasses(index).bgColor}`}>
                                        <div className={`transition-colors duration-500 ${getStatusClasses(index).iconColor}`}>
                                           {statusIcons[index]}
                                        </div>
                                    </div>
                                    <p className={`mt-2 text-xs transition-colors duration-500 ${getStatusClasses(index).textColor}`}>{status}</p>
                                </div>
                                {index < statuses.length - 1 && (
                                    <div className={`flex-1 h-1 mx-2 transition-colors duration-500 ${getStatusClasses(index).lineColor}`}></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="space-y-3">
                     <button 
                        onClick={onClose}
                        className="w-full bg-brand-primary text-white font-bold py-3 rounded-lg hover:bg-amber-600 transition-colors duration-300"
                    >
                        {orderStatus === 'Delivered' ? 'Great!' : 'Continue Shopping'}
                    </button>
                    {orderStatus === 'Preparing' && (
                        <button
                            onClick={handleCancelClick}
                            className="w-full bg-transparent text-red-600 font-semibold py-2 px-4 rounded-lg border-2 border-red-200 hover:bg-red-50 hover:border-red-500 transition-colors duration-300"
                        >
                            Cancel Order
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
};

export default OrderSuccess;
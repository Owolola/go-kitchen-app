export interface Review {
    id: string;
    userName: string;
    rating: number; // 1-5
    comment: string;
}

export interface MenuItemData {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    reviews: Review[];
    isInStock: boolean;
}

export interface CartItem extends MenuItemData {
    quantity: number;
}

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}

export interface BlogPost {
    id:string;
    title: string;
    author: string;
    date: string;
    excerpt: string;
    imageUrl: string;
}

export interface User {
    name: string;
    email: string;
    isAdmin?: boolean;
}
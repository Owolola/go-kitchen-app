
import { MenuItemData, BlogPost } from './types';

export const INITIAL_MENU_ITEMS: MenuItemData[] = [
    {
        id: '1',
        name: 'Avocado Sunrise Toast',
        description: 'Creamy smashed avocado on toasted artisanal sourdough, garnished with juicy cherry tomatoes, toasted seeds, and fresh microgreens. A perfect, healthy start to your day.',
        price: 5500,
        imageUrl: 'https://i.imgur.com/n9jGM4v.jpeg',
        category: 'Breakfast',
        isInStock: true,
        reviews: [
            { id: 'r1-1', userName: 'Sarah J.', rating: 5, comment: 'Absolutely delicious! The perfect start to my day.' },
            { id: 'r1-2', userName: 'Mike T.', rating: 4, comment: 'Really good, very fresh ingredients.' },
        ]
    },
    {
        id: '2',
        name: 'Zen Garden Quinoa Bowl',
        description: 'A power-packed, vibrant mix of fluffy quinoa, crisp edamame, roasted sweet potatoes, and tangy pickled radish, all brought together with a zesty sesame-ginger vinaigrette.',
        price: 6750,
        imageUrl: 'https://i.imgur.com/gIetLT4.jpeg',
        category: 'Bowls',
        isInStock: true,
        reviews: [
            { id: 'r2-1', userName: 'Emily R.', rating: 5, comment: 'So fresh and flavorful! I could eat this every day.' },
            { id: 'r2-2', userName: 'David L.', rating: 4, comment: 'A fantastic healthy option. The vinaigrette is amazing.' },
            { id: 'r2-3', userName: 'Chen W.', rating: 5, comment: 'Perfectly balanced and very satisfying.' },
        ]
    },
    {
        id: '3',
        name: 'The Ultimate Umami Burger',
        description: 'A juicy, flame-grilled beef patty loaded with melted cheddar, crispy bacon, caramelized onions, and our signature umami sauce on a toasted sesame seed bun.',
        price: 6625,
        imageUrl: 'https://i.imgur.com/Qv9GTkC.jpeg',
        category: 'Mains',
        isInStock: true,
        reviews: [
            { id: 'r3-1', userName: 'Chris P.', rating: 5, comment: 'One of the best burgers I have ever had. That sauce is incredible!' },
            { id: 'r3-2', userName: 'Jessica B.', rating: 5, comment: 'Perfectly cooked and so juicy. Worth every penny.' },
        ]
    },
    {
        id: '4',
        name: 'Crimson Berry Smoothie',
        description: 'A refreshing blend of strawberries, raspberries, banana, almond milk, and a touch of agave.',
        price: 13500,
        imageUrl: 'https://i.imgur.com/TleMMSE.jpeg',
        category: 'Drinks',
        isInStock: true,
        reviews: [
            { id: 'r4-1', userName: 'Anna K.', rating: 5, comment: 'My favorite go-to smoothie. So refreshing!' },
        ]
    },
    {
        id: '5',
        name: 'Truffle Mushroom Risotto',
        description: 'Creamy Arborio rice with wild mushrooms, parmesan cheese, and a luxurious black truffle oil finish.',
        price: 18000,
        imageUrl: 'https://i.imgur.com/069wDYc.jpeg',
        category: 'Mains',
        isInStock: true,
        reviews: [
            { id: 'r5-1', userName: 'Sophia L.', rating: 5, comment: 'Absolutely decadent. The truffle flavor is perfectly balanced.' },
            { id: 'r5-2', userName: 'Ben C.', rating: 4, comment: 'Very rich and creamy. A fantastic special occasion dish.' },
        ]
    },
    {
        id: '6',
        name: 'Chocolate Lava Dream',
        description: 'Decadent dark chocolate cake with a molten center, served with vanilla bean ice cream and a raspberry coulis.',
        price: 9000,
        imageUrl: 'https://i.imgur.com/YaRiYI3.jpeg',
        category: 'Desserts',
        isInStock: true,
        reviews: [
             { id: 'r6-1', userName: 'Maria G.', rating: 5, comment: 'The perfect dessert. The molten chocolate was divine!' },
        ]
    },
    {
        id: '7',
        name: 'Jollof Rice & Grilled Chicken',
        description: 'Our signature Jollof rice, slow-cooked in a rich tomato and pepper sauce, served with a flame-grilled, spice-marinated quarter chicken and sweet plantains.',
        price: 6250,
        imageUrl: 'https://i.imgur.com/CAZmFs5.jpeg',
        category: 'Nigerian Cuisine',
        isInStock: true,
        reviews: [
            { id: 'r7-1', userName: 'Adekunle A.', rating: 5, comment: 'This is the real deal! Tastes just like my mother\'s Jollof. The chicken was perfectly grilled.' },
            { id: 'r7-2', userName: 'Fatima B.', rating: 5, comment: 'Absolutely amazing! The smoky flavor is top-notch.' },
            { id: 'r7-3', userName: 'James O.', rating: 4, comment: 'Very good Jollof rice. A classic done right.' },
        ]
    },
    {
        id: '8',
        name: 'Egusi Soup with Pounded Yam',
        description: 'A rich and savory soup made from ground melon seeds, vegetables, and assorted meats, served with a side of smooth pounded yam.',
        price: 7125,
        imageUrl: 'https://i.imgur.com/7liUPHY.jpeg',
        category: 'Nigerian Cuisine',
        isInStock: true,
        reviews: [
            { id: 'r8-1', userName: 'Ngozi E.', rating: 5, comment: 'Rich, authentic, and delicious. Reminds me of home.' },
        ]
    },
    {
        id: '9',
        name: 'Spicy Suya Skewers',
        description: 'Tender beef skewers marinated in a spicy peanut blend (Yaji), grilled to perfection and served with fresh onions and tomatoes.',
        price: 15000,
        imageUrl: 'https://th.bing.com/th/id/OIP.K5iglFn93tuIkxl7TrsyzAHaEK?w=274&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.1&pid=1.7&rm=3',
        category: 'Nigerian Cuisine',
        isInStock: true,
        reviews: [
            { id: 'r9-1', userName: 'Tunde K.', rating: 5, comment: 'The spice level is perfect! Best Suya in town.' },
            { id: 'r9-2', userName: 'Chioma V.', rating: 4, comment: 'Juicy and flavorful. Highly recommended.' },
        ]
    },
    {
        id: '10',
        name: 'Nsala Soup (White Soup)',
        description: 'Taste the magic of Nsala Soup! A rich, peppery delight made with fresh catfish and yam, bursting with authentic Igbo flavors — the perfect comfort meal you’ll crave again and again.',
        price: 7250,
        imageUrl: 'https://i.imgur.com/xKPGHrC.jpeg',
        category: 'Nigerian Cuisine',
        isInStock: true,
        reviews: []
    },
    {
        id: '11',
        name: 'Banga Soup',
        description: 'Indulge in Banga Soup! A rich palm nut delicacy bursting with bold flavors and tender meats — the true taste of the Niger Delta you won’t want to miss.',
        price: 7375,
        imageUrl: 'https://i.imgur.com/ROlTCqM.jpeg',
        category: 'Nigerian Cuisine',
        isInStock: true,
        reviews: []
    },
    {
        id: '12',
        name: 'Savor Edikang Ikong Soup',
        description: 'Savor Edikang Ikong Soup! A rich blend of fresh vegetables, tender meats, and bold spices — a wholesome Nigerian classic you’ll love with every bite.',
        price: 7500,
        imageUrl: 'https://i.imgur.com/a1ST4C3.jpeg',
        category: 'Nigerian Cuisine',
        isInStock: true,
        reviews: []
    },
    {
        id: '13',
        name: 'Afang Soup',
        description: 'Delight in Afang Soup! A rich, flavorful blend of Afang and water leaves, tender meats, and spices — a wholesome taste of tradition you’ll savor with every bite.',
        price: 7750,
        imageUrl: 'https://i.imgur.com/8EoUtnK.jpeg',
        category: 'Nigerian Cuisine',
        isInStock: true,
        reviews: []
    },
    {
        id: '14',
        name: 'Spaghetti Bolognese',
        description: 'Al dente pasta coated in a rich, slow-simmered beef and tomato sauce, bursting with garlic, herbs, and homestyle flavor. It’s hearty, satisfying, and made to warm your soul.',
        price: 7000,
        imageUrl: 'https://i.imgur.com/rKD31tq.jpeg',
        category: 'Mains',
        isInStock: true,
        reviews: []
    },
    {
        id: '15',
        name: 'Okra Soup',
        description: "Get ready to taste the flavor of West Africa! Our delicious Okro Soup is made with tender okra, savory spices, and your choice of protein. It's a taste sensation that'll leave you wanting more! Come try a bowl today and experience the authentic flavors of Nigeria!",
        price: 7250,
        imageUrl: 'https://i.imgur.com/qcLE5NO.jpeg',
        category: 'Nigerian Cuisine',
        isInStock: true,
        reviews: []
    },
    {
        id: '16',
        name: 'Native Rice',
        description: "Experience the authentic taste of Nigeria with our premium Native Rice! Our rice is carefully selected, cooked to perfection, and infused with traditional spices that will leave you craving for more. Pair it with your favorite stew or soup for the ultimate Nigerian culinary experience! Order now and taste the difference!",
        price: 6500,
        imageUrl: 'https://i.imgur.com/m8r3pTz.jpeg',
        category: 'Nigerian Cuisine',
        isInStock: true,
        reviews: []
    },
    {
        id: '17',
        name: 'Efo Riro',
        description: "Spice up your mealtime with our mouth-watering Efo Riro! Made with tender spinach, flavorful locust leaves, and a blend of traditional spices, our Efo Riro is a delicious and authentic Yoruba classic. Serve it with your favorite swallow or rice, and get ready for a taste explosion!",
        price: 7375,
        imageUrl: 'https://i.imgur.com/6s6HU9t.jpeg',
        category: 'Nigerian Cuisine',
        isInStock: true,
        reviews: []
    },
    {
        id: '18',
        name: 'Yam Porridge',
        description: "Warm up with a bowl of our creamy Yam Porridge! Made with tender yams, flavorful spices, and a hint of sweetness, our Asamu/Yam Porridge is a comforting Nigerian favorite. Perfect for breakfast, lunch, or dinner, it's a delicious and filling meal that'll keep you going all day!",
        price: 6875,
        imageUrl: 'https://i.imgur.com/Z7JHCXE.jpeg',
        category: 'Nigerian Cuisine',
        isInStock: true,
        reviews: []
    },
    {
        id: '19',
        name: 'Creamy Cheese Sauce',
        description: "Indulge in the richness of our Creamy Cheese Sauce! Made with high-quality cheese and a hint of spices, it's the perfect, decadent complement to elevate your favorite dishes like pasta, nachos, or fries.",
        price: 3500,
        imageUrl: 'https://i.imgur.com/xj48Jv8.jpeg',
        category: 'Sides & Sauces',
        isInStock: true,
        reviews: []
    },
    {
        id: '20',
        name: 'Red Velvet Delight',
        description: "A slice of heaven. Our classic red velvet cake features a moist, tender crumb with a hint of cocoa, all topped with a luscious cream cheese frosting.",
        price: 4500,
        imageUrl: 'https://i.imgur.com/gD433Yd.jpeg',
        category: 'Desserts',
        isInStock: true,
        reviews: []
    },
    {
        id: '21',
        name: 'Classic Cheesecake',
        description: "Rich, dense, and creamy New York-style cheesecake with a buttery graham cracker crust. A timeless dessert for any occasion.",
        price: 5000,
        imageUrl: 'https://i.imgur.com/KqfG1zT.jpeg',
        category: 'Desserts',
        isInStock: true,
        reviews: []
    },
    {
        id: '22',
        name: 'Coca-Cola',
        description: "The classic, refreshing taste of Coca-Cola in a chilled can. The perfect companion for any meal.",
        price: 500,
        imageUrl: 'https://i.imgur.com/rZbyvqK.jpeg',
        category: 'Drinks',
        isInStock: true,
        reviews: []
    },
    {
        id: '23',
        name: 'Fanta',
        description: "Bright, bubbly, and popular, Fanta Orange is a vibrant soft drink that's bursting with fruity flavor.",
        price: 500,
        imageUrl: 'https://i.imgur.com/vCNIa3T.jpeg',
        category: 'Drinks',
        isInStock: true,
        reviews: []
    },
    {
        id: '24',
        name: 'Bottled Water',
        description: "Stay refreshed with a bottle of pure, clean still water. The simplest and healthiest choice.",
        price: 300,
        imageUrl: 'https://i.imgur.com/tRkbPZr.jpeg',
        category: 'Drinks',
        isInStock: true,
        reviews: []
    },
    {
        id: '25',
        name: 'Teem Lemon & Lime',
        description: "A crisp and refreshing lemon and lime flavored soda, perfect for quenching your thirst.",
        price: 500,
        imageUrl: 'https://i.imgur.com/ou1WNeX.jpeg',
        category: 'Drinks',
        isInStock: true,
        reviews: []
    }
];

export const BLOG_POSTS: BlogPost[] = [
    {
        id: 'blog-1',
        title: 'The Secret to Perfect Jollof Rice',
        author: 'Chef Gabriel',
        date: 'October 26, 2023',
        excerpt: 'Discover the age-old secrets and modern twists to creating the most flavorful and vibrant Jollof rice that will be the star of any gathering.',
        imageUrl: 'https://i.imgur.com/J8zE1X6.jpeg',
    },
    {
        id: 'blog-2',
        title: 'A Guide to Nigerian Soups',
        author: 'Amaka Nwosu',
        date: 'October 22, 2023',
        excerpt: 'From the rich Egusi to the savory Banga, embark on a culinary journey through the diverse and delicious world of Nigerian soups.',
        imageUrl: 'https://picsum.photos/seed/blog2/600/400',
    },
    {
        id: 'blog-3',
        title: 'Healthy Eating, Delicious Living',
        author: 'Dr. Funke Williams',
        date: 'October 18, 2023',
        excerpt: 'Learn how our chefs at Go Kitchen balance nutrition and flavor, crafting meals that are both good for you and incredibly tasty.',
        imageUrl: 'https://picsum.photos/seed/blog3/600/400',
    },
     {
        id: 'blog-4',
        title: 'The Art of Food Pairing',
        author: 'Sommelier Tunde',
        date: 'October 15, 2023',
        excerpt: 'Unlock the secrets of pairing the right drink with your meal to elevate your dining experience from great to unforgettable.',
        imageUrl: 'https://picsum.photos/seed/blog4/600/400',
    },
];

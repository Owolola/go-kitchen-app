import React from 'react';
import { BLOG_POSTS } from '../constants';

const BlogPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8 animate-fade-in">
            <div className="text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-bold text-brand-dark mb-4" style={{fontFamily: "'Playfair Display', serif"}}>From Our Kitchen to Yours</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover recipes, stories, and culinary inspiration from our team of passionate chefs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOG_POSTS.map(post => (
                    <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                        <div className="overflow-hidden">
                             <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                             <h2 className="text-2xl font-bold text-brand-dark mb-2" style={{fontFamily: "'Playfair Display', serif"}}>{post.title}</h2>
                             <p className="text-sm text-gray-500 mb-4">By {post.author} on {post.date}</p>
                             <p className="text-gray-600 flex-grow mb-6">{post.excerpt}</p>
                             <button className="mt-auto self-start text-brand-secondary font-semibold hover:text-emerald-700 transition-colors">
                                Read More &rarr;
                             </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;

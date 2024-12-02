import React from 'react';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    title: 'Lighting The Way With Guest Daniel Stern',
    author: 'Dride',
    date: '15 March, 2024',
    image: '/blog/image-1-2.webp',
  },
  {
    title: 'Why Auto Driving Will Help You To Pass',
    author: 'Dride',
    date: '16 March, 2024',
    image: '/blog/image-1-1.webp',
  },
  {
    title: 'How to Overcome Your Fear of Driving',
    author: 'Dride',
    date: '17 March, 2024',
    image: '/blog/image-1-3.webp',
  },
  {
    title: 'How to Overcome Your Fear of Driving',
    author: 'Dride',
    date: '17 March, 2024',
    image: '/blog/image-1-4.webp',
  },
];

const BlogAndNews: React.FC = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-10">
          <h2 className="text-green text-lg mb-2">Blog & News</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-orange mb-4">Our Latest News & Articles</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src={article.image} alt={article.title} width={300} height={300} className="w-full h-48 object-cover"/>
              <div className="flex flex-col items-start p-6">
                <div className="flex items-center mb-4 text-orange">
                  <FaUser className="mr-2 fill-green" /> By {article.author} <FaCalendarAlt className="ml-4 mr-2 fill-green" /> {article.date}
                </div>
                <h3 className="text-lg font-semibold text-start mb-4">{article.title}</h3>
                <Link href="#" className="text-orange hover:text-green">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogAndNews;

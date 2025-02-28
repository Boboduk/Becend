import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Временные данные для демонстрации
const newsData = [
  {
    id: 1,
    title: 'Запуск новой платформы для управления проектами',
    content: 'Мы рады сообщить о запуске новой корпоративной платформы для управления проектами...',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
    date: '2025-02-20'
  },
  {
    id: 2,
    title: 'Партнерство с ведущими технологическими компаниями',
    content: 'Мы заключили стратегическое партнерство с крупнейшими технологическими компаниями...',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902',
    date: '2025-01-18'
  },
  {
    id: 3,
    title: 'Открытие нового офиса в Европе',
    content: 'Мы рады сообщить об открытии нового офиса в Берлине. Это важный шаг в нашей стратегии расширения на международные рынки...',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
    date: '2024-12-15'
  }
];

const News = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Новости и события
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Актуальные новости и события в мире IT-образования
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  className="w-full h-full object-cover"
                  src={news.image}
                  alt={news.title}
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  {new Date(news.date).toLocaleDateString('ru-RU')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {news.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {news.content.length > 100
                    ? `${news.content.substring(0, 100)}...`
                    : news.content}
                </p>
                <Link
                  to={`/news/${news.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Читать далее →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Временные данные (в реальном приложении будут загружаться из базы данных)
const newsData = [
  {
    id: 1,
    title: 'Запуск новой платформы для управления проектами',
    content: `Мы рады сообщить о запуске новой корпоративной платформы для управления проектами. Эта платформа поможет нашим клиентам:

- Упростить планирование и контроль проектов
- Улучшить коммуникацию между командами
- Автоматизировать рутинные задачи
- Повысить прозрачность процессов
- Увеличить эффективность работы

Платформа уже доступна для всех наших клиентов, и мы готовы предоставить обучение по ее использованию.`,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
    date: '2025-02-20'
  },
  {
    id: 2,
    title: 'Партнерство с ведущими технологическими компаниями',
    content: `Мы заключили стратегическое партнерство с крупнейшими технологическими компаниями. Это сотрудничество позволит нам:

- Внедрять передовые технологии в наши решения
- Предлагать клиентам инновационные продукты
- Участвовать в совместных исследованиях и разработках
- Расширить наши возможности в области ИИ и Big Data

Мы уверены, что это партнерство принесет значительную пользу нашим клиентам.`,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902',
    date: '2025-01-18'
  },
  {
    id: 3,
    title: 'Открытие нового офиса в Европе',
    content: `Мы рады сообщить об открытии нового офиса в Берлине. Это важный шаг в нашей стратегии расширения на международные рынки. Новый офис позволит нам:

- Улучшить обслуживание европейских клиентов
- Привлечь талантливых специалистов
- Укрепить партнерские отношения с местными компаниями
- Участвовать в ключевых отраслевых мероприятиях

Мы приглашаем всех посетить наш новый офис и познакомиться с нашей командой.`,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
    date: '2024-12-15'
  }
];

const NewsDetail = () => {
  const { id } = useParams();
  const news = newsData.find(n => n.id === parseInt(id));

  if (!news) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Новость не найдена</h2>
          <Link to="/news" className="mt-4 text-blue-600 hover:text-blue-800">
            Вернуться к списку новостей
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/news"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
          >
            ← Вернуться к списку новостей
          </Link>

          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-96">
              <img
                className="w-full h-full object-cover"
                src={news.image}
                alt={news.title}
              />
            </div>
            <div className="p-8">
              <div className="text-sm text-gray-500 mb-4">
                {new Date(news.date).toLocaleDateString('ru-RU')}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                {news.title}
              </h1>
              <div className="prose max-w-none">
                {news.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-600">
                    {paragraph.startsWith('- ') ? (
                      <ul className="list-disc list-inside">
                        {paragraph.split('\n').map((item, i) => (
                          <li key={i} className="mb-2">{item.replace('- ', '')}</li>
                        ))}
                      </ul>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsDetail;
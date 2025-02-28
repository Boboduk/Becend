import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'IT-решения',
    description: 'Разработка и внедрение программного обеспечения для вашего бизнеса.',
    duration: 'Индивидуально',
    level: 'Профессиональный'
  },
  {
    id: 2,
    title: 'Консалтинг',
    description: 'Стратегическое планирование и оптимизация бизнес-процессов.',
    duration: 'Индивидуально',
    level: 'Экспертный'
  },
  {
    id: 3,
    title: 'Маркетинг',
    description: 'Цифровое продвижение и брендинг для увеличения продаж.',
    duration: 'Индивидуально',
    level: 'Профессиональный'
  },
  {
    id: 4,
    title: 'Обучение персонала',
    description: 'Корпоративные тренинги и программы развития сотрудников.',
    duration: 'Индивидуально',
    level: 'Средний'
  },
  {
    id: 5,
    title: 'Кибербезопасность',
    description: 'Защита данных и информационной инфраструктуры вашего бизнеса.',
    duration: 'Индивидуально',
    level: 'Экспертный'
  },
  {
    id: 6,
    title: 'Аутсорсинг',
    description: 'Передача непрофильных функций на аутсорсинг для повышения эффективности.',
    duration: 'Индивидуально',
    level: 'Профессиональный'
  }
];

const Services = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Популярные услуги
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Выберите услугу, которая подходит вашему бизнесу
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-500">{service.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">Сроки: {service.duration}</span>
                  <span className="text-sm text-gray-500">Уровень: {service.level}</span>
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Подробнее
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
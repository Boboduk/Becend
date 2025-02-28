import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              О компании WPSmart
            </h1>
            <p className="mt-4 text-xl">
              Ваш надежный партнер в мире IT-образования
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900">
              Наша миссия
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Мы стремимся сделать качественное IT-образование доступным для каждого, 
              помогая людям реализовать свой потенциал в технологической сфере.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">
              Наши ценности
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">Качество</h3>
                <p className="mt-2 text-gray-500">
                  Мы предоставляем только актуальные и практически применимые знания, 
                  постоянно обновляя программы обучения.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">Инновации</h3>
                <p className="mt-2 text-gray-500">
                  Используем современные технологии и методики обучения для 
                  достижения максимальной эффективности.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">Поддержка</h3>
                <p className="mt-2 text-gray-500">
                  Обеспечиваем индивидуальный подход и поддержку каждому студенту 
                  на всех этапах обучения.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* History Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">
              История компании
            </h2>
            <div className="mt-8 prose prose-blue mx-auto">
              <p className="text-lg text-gray-500">
                Компания WPSmart была основана в 2023 году группой энтузиастов, 
                объединенных идеей создания современной образовательной платформы. 
                За это время мы:
              </p>
              <ul className="mt-4 space-y-4 text-gray-500">
                <li>Обучили более 1000 студентов</li>
                <li>Разработали 20+ уникальных образовательных программ</li>
                <li>Создали сообщество профессионалов в сфере IT</li>
                <li>Установили партнерские отношения с ведущими IT-компаниями</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-4"
          >
            <div className="text-center text-white">
              <div className="text-4xl font-bold">1000+</div>
              <div className="mt-2">Выпускников</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold">20+</div>
              <div className="mt-2">Курсов</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold">50+</div>
              <div className="mt-2">Экспертов</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold">95%</div>
              <div className="mt-2">Трудоустройство</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">
              Наши партнеры
            </h2>
            <p className="mt-4 text-xl text-gray-500 text-center">
              Мы сотрудничаем с ведущими компаниями IT-индустрии
            </p>
            <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="flex items-center justify-center h-20 bg-gray-100 rounded-lg">
                <span className="text-gray-500 font-semibold">Partner 1</span>
              </div>
              <div className="flex items-center justify-center h-20 bg-gray-100 rounded-lg">
                <span className="text-gray-500 font-semibold">Partner 2</span>
              </div>
              <div className="flex items-center justify-center h-20 bg-gray-100 rounded-lg">
                <span className="text-gray-500 font-semibold">Partner 3</span>
              </div>
              <div className="flex items-center justify-center h-20 bg-gray-100 rounded-lg">
                <span className="text-gray-500 font-semibold">Partner 4</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
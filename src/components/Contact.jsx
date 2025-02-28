import React from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold text-gray-900">Свяжитесь с нами</h1>
          <p className="mt-4 text-xl text-gray-600">
            Мы всегда готовы ответить на ваши вопросы
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Контактная информация */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Контактная информация</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <HiMail className="w-6 h-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">amga.2002@mail.ru</p>
                </div>
              </div>

              <div className="flex items-start">
                <HiPhone className="w-6 h-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Телефон</h3>
                  <p className="text-gray-600">+7 (924) 160-63-56</p>
                </div>
              </div>

              <div className="flex items-start">
                <HiLocationMarker className="w-6 h-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Адрес</h3>
                  <p className="text-gray-600">г. Якутск, ул. Ленина, 1</p>
                </div>
              </div>

              <div className="flex items-start">
                <HiClock className="w-6 h-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Режим работы</h3>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-gray-600">Сб-Вс: Выходной</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Форма обратной связи */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Напишите нам</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Отправить сообщение
              </button>
            </form>
          </motion.div>
        </div>

        {/* Карта */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Мы на карте</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.8744877095283!2d129.7321653!3d61.9961952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5bf64ba9d0d77bcd%3A0x8aa9b97813e8c33!2z0YPQuy4g0JvQtdC90LjQvdCwLCAxLCDQr9C60YPRgtGB0LosINCg0LXRgdC_LiDQodCw0YXQsCAo0K_QutGD0YLQuNGPKSwgNjc3MDAw!5e0!3m2!1sru!2sru!4v1703334577418!5m2!1sru!2sru"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
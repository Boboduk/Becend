import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <span className="text-2xl font-bold text-white"> CyberED</span>
            <p className="mt-2 text-gray-300">
            Мы предоставляем передовые технологии и консалтинговые услуги.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white">
                  Все услуги
                </Link>
              </li>
              
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white">
                  Команда
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Контакты
                </Link>
              </li>
            
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                Email: amga.2002@mail.ru
              </li>
              <li className="text-gray-300">
                Телефон: +7 (924) 160-63-56
              </li>
              <li className="text-gray-300">
                Адрес: г. Якутск, ул. Ленина, 1
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © 2025  CyberED. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
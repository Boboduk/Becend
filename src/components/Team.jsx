import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Временные данные для демонстрации
const teamMembers = [
  {
    id: 1,
    name: 'Иванова Светлана Петровна',
    role: 'Руководитель отдела маркетинга',
    email: 'i.svetlana@corporate.ru',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    description: 'Эксперт в области корпоративного маркетинга с 12-летним опытом работы.',
    skills: ['Стратегический маркетинг', 'Брендинг', 'Управление командами'],
    linkedin: 'https://linkedin.com/in/isvetlana'
  },
  {
    id: 2,
    name: 'Елена Петрова',
    role: 'Финансовый директор',
    email: 'e.petrova@corporate.ru',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    description: 'Специалист по финансовому планированию и анализу с 15-летним опытом.',
    skills: ['Финансовый анализ', 'Бюджетирование', 'Управление рисками'],
    linkedin: 'https://linkedin.com/in/epetrova'
  },
  {
    id: 3,
    name: 'Дмитрий Смирнов',
    role: 'Технический директор',
    email: 'd.smirnov@corporate.ru',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    description: 'Эксперт в области IT-инфраструктуры и разработки корпоративных решений.',
    skills: ['Управление IT-проектами', 'Кибербезопасность', 'DevOps'],
    linkedin: 'https://linkedin.com/in/dsmirnov'
  },
  {
    id: 4,
    name: 'Мария Козлова',
    role: 'HR-директор',
    email: 'm.kozlova@corporate.ru',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    description: 'Специалист по управлению персоналом и корпоративной культуре.',
    skills: ['Рекрутинг', 'Обучение персонала', 'Корпоративная культура'],
    linkedin: 'https://linkedin.com/in/mkozlova'
  }
];

const Team = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchRole, setSearchRole] = useState('');

  const filteredMembers = teamMembers.filter(member => {
    const nameMatch = member.name.toLowerCase().includes(searchTerm.toLowerCase());
    const roleMatch = member.role.toLowerCase().includes(searchRole.toLowerCase());
    return nameMatch && roleMatch;
  });

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Наша команда
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Профессионалы, которые делают ваш бизнес успешным
          </p>
        </div>

        {/* Поисковая система */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="search-name" className="block text-sm font-medium text-gray-700">
              Поиск по имени
            </label>
            <input
              type="text"
              id="search-name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Введите имя..."
            />
          </div>
          <div>
            <label htmlFor="search-role" className="block text-sm font-medium text-gray-700">
              Поиск по должности
            </label>
            <input
              type="text"
              id="search-role"
              value={searchRole}
              onChange={(e) => setSearchRole(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Введите должность..."
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center lg:items-start"
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
                <img
                  className="w-32 h-32 rounded-full object-cover"
                  src={member.photo}
                  alt={member.name}
                />
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    {member.email}
                  </a>
                  <p className="mt-2 text-gray-600">{member.description}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900">Ключевые навыки:</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Документы
                      <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
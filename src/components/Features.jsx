import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiUserGroup, HiLightningBolt, HiClock } from 'react-icons/hi';

const features = [
  {
    name: 'Эксперты-преподаватели',
    description: 'Обучение ведут практикующие специалисты из ведущих IT-компаний',
    icon: HiAcademicCap,
  },
  {
    name: 'Практические проекты',
    description: 'Работа над реальными проектами и создание портфолио',
    icon: HiLightningBolt,
  },
  {
    name: 'Гибкий график',
    description: 'Учитесь в удобное время, совмещая обучение с работой',
    icon: HiClock,
  },
  {
    name: 'Поддержка сообщества',
    description: 'Общение с единомышленниками и взаимопомощь в обучении',
    icon: HiUserGroup,
  },
];

const Features = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Почему выбирают нас
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Создаем комфортные условия для вашего обучения
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pt-6"
              >
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
import React, { useState } from 'react';
import TeamMemberForm from './TeamMemberForm';
import NewsForm from './NewsForm';
import { motion } from 'framer-motion';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('team');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isHuman, setIsHuman] = useState(false);

  const ADMIN_PASSWORD = '**********';

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!isHuman) {
      setError('Пожалуйста, подтвердите что вы человек');
      return;
    }

    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Неверный пароль');
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-xl"
        >
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Вход администратора
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Для доступа требуется подтверждение личности
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="password" className="sr-only">
                  Пароль
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Введите пароль"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="human-check"
                type="checkbox"
                checked={isHuman}
                onChange={(e) => {
                  setIsHuman(e.target.checked);
                  setError('');
                }}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label 
                htmlFor="human-check" 
                className="ml-2 block text-sm text-gray-900"
              >
                Подтверждаю, что я человек
              </label>
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Подтвердить вход
              </button>
            </div>

            <div className="text-center text-sm text-gray-500">
              <p>Доступ разрешен только уполномоченным лицам</p>
            </div>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Панель администратора</h1>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex">
                <button
                  onClick={() => setActiveTab('team')}
                  className={`${
                    activeTab === 'team'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm sm:text-base`}
                >
                  Управление командой
                </button>
                <button
                  onClick={() => setActiveTab('news')}
                  className={`${
                    activeTab === 'news'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm sm:text-base`}
                >
                  Управление новостями
                </button>
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'team' ? <TeamMemberForm /> : <NewsForm />}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPanel;
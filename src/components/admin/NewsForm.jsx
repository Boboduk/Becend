import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  title: yup.string().required('Заголовок обязателен'),
  content: yup.string().required('Содержание обязательно'),
  image: yup.string().url('Должна быть ссылка на изображение').required('Изображение обязательно'),
  date: yup.date().required('Дата обязательна')
});

const NewsForm = () => {
  const [news, setNews] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    const newsItem = {
      ...data,
      id: editingId || Date.now(),
      date: new Date(data.date).toISOString()
    };

    if (editingId) {
      setNews(items => items.map(item => item.id === editingId ? newsItem : item));
      setEditingId(null);
    } else {
      setNews(prev => [...prev, newsItem]);
    }
    
    reset();
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    reset({
      ...item,
      date: new Date(item.date).toISOString().split('T')[0]
    });
  };

  const handleDelete = (id) => {
    setNews(items => items.filter(item => item.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Заголовок
          </label>
          <input
            type="text"
            {...register('title')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Содержание
          </label>
          <textarea
            {...register('content')}
            rows="5"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.content && <p className="mt-1 text-sm text-red-600">{errors.content.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ссылка на изображение
          </label>
          <input
            type="url"
            {...register('image')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Дата публикации
          </label>
          <input
            type="date"
            {...register('date')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {editingId ? 'Обновить' : 'Добавить'} новость
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Список новостей</h3>
        <div className="space-y-4">
          {news.map(item => (
            <div key={item.id} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-medium">{item.title}</h4>
                  <p className="text-gray-600">
                    {new Date(item.date).toLocaleDateString('ru-RU')}
                  </p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Редактировать
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsForm;
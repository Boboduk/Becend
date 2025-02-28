import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Имя обязательно'),
  role: yup.string().required('Должность обязательна'),
  email: yup.string().email('Неверный формат email').required('Email обязателен'),
  photo: yup.string().url('Должна быть ссылка на фото').required('Фото обязательно'),
  description: yup.string().required('Описание обязательно'),
  linkedin: yup.string().url('Должна быть ссылка на LinkedIn'),
  skills: yup.string().required('Навыки обязательны')
});

const TeamMemberForm = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    const skillsArray = data.skills.split(',').map(skill => skill.trim());
    const newMember = {
      ...data,
      id: editingId || Date.now(),
      skills: skillsArray
    };

    if (editingId) {
      setTeamMembers(members => 
        members.map(member => member.id === editingId ? newMember : member)
      );
      setEditingId(null);
    } else {
      setTeamMembers(prev => [...prev, newMember]);
    }
    
    reset();
  };

  const handleEdit = (member) => {
    setEditingId(member.id);
    reset({
      ...member,
      skills: member.skills.join(', ')
    });
  };

  const handleDelete = (id) => {
    setTeamMembers(members => members.filter(member => member.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            ФИО
          </label>
          <input
            type="text"
            {...register('name')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Должность
          </label>
          <input
            type="text"
            {...register('role')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.role && <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            {...register('email')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ссылка на фото
          </label>
          <input
            type="url"
            {...register('photo')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.photo && <p className="mt-1 text-sm text-red-600">{errors.photo.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Описание
          </label>
          <textarea
            {...register('description')}
            rows="3"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            LinkedIn
          </label>
          <input
            type="url"
            {...register('linkedin')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.linkedin && <p className="mt-1 text-sm text-red-600">{errors.linkedin.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Навыки (через запятую)
          </label>
          <input
            type="text"
            {...register('skills')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.skills && <p className="mt-1 text-sm text-red-600">{errors.skills.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {editingId ? 'Обновить' : 'Добавить'} сотрудника
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Список сотрудников</h3>
        <div className="space-y-4">
          {teamMembers.map(member => (
            <div key={member.id} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-medium">{member.name}</h4>
                  <p className="text-gray-600">{member.role}</p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(member)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Редактировать
                  </button>
                  <button
                    onClick={() => handleDelete(member.id)}
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

export default TeamMemberForm;
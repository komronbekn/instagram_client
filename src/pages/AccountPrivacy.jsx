// AccountPrivacy.js
import React from "react";

const AccountPrivacy = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Конфиденциальность аккаунта</h1>
      <p className="text-gray-500 mb-6">Здесь вы можете настроить параметры конфиденциальности вашего аккаунта.</p>

      <div className="space-y-4">
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h2 className="font-semibold">Кто может видеть ваш контент</h2>
          <p className="text-gray-700 mb-2">Настройте, кто сможет видеть ваши публикации и истории.</p>
          <button className="text-blue-500 hover:text-blue-700">Настроить</button>
        </div>

        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h2 className="font-semibold">Скрытый контент</h2>
          <p className="text-gray-700 mb-2">Управляйте скрытыми публикациями и историями.</p>
          <button className="text-blue-500 hover:text-blue-700">Просмотреть скрытые элементы</button>
        </div>

        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h2 className="font-semibold">Теги и упоминания</h2>
          <p className="text-gray-700 mb-2">Выберите, кто может упоминать вас в публикациях.</p>
          <button className="text-blue-500 hover:text-blue-700">Настроить</button>
        </div>

        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h2 className="font-semibold">Скрыть историю и эфиры</h2>
          <p className="text-gray-700 mb-2">Настройте, кто может видеть ваши истории и прямые эфиры.</p>
          <button className="text-blue-500 hover:text-blue-700">Настроить</button>
        </div>

        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h2 className="font-semibold">Близкие друзья</h2>
          <p className="text-gray-700 mb-2">Выберите пользователей, которые могут видеть ваш контент.</p>
          <button className="text-blue-500 hover:text-blue-700">Управлять близкими друзьями</button>
        </div>
      </div>
    </div>
  );
};

export default AccountPrivacy;

import React, { useState } from 'react';

function Privacy() {
    const [isPublic, setIsPublic] = useState(false);

    const togglePrivacy = () => {
        setIsPublic(!isPublic);
    };

    return (
        <div className="bg-white min-h-screen text-gray-900">
            <div className="max-w-md mx-auto p-6">
                <h2 className="text-2xl font-semibold text-black">Центр конфиденциальности</h2>
                <p className="mt-2 text-gray-500 text-sm">
                    Управляйте настройками конфиденциальности вашего аккаунта.
                </p>

                {/* Akkaunt maxfiyligi */}
                <div className="mt-6 p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold text-black">Настройки аккаунта</h3>
                    <div className="mt-4 flex items-center justify-between">
                        <label className="text-gray-600">Сделать аккаунт приватным</label>
                        <button 
                            onClick={togglePrivacy}
                            className={`px-4 py-2 rounded font-semibold ${isPublic ? 'bg-red-600 text-white' : 'bg-green-600 text-white'}`}
                        >
                            {isPublic ? 'Открыть аккаунт' : 'Закрыть аккаунт'}
                        </button>
                    </div>
                </div>

                {/* Ma'lumotlar maxfiyligi */}
                <div className="mt-6 p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold text-black">Конфиденциальность данных</h3>
                    <p className="mt-2 text-gray-600">
                        Выберите, кто может видеть ваши истории и публикации.
                    </p>
                    <div className="mt-4">
                        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded font-semibold">
                            Настроить доступ
                        </button>
                    </div>
                </div>

                {/* Boshqa maxfiylik sozlamalari */}
                <div className="mt-6 p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold text-black">Другие настройки конфиденциальности</h3>
                    <ul className="mt-2 list-disc list-inside text-gray-600">
                        <li>Блокировка пользователей</li>
                        <li>Управление комментариями</li>
                        <li>Ограничение взаимодействия с вашими постами</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Privacy;

import React from 'react';

function Help() {
    return (
        <div className="bg-white min-h-screen text-gray-900">
            <div className="max-w-md mx-auto p-6">
                <h2 className="text-2xl font-semibold text-black">Центр помощи</h2>
                <p className="mt-2 text-gray-500 text-sm">
                    Найдите ответы на ваши вопросы и получите помощь по использованию Instagram.
                </p>

                {/* ЧАВО (Часто задаваемые вопросы) */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-black">Часто задаваемые вопросы</h3>
                    <ul className="mt-2 space-y-2">
                        <li className="border p-4 rounded-lg">
                            <h4 className="font-semibold">Как восстановить пароль?</h4>
                            <p className="text-gray-600">Следуйте инструкциям на странице входа, чтобы сбросить пароль.</p>
                        </li>
                        <li className="border p-4 rounded-lg">
                            <h4 className="font-semibold">Как изменить имя пользователя?</h4>
                            <p className="text-gray-600">Перейдите в настройки вашего профиля и измените имя пользователя.</p>
                        </li>
                        <li className="border p-4 rounded-lg">
                            <h4 className="font-semibold">Как заблокировать пользователя?</h4>
                            <p className="text-gray-600">Перейдите на профиль пользователя и выберите "Заблокировать".</p>
                        </li>
                    </ul>
                </div>

                {/* Дополнительная помощь */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-black">Дополнительная помощь</h3>
                    <p className="mt-2 text-gray-600">
                        Если у вас есть другие вопросы, вы можете обратиться в службу поддержки.
                    </p>
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded font-semibold">
                        Связаться с поддержкой
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Help;

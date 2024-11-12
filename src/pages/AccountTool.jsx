import React from 'react';

function AccountTool() {
    return (
        <div className="bg-white min-h-screen text-gray-900">
            <div className="max-w-md mx-auto p-6">
                <h2 className="text-2xl font-semibold text-black">Инструменты профессионального аккаунта</h2>
                <p className="mt-2 text-gray-500 text-sm">
                    Управляйте своим профессиональным аккаунтом и используйте доступные инструменты.
                </p>

                {/* Tahlil bo'limi */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-black">Анализ аккаунта</h3>
                    <p className="mt-2 text-gray-600">
                        Посмотрите статистику ваших публикаций и активности.
                    </p>
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded font-semibold">
                        Просмотреть аналитику
                    </button>
                </div>

                {/* Marketing bo'limi */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-black">Маркетинговые инструменты</h3>
                    <p className="mt-2 text-gray-600">
                        Используйте мощные инструменты для продвижения вашего контента.
                    </p>
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded font-semibold">
                        Начать маркетинг
                    </button>
                </div>

                {/* Qo'shimcha bo'lim */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-black">Дополнительные ресурсы</h3>
                    <p className="mt-2 text-gray-600">
                        Узнайте больше о том, как максимизировать эффективность вашего аккаунта.
                    </p>
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded font-semibold">
                        Изучить ресурсы
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AccountTool;

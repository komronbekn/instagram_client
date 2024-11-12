import React from 'react';

function PremiumSubscriptions() {
    return (
        <div className="bg-white min-h-screen text-gray-900">
            <div className="max-w-md mx-auto p-6">
                <h2 className="text-2xl font-semibold text-black">Премиум Подписки</h2>
                <p className="mt-2 text-gray-500 text-sm">Эксклюзивный контент от ваших любимых авторов</p>
                
                {/* Опции подписки */}
                <div className="mt-6 space-y-4">
                    <div className="p-4 border rounded-lg flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-semibold text-black">Месячная подписка</h3>
                            <p className="text-gray-500">$4.99 / месяц</p>
                        </div>
                        <button className="text-blue-600 font-semibold">Подписаться</button>
                    </div>
                    <div className="p-4 border rounded-lg flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-semibold text-black">Годовая подписка</h3>
                            <p className="text-gray-500">$49.99 / год</p>
                        </div>
                        <button className="text-blue-600 font-semibold">Подписаться</button>
                    </div>
                </div>

                {/* Раздел с преимуществами */}
                <div className="mt-8">
                    <h3 className="text-lg font-semibold text-black">Преимущества подписки</h3>
                    <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                        <li>Эксклюзивные истории и публикации</li>
                        <li>Прямое взаимодействие с авторами</li>
                        <li>Контент только для подписчиков</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PremiumSubscriptions;

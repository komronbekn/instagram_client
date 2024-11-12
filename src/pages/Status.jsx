import React, { useState } from 'react';

function Status() {
    const [status, setStatus] = useState("active");

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
    };

    return (
        <div className="bg-white min-h-screen text-gray-900">
            <div className="max-w-md mx-auto p-6">
                <h2 className="text-2xl font-semibold text-black">Статус аккаунта</h2>
                <p className="mt-2 text-gray-500 text-sm">
                    Убедитесь, что ваш аккаунт соответствует нашим стандартам сообщества.
                </p>

                {/* Akkaunt holati */}
                <div className="mt-6 p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold text-black">Текущий статус</h3>
                    <p className={`mt-2 text-gray-600 ${status === 'active' ? 'text-green-600' : 'text-red-600'}`}>
                        {status === 'active' ? 'Ваш аккаунт активен.' : 'Ваш аккаунт ограничен или заблокирован.'}
                    </p>
                </div>

                {/* Status o'zgartirish */}
                <div className="mt-6 p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold text-black">Изменить статус аккаунта</h3>
                    <div className="mt-4 flex space-x-4">
                        <button 
                            onClick={() => handleStatusChange("active")} 
                            className="px-4 py-2 bg-green-600 text-white rounded font-semibold"
                        >
                            Активировать
                        </button>
                        <button 
                            onClick={() => handleStatusChange("restricted")} 
                            className="px-4 py-2 bg-red-600 text-white rounded font-semibold"
                        >
                            Ограничить
                        </button>
                    </div>
                </div>

                {/* Muammolar bo'yicha qo'shimcha ma'lumot */}
                <div className="mt-6 p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold text-black">Проблемы с аккаунтом</h3>
                    <p className="mt-2 text-gray-600">
                        Если вы столкнулись с проблемами, такими как ограничения или блокировки, свяжитесь с нашей службой поддержки.
                    </p>
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded font-semibold">
                        Связаться с поддержкой
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Status;

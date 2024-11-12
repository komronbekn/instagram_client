import React from 'react';

function ArchiveDown() {
    // Funktsiyalar
    const handleEnableAutoArchive = () => {
        console.log("Автоархивирование включено");
    };

    const handleRequestDownload = () => {
        console.log("Запрос на загрузку данных отправлен");
    };

    return (
        <div className="bg-white min-h-screen text-gray-900">
            <div className="max-w-md mx-auto p-6">
                <h2 className="text-2xl font-semibold text-black">Архивирование и Загрузки</h2>
                <p className="mt-2 text-gray-500 text-sm">
                    Управляйте своими архивными историями и загружайте данные.
                </p>
                
                {/* Настройки архива */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-black">Настройки архива</h3>
                    <div className="mt-4 p-4 border rounded-lg">
                        <p className="text-gray-600">Автоархивирование историй</p>
                        <button 
                            className="mt-2 text-blue-600 font-semibold" 
                            onClick={handleEnableAutoArchive} // Harakat qo'shilmoqda
                        >
                            Включить
                        </button>
                    </div>
                </div>

                {/* Раздел загрузки данных */}
                <div className="mt-8">
                    <h3 className="text-lg font-semibold text-black">Загрузите свои данные</h3>
                    <div className="mt-4 p-4 border rounded-lg">
                        <p className="text-gray-600">
                            Получите копию того, чем вы поделились в Instagram.
                        </p>
                        <button 
                            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded font-semibold" 
                            onClick={handleRequestDownload} // Harakat qo'shilmoqda
                        >
                            Запросить загрузку
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArchiveDown;

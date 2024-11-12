import React, { useState } from 'react';

function SitePermissions() {
    const [permissions, setPermissions] = useState({
        notifications: false,
        location: false,
        camera: false,
        microphone: false,
    });

    // Ruxsatni o'zgartirish funktsiyasi
    const handleTogglePermission = (permission) => {
        setPermissions((prev) => ({
            ...prev,
            [permission]: !prev[permission],
        }));
    };

    return (
        <div className="bg-white min-h-screen text-gray-900">
            <div className="max-w-md mx-auto p-6">
                <h2 className="text-2xl font-semibold text-black">Настройки прав доступа</h2>
                <p className="mt-2 text-gray-500 text-sm">
                    Управляйте правами доступа для этого сайта.
                </p>
                
                {/* Ruxsatlar bo‘limi */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-black">Права доступа</h3>
                    <div className="mt-4 space-y-2">
                        <div className="flex justify-between items-center p-2 border rounded-lg">
                            <span className="text-gray-600">Уведомления</span>
                            <button
                                className={`p-2 rounded ${permissions.notifications ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
                                onClick={() => handleTogglePermission('notifications')}
                            >
                                {permissions.notifications ? 'Включено' : 'Выключено'}
                            </button>
                        </div>
                        <div className="flex justify-between items-center p-2 border rounded-lg">
                            <span className="text-gray-600">Локация</span>
                            <button
                                className={`p-2 rounded ${permissions.location ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
                                onClick={() => handleTogglePermission('location')}
                            >
                                {permissions.location ? 'Включено' : 'Выключено'}
                            </button>
                        </div>
                        <div className="flex justify-between items-center p-2 border rounded-lg">
                            <span className="text-gray-600">Камера</span>
                            <button
                                className={`p-2 rounded ${permissions.camera ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
                                onClick={() => handleTogglePermission('camera')}
                            >
                                {permissions.camera ? 'Включено' : 'Выключено'}
                            </button>
                        </div>
                        <div className="flex justify-between items-center p-2 border rounded-lg">
                            <span className="text-gray-600">Микрофон</span>
                            <button
                                className={`p-2 rounded ${permissions.microphone ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
                                onClick={() => handleTogglePermission('microphone')}
                            >
                                {permissions.microphone ? 'Включено' : 'Выключено'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SitePermissions;

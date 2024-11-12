import React, { useState } from 'react';

const PersonalInfo = () => {
    const [isPrivate, setIsPrivate] = useState(false);

    const togglePrivacy = () => {
        setIsPrivate((prevIsPrivate) => !prevIsPrivate);
    };

    return (
        <div className="flex flex-col items-center p-4 bg-white text-gray-900 min-h-screen">
            <div className="w-full max-w-md">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                    Настройки конфиденциальности аккаунта
                </h2>
                <p className="text-sm text-gray-500 mb-6 text-center">
                    Управляйте настройками приватности вашего аккаунта.
                </p>

                <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg mb-6">
                    <span className="text-gray-700">
                        {isPrivate ? 'Частный аккаунт' : 'Публичный аккаунт'}
                    </span>
                    <button
                        onClick={togglePrivacy}
                        className={`relative inline-flex h-6 w-12 rounded-full transition-colors duration-300 ${
                            isPrivate ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                    >
                        <span
                            className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform duration-300 ${
                                isPrivate ? 'transform translate-x-6' : ''
                            }`}
                        />
                    </button>
                </div>

                <p className="text-gray-600 text-center">
                    Ваш аккаунт {isPrivate ? 'сейчас частный' : 'сейчас публичный'}.
                </p>
            </div>
        </div>
    );
};

export default PersonalInfo;

import React, { useState } from 'react';

const Preferences = () => {
    const [personalizedAds, setPersonalizedAds] = useState(false);

    const togglePersonalizedAds = () => {
        setPersonalizedAds((prev) => !prev);
    };

    return (
        <div className="flex flex-col items-center p-4 bg-white text-gray-900 min-h-screen">
            <div className="w-full max-w-md">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                    Настройки рекламы
                </h2>
                <p className="text-sm text-gray-500 mb-6 text-center">
                    Управляйте настройками персонализированной рекламы.
                </p>

                <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg mb-6">
                    <span className="text-gray-700">
                        {personalizedAds ? 'Персонализированная реклама включена' : 'Персонализированная реклама отключена'}
                    </span>
                    <button
                        onClick={togglePersonalizedAds}
                        className={`relative inline-flex h-6 w-12 rounded-full transition-colors duration-300 ${
                            personalizedAds ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                    >
                        <span
                            className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform duration-300 ${
                                personalizedAds ? 'transform translate-x-6' : ''
                            }`}
                        />
                    </button>
                </div>

                <p className="text-gray-600 text-center">
                    {personalizedAds
                        ? 'Вы будете видеть персонализированную рекламу, основанную на ваших интересах.'
                        : 'Персонализированная реклама отключена.'}
                </p>
            </div>
        </div>
    );
};

export default Preferences;

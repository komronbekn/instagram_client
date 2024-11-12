import React, { useState } from 'react';

const ContentPreferences = () => {
    const [preferences, setPreferences] = useState({
        showAdultContent: false,
        receiveNotifications: false,
        personalizedAds: false,
    });

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setPreferences((prevPreferences) => ({
            ...prevPreferences,
            [name]: checked,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle saving preferences, e.g., API call
        console.log('Content preferences saved:', preferences);
        alert('Настройки контента сохранены!');
    };

    return (
        <div className="p-6 bg-white text-gray-900 min-h-screen">
            <h2 className="text-lg font-semibold text-black">Настройки контента</h2>
            <p className="mt-4 text-gray-600">
                Настройте свои предпочтения по контенту.
            </p>

            <form onSubmit={handleSubmit} className="mt-6">
                <div className="space-y-4">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="showAdultContent"
                            name="showAdultContent"
                            checked={preferences.showAdultContent}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                        />
                        <label htmlFor="showAdultContent" className="text-gray-700">
                            Показывать взрослый контент
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="receiveNotifications"
                            name="receiveNotifications"
                            checked={preferences.receiveNotifications}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                        />
                        <label htmlFor="receiveNotifications" className="text-gray-700">
                            Получать уведомления
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="personalizedAds"
                            name="personalizedAds"
                            checked={preferences.personalizedAds}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                        />
                        <label htmlFor="personalizedAds" className="text-gray-700">
                            Персонализированные объявления
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Сохранить настройки
                </button>
            </form>
        </div>
    );
};

export default ContentPreferences;

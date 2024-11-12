import React, { useState } from 'react';

const AccountCentre = () => {
    const [selectedSection, setSelectedSection] = useState('Privacy');

    const renderSection = () => {
        switch (selectedSection) {
            case 'Privacy':
                return <p className="mt-4 text-gray-600">Настройки конфиденциальности</p>;
            case 'Password':
                return <p className="mt-4 text-gray-600">Настройки пароля и безопасности</p>;
            case 'Ads':
                return <p className="mt-4 text-gray-600">Настройки рекламы</p>;
            default:
                return <p className="mt-4 text-gray-600">Выберите раздел для управления настройками аккаунта</p>;
        }
    };

    return (
        <div className="p-6 bg-white text-gray-900 min-h-screen">
            <h2 className="text-lg font-semibold text-black text-center mb-6">Центр аккаунта</h2>

            {/* Navigation for account sections */}
            <div className="flex justify-center space-x-4 mb-8">
                <button
                    onClick={() => setSelectedSection('Privacy')}
                    className={`px-4 py-2 rounded-lg ${selectedSection === 'Privacy' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'} transition`}
                >
                    Конфиденциальность
                </button>
                <button
                    onClick={() => setSelectedSection('Password')}
                    className={`px-4 py-2 rounded-lg ${selectedSection === 'Password' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'} transition`}
                >
                    Пароль и Безопасность
                </button>
                <button
                    onClick={() => setSelectedSection('Ads')}
                    className={`px-4 py-2 rounded-lg ${selectedSection === 'Ads' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'} transition`}
                >
                    Реклама
                </button>
            </div>

            {/* Render selected section */}
            <div className="text-center">
                {renderSection()}
            </div>
        </div>
    );
};

export default AccountCentre;

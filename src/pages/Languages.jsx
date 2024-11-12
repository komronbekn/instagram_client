import React, { useState } from 'react';

function Languages() {
    const [selectedLanguage, setSelectedLanguage] = useState('ru'); // Standart til - ruscha

    // Tilni o'zgartirish funktsiyasi
    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        console.log(`Выбранный язык: ${language}`);
    };

    return (
        <div className="bg-white min-h-screen text-gray-900">
            <div className="max-w-md mx-auto p-6">
                <h2 className="text-2xl font-semibold text-black">Выбор языка</h2>
                <p className="mt-2 text-gray-500 text-sm">
                    Пожалуйста, выберите предпочитаемый язык.
                </p>
                
                {/* Til tanlash bo'limi */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-black">Доступные языки</h3>
                    <div className="mt-4 space-y-2">
                        <button 
                            className={`w-full text-left p-2 border rounded-lg ${selectedLanguage === 'ru' ? 'bg-blue-600 text-white' : 'bg-white text-black'}`} 
                            onClick={() => handleLanguageChange('ru')}
                        >
                            Русский
                        </button>
                        <button 
                            className={`w-full text-left p-2 border rounded-lg ${selectedLanguage === 'uz' ? 'bg-blue-600 text-white' : 'bg-white text-black'}`} 
                            onClick={() => handleLanguageChange('uz')}
                        >
                            O‘zbek
                        </button>
                        <button 
                            className={`w-full text-left p-2 border rounded-lg ${selectedLanguage === 'en' ? 'bg-blue-600 text-white' : 'bg-white text-black'}`} 
                            onClick={() => handleLanguageChange('en')}
                        >
                            English
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Languages;

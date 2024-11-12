import React, { useState } from 'react';

const HiddenWords = () => {
    const [hiddenWords, setHiddenWords] = useState(['spam', 'offensive', 'abuse']); // Initial hidden words
    const [newWord, setNewWord] = useState(''); // State for the input field

    const handleAddWord = (e) => {
        e.preventDefault();
        if (newWord.trim() && !hiddenWords.includes(newWord.trim())) {
            setHiddenWords([...hiddenWords, newWord.trim()]);
            setNewWord(''); // Clear the input field
        }
    };

    const handleRemoveWord = (wordToRemove) => {
        setHiddenWords(hiddenWords.filter(word => word !== wordToRemove));
    };

    return (
        <div className="p-6 bg-white text-gray-900 min-h-screen">
            <h2 className="text-lg font-semibold text-black mb-4">Скрытые слова</h2>
            <p className="mt-2 text-gray-600">
                Управляйте словами, которые вы хотите скрыть от вашего контента.
            </p>
            
            <form onSubmit={handleAddWord} className="mt-4 flex">
                <input
                    type="text"
                    value={newWord}
                    onChange={(e) => setNewWord(e.target.value)}
                    placeholder="Добавить скрытое слово"
                    className="border border-gray-300 rounded-lg p-2 mr-2 flex-grow bg-white text-black"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Добавить
                </button>
            </form>

            <ul className="mt-4 space-y-2">
                {hiddenWords.map((word) => (
                    <li key={word} className="flex items-center justify-between bg-gray-100 p-2 rounded-lg">
                        <span className="text-gray-800">{word}</span>
                        <button
                            onClick={() => handleRemoveWord(word)}
                            className="text-red-500 hover:text-red-700"
                        >
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HiddenWords;

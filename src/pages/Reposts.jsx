import React, { useState } from 'react';

const Reposts = () => {
    // Состояние для хранения репостов
    const [reposts, setReposts] = useState([
        { id: 1, type: 'image', text: "Первый репост!", author: "User1", media: "https://via.placeholder.com/150" },
        { id: 2, type: 'video', text: "Второй репост!", author: "User2", media: "https://www.w3schools.com/html/mov_bbb.mp4" },
    ]);
    const [newRepostText, setNewRepostText] = useState(""); // Состояние для нового текста репоста
    const [newRepostMedia, setNewRepostMedia] = useState(""); // Состояние для нового медиа

    // Функция для добавления нового репоста
    const handleAddRepost = () => {
        if (newRepostText.trim() !== "" && newRepostMedia.trim() !== "") {
            const newRepost = {
                id: reposts.length + 1,
                text: newRepostText,
                author: "Вы",
                media: newRepostMedia,
                type: newRepostMedia.endsWith('.mp4') ? 'video' : 'image', // Определяем тип
            };
            setReposts([...reposts, newRepost]);
            setNewRepostText(""); // Очищаем поле ввода текста
            setNewRepostMedia(""); // Очищаем поле ввода медиа
        }
    };

    // Функция для удаления репоста
    const handleDeleteRepost = (id) => {
        setReposts(reposts.filter(repost => repost.id !== id));
    };

    return (
        <div className="p-4 bg-white text-gray-900 min-h-screen">
            <h2 className="text-2xl font-semibold text-black mb-4">Репосты</h2>
            <div className="overflow-y-auto max-h-96 border rounded-lg shadow-sm mb-4">
                {reposts.length > 0 ? (
                    reposts.map((repost) => (
                        <div key={repost.id} className="p-4 border-b border-gray-200 flex flex-col">
                            <div className="flex justify-between items-center">
                                <p className="text-gray-800 font-semibold">{repost.author}</p>
                                <button
                                    onClick={() => handleDeleteRepost(repost.id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Удалить
                                </button>
                            </div>
                            <p className="text-gray-800">{repost.text}</p>
                            {repost.type === 'image' ? (
                                <img src={repost.media} alt="Репост" className="mt-2 max-w-full rounded-lg" />
                            ) : (
                                <video controls className="mt-2 max-w-full rounded-lg">
                                    <source src={repost.media} type="video/mp4" />
                                    Ваш браузер не поддерживает видео.
                                </video>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="p-4 text-gray-600">Нет репостов.</p>
                )}
            </div>

            <div className="flex mb-4">
                <input
                    type="text"
                    placeholder="Добавьте текст репоста..."
                    value={newRepostText}
                    onChange={(e) => setNewRepostText(e.target.value)}
                    className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="URL медиа (изображение или видео)..."
                    value={newRepostMedia}
                    onChange={(e) => setNewRepostMedia(e.target.value)}
                    className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleAddRepost}
                    className="bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition duration-200"
                >
                    Добавить
                </button>
            </div>
        </div>
    );
};

export default Reposts;
  
import React, { useState } from "react";

function StorySharing() {
  // Состояние для управления опциями совместного использования историй
  const [shareWithCloseFriends, setShareWithCloseFriends] = useState(false);
  const [allowMessageReplies, setAllowMessageReplies] = useState("Все");

  // Функция для сохранения изменений
  const handleSaveChanges = () => {
    // Здесь можно добавить логику для сохранения изменений (например, отправка на сервер)
    console.log("Изменения сохранены:");
    console.log("Делиться с близкими друзьями:", shareWithCloseFriends);
    console.log("Разрешить ответы на сообщения:", allowMessageReplies);
    alert("Изменения сохранены!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      {/* Заголовок страницы */}
      <h1 className="text-2xl font-semibold mb-4">Совместное использование историй</h1>
      <p className="text-gray-500 mb-6">
        Управляйте тем, кто может видеть и взаимодействовать с вашими историями.
      </p>

      {/* Опция совместного использования для близких друзей */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-medium text-gray-800">Делиться с близкими друзьями</h2>
          <p className="text-gray-500 text-sm">
            Делиться своей историей только с близкими друзьями.
          </p>
        </div>
        <label className="switch">
          <input 
            type="checkbox" 
            checked={shareWithCloseFriends} 
            onChange={() => setShareWithCloseFriends(!shareWithCloseFriends)} 
          />
          <span className="slider round"></span>
        </label>
      </div>

      {/* Опции для ответов на сообщения */}
      <div className="mb-6">
        <h2 className="font-medium text-gray-800">Разрешить ответы на сообщения</h2>
        <p className="text-gray-500 text-sm mb-4">
          Выберите, кто может отвечать на ваши истории.
        </p>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="replies"
              value="Все"
              checked={allowMessageReplies === "Все"}
              onChange={() => setAllowMessageReplies("Все")}
              className="mr-2"
            />
            <span className="text-gray-700">Все</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="replies"
              value="Близкие друзья"
              checked={allowMessageReplies === "Близкие друзья"}
              onChange={() => setAllowMessageReplies("Близкие друзья")}
              className="mr-2"
            />
            <span className="text-gray-700">Близкие друзья</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="replies"
              value="Выключено"
              checked={allowMessageReplies === "Выключено"}
              onChange={() => setAllowMessageReplies("Выключено")}
              className="mr-2"
            />
            <span className="text-gray-700">Выключено</span>
          </label>
        </div>
      </div>

      {/* Кнопка сохранения изменений */}
      <button 
        onClick={handleSaveChanges}
        className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition"
      >
        Сохранить изменения
      </button>
    </div>
  );
}

export default StorySharing;

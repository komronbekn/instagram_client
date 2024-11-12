import React, { useState } from "react";

function TagsMentions() {
  // Состояния для тегов и упоминаний
  const [taggingPermission, setTaggingPermission] = useState("Все");
  const [mentionPermission, setMentionPermission] = useState("Все");

  // Функция для обработки сохранения изменений
  const handleSaveChanges = () => {
    console.log("Настройки тегов:", taggingPermission);
    console.log("Настройки упоминаний:", mentionPermission);
    alert("Настройки успешно сохранены!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      {/* Заголовок страницы */}
      <h1 className="text-2xl font-semibold mb-4">Теги и Упоминания</h1>
      <p className="text-gray-500 mb-6">
        Установите, кто может тегировать и упоминать вас в своих постах и историях.
      </p>

      {/* Разрешения на теги */}
      <div className="mb-6">
        <h2 className="font-medium text-gray-800">Разрешить теги от</h2>
        <p className="text-gray-500 text-sm mb-4">
          Выберите, кто может тегировать вас в своих фото и видео.
        </p>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="tagging"
              value="Все"
              checked={taggingPermission === "Все"}
              onChange={() => setTaggingPermission("Все")}
              className="mr-2"
            />
            <span className="text-gray-700">Все</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="tagging"
              value="Люди, за которыми вы следите"
              checked={taggingPermission === "Люди, за которыми вы следите"}
              onChange={() => setTaggingPermission("Люди, за которыми вы следите")}
              className="mr-2"
            />
            <span className="text-gray-700">Люди, за которыми вы следите</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="tagging"
              value="Никто"
              checked={taggingPermission === "Никто"}
              onChange={() => setTaggingPermission("Никто")}
              className="mr-2"
            />
            <span className="text-gray-700">Никто</span>
          </label>
        </div>
      </div>

      {/* Разрешения на упоминания */}
      <div className="mb-6">
        <h2 className="font-medium text-gray-800">Разрешить упоминания от</h2>
        <p className="text-gray-500 text-sm mb-4">
          Выберите, кто может упоминать вас в своих историях и постах.
        </p>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="mentions"
              value="Все"
              checked={mentionPermission === "Все"}
              onChange={() => setMentionPermission("Все")}
              className="mr-2"
            />
            <span className="text-gray-700">Все</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="mentions"
              value="Люди, за которыми вы следите"
              checked={mentionPermission === "Люди, за которыми вы следите"}
              onChange={() => setMentionPermission("Люди, за которыми вы следите")}
              className="mr-2"
            />
            <span className="text-gray-700">Люди, за которыми вы следите</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="mentions"
              value="Никто"
              checked={mentionPermission === "Никто"}
              onChange={() => setMentionPermission("Никто")}
              className="mr-2"
            />
            <span className="text-gray-700">Никто</span>
          </label>
        </div>
      </div>

      <button
        onClick={handleSaveChanges}
        className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition"
      >
        Сохранить изменения
      </button>
    </div>
  );
}

export default TagsMentions;

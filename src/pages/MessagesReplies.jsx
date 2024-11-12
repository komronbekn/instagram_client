// MessagesReplies.js
import React, { useState } from "react";

const MessagesReplies = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Пользователь1", text: "Привет! Как дела?" },
    { id: 2, sender: "Пользователь2", text: "Ты видел последний пост?" },
    { id: 3, sender: "Пользователь1", text: "Давай скоро встретимся!" },
  ]);
  const [reply, setReply] = useState(""); // Состояние для хранения текста ответа
  const [currentSender, setCurrentSender] = useState(""); // Состояние для хранения отправителя текущего сообщения

  // Функция для обработки нажатия кнопки "Ответить"
  const handleReplyClick = (sender) => {
    setCurrentSender(sender);
  };

  // Функция для отправки ответа
  const handleSendReply = (id) => {
    if (reply.trim()) {
      alert(`Ответ отправлен пользователю ${currentSender}: ${reply}`);
      // Здесь можно добавить логику для отправки ответа на сервер
      setReply(""); // Сброс текста ответа после отправки
      setCurrentSender(""); // Сброс текущего отправителя
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Сообщения и ответы</h1>
      <p className="text-gray-500 mb-6">Управляйте своими сообщениями и ответами на истории.</p>

      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className="p-4 border border-gray-200 rounded-lg bg-gray-50 flex justify-between items-center"
          >
            <div className="flex-1">
              <span className="font-semibold">{message.sender}:</span>{" "}
              <span className="text-gray-700">{message.text}</span>
            </div>
            <button 
              onClick={() => handleReplyClick(message.sender)}
              className="text-blue-500 hover:text-blue-700"
            >
              Ответить
            </button>
          </div>
        ))}
      </div>

      {currentSender && (
        <div className="mt-6">
          <h2 className="font-semibold text-gray-800">Ответить на сообщение от {currentSender}:</h2>
          <input
            type="text"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            className="border border-gray-300 p-2 rounded-md w-full"
            placeholder="Ваш ответ..."
          />
          <button
            onClick={handleSendReply}
            className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition"
          >
            Отправить
          </button>
        </div>
      )}
    </div>
  );
};

export default MessagesReplies;

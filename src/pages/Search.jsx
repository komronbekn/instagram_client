// SearchPanel.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchPanel = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState(""); // Запрос пользователя
  const [accounts, setAccounts] = useState([]); // Результаты поиска
  const [recentQueries, setRecentQueries] = useState([]); // Недавние запросы

  // Загружаем последние запросы из localStorage
  useEffect(() => {
    const savedQueries = JSON.parse(localStorage.getItem("recentQueries")) || [];
    setRecentQueries(savedQueries);
  }, []);

  // Сохраняем запросы в localStorage
  const saveQuery = (query) => {
    const updatedQueries = [...recentQueries, query].slice(-5); // Храним до 5 запросов
    localStorage.setItem("recentQueries", JSON.stringify(updatedQueries));
    setRecentQueries(updatedQueries);
  };

  // Выполняем поиск
  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim()) {
      const response = await axios.get(
        `http://localhost:5001/accounts?name_like=${query}`
      );
      setAccounts(response.data);
      saveQuery(query);
      setQuery(""); // Очистка строки поиска
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full rounded-[25px] w-[400px] bg-white shadow-lg transition-transform duration-300 transform 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="p-4">
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="text-xl mb-4 hover:text-red-500"
        >
          ✕ Закрыть
        </button>

        {/* Форма поиска */}
        <form onSubmit={handleSearch} className="relative mb-4">
          <input
            type="text"
            placeholder="Поиск"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-2 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </form>

        {/* Результаты поиска */}
        <div className="mb-4">
          <h2 className="text-lg font-bold">Результаты:</h2>
          {accounts.length > 0 ? (
            accounts.map((account) => (
              <div key={account.id} className="p-2 border-b">
                <p>{account.name} (@{account.username})</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Нет результатов</p>
          )}
        </div>

        {/* Недавние запросы */}
        <div>
          <h2 className="text-lg font-bold">Недавнее</h2>
          {recentQueries.length > 0 ? (
            recentQueries.map((q, index) => (
              <p key={index} className="text-gray-700 p-1">
                {q}
              </p>
            ))
          ) : (
            <p className="text-gray-500">Нет недавних запросов.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [query, setQuery] = useState(""); // Строка поиска
  const [accounts, setAccounts] = useState([]); // Результаты поиска
  const [recentQueries, setRecentQueries] = useState([]); // Недавние запросы
  const [isOpen, setIsOpen] = useState(false); // Состояние панели поиска

  // Загрузка недавних запросов из localStorage при монтировании компонента
  useEffect(() => {
    const savedQueries = JSON.parse(localStorage.getItem("recentQueries")) || [];
    setRecentQueries(savedQueries);
  }, []);

  // Функция для сохранения запроса в localStorage
  const saveQuery = (query) => {
    const updatedQueries = [...recentQueries, query].slice(-5); // Максимум 5 последних запросов
    localStorage.setItem("recentQueries", JSON.stringify(updatedQueries));
    setRecentQueries(updatedQueries);
  };

  // Функция для выполнения поиска
  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim()) {
      const response = await axios.get(
        `http://localhost:5001/accounts?name_like=${query}`
      );
      setAccounts(response.data);
      saveQuery(query); // Сохраняем запрос
      setQuery(""); // Очистка строки поиска
    }
  };

  return (
    <div className="relative">
      {/* Кнопка для открытия панели поиска */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 text-xl bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Search
      </button>

      {/* Панель поиска с выездом на 500px слева */}
      <div
        className={`fixed top-0 left-0 h-full w-[397px] bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-[170px] rounded-[15px]" : "-translate-x-[500px]"
          }`}
      >
        <div className="p-4">
          <button
            onClick={() => setIsOpen(false)}
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

          {/* Отображение результатов поиска */}
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

          {/* Отображение недавних запросов */}
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
    </div>
  );
};

export default Search;

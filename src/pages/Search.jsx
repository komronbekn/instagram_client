import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SearchPanel = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState(""); // Запрос пользователя
  const [accounts, setAccounts] = useState([]); // Результаты поиска
  const [recentQueries, setRecentQueries] = useState([]); // Недавние запросы
  const [errorMessage, setErrorMessage] = useState(""); // Ошибка, если аккаунт не найден

  const location = useLocation(); // Текущий маршрут
  const navigate = useNavigate(); // Навигация

  // Закрытие панели при смене маршрута
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location]);

  // Загрузка последних запросов из localStorage
  useEffect(() => {
    const savedQueries = JSON.parse(localStorage.getItem("recentQueries")) || [];
    setRecentQueries(savedQueries);
  }, []);

  // Сохранение запросов в localStorage
  const saveQuery = (query) => {
    const updatedQueries = [...recentQueries, query].slice(-5);
    localStorage.setItem("recentQueries", JSON.stringify(updatedQueries));
    setRecentQueries(updatedQueries);
  };

  // Выполнение поиска с точным совпадением
  const handleSearch = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setAccounts([]);

    if (query.trim()) {
      try {
        const response = await axios.get(
          `https://insta-2-e60y.onrender.com/users?nickName=${query}`
        );

        const exactMatches = response.data.filter(
          (account) => account.nickName === query
        );

        if (exactMatches.length > 0) {
          setAccounts(exactMatches);
        } else {
          setErrorMessage("Такого аккаунта нет.");
        }

        saveQuery(query);
        setQuery("");
      } catch (error) {
        console.error("Ошибка при выполнении поиска:", error);
        setErrorMessage("Ошибка поиска. Попробуйте позже.");
      }
    }
  };

  // Проверка и переход на страницу профиля
  const handleAccountClick = async (nickName) => {
    setErrorMessage("");
    try {
      const response = await axios.get(
        `https://insta-2-e60y.onrender.com/users?nickName=${nickName}`
      );

      const exactMatch = response.data.find(
        (account) => account.nickName === nickName
      );

      if (exactMatch) {
        navigate(`/profile/${nickName}`);
        onClose();
      } else {
        setErrorMessage("Такого аккаунта нет.");
      }
    } catch (error) {
      console.error("Ошибка при проверке аккаунта:", error);
      setErrorMessage("Ошибка проверки. Попробуйте позже.");
    }
  };

  // Переход на профиль при клике на недавний запрос
  const handleRecentQueryClick = (query) => {
    handleAccountClick(query);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full z-50 w-[400px] bg-white shadow-lg rounded-[10px] transition-transform duration-300 transform
        ${isOpen ? "translate-x-[257px]" : "-translate-x-full"}`}
    >
      <div className="p-4">
        <button onClick={onClose} className="text-xl mb-4 hover:text-red-500">
          ✕ Закрыть
        </button>

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

        <div className="mb-4">
          <h2 className="text-lg font-bold">Результаты:</h2>
          {errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : accounts.length > 0 ? (
            accounts.map((account) => (
              <div
                key={account.id || account.nickName} // Добавлен уникальный ключ
                className="p-2 border-b cursor-pointer hover:bg-gray-100"
                onClick={() => handleAccountClick(account.nickName)}
              >
                <p>{account.nickName}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Введите запрос для поиска.</p>
          )}
        </div>

        <div>
          <h2 className="text-lg font-bold">Недавнее</h2>
          {recentQueries.length > 0 ? (
            recentQueries.map((q) => (
              <p
                key={q} // Используется значение запроса в качестве ключа
                className="text-gray-700 p-1 cursor-pointer hover:underline"
                onClick={() => handleRecentQueryClick(q)}
              >
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

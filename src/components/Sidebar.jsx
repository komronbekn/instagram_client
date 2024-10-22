import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineCompass,
  AiOutlineMessage,
  AiOutlineHeart,
  AiOutlinePlusSquare,
  AiOutlineUser,
  AiOutlineEllipsis // "More" uchun ikonka
} from 'react-icons/ai';

const Sidebar = () => {
  const [query, setQuery] = useState(""); // Строка поиска
  const [accounts, setAccounts] = useState([]); // Результаты поиска
  const [recentQueries, setRecentQueries] = useState([]); // Недавние запросы

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
    <div className="fixed w-64 h-screen p-4 bg-white shadow-lg flex flex-col overflow-y-auto">
      <Link to="/home" className="text-3xl font-bold mb-8 text-black">
        Instagram
      </Link>
      <nav className="flex flex-col space-y-6 flex-grow">
        <Link to="/home" className="flex items-center space-x-4 text-lg text-black hover:text-blue-500">
          <AiFillHome size={24} />
          <span>Home</span>
        </Link>

        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Кнопка-лейбл для открытия панели */}
          <label
            htmlFor="my-drawer"
            className=""
          >
            <AiOutlineSearch size={24} />
            <span className="flex items-center text-xl space-x-4 text-black hover:text-blue-500">Search</span>
          </label>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Содержимое боковой панели */}
            <div className="relative">
              {/* Панель поиска */}
              <div
                className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 rounded-[15px]`}
              >
                <div className="p-4">
                  <label
                    htmlFor="my-drawer"
                    className="text-xl mb-4 hover:text-red-500 cursor-pointer"
                  >
                    ✕ Закрыть
                  </label>

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
                          <p>
                            {account.name} (@{account.username})
                          </p>
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
          </ul>
        </div>

        <Link to="/explore" className="flex items-center space-x-4 text-lg text-black hover:text-blue-500">
          <AiOutlineCompass size={24} />
          <span>Explore</span>
        </Link>
        <Link to="/messages" className="flex items-center space-x-4 text-lg text-black hover:text-blue-500">
          <AiOutlineMessage size={24} />
          <span>Messages</span>
        </Link>
        <Link to="/notifications" className="flex items-center space-x-4 text-lg text-black hover:text-blue-500">
          <AiOutlineHeart size={24} />
          <span>Notifications</span>
        </Link>
        <Link to="/create" className="flex items-center space-x-4 text-lg text-black hover:text-blue-500">
          <AiOutlinePlusSquare size={24} />
          <span>Create</span>
        </Link>
        <Link to="/profile" className="flex items-center space-x-4 text-lg text-black hover:text-blue-500">
          <AiOutlineUser size={24} />
          <span>Profile</span>
        </Link>
      </nav>
      <div className="mt-auto">
        <Link to="/more" className="flex items-center space-x-4 text-lg text-black hover:text-blue-500">
          <AiOutlineEllipsis size={24} />
          <span>More</span>
        </Link>
      </div>

    </div>
  );
};

export default Sidebar;

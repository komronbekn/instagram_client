import React, { useState, useEffect } from 'react';

const Actions = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [activeSection, setActiveSection] = useState(''); // New state to track active section

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://insta-2-e60y.onrender.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPosts(data);
        setFilteredPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to filter posts by description or set an active section
  const filterPosts = (description) => {
    setActiveSection(description); // Set the active section
    if (description && description !== 'История аккаунта' && description !== 'Действия с рекламой') {
      const filtered = posts.filter((post) => post.description === description);
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-[25%] ml-60 bg-gray-100 p-6">
        <h2 className="text-lg font-semibold mb-6">Ваши действия</h2>
        <ul className="space-y-4">
          <button onClick={() => filterPosts('Взаимодействия')} className="flex items-center space-x-2">
            <span className="text-gray-700">🔄</span>
            <p className="text-gray-700">Взаимодействия</p>
          </button>
          <button onClick={() => filterPosts('Фото и видео')} className="flex items-center space-x-2">
            <span className="text-gray-700">📷</span>
            <p className="text-gray-700">Фото и видео</p>
          </button>
          <button onClick={() => setActiveSection('История аккаунта')} className="flex items-center space-x-2">
            <span className="text-gray-700">📅</span>
            <p className="text-gray-700">История аккаунта</p>
          </button>
          <button onClick={() => setActiveSection('Действия с рекламой')} className="flex items-center space-x-2">
            <span className="text-gray-700">📢</span>
            <p className="text-gray-700">Действия с рекламой</p>
          </button>
          <button onClick={() => filterPosts('Скачать информацию')} className="flex items-center space-x-2">
            <span className="text-gray-700">⬇️</span>
            <p className="text-gray-700">Скачать информацию</p>
          </button>
          <button onClick={() => filterPosts(null)} className="flex items-center space-x-2">
            <span className="text-gray-700">🔄</span>
            <p className="text-gray-700">Показать все</p>
          </button>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-white overflow-y-scroll p-6">
        {loading && <p>Загрузка данных...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Conditionally render based on active section */}
        {activeSection === 'История аккаунта' ? (
          <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-center text-lg font-semibold text-gray-700 mb-4">
                Информация об истории аккаунта
              </h2>
              <p className="text-center text-gray-500 mb-6">
                Просмотрите изменения, которые вы вносили в свой аккаунт с момента его создания.
              </p>

              <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
                <p className="text-gray-700 font-medium">От новых к старым</p>
                <button className="px-4 py-2 bg-gray-100 text-gray-600 font-medium rounded-md hover:bg-gray-200">
                  Сортировка и фильтр
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="text-gray-600">📧</div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">Электронный адрес</p>
                    <p className="text-gray-500 text-sm">
                      Вы изменили свой электронный адрес на 1 нед.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-gray-600">ℹ️</div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">Аккаунт создан</p>
                    <p className="text-gray-500 text-sm">
                      Вы создали аккаунт <span className="font-semibold">October 20, 2024</span> 1 нед.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : activeSection === 'Действия с рекламой' ? (
          <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Действия с рекламой</h2>
              <p className="text-gray-500 mb-6">
                Просматривайте рекламу, с которой вы недавно взаимодействовали, и узнавайте больше о показывающих ее брендах.
              </p>

              <div className="border border-gray-300 rounded-md p-4 bg-gray-100 flex items-center mb-6">
                <span className="text-gray-700 mr-3">⚙️</span>
                <p className="text-gray-600 text-sm">
                  Для доступа ко всем действиям с рекламой используйте мобильное приложение.
                </p>
              </div>

              <hr className="my-6 border-gray-300" />

              <h3 className="text-gray-600 text-center">Реклама в историях, на которую вы недавно нажимали</h3>
              <div className="flex flex-col items-center mt-8">
                <div className="text-6xl text-gray-400">📈</div>
                <p className="text-gray-500 mt-4">Нет недавних действий</p>
                <p className="text-gray-400 text-sm mt-1">
                  Вы не взаимодействовали с рекламными объявлениями за последние 90 дней.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            {!loading && !error && filteredPosts.length === 0 && <p>Нет данных для отображения.</p>}
            {!loading && !error && filteredPosts.length > 0 && (
              <div className="flex flex-wrap">
                {filteredPosts.map((post, index) => (
                  <img key={index} src={post.post} alt="Post" className="object-cover w-[180px]" />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Actions;

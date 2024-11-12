import React, { useEffect, useState } from "react";

function Blocked() {
  // Состояние для хранения пользователей
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [error, setError] = useState(null); // Состояние для ошибок

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://insta-2-e60y.onrender.com/users"); // URL для получения пользователей
        if (!response.ok) {
          throw new Error("Ошибка сети");
        }
        const data = await response.json();
        setUsers(data); // Устанавливаем полученные данные в состояние
      } catch (error) {
        setError(error.message); // Устанавливаем сообщение об ошибке
      } finally {
        setLoading(false); // Завершаем загрузку
      }
    };

    fetchUsers(); // Вызываем функцию для загрузки данных
  }, []);

  // Функция для блокировки/разблокировки пользователя
  const toggleBlockUser = async (id) => {
    // Здесь мы просто переключаем состояние, без реального запроса
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, blocked: !user.blocked } : user
      )
    );

    // Если необходимо сделать запрос на сервер, чтобы изменить состояние блокировки
    /*
    try {
      const response = await fetch(`https://insta-2-e60y.onrender.com/users/${id}`, {
        method: "PATCH", // Используйте PATCH или PUT в зависимости от API
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ blocked: !user.blocked }), // Изменяем статус блокировки
      });
      if (!response.ok) {
        throw new Error("Ошибка при изменении состояния блокировки пользователя");
      }
    } catch (error) {
      setError(error.message);
    }
    */
  };

  // Проверяем состояние загрузки
  if (loading) {
    return <p>Загрузка...</p>;
  }

  // Проверяем наличие ошибок
  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      {/* Заголовок страницы */}
      <h1 className="text-2xl font-semibold mb-4">Заблокированные аккаунты</h1>
      <p className="text-gray-500 mb-6">
        Вы можете заблокировать или разблокировать аккаунты.
      </p>

      {/* Список пользователей */}
      {users.length > 0 ? (
        <div className="space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-2 bg-gray-100 rounded-lg"
            >
              {/* Аватар и имя */}
              <div className="flex items-center">
                <img
                  src={user.avatar || "https://via.placeholder.com/150"} // Заглушка на случай отсутствия аватара
                  alt="Avatar"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <p className="font-medium">{user.name}</p>
              </div>
              {/* Кнопка для блокировки/разблокировки */}
              <button
                onClick={() => toggleBlockUser(user.id)}
                className={`text-sm font-semibold ${
                  user.blocked ? "text-red-500" : "text-blue-500"
                } hover:text-blue-700`}
              >
                {user.blocked ? "Разблокировать" : "Заблокировать"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Нет пользователей.</p>
      )}
    </div>
  );
}

export default Blocked;

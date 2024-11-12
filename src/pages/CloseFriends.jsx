// CloseFriends.jsx
import React, { useEffect, useState } from "react";

const CloseFriends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await fetch("https://insta-2-e60y.onrender.com/users");
        if (!response.ok) {
          throw new Error("Ошибка сети");
        }
        const data = await response.json();

        // API'dan kelgan ma'lumotlarni konsolga chiqaramiz
        console.log(data);

        // Olingan ma'lumotlarni to'g'ridan-to'g'ri ro'yxatga o'zgaradi
        setFriends(data.map(friend => ({ ...friend, isClose: false }))); // default isClose = false
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFriends();
  }, []);

  const toggleCloseFriend = (id) => {
    setFriends((prevFriends) =>
      prevFriends.map((friend) =>
        friend._id === id ? { ...friend, isClose: !friend.isClose } : friend
      )
    );
  };

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Близкие друзья</h1>
      <p className="text-gray-500 mb-6">Управляйте своими близкими друзьями и тем, кто может видеть ваши истории.</p>

      <div className="space-y-4">
        {friends.length > 0 ? (
          friends.map((friend) => (
            <div
              key={friend._id} // Unikal key prop
              className="p-4 border border-gray-200 rounded-lg bg-gray-50 flex justify-between items-center"
            >
              <span className="text-gray-700">{friend.nickName || friend.email}</span> {/* nickName yoki email ko'rsatish */}
              <button
                onClick={() => toggleCloseFriend(friend._id)} // _id dan foydalanamiz
                className={`text-sm font-semibold ${
                  friend.isClose ? "text-red-500" : "text-blue-500"
                } hover:text-blue-700`}
              >
                {friend.isClose ? "Убрать из близких" : "Добавить в близкие"}
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Друзья не найдены.</p>
        )}
      </div>
    </div>
  );
};

export default CloseFriends;

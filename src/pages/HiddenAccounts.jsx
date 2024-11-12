import React, { useState, useEffect } from 'react';

const HiddenAccounts = () => {
    const [users, setUsers] = useState([]); // State to hold users
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const [hiddenAccounts, setHiddenAccounts] = useState([]); // State for hidden accounts

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://insta-2-e60y.onrender.com/users');
                if (!response.ok) throw new Error(`Failed to fetch users: ${response.statusText}`);
                
                const data = await response.json();
                console.log("Fetched data:", data); // Log fetched data

                // Ensure data is an array before setting it to the state
                if (Array.isArray(data)) {
                    setUsers(data);
                } else {
                    throw new Error("Unexpected data format");
                }
            } catch (error) {
                console.error("Error fetching users:", error);
                setError(error.message || "Failed to fetch users");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleToggleHiddenAccount = (accountId) => {
        if (hiddenAccounts.includes(accountId)) {
            setHiddenAccounts(hiddenAccounts.filter(id => id !== accountId)); // Unhide the account
        } else {
            setHiddenAccounts([...hiddenAccounts, accountId]); // Hide the account
        }
    };

    return (
        <div className="p-6 bg-white text-gray-900 min-h-screen">
            <h2 className="text-lg font-semibold text-black mb-4">Скрытые аккаунты</h2>
            <p className="mt-2 text-gray-600">
                Управляйте аккаунтами, которые вы хотите скрыть.
            </p>
            
            {loading ? (
                <p className="text-gray-500 text-center">Загрузка...</p>
            ) : error ? (
                <p className="text-red-500 text-center">Ошибка: {error}</p>
            ) : users.length > 0 ? (
                <ul className="mt-4 space-y-2">
                    {users.map((user) => (
                        <li key={user._id} className="flex items-center justify-between bg-gray-100 p-2 rounded-lg">
                            <div>
                                <span className="text-gray-800 font-bold">{user.nickName || 'Без имени'}</span>
                                <p className="text-gray-600">{user.email || 'Без email'}</p>
                            </div>
                            <button
                                onClick={() => handleToggleHiddenAccount(user._id)}
                                className={`px-4 py-2 rounded-lg ${hiddenAccounts.includes(user._id) ? 'bg-red-500' : 'bg-blue-500'} text-white hover:bg-opacity-80`}
                            >
                                {hiddenAccounts.includes(user._id) ? 'Скрыть' : 'Скрыть аккаунт'}
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500 text-center">Нет пользователей.</p>
            )}
        </div>
    );
};

export default HiddenAccounts;

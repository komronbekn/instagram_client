import React, { useState } from 'react';

const PasswordSecurity = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (newPassword !== confirmPassword) {
            setError('Пароли не совпадают');
            setSuccessMessage('');
            return;
        }
        
        if (newPassword.length < 6) {
            setError('Новый пароль должен содержать минимум 6 символов');
            setSuccessMessage('');
            return;
        }

        setError('');
        setSuccessMessage('Пароль успешно обновлен');

        // Clear the input fields
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="flex flex-col items-center p-4 bg-white text-gray-900 min-h-screen">
            <div className="w-full max-w-md">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                    Обновление пароля
                </h2>
                <p className="text-sm text-gray-500 mb-6 text-center">
                    Для безопасности вашего аккаунта регулярно обновляйте пароль.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-gray-700" htmlFor="currentPassword">Текущий пароль</label>
                        <input
                            type="password"
                            id="currentPassword"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            className="w-full mt-2 p-2 bg-white text-black border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-gray-700" htmlFor="newPassword">Новый пароль</label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full mt-2 p-2 bg-white text-black border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-gray-700" htmlFor="confirmPassword">Подтвердите новый пароль</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full mt-2 p-2 bg-white text-black border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Error Message */}
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    
                    {/* Success Message */}
                    {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}

                    <button
                        type="submit"
                        className="w-full mt-6 py-2 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600"
                    >
                        Обновить пароль
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PasswordSecurity;

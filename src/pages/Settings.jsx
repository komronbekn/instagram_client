import React, { useState } from 'react';
import {
  AiOutlineUser,
  AiOutlineBell,
  AiOutlineLock,
  AiOutlineCloseCircle,
  AiOutlineEyeInvisible,
  AiOutlineMessage,
  AiOutlineFileText,
  AiOutlineQuestionCircle
} from 'react-icons/ai';
import { FaUserAlt, FaLock, FaBullhorn, FaLanguage, FaArchive, FaUserShield, FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Settings = () => {
  const [showThreadsIcon, setShowThreadsIcon] = useState(false);
  const [recommendAccounts, setRecommendAccounts] = useState(false);
  const [gender, setGender] = useState("Prefer not to say");
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    
    // Log the updated profile information
    console.log('Profile updated:', { username, bio, gender });
    
    // Display success message
    setSuccessMessage('Профиль успешно обновлён!');
    
    // Optionally reset the form fields
    setUsername('');
    setBio('');
    setGender('Prefer not to say');
    
    // Clear success message after a few seconds (optional)
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className="p-6 bg-white text-gray-900 min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 mr-6 hidden md:block">
        <h2 className="text-lg font-semibold mb-4 text-black">Настройки</h2>
        {/* Meta Account Center Section */}
        <div className="bg-gray-200 p-4 mb-6 rounded-md text-black">
          <h3 className="text-md font-semibold mb-2">Центр аккаунтов</h3>
          <p className="text-gray-600 text-sm mb-4">
            Управляйте кросс-сервисными функциями и настройками аккаунтов на платформах Meta.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li><Link to="/meta-account-center/personal-info" className="flex items-center hover:text-blue-500"><FaUserAlt className="mr-3" /> Личная информация</Link></li>
            <li><Link to="/meta-account-center/password-security" className="flex items-center hover:text-blue-500"><FaLock className="mr-3" /> Пароль и безопасность</Link></li>
            <li><Link to="/meta-account-center/ad-preferences" className="flex items-center hover:text-blue-500"><FaBullhorn className="mr-3" /> Рекламные предпочтения</Link></li>
          </ul>
          <Link to="/meta-account-center" className="text-blue-500 mt-4 inline-block">Больше настроек в Центре аккаунтов</Link>
        </div>

        {/* Other Settings Links */}
        <ul className="space-y-2 text-gray-600">
          <li><Link to="/settings/notifications" className="flex items-center hover:text-blue-500"><AiOutlineBell className="mr-3" /> Уведомления</Link></li>
          <li><Link to="/settings/content-visibility" className="flex items-center hover:text-blue-500"><AiOutlineLock className="mr-3" /> Кто может видеть ваш контент</Link></li>
          <li><Link to="/settings/account-privacy" className="flex items-center hover:text-blue-500"><AiOutlineLock className="mr-3" /> Конфиденциальность аккаунта</Link></li>
          <li><Link to="/settings/close-friends" className="flex items-center hover:text-blue-500"><AiOutlineUser className="mr-3" /> Близкие друзья</Link></li>
          <li><Link to="/settings/blocked" className="flex items-center hover:text-blue-500"><AiOutlineCloseCircle className="mr-3" /> Заблокированные</Link></li>
          <li><Link to="/settings/story-sharing" className="flex items-center hover:text-blue-500"><AiOutlineEyeInvisible className="mr-3" /> Скрывать историю и эфиры</Link></li>
          <li><Link to="/settings/messages-replies" className="flex items-center hover:text-blue-500"><AiOutlineMessage className="mr-3" /> Сообщения и ответы на истории</Link></li>
          <li><Link to="/settings/tags-mentions" className="flex items-center hover:text-blue-500"><AiOutlineFileText className="mr-3" /> Метки и упоминания</Link></li>
          <li><Link to="/settings/comments" className="flex items-center hover:text-blue-500"><AiOutlineMessage className="mr-3" /> Комментарии</Link></li>
          <li><Link to="/settings/reposts" className="flex items-center hover:text-blue-500"><AiOutlineFileText className="mr-3" /> Настройки репостов</Link></li>
          <li><Link to="/settings/restricted-accounts" className="flex items-center hover:text-blue-500"><FaUserShield className="mr-3" /> Аккаунты с ограничениями</Link></li>
          <li><Link to="/settings/hidden-words" className="flex items-center hover:text-blue-500"><AiOutlineFileText className="mr-3" /> Скрытые слова</Link></li>
          <li><Link to="/settings/hidden-accounts" className="flex items-center hover:text-blue-500"><AiOutlineEyeInvisible className="mr-3" /> Скрытые аккаунты</Link></li>
          <li><Link to="/settings/content-preferences" className="flex items-center hover:text-blue-500"><AiOutlineFileText className="mr-3" /> Настройки контента</Link></li>
          <li><Link to="/settings/likes-reposts-count" className="flex items-center hover:text-blue-500"><AiOutlineUser className="mr-3" /> Число отметок "Нравится" и репостов</Link></li>
          <li><Link to="/settings/premium-subscriptions" className="flex items-center hover:text-blue-500"><AiOutlineUser className="mr-3" /> Платные подписки</Link></li>
          <li><Link to="/settings/archiving-downloads" className="flex items-center hover:text-blue-500"><FaArchive className="mr-3" /> Архивирование и скачивание</Link></li>
          <li><Link to="/settings/language" className="flex items-center hover:text-blue-500"><FaLanguage className="mr-3" /> Язык</Link></li>
          <li><Link to="/settings/site-permissions" className="flex items-center hover:text-blue-500"><AiOutlineLock className="mr-3" /> Разрешения сайта</Link></li>
          <li><Link to="/settings/family-center" className="flex items-center hover:text-blue-500"><FaUserAlt className="mr-3" /> Семейный центр</Link></li>
          <li><Link to="/settings/professional-account-tools" className="flex items-center hover:text-blue-500"><FaTools className="mr-3" /> Тип аккаунта и инструменты</Link></li>
          <li><Link to="/settings/verify-profile" className="flex items-center hover:text-blue-500"><FaUserShield className="mr-3" /> Пройти подтверждение профиля</Link></li>
          <li><Link to="/settings/help" className="flex items-center hover:text-blue-500"><AiOutlineQuestionCircle className="mr-3" /> Помощь</Link></li>
          <li><Link to="/settings/privacy-center" className="flex items-center hover:text-blue-500"><FaLock className="mr-3" /> Центр конфиденциальности</Link></li>
          <li><Link to="/settings/account-status" className="flex items-center hover:text-blue-500"><AiOutlineUser className="mr-3" /> Статус аккаунта</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-grow p-4 bg-gray-100 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-lg font-semibold text-black">Редактировать профиль</h2>
        {successMessage && (
          <div className="mb-4 p-2 bg-green-100 text-green-800 rounded">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleProfileSubmit}>
          <div>
            <label className="block font-medium text-sm mb-1 text-gray-700">Сайт</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-200 rounded-md text-gray-900 focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="https://"
            />
          </div>
          <div className="mt-4">
            <label className="block font-medium text-sm mb-1 text-gray-700">О себе</label>
            <textarea
              maxLength={150}
              className="w-full p-2 bg-gray-200 rounded-md text-gray-900 focus:outline-none"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="О себе"
            />
            <p className="text-sm text-gray-500 mt-1">{bio.length} / 150</p>
          </div>
          {/* Gender Selection */}
          <div className="mt-4">
            <label className="block font-medium text-sm mb-1 text-gray-700">Пол</label>
            <select
              className="w-full p-2 bg-gray-200 rounded-md text-gray-900 focus:outline-none"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Prefer not to say">Предпочитаю не указывать</option>
              <option value="Male">Мужчина</option>
              <option value="Female">Женщина</option>
              <option value="Non-binary">Нон-бинарный</option>
              <option value="Other">Другое</option>
            </select>
          </div>
          <button className="w-full py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Сохранить изменения</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;

import React, { useState } from 'react';

const ContentVisibility = () => {
  const [visibilityOptions, setVisibilityOptions] = useState({
    everyone: false,
    followers: false,
    onlyMe: false,
    custom: false,
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setVisibilityOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the visibility settings here
    console.log('Visibility settings saved:', visibilityOptions);

    // Show the success message
    setShowSuccessMessage(true);

    // Hide the message after a short delay
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000); // 3 seconds
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white text-gray-900 min-h-screen">
      <div className="w-full max-w-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
          Кто может видеть ваш контент
        </h2>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Настройте, кто может видеть ваш контент.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {['everyone', 'followers', 'onlyMe', 'custom'].map((option, index) => (
            <div key={option} className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
              <label htmlFor={option} className="text-gray-700">
                {index === 0 && 'Каждый (включая незарегистрированных пользователей)'}
                {index === 1 && 'Подписчики'}
                {index === 2 && 'Только я'}
                {index === 3 && 'Пользовательские настройки'}
              </label>
              <input
                type="checkbox"
                id={option}
                name={option}
                checked={visibilityOptions[option]}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full mt-6 py-2 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600"
          >
            Сохранить настройки
          </button>
        </form>

        {/* Success message */}
        {showSuccessMessage && (
          <div className="mt-4 text-center text-green-600 font-semibold">
            Настройки сохранены!
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentVisibility;

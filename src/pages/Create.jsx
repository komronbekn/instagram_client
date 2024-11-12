import React, { useState } from 'react';
import { FiImage, FiVideo, FiX } from 'react-icons/fi';

const Create = ({ toggleCreateModal }) => {
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [media, setMedia] = useState(null);
  const [caption, setCaption] = useState('');
  const [mediaType, setMediaType] = useState('');
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMedia(reader.result);
        setFile(file);
        setMediaType(file.type.startsWith('image/') ? 'image' : 'video');
        setIsSecondModalOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('media', file);
    formData.append('caption', caption);
    formData.append('mediaType', mediaType);

    try {
      const response = await fetch('https://insta-2-e60y.onrender.com/posts', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Post successfully created');
        setMedia(null);
        setCaption('');
        setFile(null);
        setIsSecondModalOpen(false);
        toggleCreateModal();
      } else {
        console.error('Error creating post:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const closeModal = () => {
    setMedia(null);
    setCaption('');
    setFile(null);
    setIsSecondModalOpen(false);
    toggleCreateModal();
  };

  return (
    <>
      {/* First Modal: Initial File Upload Prompt */}
      {!isSecondModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center space-y-4 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FiX className="text-2xl" />
            </button>
            <h2 className="text-xl font-semibold text-gray-800">Создание публикации</h2>
            <div
              onClick={() => document.getElementById('fileInput').click()}
              className="cursor-pointer flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-lg p-10 hover:border-gray-400 transition"
            >
              <FiImage className="text-4xl text-gray-400" />
              <FiVideo className="text-4xl text-gray-400" />
              <p className="text-gray-500 mt-4">Перетащите сюда фото и видео</p>
            </div>
            <input
              id="fileInput"
              type="file"
              accept="image/*,video/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>
        </div>
      )}


      {/* Second Modal: File Preview, Caption, and Post */}
      {isSecondModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FiX className="text-2xl" />
            </button>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Create a New Post</h2>
            <div className="flex flex-col items-center mb-4">
              {media ? (
                mediaType === 'image' ? (
                  <img src={media} alt="Selected" className="w-full h-auto rounded-lg max-h-60 mb-4" />
                ) : (
                  <video src={media} className="w-full h-auto rounded-lg max-h-60 mb-4" controls />
                )
              ) : (
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg mb-4">
                  <span className="text-gray-400">No media selected</span>
                </div>
              )}
              <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Write a caption..."
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none mb-4"
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition transform hover:scale-105"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition transform hover:scale-105"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Create;

import React, { useEffect, useState } from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton'; // Importing Skeleton
import 'react-loading-skeleton/dist/skeleton.css'; // Importing CSS for Skeleton

const SavedVideos = () => {
  const [savedData, setSavedData] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [description, setDescription] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://localhost:5000/saved')
      .then((response) => response.json())
      .then((data) => {
        const storedVideos = JSON.parse(localStorage.getItem('savedVideos')) || [];
        setSavedData([...storedVideos, ...(data[0]?.posts || [])]);
      })
      .catch((error) => console.error('Error fetching data:', error))
      .finally(() => setLoading(false)); // Set loading to false after fetching
  }, []);

  const handleSave = () => {
    const newVideo = { id: Date.now(), image: videoUrl, description, likes: [], comments: [] };

    // Save to localStorage
    const storedVideos = JSON.parse(localStorage.getItem('savedVideos')) || [];
    localStorage.setItem('savedVideos', JSON.stringify([...storedVideos, newVideo]));

    // Save to backend (db.json)
    fetch('http://localhost:5000/saved', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newVideo),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update savedData state
        setSavedData((prevData) => [...prevData, newVideo]);

        // Clear input fields
        setVideoUrl('');
        setDescription('');
      })
      .catch((error) => console.error('Error saving video:', error));
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  const getInstagramEmbedUrl = (url) => {
    const postId = url.split('/')[4];
    return `https://www.instagram.com/p/${postId}/embed`;
  };

  const getYoutubeEmbedUrl = (url) => {
    const videoId = url.split('v=')[1] || url.split('/')[3];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const isInstagramVideo = (url) => url && url.includes("instagram");
  const isYoutubeVideo = (url) => url && (url.includes("youtube") || url.includes("youtu.be"));
  const isLocalVideo = (url) => url && (url.endsWith('.mp4') || url.endsWith('.webm'));

  return (
    <div className="p-4 bg-black text-white h-screen text-left ml-96">
      <h1 className="text-2xl font-bold mb-6">Saqlangan videolar</h1>

      {/* Input fields for URL and description */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white w-full mb-4"
        />
        <input
          type="text"
          placeholder="Tavsif"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white w-full mb-4"
        />
        <button onClick={handleSave} className="p-2 bg-blue-500 rounded hover:bg-blue-700">
          Saqlash
        </button>
      </div>

      {/* Display saved videos or skeletons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-stretch">
        {loading ? (
          // Display skeletons while loading
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
              <Skeleton height={256} />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white">
                <Skeleton count={2} />
              </div>
            </div>
          ))
        ) : (
          savedData.map((video) => (
            <div
              key={video.id}
              className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer"
              onClick={() => handleVideoClick(video)}
            >
              {isInstagramVideo(video.image) ? (
                <iframe
                  src={getInstagramEmbedUrl(video.image)}
                  className="w-full h-64 rounded-lg"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Instagram Video"
                />
              ) : isYoutubeVideo(video.image) ? (
                <iframe
                  src={getYoutubeEmbedUrl(video.image)}
                  className="w-full h-64 rounded-lg"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="YouTube Video"
                />
              ) : isLocalVideo(video.image) ? (
                <video className="w-full h-64 object-cover rounded-lg" controls src={video.image} />
              ) : (
                <p className="text-center text-gray-400">Unsupported video format</p>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white">
                <p>{video.description}</p>
                <p className="flex items-center">
                  <FaHeart className="mr-2" /> Likes: {video.likes?.length || 0}
                </p>
                <p className="flex items-center">
                  <FaComment className="mr-2 text-gray-400" /> Comments: {video.comments?.length || 0}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal for displaying selected video */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="relative bg-white rounded-lg overflow-hidden h-full w-96">
            <button className="absolute top-2 right-2 text-black text-xl" onClick={closeModal}>
              ×
            </button>
            {selectedVideo && isInstagramVideo(selectedVideo.image) ? (
              <iframe
                src={getInstagramEmbedUrl(selectedVideo.image)}
                className="w-full h-screen"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Instagram Video"
              />
            ) : selectedVideo && isYoutubeVideo(selectedVideo.image) ? (
              <iframe
                src={getYoutubeEmbedUrl(selectedVideo.image)}
                className="w-full h-screen"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="YouTube Video"
              />
            ) : selectedVideo && isLocalVideo(selectedVideo.image) ? (
              <video className="w-full h-screen" controls src={selectedVideo.image} />
            ) : (
              <p className="text-center">Video format not supported</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedVideos;

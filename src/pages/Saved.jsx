import React, { useEffect, useState } from 'react';
import { FaHeart, FaComment } from 'react-icons/fa'; // FontAwesome icons for likes and comments

const SavedVideos = () => {
  const [savedData, setSavedData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetching the data from the db.json file served by your local server
    fetch('http://localhost:5000/saved') // Ensure your json-server is running and serving db.json
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Assuming the saved posts are in data[0].posts
        if (data.length > 0 && data[0].posts) {
          setSavedData(data[0].posts);
        } else {
          console.error('Unexpected data structure:', data);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

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

  const isInstagramVideo = (url) => {
    return url.includes("instagram");
  };

  return (
    <div className="p-4 bg-black text-white h-screen text-left ml-96">
      <h1 className="text-2xl font-bold mb-6">Сақланган видеолар</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-end">
        {savedData.map((video) => (
          <div
            key={video.id} // Use a unique id if available
            className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer"
            onClick={() => handleVideoClick(video)} // Trigger modal on video click
          >
            {isInstagramVideo(video.image) ? (
              // Embedding Instagram video using iframe
              <iframe
                src={getInstagramEmbedUrl(video.image)}
                className="w-full h-64 rounded-lg"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Instagram Video"
              />
            ) : (
              // Assuming it's a direct video URL or a different type of video
              <video
                className="w-full h-64 object-cover rounded-lg"
                controls
                src={video.image}
              >
                Your browser does not support the video tag.
              </video>
            )}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white">
              {isInstagramVideo(video.image) ? (
                <>
                  <p className="flex items-center">
                    <FaHeart className="mr-2 text-white" />
                    Лайклар сони: {video.likes.length} {/* Assuming likes are an array */}
                  </p>
                  <p className="flex items-center">
                    <FaComment className="mr-2 text-gray-400" />
                    Комментариилар сони: {video.comments.length} {/* Assuming comments are an array */}
                  </p>
                </>
              ) : (
                <>
                  <p className="flex items-center">
                    <FaHeart className="mr-2 text-white" />
                    Likes: {video.likes} {/* Assuming likes are a number for other videos */}
                  </p>
                  <p className="flex items-center">
                    <FaComment className="mr-2 text-gray-400" />
                    Comments: {video.comments} {/* Assuming comments are a number for other videos */}
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="relative bg-white rounded-lg overflow-hidden h-full w-96">
            <button
              className="absolute top-2 right-2 text-black text-xl"
              onClick={closeModal}
            >
              &times; {/* Close button */}
            </button>
            {selectedVideo && isInstagramVideo(selectedVideo.image) ? (
              <iframe
                src={getInstagramEmbedUrl(selectedVideo.image)}
                className="w-full h-screen"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Instagram Video"
              />
            ) : selectedVideo && (
              <video
                className="w-full h-screen"
                controls
                src={selectedVideo.image}
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedVideos;

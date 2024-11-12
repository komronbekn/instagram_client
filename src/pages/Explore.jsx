import React, { useEffect, useState } from 'react';

const Explore = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalPost, setModalPost] = useState(null);
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const [showEmbedModal, setShowEmbedModal] = useState(false);
  const [accountInfo, setAccountInfo] = useState(null); // State for account info

  useEffect(() => {
    fetch('https://insta-2-e60y.onrender.com/posts')  
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  const openModal = (post) => {
    setModalPost(post);
  };

  const closeModal = () => {
    setModalPost(null);
    setShowOptionsModal(false);
    setShowAccountInfo(false);
    setShowEmbedModal(false);
    setAccountInfo(null); // Reset account info when closing modal
  };

  const toggleOptionsModal = (e) => {
    e.stopPropagation();
    setShowOptionsModal(!showOptionsModal);
  };

  const handleReportClick = () => {
    alert('жалоба отправлена');
  };

  const handleAccountInfoClick = () => {
    setAccountInfo({
      username: modalPost.username,
      userImg: modalPost.userImg,
      bio: modalPost.bio, // Add any additional user info you want to display
      followers: modalPost.followers,
      following: modalPost.following,
    });
    setShowAccountInfo(true);
    setShowOptionsModal(false);
  };

  const handleEmbedClick = () => {
    setShowEmbedModal(true);
    setShowOptionsModal(false);
  };

  const handleCopyEmbedCode = () => {
    const embedCode = `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${modalPost.post}" style="width: 100%; max-width: 540px; margin: 0 auto;"><a href="${modalPost.post}" target="_blank">${modalPost.username}</a></blockquote><script async defer src="https://www.instagram.com/embed.js"></script>`;
    navigator.clipboard.writeText(embedCode)
      .then(() => alert('Embed code copied to clipboard!'))
      .catch(() => alert('Failed to copy embed code.'));
  };

  return (
    <div className="posts-container flex justify-center ml-60 flex-wrap gap-2.5">
      {loading ? (
        Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="skeleton w-[320px] h-[320px] bg-gray-200 animate-pulse mb-2.5" />
        ))
      ) : (
        posts.map((post, index) => {
          // Existing post rendering logic...
          return (
            // Render each post here
            <div key={post.id} className="relative post group mb-[8px]" onClick={() => openModal(post)}>
              <img src={post.post} alt={`${post.username}'s post`} className="profile-img w-[320px] h-[320px]" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg font-semibold">{post.likeCount} Likes</span>
                <span className="text-white text-lg font-semibold">{post.comments.length} Comments</span>
              </div>
            </div>
          );
        })
      )}

      {modalPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeModal}>
          <div className="bg-white p-4 rounded-lg shadow-lg relative" onClick={(e) => e.stopPropagation()}>
            <div className="flex">
              <img src={modalPost.post} alt={`${modalPost.username}'s post`} className="w-[500px] h-[500px] object-cover" />
              <div className="w-96">
                <div className="flex ml-5 items-center gap-3">
                  <img className="w-[40px] rounded-full" src={modalPost.userImg} alt="" />
                  <p className="text-[15px] font-bold">{modalPost.username}</p>
                  <button className="text-black text-[30px] ml-40 -mt-6" onClick={toggleOptionsModal}>...</button>
                </div>
                <hr className="mt-4" />
                <div className='ml-5'>
                  <p>{modalPost.likeCount} Likes</p>
                  <p>{modalPost.comments.length} Comments</p>
                </div>

                <div>
                  {modalPost.comments.map((comment, i) => (
                    <p key={i} className="text-gray-700">{comment}</p>
                  ))}
                </div>
              </div>
            </div>

            {showOptionsModal && (
              <div className="absolute top-12 right-8 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                <ul>
                  <li className="p-2 text-red-500 hover:bg-gray-100 cursor-pointer" onClick={handleReportClick}>Пожаловаться</li>
                  <li className="p-2 text-red-500 hover:bg-gray-100 cursor-pointer">Отменить подписку</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Перейти к публикации</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={handleEmbedClick}>Вставить на сайт</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={handleAccountInfoClick}>Об аккаунте</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={toggleOptionsModal}>Отмена</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {showAccountInfo && accountInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeModal}>
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-[400px]" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-semibold mb-2">{accountInfo.username}</h2>
            <img className="w-[80px] h-[80px] rounded-full mb-2" src={accountInfo.userImg} alt="" />
            <p><strong>Bio:</strong> {accountInfo.bio}</p>
            <p><strong>Followers:</strong> {accountInfo.followers}</p>
            <p><strong>Following:</strong> {accountInfo.following}</p>
            <button onClick={() => setShowAccountInfo(false)} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded">Close</button>
          </div>
        </div>
      )}

      {showEmbedModal && modalPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={() => setShowEmbedModal(false)}>
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-[500px]" onClick={(e) => e.stopPropagation()}>
            <p className="text-lg font-semibold mb-2">Embed Code:</p>
            <textarea
              readOnly
              className="w-full p-2 border border-gray-300 rounded"
              value={`<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${modalPost.post}" style="width: 100%; max-width: 540px; margin: 0 auto;"><a href="${modalPost.post}" target="_blank">${modalPost.username}</a></blockquote><script async defer src="https://www.instagram.com/embed.js"></script>`}
            />
            <div className="flex justify-end mt-4">
              <button onClick={handleCopyEmbedCode} className="mr-2 px-4 py-2 bg-blue-500 text-white rounded">Copy</button>
              <button onClick={() => setShowEmbedModal(false)} className="px-4 py-2 bg-gray-500 text-white rounded">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;

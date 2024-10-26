import React, { useEffect, useState } from 'react';

const Explore = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalPost, setModalPost] = useState(null); // modalni ochadigan post
    const [showOptionsModal, setShowOptionsModal] = useState(false); // состояние для модального окна опций

    useEffect(() => {
        // Fetch posts data from API
        fetch('http://localhost:5000/posts')
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((error) => console.error('Error fetching posts:', error));
    }, []);

    const openModal = (post) => {
        setModalPost(post); // modalga kerakli postni o'rnatish
    };

    const closeModal = () => {
        setModalPost(null); // modalni yopish
        setShowOptionsModal(false); // закрыть модальное окно опций при закрытии поста
    };

    const toggleOptionsModal = (e) => {
        e.stopPropagation(); // Остановить всплытие, чтобы модальное окно не закрывалось
        setShowOptionsModal(!showOptionsModal);
    };

    return (
        <div className="posts-container flex justify-center ml-60 flex-wrap gap-2.5">
            {loading ? (
                Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="skeleton w-[320px] h-[320px] bg-gray-200 animate-pulse mb-2.5" />
                ))
            ) : (
                posts.map((post, index) => {
                    if (index === 3) {
                        return (
                            <div key={post.id} className="combined-posts flex space-x-2 mb-4 mr-[330px] -mt-[330px]">
                                {posts.slice(index, index + 2).map((p, i) => (
                                    <div
                                        key={p.id}
                                        className="relative post group"
                                        onClick={() => openModal(p)} // modalni ochish uchun onclick
                                    >
                                        <img
                                            src={p.post}
                                            alt={`${p.username}'s post`}
                                            className="profile-img w-[320px] h-[320px]"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="text-white text-lg font-semibold">{p.likeCount} Likes</span>
                                            <span className="text-white text-lg font-semibold">{p.comments.length} Comments</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    } else if ((index + 1) % 5 === 0 && index !== 4) {
                        return (
                            <div key={post.id} className="special-post-container w-full flex justify-center mb-[8px]">
                                <div
                                    className="relative special-post group"
                                    onClick={() => openModal(post)}
                                >
                                    <img
                                        src={post.post}
                                        alt={`${post.username}'s post`}
                                        className="profile-img w-[320px] h-[320px]"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity h-[320px]">
                                        <span className="text-white text-lg font-semibold">{post.likeCount} Likes</span>
                                        <span className="text-white text-lg font-semibold">{post.comments.length} Comments</span>
                                    </div>
                                </div>
                            </div>
                        );
                    } else if (index !== 4) {
                        const isTallPost = (index + 1) % 5 === 3;

                        return (
                            <div
                                key={post.id}
                                className="relative post group mb-[8px]"
                                onClick={() => openModal(post)}
                            >
                                <img
                                    src={post.post}
                                    alt={`${post.username}'s post`}
                                    className={`profile-img ${isTallPost ? 'w-[320px] h-[640px]' : 'w-[320px] h-[320px]'}`}
                                />
                                <div
                                    className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity ${index === 2 ? 'h-[640px]' : 'h-[320px]'
                                        }`}
                                >
                                    <span className="text-white text-lg font-semibold">{post.likeCount} Likes</span>
                                    <span className="text-white text-lg font-semibold">{post.comments.length} Comments</span>
                                </div>
                            </div>
                        );
                    }
                    return null;
                })
            )}

            {/* Modalni ko'rsatish */}
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
                                    <li className="p-2 text-red-500 hover:bg-gray-100 cursor-pointer">Пожаловаться</li>
                                    <li className="p-2 text-red-500 hover:bg-gray-100 cursor-pointer">Отменить подписку</li>
                                    <li className="p-2 hover:bg-gray-100 cursor-pointer">Перейти к публикации</li>
                                    <li className="p-2 hover:bg-gray-100 cursor-pointer">Вставить на сайт</li>
                                    <li className="p-2 hover:bg-gray-100 cursor-pointer">Об аккаунте</li>
                                    <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={toggleOptionsModal}>Отмена</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Explore;

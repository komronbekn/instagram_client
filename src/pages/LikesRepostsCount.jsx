import React, { useState, useEffect } from 'react';

const LikesRepostsCount = () => {
    const [likesCount, setLikesCount] = useState(0); // State for likes count
    const [repostsCount, setRepostsCount] = useState(0); // State for reposts count

    // Simulating fetching likes and reposts counts
    useEffect(() => {
        // Here, you can fetch the actual data from an API if needed
        const fetchCounts = async () => {
            // Simulate API call with dummy data
            const dummyData = {
                likes: 120,
                reposts: 45,
            };
            setLikesCount(dummyData.likes);
            setRepostsCount(dummyData.reposts);
        };

        fetchCounts();
    }, []);

    return (
        <div className="p-6 bg-white text-gray-900 min-h-screen">
            <h2 className="text-lg font-semibold text-black">Статистика</h2>
            <p className="mt-4 text-gray-600">
                Количество лайков и репостов вашего контента.
            </p>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                    <span className="text-gray-700 font-semibold">Лайки:</span>
                    <span className="text-gray-900">{likesCount}</span>
                </div>
                <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                    <span className="text-gray-700 font-semibold">Репосты:</span>
                    <span className="text-gray-900">{repostsCount}</span>
                </div>
            </div>
        </div>
    );
};

export default LikesRepostsCount;

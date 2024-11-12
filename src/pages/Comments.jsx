import React, { useState } from 'react';

const Comments = () => {
    // Состояние для хранения комментариев
    const [comments, setComments] = useState([
        { id: 1, text: "Отличный пост!" },
        { id: 2, text: "Мне нравится это фото!" },
    ]);
    const [newComment, setNewComment] = useState(""); // Состояние для нового комментария

    // Функция для добавления нового комментария
    const handleAddComment = () => {
        if (newComment.trim() !== "") {
            setComments([...comments, { id: comments.length + 1, text: newComment }]);
            setNewComment(""); // Очищаем поле ввода
        }
    };

    return (
        <div className="p-4 bg-white text-gray-900 min-h-screen">
            <h2 className="text-2xl font-semibold text-black mb-4">Комментарии</h2>
            <div className="overflow-y-auto max-h-96 border rounded-lg shadow-sm mb-4 bg-gray-800"> {/* Фон для области комментариев */}
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <div key={comment.id} className="p-4 border-b border-gray-200">
                            <p className="text-white">{comment.text}</p> {/* Текст комментариев белый */}
                        </div>
                    ))
                ) : (
                    <p className="p-4 text-gray-600">Нет комментариев.</p>
                )}
            </div>

            <div className="flex">
                <input
                    type="text"
                    placeholder="Добавьте комментарий..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleAddComment}
                    className="bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition duration-200"
                >
                    Отправить
                </button>
            </div>
        </div>
    );
};

export default Comments;

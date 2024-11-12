import React, { useState } from 'react';

function FamilyCenter() {
    const [familyMembers, setFamilyMembers] = useState([]);
    const [memberName, setMemberName] = useState('');

    // Oilaviy a'zo qo'shish funktsiyasi
    const handleAddMember = () => {
        if (memberName) {
            setFamilyMembers([...familyMembers, memberName]);
            setMemberName(''); // Maktabni tozalash
        }
    };

    // Oilaviy a'zo o'chirish funktsiyasi
    const handleRemoveMember = (name) => {
        setFamilyMembers(familyMembers.filter(member => member !== name));
    };

    return (
        <div className="bg-white min-h-screen text-gray-900">
            <div className="max-w-md mx-auto p-6">
                <h2 className="text-2xl font-semibold text-black">Центр семьи</h2>
                <p className="mt-2 text-gray-500 text-sm">
                    Управляйте своими членами семьи и настройками безопасности для ваших детей.
                </p>

                {/* A'zo qo'shish bo'limi */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-black">Добавить члена семьи</h3>
                    <div className="flex mt-2">
                        <input
                            type="text"
                            value={memberName}
                            onChange={(e) => setMemberName(e.target.value)}
                            placeholder="Имя члена семьи"
                            className="border p-2 rounded w-full bg-white text-black" // Oq fon va qora matn
                        />
                        <button
                            onClick={handleAddMember}
                            className="ml-2 bg-blue-600 text-white p-2 rounded"
                        >
                            Добавить
                        </button>
                    </div>
                </div>

                {/* Oilaviy a'zolar ro'yxati */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-black">Члены семьи</h3>
                    <ul className="mt-2 list-disc list-inside">
                        {familyMembers.length > 0 ? (
                            familyMembers.map((member, index) => (
                                <li key={index} className="flex justify-between items-center p-2 border rounded-lg">
                                    <span className="text-gray-600">{member}</span>
                                    <button
                                        onClick={() => handleRemoveMember(member)}
                                        className="text-red-600 font-semibold"
                                    >
                                        Удалить
                                    </button>
                                </li>
                            ))
                        ) : (
                            <li className="text-gray-600">Нет членов семьи.</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FamilyCenter;

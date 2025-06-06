import React from 'react';
import CardButton from './CardButton';
import { mealTypes } from '../constants/mealTypes';
import { postMeal } from '../services/api';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handlePostMeal = async (mealType) => {
        try {
            onClose();
            const newMeal = { type: mealType };
            const response = await postMeal(newMeal);
            console.log('Meal posted successfully:', response);

        } catch (error) {
            console.error('Failed to post meal:', error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-lavender100 rounded-[32px] shadow-xl w-full h-full md:max-w-[884px] md:max-h-[490px] p-6 m-12 md:m-0 relative text-center overflow-auto">
                <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 text-xl w-[24px] h-[24px]"
                > &times;
                </button>

                <h2 className="text-5xl font-semibold mb-4 pt-12 pb-12">What are we eating?</h2>

                <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
                    {mealTypes.map((mealType) => (
                        <CardButton key={mealType.key} onClick={() => handlePostMeal(mealType.key)} mealType={mealType}></CardButton>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Modal;
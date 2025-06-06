import Background from './Background'
import { mealTypes } from '../constants/mealTypes';
import Lottie from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';


function Canvas({ currentMeal }) {
    const mealType = mealTypes.find((m) => m.key === currentMeal?.type);
    const isHighContrast = mealType?.key === 'LUNCH' || mealType?.key === 'DINNER';

    return (
        <div className="relative flex flex-col h-full justify-center text-center overflow-hidden">
            <Background meal={currentMeal} />
            { currentMeal && (
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentMeal?.id || currentMeal?.type || 'initial'}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className={`text-5xl font-bold pb-1 ${isHighContrast ? 'text-white' : 'text-midnight400'}`}>
                        It's {mealType?.label} time!
                        </h1>
                        <p className={`text-[18px] max-w-[480px] m-auto pb-8 ${isHighContrast ? 'text-white' : 'text-midnight400'}`}>
                        {mealType?.description}
                        </p>
                    </motion.div>
                </AnimatePresence>
            )}

            {mealType?.animation && (
                <Lottie
                key={mealType.key}
                animationData={mealType.animation}
                loop
                autoplay
                style={{ width: 700, height: 700 }}
                className="mx-auto my-[-150px]"
                rendererSettings={{
                    preserveAspectRatio: 'xMidYMid slice',
                }}
                />
            )}
        </div>
    );
}

export default Canvas;

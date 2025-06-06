import { motion, AnimatePresence } from 'framer-motion';

import breakfastBg from '../assets/background/breakfast-bg.png';
import dinnerBg from '../assets/background/dinner-bg.png';
import lunchBg from '../assets/background/lunch-bg.png';

const backgroundImages = {
    BREAKFAST: breakfastBg,
    DINNER: dinnerBg,
    LUNCH: lunchBg
};

function Background({ meal }) {
    const mealType = meal?.type;

    // const entrySpeed = 1;
    // const exitSpeed = 0.25;
    // const delaySpeed = 0.25;
    // const entrySlow = entrySpeed * 2;
    // const delaySlow = delaySpeed * 2;
    // const entryFast = entrySpeed * 0.5;
    // const delayFast = delaySpeed * 0.5;

    return (
        <div className="absolute inset-0 overflow-hidden z-[-10]">
            
            {/* Background images */}
            {Object.entries(backgroundImages).map(([mealKey, bgSrc]) => (
                <motion.img
                key={mealKey}
                src={bgSrc}
                initial={false}
                animate={{ opacity: mealType === mealKey ? 1 : 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover"
                />
            ))}

            {/* Breakfast elements */}
            <AnimatePresence mode="wait">
                {mealType === 'BREAKFAST' && (
                    <div></div>
                )}
            </AnimatePresence>


            {/* Dinner elements */}
            <AnimatePresence mode="wait">
                {mealType === 'DINNER' && (
                    <div></div>
                )}
            </AnimatePresence>

            {/* Lunch elements */}
            <AnimatePresence mode="wait">
                {mealType === 'LUNCH' && (
                    <div></div>
                )}
            </AnimatePresence>


        </div>
    );
}

export default Background;

import { useRef, useCallback } from 'react';

import { motion } from 'framer-motion';
import { format } from 'date-fns';
import Lottie from 'lottie-react';

import { mealTypes } from '../constants/mealTypes';


function Card({id, type, createdAt}) {
    const mealType = mealTypes.find((m) => m.key === type);
    const formatted = format(new Date(createdAt), "EEEE, MMM d 'at' h:mmaaa");

    const lottieRef = useRef();
    const handleMouseEnter = useCallback(() => {
        lottieRef.current?.play();
    }, []);
    const handleMouseLeave = useCallback(() => {
        lottieRef.current?.stop();
    }, []);

    return (
        <motion.div
        key={id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="
        bg-white hover:bg-lavender200 text-base
        w-full max-w-[320px] min-h-[96px] px-4 py-4 rounded-3xl
        capitalize font-normal font-sans tracking-[1px]
        flex justify-left items-center m-1">
            {mealType?.animation && (
                <Lottie
                key={mealType.key}
                lottieRef={lottieRef}
                animationData={mealType.animation}
                loop
                autoplay={false}
                style={{ width: 100, height: 100 }}
                className="m-[-12px]"
                />
            )}
            <div className="flex flex-col">
                <span className="font-bold">{mealType?.label || 'type'}</span>
                <span className="text-xs text-midnight300">{formatted}</span>
            </div>
        </motion.div>
    );
}

export default Card;
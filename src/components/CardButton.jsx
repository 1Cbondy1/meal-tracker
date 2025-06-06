import Lottie from 'lottie-react';

function CardButton({ id, onClick, mealType }) {
    return (
        <button 
        onClick={onClick} 
        className="
        flex flex-col items-center justify-center
        bg-white hover:bg-lavender200 rounded-3xl
        min-w-[250px] min-h-[250px]
        mr-4 last:mr-0 text-black">
            <Lottie
            key={id}
            animationData={mealType.animation}
            loop
            autoplay
            style={{ width: 200, height: 200 }}
            className="m-3 my-[-50px]"
            />
            <p className="text-[24px] font-extrabold text-midnight-400 capitalize mt-2">{mealType.label}</p>
        </button>
    );
}

export default CardButton;
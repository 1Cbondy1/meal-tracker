const Button = ({ onClick, children }) => (
    <button 
    onClick={onClick} 
    className="
        bg-lavender300 hover:bg-lavender200 text-white text-base
        w-full max-w-[320px] h-[92px] px-4 py-4 rounded-3xl
        uppercase font-normal font-sans tracking-[1px]">
        <span className="800">{children}</span>
    </button>
);

export default Button;
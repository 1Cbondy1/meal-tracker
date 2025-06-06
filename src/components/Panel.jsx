import { useEffect, useRef } from 'react';
import Card from './Card';
import Button from './Button';

function Panel({ meals, setOpen }) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [meals]);

    return (
        <div className="relative flex flex-col h-screen justify-end bg-lavender100">

            {/* Scrollable meal list */}
            <div
                ref={containerRef}
                className="flex flex-col-reverse overflow-y-auto items-center pt-1"
            >
                {meals?.length > 0 &&
                    [...meals].reverse().map((meal) => (
                        <Card
                        key={meal.id}
                        id={meal.id}
                        type={meal.type}
                        createdAt={meal.createdAt}
                        />
                    ))}
            </div>

            {/* Fixed bottom button */}
            <div className="flex justify-center m-[24px]">
                <Button 
                onClick={setOpen}
                className="w-full">
                    <h1>Log Meal</h1>
                </Button>
            </div>
        </div>
    );
}

export default Panel;

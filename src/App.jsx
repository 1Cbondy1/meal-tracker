import React, { useState, useEffect } from 'react';
import { getMeals } from './services/api';
import { io } from 'socket.io-client';

import Canvas from './components/Canvas';
import Panel from './components/Panel';
import Modal from './components/Modal';

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL;

function App() {
    const [open, setOpen] = useState(false);
    const [meals, setMeals] = useState(null);
    const [currentMeal, setcurrentMeal] = useState(null);

    useEffect(() => {
        // Fetch initial meals
        getMeals()
        .then(data => {
            setMeals(data);
            setcurrentMeal(data[data.length - 1] || null);
        })
        .catch(err => {
            console.error('Error fetching meals:', err);
            setMeals([]);
        });

        // Connect to WebSocket
        const socket = io(SOCKET_URL, {
            path: '/socket.io',
        });

        // Listen for "new-meal" events
        socket.on('new-meal', (newMeal) => {
            setMeals(prev => (prev ? [...prev, newMeal] : [newMeal]));
            setcurrentMeal(newMeal);
        });

        // Clean up socket connection on unmount
        return () => {
            socket.disconnect();
        };
    }, []);

    // Open the model for initial meal selection
    useEffect(() => {
        Array.isArray(meals) && meals.length === 0 && setOpen(true);
    }, [meals]);

    return (
        <div className="flex h-screen">
            <Modal isOpen={open} onClose={() => setOpen(false)}></Modal>
            
            <span className="w-[30%]">
                <Panel meals={meals} setOpen={() => setOpen(true)}/>
            </span>

            <span className="w-[70%]">
                <Canvas currentMeal={currentMeal}/>
            </span>
        </div>
    );
}

export default App;

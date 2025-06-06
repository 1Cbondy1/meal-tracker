const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Helper to get headers for each request
const getHeaders = () => ({
    'Content-Type': 'application/json',
});

// GET request to fetch meals
export const getMeals = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/meals`, {
        method: 'GET',
        headers: getHeaders(),
        });

        if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error ${response.status}: ${errorText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Failed to fetch meals:', error);
        throw error; // Re-throw so the calling component can handle it
    }
};

// POST request to add a new meal
export const postMeal = async (mealData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/meals`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(mealData),
        });

        if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error ${response.status}: ${errorText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Failed to post meal:', error);
        throw error;
    }
};
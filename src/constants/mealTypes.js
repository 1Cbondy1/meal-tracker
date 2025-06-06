import breakfastAnim from '../assets/breakfast.json';
import dinnerAnim from '../assets/dinner.json';
import lunchAnim from '../assets/lunch.json';

export const mealTypes = [
    {
    key: 'BREAKFAST',
    label: 'breakfast',
    description: `The most important meal of the day, right? Let's get ready to rock!`,
    animation: breakfastAnim
  },
  {
    key: 'DINNER',
    label: 'dinner',
    description: `Time to wind down and refuel. Let’s wrap up the day with something satisfying.`,
    animation: dinnerAnim
  },
  {
    key: 'LUNCH',
    label: 'lunch',
    description: `A midday pit stop to fuel your afternoon. You've earned this break - dig in!`,
    animation: lunchAnim
  }
];
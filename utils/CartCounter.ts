import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const CartCounter = () => {
    const [count, setCount] = useState(1);

    const positiveHandler = () => {
        setCount((count) => count + 1);
    };

    const negativeHandler = () => {
        setCount((count) => Math.max(0, count - 1));
    };

    const resetCount = () => {
        setCount(1);
    };

    return { count, positiveHandler, negativeHandler, resetCount };
};

import { useEffect, useState } from 'react';

export const storeItem = (itemKey: string, item: string) => {
    useEffect(() => {
        if (window) {
            sessionStorage.clear();
            sessionStorage.setItem(itemKey, item);
        }
    }, []);
};

export const getStoredItem = (itemKey: string) => {
    const [item, setItem] = useState('');

    useEffect(() => {
        if (window) {
            setItem(sessionStorage.getItem(itemKey) || '');
        }
    }, [item]);
    return item;
};

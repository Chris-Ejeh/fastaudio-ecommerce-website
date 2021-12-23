import React, { FC, useState } from 'react';

import { IProducts } from '../utils/types';

interface AppContextProps {
    cartOpen: boolean;
    cartItem?: IProducts;
    closeCart: () => void;
    setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setCartItem: React.Dispatch<React.SetStateAction<IProducts | undefined>>;
}

const AppContext = React.createContext({} as AppContextProps);

const AppProvider: FC = ({ children }) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItem, setCartItem] = useState<IProducts>();

    function closeCart() {
        setCartOpen(false);
    }

    return (
        <AppContext.Provider
            value={{
                cartOpen,
                cartItem,
                setCartOpen,
                closeCart,
                setCartItem,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

const AppConsumer = AppContext.Consumer;

export { AppConsumer, AppContext };

export default AppProvider;

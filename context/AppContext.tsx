import React, { FC, useState } from 'react';

import { IProducts } from '../utils/types';

interface AppContextProps {
    cartOpen: boolean;
    formOpen: boolean;
    sideDrawerOpen: boolean;
    cartItem?: IProducts;
    closeCart: () => void;
    closeForm: () => void;
    setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setCartItem: React.Dispatch<React.SetStateAction<IProducts | undefined>>;
    setSideDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = React.createContext({} as AppContextProps);

const AppProvider: FC = ({ children }) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [formOpen, setFormOpen] = useState(false);
    const [cartItem, setCartItem] = useState<IProducts>();
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    function closeCart() {
        setCartOpen(false);
    }

    function closeForm() {
        setFormOpen(false);
    }

    return (
        <AppContext.Provider
            value={{
                cartOpen,
                formOpen,
                sideDrawerOpen,
                cartItem,
                setCartOpen,
                setFormOpen,
                closeCart,
                closeForm,
                setCartItem,
                setSideDrawerOpen,
                // eslint-disable-next-line prettier/prettier
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

const AppConsumer = AppContext.Consumer;

export { AppConsumer, AppContext };

export default AppProvider;

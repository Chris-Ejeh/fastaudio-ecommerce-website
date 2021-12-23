import { createContext, FC, useState } from 'react';

interface CartContextProps {
    cartOpen: boolean;
    closeCart: () => void;
    setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartContext = createContext({} as CartContextProps);
const CartProvider = CartContext.Provider;

const CartStateProvider: FC = ({ children }) => {
    const [cartOpen, setCartOpen] = useState(false);
    // This is our own custom provider! we will store date (state) and functionality (updates) in  here and anyone can access it via the consumer

    function closeCart() {
        setCartOpen(false);
    }

    return <CartProvider value={{ closeCart, setCartOpen, cartOpen }}>{children}</CartProvider>;
};

export { CartStateProvider };

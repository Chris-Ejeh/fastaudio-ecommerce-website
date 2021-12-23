import { ReactiveVar } from '@apollo/client';

import { apolloCartItem } from '../../utils/types';

export type CartItems = apolloCartItem[];

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const createCartItem = (cartItemsVar: ReactiveVar<CartItems>) => {
    const createNewCartItemId = (allCartItems: CartItems) => {
        return allCartItems.reduce((maxid: number, cartItem: apolloCartItem) => Math.max(cartItem.id, maxid), -1) + 1;
    };

    const createNewCartItem = (
        productName: string,
        productId: number,
        price: number,
        quantity: number,
        image: string,
        allCartItems: CartItems
    ) => {
        return { productName, price, quantity, image, productId, id: createNewCartItemId(allCartItems) };
    };

    return (productName: string, productId: number, price: number, quantity: number, image: string) => {
        const allCartItems = cartItemsVar();
        const actualCart = allCartItems.filter((items) => {
            if (items.productName !== productName) {
                return items;
            }
        });

        cartItemsVar(
            actualCart.concat([createNewCartItem(productName, productId, price, quantity, image, actualCart)])
        );
    };
};

export default createCartItem;

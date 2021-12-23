import { storeCartItem } from './apollo-cache';
import createCartItem from './cart/createCartItem';
import deleteCartItem from './cart/deleteCartItem';

export const cartMutation = {
    addCart: createCartItem(storeCartItem),
    deleteCart: deleteCartItem(storeCartItem),
};

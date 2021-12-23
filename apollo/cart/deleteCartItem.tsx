import { ReactiveVar } from '@apollo/client';

import { CartItems } from './createCartItem';

const deleteCartItem = (cartItemsVar: ReactiveVar<CartItems>) => {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    return () => {
        cartItemsVar([]);
    };
};

export default deleteCartItem;

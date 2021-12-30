import { InMemoryCache, makeVar, ReactiveVar } from '@apollo/client';
import { FormDataProps } from 'utils/types';

import { CartItems } from './cart/createCartItem';

export const storeCartItem: ReactiveVar<CartItems> = makeVar<CartItems>([]);

export const storeCartCount: ReactiveVar<number> = makeVar<number>(1);

export const storeRoutePath: ReactiveVar<string> = makeVar<string>('');

export const FormStore: ReactiveVar<FormDataProps> = makeVar<FormDataProps>({
    address: '',
    city: '',
    country: '',
    email: '',
    name: '',
    tel: '',
    zip: '',
    moneyNumber: '',
    payment: '',
    pin: '',
});

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                cartItems: {
                    read() {
                        return storeCartItem();
                    },
                },
            },
        },
    },
});

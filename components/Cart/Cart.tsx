import { useReactiveVar } from '@apollo/client';
import { FC, useContext } from 'react';

import { storeCartItem } from '../../apollo/apollo-cache';
import { AppContext } from '../../context/AppContext';
import { ButtonColors, CartLayoutType } from '../../utils/types';
import Button from '../Button/Button';
import styles from './Cart.module.scss';
import CartLayout from './CartLayout';
const cn = require('classnames');

const Cart: FC = () => {
    const { cartOpen, closeCart } = useContext(AppContext);
    const cartItems = useReactiveVar(storeCartItem);

    return !cartOpen ? null : (
        <>
            <div className={cn(styles.cartContainer)}>
                {cartItems.length === 0 ? (
                    <div className={cn('container', styles.modalEmpty, styles.modal)}>
                        <h4 className={styles.cartHeaderText}>Add Item to your cart </h4>
                        <Button
                            title="Close Cart"
                            buttonColor={ButtonColors.PrimaryColor}
                            onClick={() => closeCart()}
                            type="button"
                        />
                    </div>
                ) : cartItems.length === 1 ? (
                    <div className={cn('container', styles.modalOne, styles.modal)}>
                        <CartLayout cartType={CartLayoutType.Cart} />
                    </div>
                ) : cartItems.length === 2 ? (
                    <div className={cn('container', styles.modalTwo, styles.modal)}>
                        <CartLayout cartType={CartLayoutType.Cart} />
                    </div>
                ) : cartItems.length === 3 ? (
                    <div className={cn('container', styles.modalThree, styles.modal)}>
                        <CartLayout cartType={CartLayoutType.Cart} />
                    </div>
                ) : cartItems.length === 4 ? (
                    <div className={cn('container', styles.modalFour, styles.modal)}>
                        <CartLayout cartType={CartLayoutType.Cart} />
                    </div>
                ) : (
                    <div className={cn('container', styles.modalMain, styles.modal)}>
                        <CartLayout cartType={CartLayoutType.Cart} />
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;

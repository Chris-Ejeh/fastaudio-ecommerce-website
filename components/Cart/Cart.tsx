import { useReactiveVar } from '@apollo/client';
import Image from 'next/image';
import { FC, useContext } from 'react';

import { cartMutation } from '../../apollo';
import { storeCartItem } from '../../apollo/apollo-cache';
import { AppContext } from '../../context/AppContext';
import { calcTotalPrice, formatMoney } from '../../utils/HelperFunctions';
import { ButtonColors } from '../../utils/types';
import Button from '../Button/Button';
import styles from './Cart.module.scss';
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
                        />
                    </div>
                ) : (
                    <div className={cn('container', styles.modalMain, styles.modal)}>
                        <div className={styles.cartHeader}>
                            {cartItems && <h4 className={styles.cartHeaderText}>{`Cart (${cartItems.length})`} </h4>}
                            <Button
                                className={styles.cartButton}
                                buttonColor={ButtonColors.countButton}
                                title="Remove all"
                                onClick={() => cartMutation.deleteCart()}
                            />
                        </div>
                        {cartItems?.map((item, index) => {
                            const { image, productName, price, quantity } = item;

                            return (
                                <div key={index} className={styles.cartContent}>
                                    <div className={styles.imageTextContainer}>
                                        <Image
                                            src={image}
                                            width="64"
                                            height="64"
                                            objectFit="contain"
                                            alt={productName}
                                        />
                                        <div className={styles.cartInfo}>
                                            <h3 className={styles.name}>{productName}</h3>
                                            <p className={styles.price}>${formatMoney(price)}</p>
                                        </div>
                                    </div>

                                    <p>x{quantity}</p>
                                </div>
                            );
                        })}
                        <div className={styles.totalContainer}>
                            <p className={styles.totalPrice}>Total</p>
                            <p className={styles.totalPrice}>${formatMoney(calcTotalPrice(cartItems))}</p>
                        </div>

                        <Button title="Checkout" buttonColor={ButtonColors.PrimaryColor} onClick={() => closeCart()} />
                        <Button title="Close Cart" buttonColor={ButtonColors.countButton} onClick={() => closeCart()} />
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;

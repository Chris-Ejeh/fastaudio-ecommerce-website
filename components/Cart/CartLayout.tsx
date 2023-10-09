import { useReactiveVar } from '@apollo/client';
import { cartMutation } from 'apollo';
import { storeCartItem } from 'apollo/apollo-cache';
import Button from 'components/Button/Button';
import { AppContext } from 'context/AppContext';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, MouseEventHandler, useContext } from 'react';
import { calcGrandTotal, calcTaxes, calcTotalPrice, changeName, formatMoney } from 'utils/HelperFunctions';
import { ButtonColors, PathnameType } from 'utils/types';

import styles from './Cart.module.scss';

const cn = require('classnames');

interface CartLayoutProps {
    cartType: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CartLayout: FC<CartLayoutProps> = ({ cartType, onClick }) => {
    const { closeCart } = useContext(AppContext);
    const cartItems = useReactiveVar(storeCartItem);
    const router = useRouter();

    return (
        <div className={cn(styles.cart)}>
            {cartType === 'cart' ? (
                <div className={styles.cartHeader}>
                    {cartItems && <h4 className={styles.cartHeaderText}>{`Cart (${cartItems.length})`} </h4>}
                    <Button
                        className={styles.cartButton}
                        buttonColor={ButtonColors.countButton}
                        title="Remove all"
                        onClick={() => cartMutation.deleteCart()}
                        type="button"
                    />
                </div>
            ) : cartType === 'checkout' ? (
                <div className={styles.cartHeader}>
                    {cartItems && <h4 className={styles.cartHeaderText}>Summary </h4>}
                </div>
            ) : null}

            {cartItems?.map((item, index) => {
                const { image, productName, price, quantity } = item;

                return (
                    <div key={index} className={styles.cartContent}>
                        <div className={styles.imageTextContainer}>
                            <Image src={image} width="64" height="64" objectFit="contain" alt={productName} />
                            <div className={styles.cartInfo}>
                                <h3 className={styles.name}>{changeName(productName)}</h3>
                                <p className={styles.price}>${formatMoney(price)}</p>
                            </div>
                        </div>

                        <p className={styles.quanity}>x{quantity}</p>
                    </div>
                );
            })}

            <div className={styles.totalContainer}>
                <p className={styles.totalText}>Total</p>
                <p className={styles.totalPrice}>${formatMoney(calcTotalPrice(cartItems))}</p>
            </div>

            {cartType === 'checkout' && (
                <>
                    <div className={styles.totalContainer}>
                        <p className={styles.totalText}>Shipping</p>
                        <p className={styles.totalPrice}>{cartItems.length === 0 ? '$0' : '$10'}</p>
                    </div>
                    <div className={styles.totalContainer}>
                        <p className={styles.totalText}>Tax (Included) </p>
                        <p className={styles.totalPrice}>${formatMoney(calcTaxes(calcTotalPrice(cartItems), 10))}</p>
                    </div>

                    <div className={styles.grandTotalContainer}>
                        <p className={styles.totalText}>Grand Total</p>
                        <p className={styles.totalPrice}>
                            ${formatMoney(calcGrandTotal(calcTotalPrice(cartItems), 10))}
                        </p>
                    </div>
                </>
            )}

            {cartType === 'cart' ? (
                <>
                    <Button
                        title="Checkout"
                        buttonColor={ButtonColors.PrimaryColor}
                        className={styles.checkoutButton}
                        onClick={() => {
                            router.push(PathnameType.Checkout);
                            closeCart();
                        }}
                        type="button"
                    />
                    <Button
                        title="Close Cart"
                        buttonColor={ButtonColors.countButton}
                        className={styles.checkoutButton}
                        onClick={() => closeCart()}
                        type="button"
                    />
                </>
            ) : cartType === 'checkout' ? (
                <>
                    {cartItems.length === 0 ? <span>please add items to your cart</span> : null}
                    <Button
                        title={`Continue & Pay`}
                        buttonColor={ButtonColors.PrimaryColor}
                        className={styles.checkoutButton}
                        disabled={cartItems.length === 0}
                        type="submit"
                        onClick={onClick}
                    />
                </>
            ) : null}
        </div>
    );
};
export default CartLayout;

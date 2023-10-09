import { useReactiveVar } from '@apollo/client';
import { cartMutation } from 'apollo';
import { FormStore, storeCartItem } from 'apollo/apollo-cache';
import { CartItems } from 'apollo/cart/createCartItem';
import Button from 'components/Button/Button';
import { AppContext } from 'context/AppContext';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useContext, useEffect, useState } from 'react';
import { calcTotalPrice, changeName, formatMoney } from 'utils/HelperFunctions';
import { ButtonColors } from 'utils/types';

import styles from './ComplementCard.module.scss';

const cn = require('classnames');

const ComplementCard: FC = () => {
    const router = useRouter();
    const [otherItem, setOtherItem] = useState([] as CartItems);
    const [buttonTitle, setButtonTitle] = useState('');
    const { formOpen, closeForm } = useContext(AppContext);
    const cartItems = useReactiveVar(storeCartItem);
    const formData = useReactiveVar(FormStore);

    useEffect(() => {
        if (cartItems.length <= 1) {
            setOtherItem(cartItems);
            setButtonTitle('');
        } else if (cartItems.length === 2) {
            setOtherItem([cartItems[0]]);
            setButtonTitle(`and ${cartItems.length - 1} other item`);
        } else {
            setOtherItem([cartItems[0]]);
            setButtonTitle(`and ${cartItems.length - 1} other items`);
        }
    }, []);

    const handleClick = () => {
        if (buttonTitle !== 'View less') {
            setOtherItem(cartItems);
            setButtonTitle('View less');
        } else {
            if (cartItems.length === 2) {
                setOtherItem([cartItems[0]]);
                setButtonTitle(`and ${cartItems.length - 1} other item`);
            } else {
                setOtherItem([cartItems[0]]);
                setButtonTitle(`and ${cartItems.length - 1} other items`);
            }
        }
    };

    return !formOpen ? null : (
        <div className={cn('container', styles.container)}>
            <div className={styles.modal}>
                {formData?.name ? (
                    <h1 className={styles.title}>
                        Thank you <span>{`${formData?.name}`}</span> for your order
                    </h1>
                ) : (
                    <h1 className={styles.title}>Thank you for your order</h1>
                )}

                <h4 className={styles.description}>You will receive an email confirmation shortly.</h4>

                <div className={styles.cartItemContainer}>
                    <div className={styles.cartItem}>
                        {otherItem.map((item, index) => (
                            <div className={styles.item} key={index}>
                                <Image src={item.image} alt={item?.productName} width={50} height={50} />
                                <div className={styles.titleContainer}>
                                    <h5 className={styles.itemName}>{changeName(item?.productName)}</h5>
                                    <p className={styles.price}>${item?.price}</p>
                                </div>
                                <p className={styles.quantity}>x{item?.quantity}</p>
                            </div>
                        ))}

                        {cartItems.length >= 2 && (
                            <div>
                                {cartItems.length <= 1 ? null : cartItems.length === 2 ? (
                                    <Button
                                        className={styles.count}
                                        buttonColor={ButtonColors.countButton}
                                        title={buttonTitle}
                                        onClick={handleClick}
                                    />
                                ) : (
                                    <Button
                                        className={styles.count}
                                        buttonColor={ButtonColors.countButton}
                                        title={buttonTitle}
                                        disabled
                                        onClick={handleClick}
                                    />
                                )}
                            </div>
                        )}
                    </div>

                    <div className={styles.totalContainer}>
                        <h5 className={styles.totalTitle}>Grand Total</h5>
                        <p className={styles.total}>${formatMoney(calcTotalPrice(cartItems))}</p>
                    </div>
                </div>

                <Button
                    title="Back To Home"
                    buttonColor={ButtonColors.PrimaryColor}
                    onClick={() => {
                        router.push('/');
                        closeForm();
                        cartMutation.deleteCart();
                    }}
                />
            </div>
        </div>
    );
};
export default ComplementCard;

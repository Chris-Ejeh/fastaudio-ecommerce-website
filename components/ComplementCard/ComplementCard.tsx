import { useReactiveVar } from '@apollo/client';
import { FormStore, storeCartItem } from 'apollo/apollo-cache';
import Button from 'components/Button/Button';
import { AppContext } from 'context/AppContext';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useContext } from 'react';
import { calcTotalPrice, formatMoney } from 'utils/HelperFunctions';
import { ButtonColors } from 'utils/types';

import styles from './ComplementCard.module.scss';

const cn = require('classnames');

const ComplementCard: FC = () => {
    const router = useRouter();
    const { formOpen, closeForm } = useContext(AppContext);
    const cartItems = useReactiveVar(storeCartItem);
    const formData = useReactiveVar(FormStore);

    return !formOpen ? null : (
        <div className={cn(styles.container)}>
            <div className={styles.modal}>
                <h1 className={styles.title}>
                    Thank you <span>{`${formData.name}`}</span> for your order
                </h1>
                <h4 className={styles.description}>You will receive an email confirmation shortly.</h4>

                <div className={styles.cartItemContainer}>
                    <div className={styles.cartItem}>
                        <div className={styles.item}>
                            <Image src={cartItems[0].image} alt={cartItems[0].productName} width={50} height={50} />
                            <div className={styles.titleContainer}>
                                <h5 className={styles.itemName}>{cartItems[0].productName}</h5>
                                <p className={styles.price}>${cartItems[0].price}</p>
                            </div>
                            <p className={styles.quantity}>x{cartItems[0].quantity}</p>
                        </div>

                        <div>
                            {cartItems.length <= 1 ? null : cartItems.length === 2 ? (
                                <p className={styles.count}>{`and ${cartItems.length - 1} other item`}</p>
                            ) : (
                                <p className={styles.count}>{`and ${cartItems.length - 1} other items`}</p>
                            )}
                        </div>
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
                    }}
                />
            </div>
        </div>
    );
};
export default ComplementCard;

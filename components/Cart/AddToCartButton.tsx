import { FC, MouseEventHandler } from 'react';

import { ButtonColors } from '../../utils/types';
import Button from '../Button/Button';
import styles from './Cart.module.scss';

interface AddToCartButtonProps {
    addToCartClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ addToCartClick }) => {
    return (
        <Button
            className={styles.addToCartButton}
            buttonColor={ButtonColors.cartButton}
            title="Add to cart"
            onClick={addToCartClick}
            type="button"
        />
    );
};
export default AddToCartButton;

import { FC, MouseEventHandler } from 'react';

import { ButtonColors } from '../../utils/types';
import Button from '../Button/Button';
import styles from './Cart.module.scss';

const cn = require('classnames');

interface AddToCartButtonProps {
    classname: string;
    addToCartClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ classname, addToCartClick }) => {
    return (
        <Button
            className={cn(styles.addToCartButton, classname)}
            buttonColor={ButtonColors.cartButton}
            title="Add to cart"
            onClick={addToCartClick}
            type="button"
        />
    );
};
export default AddToCartButton;

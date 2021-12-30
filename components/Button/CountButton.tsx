import { FC, MouseEventHandler } from 'react';

import { ButtonColors } from '../../utils/types';
import Button from './Button';
import styles from './Button.module.scss';

interface CountButtonProps {
    value: number;
    positiveClick: MouseEventHandler<HTMLButtonElement> | undefined;
    negativeClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const CountButton: FC<CountButtonProps> = ({ value, negativeClick, positiveClick }) => {
    return (
        <div className={styles.countButtonContainer}>
            <Button buttonColor={ButtonColors.countButton} title="-" onClick={negativeClick} type="button" />
            <p className={styles.buttonText}>{value}</p>
            <Button buttonColor={ButtonColors.countButton} title="+" onClick={positiveClick} type="button" />
        </div>
    );
};
export default CountButton;

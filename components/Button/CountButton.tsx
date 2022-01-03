import { FC, MouseEventHandler } from 'react';

import { ButtonColors } from '../../utils/types';
import Button from './Button';
import styles from './Button.module.scss';

const cn = require('classnames');

interface CountButtonProps {
    classname?: string;
    value: number;
    positiveClick: MouseEventHandler<HTMLButtonElement> | undefined;
    negativeClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const CountButton: FC<CountButtonProps> = ({ classname, value, negativeClick, positiveClick }) => {
    return (
        <div className={cn(styles.countButtonContainer, classname)}>
            <Button
                buttonColor={ButtonColors.countButton}
                className={styles.negativeButton}
                title="-"
                onClick={negativeClick}
                type="button"
            />
            <p className={styles.buttonText}>{value}</p>
            <Button
                buttonColor={ButtonColors.countButton}
                className={styles.positiveButton}
                title="+"
                onClick={positiveClick}
                type="button"
            />
        </div>
    );
};
export default CountButton;

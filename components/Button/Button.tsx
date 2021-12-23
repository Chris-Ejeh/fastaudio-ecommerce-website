import React, { FC, MouseEventHandler } from 'react';

import styles from './Button.module.scss';

const cn = require('classnames');

interface ButtonProps {
    title: string;
    className?: string;
    buttonColor: string;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: FC<ButtonProps> = ({ title, className, buttonColor, onClick }) => {
    return (
        <button
            aria-label={title}
            className={cn(styles.button, className, styles[buttonColor])}
            type="button"
            // eslint-disable-next-line prettier/prettier
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Button;

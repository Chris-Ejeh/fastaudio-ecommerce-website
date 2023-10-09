import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC, MouseEventHandler } from 'react';

import styles from './Button.module.scss';

const cn = require('classnames');

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    title: string;
    className?: string;
    buttonColor: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ title, type, className, buttonColor, disabled, onClick, onSubmit }) => {
    return (
        <button
            aria-label={title}
            className={cn(styles.button, className, styles[buttonColor])}
            type={type}
            disabled={disabled}
            // eslint-disable-next-line prettier/prettier
            onClick={onClick}
            // eslint-disable-next-line prettier/prettier
            onSubmit={onSubmit}
        >
            {title}
        </button>
    );
};

export default Button;

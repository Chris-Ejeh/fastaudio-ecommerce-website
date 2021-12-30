import { ChangeEventHandler, FC, InputHTMLAttributes } from 'react';

import styles from './CheckoutForm.module.scss';
const cn = require('classnames');

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    InputWidth: string;
    htmlFor?: string;
    className?: string;
    title?: string;
    value: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const TextInput: FC<TextInputProps> = ({
    autoComplete,
    className,
    htmlFor,
    title,
    InputWidth,
    type,
    name,
    onChange,
    placeholder,
    value,
}) => {
    return (
        <label className={cn(styles.label, styles[InputWidth])} htmlFor={htmlFor}>
            {title}
            <input
                className={cn(styles.textInput, className)}
                type={type}
                name={name}
                placeholder={placeholder}
                autoComplete={autoComplete}
                value={value}
                onChange={onChange}
            />
        </label>
    );
};
export default TextInput;

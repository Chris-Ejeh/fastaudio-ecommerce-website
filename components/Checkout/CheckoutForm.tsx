import { FormStore } from 'apollo/apollo-cache';
import Button from 'components/Button/Button';
import CartLayout from 'components/Cart/CartLayout';
import { AppContext } from 'context/AppContext';
import { useRouter } from 'next/router';
import { FC, FormEvent, useContext } from 'react';
import { ButtonColors, CartLayoutType } from 'utils/types';
import useForm from 'utils/useForm';

import styles from './CheckoutForm.module.scss';
import Form from './Form';

const cn = require('classnames');

const CheckoutForm: FC = () => {
    const { setFormOpen } = useContext(AppContext);
    const router = useRouter();

    const { inputs, handleChange, resetForm } = useForm({
        address: '',
        city: '',
        country: '',
        email: '',
        name: '',
        tel: '',
        zip: '',
        moneyNumber: '',
        payment: '',
        pin: '',
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        FormStore(inputs);
        resetForm();
        setFormOpen(true);
    };

    return (
        <div className={cn('container', styles.wrapper)}>
            <Button
                buttonColor={ButtonColors.backButton}
                className={styles.button}
                title="Go Back"
                onClick={() => router.back()}
                type="button"
            />
            <Form inputs={inputs} handleChange={handleChange} onSubmit={handleSubmit}>
                <CartLayout cartType={CartLayoutType.Checkout} />
            </Form>
        </div>
    );
};

export default CheckoutForm;

import { FormStore } from 'apollo/apollo-cache';
import Button from 'components/Button/Button';
import CartLayout from 'components/Cart/CartLayout';
import { AppContext } from 'context/AppContext';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, FormEvent, useContext, useState } from 'react';
import { ButtonColors, CartLayoutType } from 'utils/types';
import useForm from 'utils/useForm';

import styles from './CheckoutForm.module.scss';
import Form from './Form';

const cn = require('classnames');

const CheckoutForm: FC = () => {
    const [error, setError] = useState({
        email: false,
        name: false,
    });
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

        if (inputs.name.length === 0) {
            setError({ email: false, name: true });
            return;
        }

        if (inputs.email.length === 0) {
            setError({ email: true, name: false });
            return;
        }

        FormStore(inputs);
        resetForm();
        setFormOpen(true);
    };

    const handleFormError = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'name') {
            setError({ email: false, name: false });
        }

        if (e.target.name === 'email') {
            setError({ email: false, name: false });
        }
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

            <Form
                inputs={inputs}
                errors={error}
                handleChange={(e) => {
                    handleChange(e);
                    handleFormError(e);
                }}
                // eslint-disable-next-line prettier/prettier
                onSubmit={handleSubmit}
            >
                <CartLayout cartType={CartLayoutType.Checkout} />
            </Form>
        </div>
    );
};

export default CheckoutForm;

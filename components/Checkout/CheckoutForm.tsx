import { FormStore } from 'apollo/apollo-cache';
import CartLayout from 'components/Cart/CartLayout';
import { AppContext } from 'context/AppContext';
import { FC, FormEvent, useContext } from 'react';
import { CartLayoutType } from 'utils/types';
import useForm from 'utils/useForm';

import styles from './CheckoutForm.module.scss';
import Form from './Form';

const CheckoutForm: FC = () => {
    const { setFormOpen } = useContext(AppContext);

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
        <div className={'container'}>
            <h1 className={styles.checkout}>Checkout</h1>
            <Form inputs={inputs} handleChange={handleChange} onSubmit={handleSubmit}>
                <CartLayout cartType={CartLayoutType.Checkout} />
            </Form>
        </div>
    );
};

export default CheckoutForm;

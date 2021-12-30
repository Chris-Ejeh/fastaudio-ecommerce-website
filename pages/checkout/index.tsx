import { FC } from 'react';

import CheckoutForm from '../../components/Checkout/CheckoutForm';
import Layout from '../../components/Layout';
import { menuItems } from '../../seed-data';

const checkout: FC = () => {
    return (
        <Layout menus={menuItems}>
            <CheckoutForm />
        </Layout>
    );
};

export default checkout;

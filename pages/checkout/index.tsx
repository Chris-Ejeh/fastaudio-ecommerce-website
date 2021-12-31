import { FC } from 'react';

import CheckoutForm from '../../components/Checkout/CheckoutForm';
import Layout from '../../components/Layout';
import { menuItems } from '../../seed-data';

const checkout: FC = () => {
    return (
        <Layout menus={menuItems}>
            <div style={{ backgroundColor: '#f1f1f1' }}>
                <CheckoutForm />
            </div>
        </Layout>
    );
};

export default checkout;

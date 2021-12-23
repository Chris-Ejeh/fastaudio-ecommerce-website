import { FC } from 'react';

import Layout from '../../components/Layout';
import Products from '../../components/Products';
import { menuItems } from '../../seed-data';
import { getCategories, getProducts } from '../../utils/HelperFunctions';
import { ProductType } from '../../utils/types';

const headphones: FC = () => {
    const products = getProducts(ProductType.Headphones);
    const blockInfos = getCategories();

    return (
        <Layout menus={menuItems}>
            <Products products={products} blockInfos={blockInfos} />
        </Layout>
    );
};

export default headphones;

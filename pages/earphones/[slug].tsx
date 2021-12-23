import { FC } from 'react';

import Layout from '../../components/Layout';
import ProductSinglePage from '../../components/ProductSinglePage/ProductSinglePage';
import { menuItems } from '../../seed-data';
import { getCategories, getFeaturedProduct, getProduct } from '../../utils/HelperFunctions';

const earphones: FC = () => {
    const product = getProduct();
    const blockInfos = getCategories();
    const featuredProduct = getFeaturedProduct();

    return (
        <Layout menus={menuItems}>
            <ProductSinglePage product={product[0]} blockInfos={blockInfos} featuredProduct={featuredProduct} />
        </Layout>
    );
};

export default earphones;

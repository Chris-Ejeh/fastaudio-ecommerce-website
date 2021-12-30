import { useReactiveVar } from '@apollo/client';
import { FC } from 'react';

import { storeRoutePath } from '../../apollo/apollo-cache';
import Layout from '../../components/Layout';
import ProductSinglePage from '../../components/ProductSinglePage/ProductSinglePage';
import { menuItems } from '../../seed-data';
import { getCategories, getFeaturedProduct, getProduct } from '../../utils/HelperFunctions';

const speaker: FC = () => {
    const pathname = useReactiveVar(storeRoutePath);
    const product = getProduct(pathname);
    const blockInfos = getCategories();
    const featuredProduct = getFeaturedProduct();

    return (
        <Layout menus={menuItems}>
            <ProductSinglePage product={product[0]} blockInfos={blockInfos} featuredProduct={featuredProduct} />
        </Layout>
    );
};

export default speaker;

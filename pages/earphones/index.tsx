import { GetStaticProps } from 'next';
import { PageProps } from 'pages/headphones';
import { FC } from 'react';

import Layout from '../../components/Layout';
import Products from '../../components/Products';
import { menuItems } from '../../seed-data';
import { getCategories, getProducts } from '../../utils/HelperFunctions';
import { ProductType } from '../../utils/types';

const earphones: FC<PageProps> = ({ products }) => {
    const blockInfos = getCategories();
    return (
        <Layout menus={menuItems}>
            <Products products={products} blockInfos={blockInfos} />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const products = getProducts(ProductType.Earphones);

    return {
        props: { products },
        revalidate: 80,
    };
};

export default earphones;

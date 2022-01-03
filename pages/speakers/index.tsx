import { GetStaticProps } from 'next';
import { PageProps } from 'pages/headphones';
import { FC } from 'react';

import Layout from '../../components/Layout';
import Products from '../../components/Products';
import { menuItems } from '../../seed-data';
import { getCategories, getProducts } from '../../utils/HelperFunctions';
import { ProductType } from '../../utils/types';

const speakers: FC<PageProps> = ({ products }) => {
    const blockInfos = getCategories();

    return (
        <Layout menus={menuItems}>
            <Products products={products} blockInfos={blockInfos} />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const products = getProducts(ProductType.Speakers);

    return {
        props: { products },
        revalidate: 60,
    };
};

export default speakers;

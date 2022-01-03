import { GetStaticProps } from 'next';
import { FC } from 'react';

import Layout from '../../components/Layout';
import Products from '../../components/Products';
import { menuItems } from '../../seed-data';
import { getCategories, getProducts } from '../../utils/HelperFunctions';
import { IProducts, ProductType } from '../../utils/types';

export interface PageProps {
    products: IProducts[];
}

const headphones: FC<PageProps> = ({ products }) => {
    const blockInfos = getCategories();

    return (
        <Layout menus={menuItems}>
            <Products products={products} blockInfos={blockInfos} />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const products = getProducts(ProductType.Headphones);

    return {
        props: { products },
        revalidate: 60,
    };
};

export default headphones;

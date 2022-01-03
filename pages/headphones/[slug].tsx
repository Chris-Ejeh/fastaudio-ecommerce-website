import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';
import { IProducts, ProductType } from 'utils/types';

import Layout from '../../components/Layout';
import ProductSinglePage from '../../components/ProductSinglePage/ProductSinglePage';
import { menuItems } from '../../seed-data';
import { getCategories, getFeaturedProduct, getProduct, getProducts } from '../../utils/HelperFunctions';

export interface SlugProps {
    product: IProducts;
}

const headphones: FC<SlugProps> = ({ product }) => {
    const blockInfos = getCategories();
    const featuredProduct = getFeaturedProduct();

    return (
        <Layout menus={menuItems}>
            <ProductSinglePage product={product} blockInfos={blockInfos} featuredProduct={featuredProduct} />
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const products = getProducts(ProductType.Headphones);

    return {
        paths: products.map((product) => {
            return {
                params: {
                    slug: product.slug,
                },
            };
        }),
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const product = getProduct(params?.slug);

    return {
        props: { product },
        revalidate: 60,
    };
};

export default headphones;

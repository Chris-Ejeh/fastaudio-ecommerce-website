import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';

import HomePage from '../components/HomePage';
import Layout from '../components/Layout';
import { menuItems } from '../seed-data';
import { getAllProducts, getCategories, getHomepageHeader, getProduct } from '../utils/HelperFunctions';

const Home: FC = () => {
    const blockInfos = getCategories();
    const homepageHeader = getHomepageHeader('XX99 Mark II Headphones');

    return (
        <Layout menus={menuItems}>
            <HomePage blockInfos={blockInfos} homepageHeader={homepageHeader} />
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const products = getAllProducts();

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

export default Home;

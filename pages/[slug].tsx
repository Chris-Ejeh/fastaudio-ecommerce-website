import { FC } from 'react';

import HomePage from '../components/HomePage';
import Layout from '../components/Layout';
import { menuItems } from '../seed-data';
import { getCategories, getHomepageHeader } from '../utils/HelperFunctions';

const Home: FC = () => {
    const blockInfos = getCategories();
    const homepageHeader = getHomepageHeader('XX99 Mark II Headphones');

    return (
        <Layout menus={menuItems}>
            <HomePage blockInfos={blockInfos} homepageHeader={homepageHeader} />
        </Layout>
    );
};

export default Home;

import Layout from 'components/Layout';
import { ICategories, IProducts } from 'graphql/types';
import { FC } from 'react';

const cn = require('classnames');

interface HeadphonesProps {
    headphones: IProducts[];
    categories: ICategories[];
    error: string;
}

const Headphones: FC<HeadphonesProps> = ({ headphones, categories, error }) => {
    if (error) {
        return <h1>An error occured{error}</h1>;
    }
    return (
        <Layout menus={categories}>
            <div className={cn('container')}>
                {headphones.map((product, index) => (
                    <div key={index}>
                        <h1>{product.name}</h1>
                    </div>
                ))}
            </div>
        </Layout>
    );
};
export default Headphones;

import { useRouter } from 'next/router';
import { FC } from 'react';

import { ICategories, IProducts } from '../utils/types';
import ProductHeader from './HeaderFooterInfo/ProductHeader';
import PageBlock from './PageBlock/PageBlock';
import Product from './Product/Product';

export interface IProductsProps {
    products: IProducts[];
    blockInfos: ICategories[];
}

const Products: FC<IProductsProps> = ({ blockInfos, products }) => {
    const router = useRouter();

    return (
        <>
            <ProductHeader productName={router.pathname} />

            <div>
                {products.map((product, index) => {
                    return (
                        <Product
                            key={index}
                            altText={product.name}
                            slug={product.slug}
                            isNewProduct={product.newProduct}
                            desktopImage={product.categoryPreviewImage.desktop}
                            tabletImage={product.categoryPreviewImage.tablet}
                            mobileImage={product.categoryPreviewImage.mobile}
                            productName={product.name}
                            // eslint-disable-next-line prettier/prettier
                            productDescription={product.description}
                        />
                    );
                })}
            </div>

            <PageBlock blockInfos={blockInfos} />
        </>
    );
};

export default Products;

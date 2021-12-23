import { useRouter } from 'next/router';
import { FC } from 'react';

import { storeRoutePath } from '../apollo/apollo-cache';
import { ButtonColors, ICategories, IProducts } from '../utils/types';
import Button from './Button/Button';
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

            <div className={'container'} style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                {products.map((product, index) => {
                    return (
                        <Product
                            key={index}
                            altText={product.name}
                            isNewProduct={product.newProduct}
                            image={product.image.desktop}
                            productName={product.name}
                            // eslint-disable-next-line prettier/prettier
                            productDescription={product.description}
                        >
                            <Button
                                title="See Product"
                                buttonColor={ButtonColors.PrimaryColor}
                                onClick={() => {
                                    router.push(`${router.pathname}/${encodeURIComponent(product.slug)}`);
                                    storeRoutePath(product.slug);
                                }}
                            />
                        </Product>
                    );
                })}
            </div>
            <PageBlock blockInfos={blockInfos} />
        </>
    );
};

export default Products;

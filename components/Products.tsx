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

            <div>
                {products.map((product, index) => {
                    return (
                        <Product
                            key={index}
                            altText={product.name}
                            isNewProduct={product.newProduct}
                            desktopImage={product.categoryPreviewImage.desktop}
                            tabletImage={product.categoryPreviewImage.tablet}
                            mobileImage={product.categoryPreviewImage.mobile}
                            productName={product.name}
                            // eslint-disable-next-line prettier/prettier
                            productDescription={product.description}
                        >
                            <Button
                                title="See Product"
                                className="button"
                                buttonColor={ButtonColors.PrimaryColor}
                                onClick={() => {
                                    router.push(`${router.pathname}/${encodeURIComponent(product.slug)}`);
                                    storeRoutePath(product.slug);
                                }}
                                type="button"
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

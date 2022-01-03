import SingleProduct from 'components/SingleProduct/SingleProduct';
import { NextRouter, withRouter } from 'next/router';
import { FC } from 'react';

import { ButtonColors, ICategories, IFeaturedData, IProducts } from '../../utils/types';
import Button from '../Button/Button';
import PageBlock from '../PageBlock/PageBlock';
import SinglePageBlock from '../PageBlock/SinglePageBlock';
import ProductGallery from './ProductGallery';
import styles from './ProductSinglePage.module.scss';

const cn = require('classnames');

interface WithRouterProps {
    router: NextRouter;
}

interface ProductSinglePageProps extends WithRouterProps {
    blockInfos: ICategories[];
    product: IProducts;
    featuredProduct: IFeaturedData[];
}

const ProductSinglePage: FC<ProductSinglePageProps> = ({ blockInfos, featuredProduct, product, router }) => {
    return (
        <>
            <div className={cn('container', styles.container)}>
                <Button
                    buttonColor={ButtonColors.backButton}
                    title="Go Back"
                    onClick={() => router.back()}
                    type="button"
                />

                <SingleProduct product={product} />

                <div className={styles.productContent}>
                    <div className={styles.featuresContainer}>
                        <h4 className={styles.features}>Features</h4>
                        <p className={styles.featuresContent}>{product.features}</p>
                    </div>

                    <div className={styles.includesContainer}>
                        <h4 className={styles.features}>In The Box</h4>

                        <ol>
                            {product.includes.map((include, index) => (
                                <li key={index} value={include.quantity}>
                                    {include.item}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>

                <div className={styles.galleryContainer}>
                    <ProductGallery
                        divClassName={styles.galleryLeftLayout}
                        imageClassName={styles.image}
                        product={product}
                    />
                </div>
                <SinglePageBlock product={featuredProduct} />
            </div>
            <PageBlock blockInfos={blockInfos} />
        </>
    );
};
export default withRouter(ProductSinglePage);

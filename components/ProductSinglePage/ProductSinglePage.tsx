import { NextRouter, withRouter } from 'next/router';
import { FC, useContext } from 'react';

import { cartMutation } from '../../apollo';
import { AppContext } from '../../context/AppContext';
import { CartCounter } from '../../utils/CartCounter';
import { getCarItems } from '../../utils/HelperFunctions';
import { ButtonColors, ICategories, IFeaturedData, IProducts } from '../../utils/types';
import Button from '../Button/Button';
import CountButton from '../Button/CountButton';
import AddToCartButton from '../Cart/AddToCartButton';
import PageBlock from '../PageBlock/PageBlock';
import SinglePageBlock from '../PageBlock/SinglePageBlock';
import Product from '../Product/Product';
import ProductGallery from './ProductGallery';
import styles from './ProductSinglePage.module.scss';

interface WithRouterProps {
    router: NextRouter;
}

interface ProductSinglePageProps extends WithRouterProps {
    blockInfos: ICategories[];
    product: IProducts;
    featuredProduct: IFeaturedData[];
}

const ProductSinglePage: FC<ProductSinglePageProps> = ({ blockInfos, featuredProduct, product, router }) => {
    const { setCartOpen } = useContext(AppContext);
    const { count, negativeHandler, positiveHandler, resetCount } = CartCounter();

    const getItem = getCarItems(product, count);

    const handleCart = () => {
        setCartOpen(true);
        cartMutation.addCart(getItem.productName, getItem.productId, getItem.price, getItem.quantity, getItem.image);
        resetCount();
    };

    return (
        <>
            <div className={'container'}>
                <Button
                    buttonColor={ButtonColors.backButton}
                    title="Go Back"
                    onClick={() => router.back()}
                    type="button"
                />

                <div>
                    <Product
                        altText={product.name}
                        image={product.image.desktop}
                        isNewProduct={product.newProduct}
                        hasCart
                        productName={product.name}
                        productDescription={product.description}
                        // eslint-disable-next-line prettier/prettier
                        productPrice={product.price}
                    >
                        <>
                            <CountButton
                                negativeClick={negativeHandler}
                                positiveClick={positiveHandler}
                                value={count}
                            />
                            <AddToCartButton addToCartClick={handleCart} />
                        </>
                    </Product>
                </div>

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
            </div>
            <SinglePageBlock product={featuredProduct} />
            <PageBlock blockInfos={blockInfos} />
        </>
    );
};
export default withRouter(ProductSinglePage);

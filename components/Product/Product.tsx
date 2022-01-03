import { storeRoutePath } from 'apollo/apollo-cache';
import Button from 'components/Button/Button';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { ButtonColors } from 'utils/types';

import { formatMoney } from '../../utils/HelperFunctions';
import styles from './Product.module.scss';
const cn = require('classnames');

interface ProductProps {
    desktopImage: string;
    tabletImage: string;
    mobileImage: string;
    altText: string;
    slug: string;
    isNewProduct: boolean;
    productName: string;
    productDescription: string;
    productPrice?: number;
    className?: string;
}

const Product: FC<ProductProps> = ({
    desktopImage,
    mobileImage,
    tabletImage,
    altText,
    slug,
    isNewProduct,
    productName,
    productDescription,
    productPrice,
    className,
}) => {
    const router = useRouter();

    return (
        <div className={cn('container', styles.container, className)}>
            <div className={styles.desktopImage}>
                <Image src={desktopImage} width="540" height="560" alt={altText} className={styles.image} />
            </div>
            <div className={styles.tabletImage}>
                <Image src={tabletImage} width="689" height="352" alt={altText} className={styles.image} />
            </div>
            <div className={styles.mobileImage}>
                <Image src={mobileImage} width="360" height="362" alt={altText} className={styles.image} />
            </div>

            <div className={styles.infoContainer}>
                {isNewProduct && <h3 className={styles.newProduct}>New Product </h3>}
                <h4 className={styles.title}>{productName} </h4>
                <p className={styles.description}>{productDescription} </p>

                {productPrice && <p className={styles.price}>${formatMoney(productPrice)}</p>}

                <div className={styles.buttonContainer}>
                    <Button
                        title="See Product"
                        className={styles.button}
                        buttonColor={ButtonColors.PrimaryColor}
                        onClick={() => {
                            router.push(`${router.pathname}/${encodeURIComponent(slug)}`);
                            storeRoutePath(slug);
                        }}
                        type="button"
                    />
                </div>
            </div>
        </div>
    );
};
export default Product;

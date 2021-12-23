import Image from 'next/image';
import { FC, ReactNode } from 'react';

import { formatMoney } from '../../utils/HelperFunctions';

const cn = require('classnames');

import styles from './Product.module.scss';

interface ProductProps {
    image: string;
    altText: string;
    isNewProduct: boolean;
    productName: string;
    productDescription: string;
    productPrice?: number;
    className?: string;
    renderCartValue?: boolean;
    hasCart?: boolean;
    children: ReactNode;
}

const Product: FC<ProductProps> = ({
    image,
    altText,
    isNewProduct,
    productName,
    productDescription,
    productPrice,
    className,
    children,
}) => {
    return (
        <div className={cn(styles.container, className)}>
            <div className={styles.imageContainer}>
                <Image src={image} width="540" height="560" alt={altText} />
            </div>

            <div className={styles.infoContainer}>
                {isNewProduct && <h3 className={styles.newProduct}>New Product </h3>}
                <h4 className={styles.title}>{productName} </h4>
                <p className={styles.description}>{productDescription} </p>

                {productPrice && <p className={styles.price}>${formatMoney(productPrice)}</p>}

                <div className={styles.buttonContainer}>{children}</div>
            </div>
        </div>
    );
};
export default Product;

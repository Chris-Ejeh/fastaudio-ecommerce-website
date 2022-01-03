import Image from 'next/image';
import { FC } from 'react';

import { IProducts } from '../../utils/types';
import styles from './ProductSinglePage.module.scss';

interface ProductGalleryProps {
    divClassName: string;
    imageClassName: string;
    product: IProducts;
}

const ProductGallery: FC<ProductGalleryProps> = ({ divClassName, imageClassName, product }) => {
    return (
        <>
            <div className={divClassName}>
                <div className={styles.firstGalleryImage}>
                    <Image
                        src={product.gallery.first.desktop}
                        width="445"
                        height="280"
                        alt={product.name}
                        className={imageClassName}
                        quality={100}
                    />
                </div>

                <div className={styles.secondGalleryImage}>
                    <Image
                        src={product.gallery.second.desktop}
                        width="445"
                        height="280"
                        alt={product.name}
                        className={imageClassName}
                        quality={100}
                    />
                </div>
            </div>
            <div className={styles.thirdGalleryImage}>
                <Image
                    src={product.gallery.third.desktop}
                    width="685"
                    height="592"
                    alt={product.name}
                    className={imageClassName}
                    quality={100}
                />
            </div>
        </>
    );
};
export default ProductGallery;

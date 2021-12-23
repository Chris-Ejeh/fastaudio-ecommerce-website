import Image from 'next/image';
import { FC } from 'react';

import { IProducts } from '../../utils/types';

interface ProductGalleryProps {
    divClassName: string;
    imageClassName: string;
    product: IProducts;
}

const ProductGallery: FC<ProductGalleryProps> = ({ divClassName, imageClassName, product }) => {
    return (
        <>
            <div className={divClassName}>
                <Image
                    src={product.gallery.first.desktop}
                    width="445"
                    height="280"
                    alt={product.name}
                    className={imageClassName}
                    quality={100}
                />
                <Image
                    src={product.gallery.second.desktop}
                    width="445"
                    height="280"
                    alt={product.name}
                    className={imageClassName}
                    quality={100}
                />
            </div>
            <Image
                src={product.gallery.third.desktop}
                width="685"
                height="592"
                alt={product.name}
                className={imageClassName}
                quality={100}
            />
        </>
    );
};
export default ProductGallery;

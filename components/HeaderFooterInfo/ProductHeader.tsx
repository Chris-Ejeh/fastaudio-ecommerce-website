import { FC } from 'react';

import styles from './HeaderInfo.module.scss';

const cn = require('classnames');

interface ProductHeaderProps {
    productName: string;
}

const ProductHeader: FC<ProductHeaderProps> = ({ productName }) => {
    return (
        <div className={styles.productContainer}>
            <h2 className={cn('container', styles.pathName)}>{productName.slice(1)}</h2>
        </div>
    );
};
export default ProductHeader;

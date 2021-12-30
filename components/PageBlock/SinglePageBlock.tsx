import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { ButtonColors, IFeaturedData, PathnameType } from '../../utils/types';
import Button from '../Button/Button';
import styles from './PageBlock.module.scss';
const cn = require('classnames');

interface SinglePageProps {
    product: IFeaturedData[];
}

const SinglePageBlock: FC<SinglePageProps> = ({ product }) => {
    const router = useRouter();

    return (
        <div className={cn('container', styles.singlePageBlockContainer)}>
            <h3 className={styles.singlePageHeader}>you may also like</h3>
            <div className={styles.singleContentContainer}>
                {product.map((item, index) => (
                    <div key={index} className={styles.singlePageContent}>
                        <Image
                            src={item.featureImage.desktop}
                            width="350"
                            height="318"
                            alt={item.featureName}
                            quality={100}
                            objectFit="cover"
                            className={styles.image}
                        />
                        <h4 className={styles.singlePageTitle}>{item.featureName}</h4>
                        <Button
                            title="See Product"
                            buttonColor={ButtonColors.PrimaryColor}
                            onClick={() => router.push(`${PathnameType.Headphones}/${encodeURIComponent(item.id)}`)}
                            type="button"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default SinglePageBlock;

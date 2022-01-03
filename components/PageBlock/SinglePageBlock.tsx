import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { ButtonColors, IFeaturedData, PathnameType } from '../../utils/types';
import Button from '../Button/Button';
import styles from './PageBlock.module.scss';

interface SinglePageProps {
    product: IFeaturedData[];
}

const SinglePageBlock: FC<SinglePageProps> = ({ product }) => {
    const router = useRouter();

    return (
        <div className={styles.singlePageBlockContainer}>
            <h3 className={styles.singlePageHeader}>you may also like</h3>
            <div className={styles.singleContentContainer}>
                {product.map((item, index) => (
                    <div key={index} className={styles.singlePageContent}>
                        <div className={styles.desktopImage}>
                            <Image
                                src={item.featureImage.desktop}
                                width="540"
                                height="560"
                                alt={item.featureName}
                                quality={100}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.tabletImage}>
                            <Image
                                src={item.featureImage.mobile}
                                width="230"
                                height="300"
                                alt={item.featureName}
                                quality={100}
                                objectFit="contain"
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.mobileImage}>
                            <Image
                                src={item.featureImage.tablet}
                                width="427"
                                height="220"
                                alt={item.featureName}
                                quality={100}
                                objectFit={'contain'}
                                className={styles.image}
                            />
                        </div>

                        <h4 className={styles.singlePageTitle}>{item.featureName}</h4>
                        <Button
                            title="See Product"
                            className={styles.button}
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

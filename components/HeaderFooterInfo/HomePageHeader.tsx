import { useRouter } from 'next/router';
import { FC } from 'react';

import { ButtonColors, IHomepageHeaderProps } from '../../utils/types';
import Button from '../Button/Button';
import styles from './HeaderInfo.module.scss';
const cn = require('classnames');
const desktopImage = '/images/home/desktop/image-hero.jpg';

export interface HomePageHeaderProps {
    product: IHomepageHeaderProps;
}

const HomePageHeader: FC<HomePageHeaderProps> = ({ product }) => {
    const router = useRouter();
    return (
        <>
            {product !== undefined && (
                <div className={cn(styles.headerContainer, 'header')}>
                    <style jsx={true}>{`
                        .header {
                            background-image: url(${desktopImage});
                        }
                        @media (min-width: 768px) {
                            .header {
                                background-image: url(${desktopImage});
                            }
                        }
                        @media (min-width: 1000px) {
                            .header {
                                background-image: url(${desktopImage});
                            }
                        }
                    `}</style>
                    <div className={cn('container', styles.headerInfo)}>
                        <div className={styles.info}>
                            {product?.newProduct && <p className={styles.newProduct}>New Product</p>}
                            {product?.name && <p className={styles.headerTitle}>{product?.name}</p>}
                            {product?.description && <p className={styles.headerDescription}>{product?.description}</p>}
                            {product?.name && (
                                <Button
                                    title="See Product"
                                    buttonColor={ButtonColors.PrimaryColor}
                                    onClick={() => router.push(`headphones/${encodeURIComponent(product.id)}`)}
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default HomePageHeader;

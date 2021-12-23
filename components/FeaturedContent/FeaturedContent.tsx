import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { getProducts } from '../../utils/HelperFunctions';
import { ButtonColors, ProductType } from '../../utils/types';
import Button from '../Button/Button';
const cn = require('classnames');

import styles from './FeaturedContent.module.scss';

interface IHomepage {
    name: string;
    description: string;
    desktopImage: string;
    pathname: string;
}

export const FirstContent: FC<IHomepage> = ({ name, description, desktopImage }) => {
    const products = getProducts(ProductType.Speakers);

    return (
        <div className={styles.container}>
            {products.map((product, index) => {
                if (product.slug === 'zx9-speaker') {
                    return (
                        <div className={styles.firstContainer} key={index}>
                            <div className={styles.firstImage}>
                                <Image src={desktopImage} width="410" height="473" alt={name} />
                            </div>
                            <div className={styles.firstInfo}>
                                <h4 className={styles.name}>{name}</h4>
                                <p className={styles.description}>{description}</p>
                                <Link
                                    href={{
                                        pathname: `/speakers/[slug]`,
                                        query: { slug: product.slug },
                                    }}
                                    passHref
                                >
                                    <a>
                                        <p>See Product</p>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export const SecondContent: FC<IHomepage> = ({ name, description, desktopImage }) => {
    const router = useRouter();

    return (
        <div className={cn(styles.secondContainer, 'backgroundImage')}>
            <style jsx={true}>{`
                .backgroundImage {
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

            <div className={styles.infoContainer}>
                <h4 className={styles.name}>{name}</h4>
                {description && <p className={styles.description}>{description}</p>}
                <Button
                    title="See product"
                    buttonColor={ButtonColors.PrimaryColor}
                    className={styles.button}
                    onClick={() => router.push(`/speakers/zx9-speaker`)}
                />
            </div>
        </div>
    );
};

export const ThirdContent: FC<IHomepage> = ({ name, description, desktopImage }) => {
    const router = useRouter();

    return (
        <div className={styles.thirdContainer}>
            <Image src={desktopImage} width="540" height="320" alt={name} className={styles.image} />

            <div className={styles.infoContainer}>
                <div>
                    <h4 className={styles.name}>{name}</h4>
                    {description && <p className={styles.description}>{description}</p>}
                    <Button
                        title="See product"
                        buttonColor={ButtonColors.PrimaryColor}
                        className={styles.button}
                        onClick={() => router.replace(`/earphones/yx1-earphones`)}
                    />
                </div>
            </div>
        </div>
    );
};

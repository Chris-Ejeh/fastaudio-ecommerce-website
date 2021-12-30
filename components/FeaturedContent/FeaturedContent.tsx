import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { storeRoutePath } from '../../apollo/apollo-cache';
import { ButtonColors, PathnameType } from '../../utils/types';
import Button from '../Button/Button';
const cn = require('classnames');

import styles from './FeaturedContent.module.scss';

interface IHomepage {
    name: string;
    description: string;
    desktopImage: string;
    pathname: string;
}

export const FirstContent: FC<IHomepage> = ({ name, description, desktopImage, pathname }) => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.firstContainer}>
                <div className={styles.firstImage}>
                    <Image src={desktopImage} width="410" height="473" alt={name} />
                </div>
                <div className={styles.firstInfo}>
                    <h4 className={styles.name}>{name}</h4>
                    <p className={styles.description}>{description}</p>
                    <Button
                        title="See product"
                        buttonColor={ButtonColors.PrimaryColor}
                        className={styles.button}
                        onClick={() => {
                            router.push(`${PathnameType.Speaker}/${pathname}/`);
                            storeRoutePath(pathname);
                        }}
                        type="button"
                    />
                </div>
            </div>
        </div>
    );
};

export const SecondContent: FC<IHomepage> = ({ name, description, desktopImage, pathname }) => {
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
                    onClick={() => {
                        router.push(`${PathnameType.Speaker}/${pathname}/`);
                        storeRoutePath(pathname);
                    }}
                    type="button"
                />
            </div>
        </div>
    );
};

export const ThirdContent: FC<IHomepage> = ({ name, description, desktopImage, pathname }) => {
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
                        onClick={() => {
                            router.push(`${PathnameType.Speaker}/${pathname}/`);
                            storeRoutePath(pathname);
                        }}
                        type="button"
                    />
                </div>
            </div>
        </div>
    );
};

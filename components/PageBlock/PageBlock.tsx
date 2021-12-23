import Image from 'next/image';
import { FC, ReactNode } from 'react';

import { ICategories } from '../../utils/types';
import Category from '../Category/Category';
import styles from './PageBlock.module.scss';
const cn = require('classnames');

interface PageBlockProps {
    blockInfos: ICategories[];
    children?: ReactNode;
}

const PageBlock: FC<PageBlockProps> = ({ blockInfos, children }) => {
    return (
        <div className={cn('container', styles.pageBlockContainer)}>
            <div className={styles.categoryContainer}>
                {blockInfos.map((blockInfo, index) => (
                    <Category key={index} category={blockInfo} />
                ))}
            </div>
            <div>{children}</div>
            <div className={styles.locationContainer}>
                <div className={styles.infoContainer}>
                    <h4 className={styles.pageTitle}>
                        Bringing you the <span>best</span> audio gear
                    </h4>
                    <p className={styles.description}>
                        Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                        earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
                        rooms available for you to browse and experience a wide range of our products. Stop by our store
                        to meet some of the fantastic people who make Audiophile the best place to buy your portable
                        audio equipment.
                    </p>
                </div>

                <Image
                    src="/images/shared/desktop/image-best-gear.jpg"
                    width="540"
                    height="588"
                    alt="Bringing you the best audio gear"
                    className={styles.image}
                />
            </div>
        </div>
    );
};
export default PageBlock;

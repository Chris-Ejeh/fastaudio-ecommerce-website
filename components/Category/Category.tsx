import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineRight } from 'react-icons/ai';

import { ICategories } from '../../utils/types';
import styles from './Category.module.scss';

interface ICategory {
    category: ICategories;
}

const Category: FC<ICategory> = ({ category }) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                {category.categoryImage && (
                    <Image src={category.categoryImage} width="230" height="200" alt={category.category} />
                )}
            </div>
            <div className={styles.textContainer}>
                <h4 className={styles.name}>{category.category}</h4>
                <Link href={category.path} passHref>
                    <a className={styles.link}>
                        <p className={styles.linkText}>Shop</p>
                        <AiOutlineRight className={styles.icon} />
                    </a>
                </Link>
            </div>
        </div>
    );
};
export default Category;

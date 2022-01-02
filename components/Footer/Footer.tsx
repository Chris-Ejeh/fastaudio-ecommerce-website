import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FC } from 'react';

import { MenuItems } from '../../utils/types';
import styles from './Footer.module.scss';
const cn = require('classnames');

interface FooterProps {
    navItems: MenuItems[];
}

const Footer: FC<FooterProps> = ({ navItems }) => {
    return (
        <nav className={cn(styles.footer)}>
            <div className={cn('container', styles.footerContainer)}>
                <div className={styles.footerNav}>
                    <div className={styles.logo}>
                        <Image src="/svgs/logo.svg" width={143} height={25} />
                    </div>

                    <ul className={cn('unstyled-list', styles.navItems)}>
                        {navItems.map((navItem, index) => (
                            <li key={index} className={styles.navItem}>
                                <Link href={navItem.path} passHref>
                                    <a className={styles.links} role="link">
                                        {navItem.title}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.footerInfo}>
                    <div className={styles.footerInfoContainer}>
                        <p className={styles.footerDescription}>
                            {` Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
                        and sound specialists who are devoted to helping you get the most out of personal audio. Come
                        and visit our demo facility - we’re open 7 days a week.`}
                        </p>
                        <p className={styles.copyDescription}>Copyright 2021. All Rights Reserved</p>
                    </div>

                    <div className={styles.socials}>
                        <div className={styles.img}>
                            <Image src="/svgs/icon-facebook.svg" width={24} height={24} className={styles.img} />
                        </div>
                        <div className={styles.img}>
                            <Image src="/svgs/icon-twitter.svg" width={24} height={24} className={styles.img} />
                        </div>
                        <div className={styles.img}>
                            <Image src="/svgs/icon-instagram.svg" width={24} height={24} className={styles.img} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Footer;

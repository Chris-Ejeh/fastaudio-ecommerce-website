import DrawerButton from 'components/DrawerButton/DrawerButton';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useContext } from 'react';

import { AppContext } from '../../context/AppContext';
import { MenuItems } from '../../utils/types';
import styles from './Navbar.module.scss';

const cn = require('classnames');

interface navProps {
    navItems: MenuItems[];
    withCart: boolean;
    isHomePage: boolean;
}

const Navbar: FC<navProps> = ({ navItems, withCart, isHomePage }) => {
    const { setCartOpen } = useContext(AppContext);

    return (
        <nav
            role="navigation"
            className={cn('container', styles.nav, {
                [styles.active]: isHomePage,
                // eslint-disable-next-line prettier/prettier
            })}
        >
            <div className={styles.drawer}>
                <DrawerButton />
            </div>

            <div className={styles.logo}>
                <Link href="/" passHref>
                    <a aria-label="logo">
                        <Image src="/svgs/logo.svg" alt="logo" width={143} height={25} />
                    </a>
                </Link>
            </div>

            <ul className={cn('unstyled-list', styles.navItems)}>
                {navItems.map((navItem, index) => (
                    <li key={index} className={styles.navItem}>
                        <Link href={navItem.path} shallow={true} passHref>
                            <a className={styles.links} aria-label={navItem?.title}>
                                {navItem?.title}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>

            {withCart && (
                <button
                    className={styles.cartButton}
                    onClick={() => {
                        setCartOpen(true);
                    }}
                    type="button"
                    aria-pressed="false"
                    // eslint-disable-next-line prettier/prettier
                    tabIndex={0}
                >
                    <Image src="/svgs/icon-cart.svg" alt="cart-logo" width={23} height={20} />
                </button>
            )}
        </nav>
    );
};

export default Navbar;

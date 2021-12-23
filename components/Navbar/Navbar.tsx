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
}

const Navbar: FC<navProps> = ({ navItems, withCart }) => {
    const { setCartOpen } = useContext(AppContext);

    return (
        <nav
            className={cn('container', styles.nav, {
                [styles.active]: withCart,
                // eslint-disable-next-line prettier/prettier
            })}
        >
            <div className={styles.logo}>
                <Link href="/" passHref>
                    <a role="link">
                        <Image src="/svgs/logo.svg" width={143} height={25} />
                    </a>
                </Link>
            </div>

            <ul className={cn('unstyled-list', styles.navItems)}>
                {navItems.map((navItem, index) => (
                    <li key={index} className={styles.navItem}>
                        <Link href={navItem.path} shallow={true} passHref>
                            <a className={styles.links} role="link">
                                {navItem.title}
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
                    aria-pressed="false"
                    // eslint-disable-next-line prettier/prettier
                    tabIndex={0}
                >
                    <Image src="/svgs/icon-cart.svg" width={23} height={20} />
                </button>
            )}
        </nav>
    );
};

export default Navbar;

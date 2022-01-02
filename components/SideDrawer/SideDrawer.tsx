import Button from 'components/Button/Button';
import { AppContext } from 'context/AppContext';
import Link from 'next/link';
import { FC, useContext } from 'react';
import { ButtonColors, MenuItems } from 'utils/types';

import styles from './SideDrawer.module.scss';

const cn = require('classnames');

interface SideDrawerProps {
    navItems: MenuItems[];
    withCart: boolean;
}

const SideDrawer: FC<SideDrawerProps> = ({ navItems }) => {
    const { sideDrawerOpen, setSideDrawerOpen } = useContext(AppContext);

    return !sideDrawerOpen ? null : (
        <div className={styles.wrapper}>
            <div className={cn('container', styles.container)}>
                <Button
                    buttonColor={ButtonColors.PrimaryColor}
                    title="Close"
                    role="button"
                    onClick={() => {
                        setSideDrawerOpen(false);
                    }}
                />
                <nav className={styles.nav}>
                    <ul className={cn('unstyled-list', styles.navItems)}>
                        {navItems.map((navItem, index) => (
                            <li key={index} className={styles.navItem}>
                                <Link href={navItem.path} shallow={true} passHref>
                                    <a>
                                        <Button
                                            buttonColor={ButtonColors.countButton}
                                            className={styles.links}
                                            title={navItem.title}
                                            role="link"
                                            onClick={() => {
                                                setSideDrawerOpen(false);
                                            }}
                                        />
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default SideDrawer;

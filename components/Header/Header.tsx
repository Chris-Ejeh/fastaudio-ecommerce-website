import { FC } from 'react';

import { MenuItems } from '../../utils/types';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.scss';

interface headerProps {
    navItems: MenuItems[];
}

const Header: FC<headerProps> = ({ navItems }) => {
    return (
        <header className={styles.header}>
            <Navbar navItems={navItems} withCart={true} />
        </header>
    );
};
export default Header;

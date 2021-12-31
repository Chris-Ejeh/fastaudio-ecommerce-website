import { FC } from 'react';

import { MenuItems } from '../../utils/types';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.scss';

const cn = require('classnames');
interface headerProps {
    navItems: MenuItems[];
}

const Header: FC<headerProps> = ({ navItems }) => {
    return (
        <header className={cn(styles.header)}>
            <Navbar navItems={navItems} withCart={true} />
        </header>
    );
};
export default Header;

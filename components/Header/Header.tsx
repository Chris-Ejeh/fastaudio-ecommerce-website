import { useRouter } from 'next/router';
import { FC } from 'react';

import { MenuItems } from '../../utils/types';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.scss';

const cn = require('classnames');
interface headerProps {
    navItems: MenuItems[];
}

const Header: FC<headerProps> = ({ navItems }) => {
    const router = useRouter();
    const isHomePage = router.pathname === '/';

    return (
        <header role="banner" className={cn({ [styles.homePage]: isHomePage }, styles.header)}>
            <Navbar navItems={navItems} withCart={true} isHomePage={isHomePage} />
        </header>
    );
};
export default Header;

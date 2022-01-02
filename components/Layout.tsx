import React, { FC, ReactNode } from 'react';

import { MenuItems } from '../utils/types';
import Cart from './Cart/Cart';
import ComplementCard from './ComplementCard/ComplementCard';
import Footer from './Footer/Footer';
import Head from './Head';
import Header from './Header/Header';
import SideDrawer from './SideDrawer/SideDrawer';

interface LayoutProps {
    children: ReactNode;
    menus: MenuItems[];
}

const Layout: FC<LayoutProps> = ({ children, menus }) => {
    return (
        <>
            <Head pageTitle="AudioPhile" />
            <Header navItems={menus} />
            <Cart />
            <ComplementCard />
            <SideDrawer navItems={menus} withCart={true} />
            <div className={'children-padding'}>{children}</div>
            <Footer navItems={menus} />
        </>
    );
};

export default Layout;

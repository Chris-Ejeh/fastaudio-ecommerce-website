import { AppContext } from 'context/AppContext';
import { FC, useContext } from 'react';

import styles from './DrawerButton.module.scss';

const DrawerButton: FC = () => {
    const { setSideDrawerOpen, sideDrawerOpen } = useContext(AppContext);

    return (
        <>
            {sideDrawerOpen ? null : (
                <button aria-label="Open Menu" className={styles.toggle} onClick={() => setSideDrawerOpen(true)}>
                    <div className={styles.line} />
                    <div className={styles.line} />
                    <div className={styles.line} />
                </button>
            )}
        </>
    );
};
export default DrawerButton;

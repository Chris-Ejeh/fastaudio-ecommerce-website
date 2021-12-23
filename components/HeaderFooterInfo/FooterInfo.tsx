import { FC } from 'react';

import styles from './HeaderInfo.module.scss';
const cn = require('classnames');

interface FooterInfoProps {
    footerDescription: string;
    copyRightTitle: string;
    className?: string;
}

const FooterInfo: FC<FooterInfoProps> = ({ footerDescription, copyRightTitle, className }) => {
    return (
        <div className={cn(styles.footerInfo, className)}>
            <p className={styles.footerDescription}>{footerDescription}</p>
            <p className={styles.copyDescription}>{copyRightTitle}</p>
        </div>
    );
};
export default FooterInfo;

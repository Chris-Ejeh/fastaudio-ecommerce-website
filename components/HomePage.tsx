import { FC } from 'react';

import { ICategories, IHomepageHeaderProps } from '../utils/types';
import { FirstContent, SecondContent, ThirdContent } from './FeaturedContent/FeaturedContent';
import HomePageHeader from './HeaderFooterInfo/HomePageHeader';
import PageBlock from './PageBlock/PageBlock';

export interface HomePageProps {
    blockInfos: ICategories[];
    homepageHeader: IHomepageHeaderProps[];
}

const HomePage: FC<HomePageProps> = ({ blockInfos, homepageHeader }) => {
    return (
        <>
            {homepageHeader.map((product, index) => (
                <HomePageHeader key={index} product={product} />
            ))}
            <PageBlock blockInfos={blockInfos}>
                <FirstContent
                    name="ZX9 SPEAKER"
                    description="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
                    desktopImage="/images/home/desktop/image-speaker-zx9.png"
                    pathname="zx9-speaker"
                />

                <SecondContent
                    name="ZX7 SPEAKER"
                    description=""
                    desktopImage="/images/home/desktop/image-speaker-zx7.jpg"
                    tabletImage="/images/home/tablet/image-speaker-zx7.jpg"
                    mobileImage="/images/home/mobile/image-speaker-zx7.jpg"
                    pathname="zx7-speaker"
                />

                <ThirdContent
                    name="YX1 EARPHONES"
                    description=""
                    desktopImage="/images/home/desktop/image-earphones-yx1.jpg"
                    pathname="yx1-earphones"
                />
            </PageBlock>
        </>
    );
};
export default HomePage;

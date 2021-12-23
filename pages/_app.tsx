import '../styles/global.scss';

import type { AppProps } from 'next/app';
import Router from 'next/router';
import { FC, useEffect } from 'react';

import AppProvider from '../context/AppContext';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleRouteChange = (url: string, { shallow }: any) => {
            // eslint-disable-next-line no-console
            console.log(`App is changing to ${url} ${shallow ? 'with' : 'without'} shallow routing`);
        };
        Router.events.on('routeChangeStart', handleRouteChange);
        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);
    return (
        <AppProvider>
            <Component {...pageProps} />
        </AppProvider>
    );
};

export default MyApp;

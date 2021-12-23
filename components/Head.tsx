import NextHead from 'next/head';
import { FC } from 'react';

interface HeadProps {
    pageTitle: string;
}

const Head: FC<HeadProps> = ({ pageTitle }) => {
    return (
        <NextHead>
            <title>{pageTitle}</title>
            <link rel="icon" href="/favicon/favicon.png" sizes="32x32" />
            <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..700&display=swap" rel="stylesheet" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </NextHead>
    );
};
export default Head;

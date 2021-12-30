export interface IStaticProps<T> {
    props: T;
    revalidate: number;
}

export interface IQueryProps {
    error: string | null;
    loading: boolean;
    found: boolean;
}

export enum PathnameType {
    Home = '/',
    Headphones = '/headphones',
    Speaker = '/speakers',
    Earphones = '/earphones',
    Checkout = '/checkout',
}

export enum ProductType {
    Headphones = 'headphones',
    Speakers = 'speakers',
    Earphones = 'earphones',
}

export enum ButtonColors {
    PrimaryColor = 'primary',
    backButton = 'back',
    countButton = 'count',
    cartButton = 'cart',
}

export enum ButtonType {
    CategoryButton = 'category',
    SingleProductButton = 'product',
}

export enum TextWidthType {
    FullWidth = 'fullwidth',
    HalfWidth = 'halfwidth',
    radioWidth = 'radiowidth',
}

export enum CartLayoutType {
    Cart = 'cart',
    Checkout = 'checkout',
}

export interface IProducts {
    id: number;
    slug: string;
    name: string;
    image: IMAGE;
    category: string;
    categoryImage: string;
    categoryPreviewImage: IMAGE;
    displayCategory?: boolean;
    newProduct: boolean;
    price: number;
    description: string;
    features: string;
    includes: Includes[];
    gallery: Gallery;
    others: Others[];
    // cartItem: {
    //     quantity: string;
    // };
    // status: string;
    // headerDescription: string;
    // headerImage: IImages;
    // featuredImage: IImages;
    // gallery: IImages[];
    // featuredDescription: string;
    // isSinglePageProduct: boolean;
    // includes: IIncludes[];
    // cartImage: IImages;
}

export interface IMAGE {
    mobile: string;
    tablet: string;
    desktop: string;
}

export interface Includes {
    quantity: number;
    item: string;
}

export interface Gallery {
    first: IMAGE;
    second: IMAGE;
    third: IMAGE;
}

export interface Others {
    slug: string;
    name: string;
    image: IMAGE;
}

export interface MenuItems {
    title: string;
    path: string;
}

export interface ICategories {
    id: number;
    path: string;
    category: string;
    categoryImage: string;
}

export interface IFeaturedData {
    id: number;
    featureName: string;
    featureImage: IMAGE;
    featureSlug: string;
}

export interface ProductPathProps {
    pathName: string;
    product: IProducts[];
}

export interface IHomepageHeaderProps {
    id: number;
    name: string;
    description: string;
    newProduct: boolean;
}

export interface ICartItem {
    id: number;
    quantity: string;
    product: IProducts;
}

export interface apolloCartItem {
    id: number;
    productId: number;
    productName: string;
    price: number;
    quantity: number;
    image: string;
}

export interface FormDataProps {
    name: string;
    email: string;
    tel: string;
    address: string;
    zip: string;
    city: string;
    country: string;
    payment: string;
    moneyNumber: string;
    pin: string;
}
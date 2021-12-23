import { useReactiveVar } from '@apollo/client';

import { storeRoutePath } from '../apollo/apollo-cache';
import { CartItems } from '../apollo/cart/createCartItem';
import { products } from './../seed-data';
import { IProducts, ProductType } from './types';

export const getProducts = (productCategory: ProductType) => {
    return products.filter((items) => {
        if (items.category === productCategory) {
            return items;
        }
    });
};

export const getProduct = () => {
    const pathname = useReactiveVar(storeRoutePath);
    return products.filter((product) => {
        if (product.slug === pathname) {
            return product;
        }
    });
};

export const getCategories = () => {
    return products
        .filter((product) => {
            if (product.displayCategory) {
                return {
                    product,
                };
            }
        })
        .map((cat) => {
            return {
                id: cat.id,
                path: `/${cat.category}`,
                category: cat.category,
                categoryImage: cat.categoryImage,
            };
        });
};

export const getFeaturedProduct = () => {
    return products
        .filter((product) => {
            if (product.featureProduct) {
                return product;
            }
        })
        .map((category) => {
            return {
                id: category.id,
                featureName: category.featureName,
                featureImage: category.categoryPreviewImage,
                featureSlug: category.slug,
            };
        })
        .sort((a, b) => b.id - a.id);
};

export const getHomepageHeader = (productName: string) => {
    const homepageInfo = products.filter((homepage) => {
        if (homepage.name === productName) {
            return homepage;
        }
    });
    return homepageInfo.map((header) => {
        return {
            id: header.id,
            name: header.name,
            description:
                'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
            newProduct: header.newProduct,
        };
    });
};

export const formatMoney = (amount = 0): string => {
    const options = {
        currency: 'CAN',
        minimumFractionDigits: 0,
    };

    const formatter = Intl.NumberFormat('en-CA', options);

    return formatter.format(amount);
};

export const calcTotalPrice = (cart: CartItems): number => {
    return cart.reduce((tally, cartItem) => {
        if (!cartItem) return tally; // products can be deleted, but they could still be in your cart
        return tally + cartItem.quantity * cartItem.price;
    }, 0);
};

export const getCarItems = (
    products: IProducts,
    quantity: number
): { productId: number; productName: string; price: number; quantity: number; image: string } => {
    return {
        productId: products?.id,
        productName: products?.name,
        price: products?.price,
        quantity: quantity,
        image: products?.image?.desktop,
    };
};

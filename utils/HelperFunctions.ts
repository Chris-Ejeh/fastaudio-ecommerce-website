import { CartItems } from '../apollo/cart/createCartItem';
import { products } from './../seed-data';
import { IProducts, ProductNameType, ProductType } from './types';

export const getProducts = (productCategory: ProductType | string) => {
    return products.filter((items) => {
        if (items.category === productCategory) {
            return items;
        }
    });
};

export const getAllProducts = () => {
    return products;
};

export const getProduct = (pathname?: string | string[]) => {
    // return products.filter((product) => {
    //     if (product.slug === pathname) {
    //         return product;
    //     }
    // });

    let items = {};

    products.forEach((product) => {
        if (product?.slug === pathname) {
            items = product;
        }
    });

    return items;
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
            slug: header.slug,
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

export const calcTaxes = (total: number, shipping: number) => {
    return (total + shipping) * 0.15;
};

export const calcGrandTotal = (total: number, shipping: number) => {
    return total + shipping;
};

export const changeName = (items: string) => {
    switch (items) {
        case ProductNameType.XX59_HEADPHONES:
            if (items === ProductNameType.XX59_HEADPHONES) {
                return 'XX59';
            }
            break;
        case ProductNameType.XX99_MARK_II_HEADPHONES:
            if (items === ProductNameType.XX99_MARK_II_HEADPHONES) {
                return 'XX99 MK II';
            }
            break;
        case ProductNameType.XX99_MARK_I_HEADPHONES:
            if (items === ProductNameType.XX99_MARK_I_HEADPHONES) {
                return 'XX99 MK I';
            }
            break;
        case ProductNameType.YX1_WIRELESS_EARPHONES:
            if (items === ProductNameType.YX1_WIRELESS_EARPHONES) {
                return 'YX1';
            }
            break;
        case ProductNameType.ZX7_SPEAKER:
            if (items === ProductNameType.ZX7_SPEAKER) {
                return 'ZX7';
            }
            break;
        case ProductNameType.ZX9_SPEAKER:
            if (items === ProductNameType.ZX9_SPEAKER) {
                return 'ZX9';
            }
            break;
        default:
            break;
    }
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

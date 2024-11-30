import { type SeoConfig } from '@shopify/hydrogen';
import type { ShopFragment } from 'storefrontapi.generated';

function truncate(str: string, length = 155): string {
    if (!str) return '';
    return str.length <= length ? str : `${str.slice(0, length)}...`;
}

export function root({
    shop,
    url,
}: {
    shop: ShopFragment;
    url: Request['url'];
}): SeoConfig {
    return {
        title: shop?.name,
        titleTemplate: '%s | Uncomfort Premium Supplements',
        description: truncate(shop?.description ?? ''),
        handle: '@uncomfort',
        url,
        robots: {
            noIndex: false,
            noFollow: false,
        },
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: shop.name,
            logo: shop.brand?.logo?.image?.url,
            sameAs: [
                'https://twitter.com/uncomfort',
                'https://facebook.com/uncomfort',
                'https://instagram.com/uncomfort',
                'https://youtube.com/uncomfort',
                'https://tiktok.com/@uncomfort',
            ],
            url,
            potentialAction: {
                '@type': 'SearchAction',
                target: `${url}search?q={search_term}`,
                query: "required name='search_term'",
            },
        },
    };
}

export function home({ url }: { url: Request['url'] }): SeoConfig {
    return {
        title: 'Premium Supplements & Wellness Products',
        titleTemplate: '%s | Uncomfort',
        description: 'Discover premium supplements and wellness products at Uncomfort. Clean ingredients, scientifically backed formulas for optimal health and performance.',
        url,
        robots: {
            noIndex: false,
            noFollow: false,
        },
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Home page',
            description: 'Premium supplements and wellness products with clean ingredients',
            mainEntity: {
                '@type': 'Store',
                name: 'Uncomfort',
                description: 'Premium supplements and wellness products store',
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Supplements and Wellness Products'
                }
            }
        },
    };
}



export const seoPayload = {
    home,
    root,
};
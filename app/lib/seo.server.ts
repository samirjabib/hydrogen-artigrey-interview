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

export function getMetaTags(seo: SeoConfig) {
    return [
        { title: seo.title },
        { name: 'description', content: seo.description },
        { name: 'keywords', content: 'supplements, wellness, clean supplements, health products, performance nutrition' },
        { property: 'og:title', content: seo.title },
        { property: 'og:description', content: seo.description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: seo.url },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: seo.handle },
        { name: 'twitter:title', content: seo.title },
        { name: 'twitter:description', content: seo.description },
        ...(seo.robots?.noIndex ? [{ name: 'robots', content: 'noindex' }] : []),
        ...(seo.robots?.noFollow ? [{ name: 'robots', content: 'nofollow' }] : []),
        {
            property: 'og:image',
            content: 'https://cdn.shopify.com/s/files/1/0917/5161/2725/files/og-image.jpg',
        },
        {
            name: 'twitter:image',
            content: 'https://cdn.shopify.com/s/files/1/0917/5161/2725/files/twitter-image.jpg',
        },
    ];
}
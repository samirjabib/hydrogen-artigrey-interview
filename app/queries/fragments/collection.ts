import {PRODUCT_VARIANT_FRAGMENT, SELLING_PLAN_GROUP_FRAGMENT} from './product';

export const COLLECTION_PRODUCT_FRAGMENT = `#graphql
fragment CollectionProduct on Product {
    id
    title
    handle
    description
    tags
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
    variants(first: 10) {
      nodes {
        ...ProductVariant
      }
    }
    sellingPlanGroups(first: 10) {
      nodes {
        ...SellingPlanGroup
      }
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
  ${SELLING_PLAN_GROUP_FRAGMENT}
` as const;

export const COLLECTION_FRAGMENT = `#graphql
  fragment Collection on Collection {
    id
    title
    descriptionHtml
    handle
    image {
      id
      url
      altText
      width
      height
    }
    products(first: 10) {
      edges {
        node {
          ...CollectionProduct
        }
      }
    }
  }
  ${COLLECTION_PRODUCT_FRAGMENT}
` as const;

export const COLLECTION_BY_HANDLE_QUERY = `#graphql
  query CollectionByHandle(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    collectionByHandle(handle: $handle) {
      ...Collection
    }
  }
  ${COLLECTION_FRAGMENT}
` as const;

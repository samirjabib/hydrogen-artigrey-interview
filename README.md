# Project: Home, Quick View, Cart

This project is an **online store** built using **Shopify Hydrogen** and **Remix**, optimized for **SSR (Server-Side Rendering)** and **optimistic UI updates**. Dynamic components like **Quick View**, **Cart**, and **Bundles** are loaded efficiently using **Remix fetchers**. All components are connected to **Shopify** and loaded from the **CDN**, ensuring superior performance. Additionally, the system includes **product subscriptions** and **quantity-based discounts**, providing a seamless shopping experience.

## 🛠 Technologies (Libraries and Tools)

- **Shopify Hydrogen**: Headless framework for building custom Shopify storefronts.
- **Remix**: Full-stack framework focused on performance and UX, enabling SSR and data fetching optimizations.
- **Lucide React**: Lightweight and optimized icon set with tree shaking for performance.
- **Shadcn UI**: Modern, high-performance UI component library.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **GraphQL**: API for interacting with Shopify’s Storefront API.
- **Zustand**: Simple, fast state management for React.
- **Vite**: High-speed bundler to optimize the development experience.
- **Shopify CDN**: Content Delivery Network for fast, global delivery of static assets.
## 🚀 Features

- **SSR and Optimistic UI Updates**: Server-side rendering with fast, responsive updates to the UI without page reloads.
- **Remix Fetchers**: Efficient data loading and seamless user experience through Remix's fetcher hooks.
- **Product Subscriptions**: Allows users to subscribe to products for recurring deliveries.
- **Quantity-Based Discounts**: Automatically applies discounts when products are purchased in larger quantities.

## 📥 Download the Project

To get started with the project, follow these steps:

1. Clone the repository from GitHub:


## 🚀 Deployment

The project is configured for deployment to Netlify. Once set up, the site will be live and accessible at a custom domain.

**Note:** The deployment works well, but there is an issue with the hard reload cache. When a hard reload is made, the cache is not revalidated, but rather the previous cache is used. This is a known issue between Hydrogen and Netlify, and is not related to the project code. As a result, the `shouldRevalidate` function provided by Remix does not work as expected in this case. However, the normal revalidation functionality works as expected in all route flows and checkout, etc. I have identified this issue and am close to resolving it.

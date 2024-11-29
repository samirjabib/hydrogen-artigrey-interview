
# Project: Home, Quick View, Cart, and Subscriptions Design

This project is an online store developed with **Shopify Hydrogen** and **Remix**, optimized for **SSR (Server-Side Rendering)** and **optimistic UI updates**. Dynamic components like **Quick View**, **Cart**, and **Bundles** are loaded efficiently using **Remix fetchers**. All components are connected to **Shopify** and loaded from the **CDN**, ensuring superior performance. Additionally, the system includes **product subscriptions** and **quantity-based discounts**, enhancing the shopping experience.

## 🛠 Technologies (Libraries and Tools)

- **Shopify Hydrogen**: Headless framework for e-commerce.
- **Remix**: Full-stack framework for performance optimization.
- **Lucide React**: Lightweight and optimized icon set with three shaking.
- **TailwindCSS**: Utility-first design framework.
- **GraphQL**: API to interact with Shopify.
- **Zustand**: State management for React.
- **Vite**: High-speed bundler.
- **Shopify CDN**: Static content optimization.

## 🚀 Features

- **SSR and Optimistic UI Updates**: Server-side rendering and fast UI updates.
- **Remix Fetchers**: Efficient data loading without page reloads.
- **Product Subscriptions**: Allows users to subscribe to products for recurring deliveries.
- **Quantity-Based Discounts**: Automatically applies discounts when products are purchased in larger quantities.


## 📥 Download the Project

To get started with the project, you can clone the repository from GitHub:

```bash
git clone https://github.com/samirjabib/hydrogen-artigrey-interview.git

cd hydrogen-artigrey-interview
npm install


### 🔑 Set Up Environment Variables

To run the project, you'll need to set up some environment variables. These are the necessary variables for the project:

Create a `.env` file in the root of the project and add the following variables:

```env
PUBLIC_CUSTOMER_ACCOUNT_API_URL=https://shopify.com/authentication/91751612725/oauth/authorize
SESSION_SECRET=foobar
PUBLIC_STOREFRONT_API_TOKEN=dc9406afc987e9592270d900fee17b9c
PRIVATE_STOREFRONT_API_TOKEN=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
PUBLIC_STOREFRONT_ID=91751612725
PUBLIC_STORE_DOMAIN=artic-grey-samir.myshopify.com
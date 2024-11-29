# Project: Home, Quick View, Cart, and Subscriptions Design

This project is an **online store** built using **Shopify Hydrogen** and **Remix**, optimized for **SSR (Server-Side Rendering)** and **optimistic UI updates**. Dynamic components like **Quick View**, **Cart**, and **Bundles** are loaded efficiently using **Remix fetchers**. All components are connected to **Shopify** and loaded from the **CDN**, ensuring superior performance. Additionally, the system includes **product subscriptions** and **quantity-based discounts**, providing a seamless shopping experience.

## 🛠 Technologies (Libraries and Tools)

- **Shopify Hydrogen**: Headless framework for building custom Shopify storefronts.
- **Remix**: Full-stack framework focused on performance and UX, enabling SSR and data fetching optimizations.
- **Lucide React**: Lightweight and optimized icon set with tree shaking for performance.
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

    ```bash
    git clone https://github.com/samirjabib/hydrogen-artigrey-interview.git
    ```

2. Navigate to the project directory:

    ```bash
    cd hydrogen-artigrey-interview
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

## 🔑 Set Up Environment Variables

Before running the project, you need to set up the environment variables. These are the required environment variables:

1. Create a `.env` file in the root of the project and add the following variables:

    **Note**: For the purpose of this test, the variables are set to be public in the env.example file. In a real-world scenario, make sure to keep sensitive variables **private** and **secure**.

    ```env
    PUBLIC_CUSTOMER_ACCOUNT_API_URL=
    SESSION_SECRET=
    PUBLIC_STOREFRONT_API_TOKEN=
    PRIVATE_STOREFRONT_API_TOKEN=
    PUBLIC_STOREFRONT_ID=
    PUBLIC_STORE_DOMAIN=
    ```

## 🚀 Run the Project

Once you've set up the environment variables, you can run the project locally using the following command:

```bash
npm run dev
import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: `My Gatsby Site`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My Gatsby Site`,
        short_name: `MySite`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0ea5e9`,
        display: `standalone`,
        icon: `src/images/icon.png`, // 512x512+ recommended
        // optional:
        icon_options: { 
          purpose: `any maskable` 
        },
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        // Optional fine-tuning:
        workboxConfig: {
          // Cache external fonts/APIs as needed:
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
              handler: `CacheFirst`,
              options: {
                cacheName: `google-fonts`,
                expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },
              },
            },
            {
              urlPattern: /^https:\/\/api\.example\.com\/.*$/i,
              handler: `StaleWhileRevalidate`,
              options: { cacheName: `api-cache` },
            },
          ],
        },
      },
    },
  ],
}

export default config

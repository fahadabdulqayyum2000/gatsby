import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://fahad-gatsby.vercel.app`,
    title: `Fahad Gatsby Site`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fahad Gatsby Site`,
        short_name: `FahadAbdulQayyum`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0ea5e9`,
        display: `standalone`,
        // icon: `src/images/icon.png`,
        icon: `src/images/logo.svg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}

export default config

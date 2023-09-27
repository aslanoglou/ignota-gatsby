/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `ignota.io`,
        siteUrl: `https://ignota.io/`,
        icon: `/images/favicon.svg`,
        description: `Accelerate your digital transformation journenpm instally by delivering customer-centric experiences that are designed to maximize your revenue`,
    },
    plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: "GTM-NGD8SCCZ",

                // Include GTM in development.
                //
                // Defaults to false meaning GTM will only be loaded in production.
                includeInDevelopment: false,

                // datalayer to be set before GTM is loaded
                // should be an object or a function that is executed in the browser
                //
                // Defaults to null
                // defaultDataLayer: { platform: "gatsby" },

                // Specify optional GTM environment details.
                // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
                // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
                // dataLayerName: "YOUR_DATA_LAYER_NAME",

                // Name of the event that is triggered
                // on every Gatsby route change.
                //
                // Defaults to gatsby-route-change
                // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
                // Defaults to false
                enableWebVitalsTracking: true,
                // Defaults to https://www.googletagmanager.com
                // selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /images/
                }
            }
        },
        {
            resolve: `gatsby-plugin-page-creator`,
            options: {
                path: `${__dirname}/src/pages`,
                ignore: [`foo-bar.js`],
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/favicon.svg"
            }
        }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
            resolve: 'gatsby-source-filesystem',
            options: {
                defaults: {
                    quality: 80
                },
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        }]
};
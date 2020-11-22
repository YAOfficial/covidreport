const config = require( './package.json' );

const siteMetadata = {
 
};

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
      
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-plugin-react-leaflet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
      
     
       
      
      },
    },
  ],
};

// module.exports = {
//     async redirects() {
//         return [{
//             source: '/',
//             destination: '/homepage1',
//             permanent: true,
//         }, ]
//     },
// }
// const withPlugins = require("next-compose-plugins");
// const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa/cache");

// const nextConfig = {
//     reactStrictMode: true,
//     images: {
//         deviceSizes: [640, 768, 1024, 1280, 1536],
//         loader: "custom",
//         path: "/",
//     },
// };

// module.exports = withPlugins(
//     [
//         [
//             withPWA,
//             {
//                 pwa: {
//                     disable: process.env.NODE_ENV === "development",
//                     dest: "public",
//                     runtimeCaching,
//                 },
//             },
//         ],
//     ],
//     nextConfig
// );

module.exports = {
    async headers() {
      return [
        {
          // matching all API routes
          source: "/api/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },
            { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
          ]
        }
      ]
    }
  };
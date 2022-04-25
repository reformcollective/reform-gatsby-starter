const path = require("path")

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html" || stage === "develop-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /locomotive-scroll/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const query = await graphql(`

//   `)

//   if (query.errors) {
//     console.error(query.errors)
//   } else {
//     query.data.allContentfulInvestmentTeamMember.nodes
//       .filter(item => item.name)
//       .forEach((item, index) => {
//         const path = item.name?.replace(/\s/g, "-").toLowerCase()

//         createPage({
//           path,
//           component: teamProfileTemplate,
//           context: item,
//         })
//       })
//   }
// }

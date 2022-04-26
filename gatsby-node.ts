/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 * and https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#gatsby-nodets
 */

// You can delete this file if you're not using it

// import type { GatsbyNode } from "gatsby"
// const path = require('path')
// type Person = {
//   id: number
//   name: string
//   age: number
// }
// export const sourceNodes: GatsbyNode["sourceNodes"] = async ({
//   actions,
//   createNodeId,
//   createContentDigest,
// }) => {
//   const { createNode } = actions
//   const data = await getSomeData()
//   data.forEach((person: Person) => {
//     const node = {
//       ...person,
//       parent: null,
//       children: [],
//       id: createNodeId(`person__${person.id}`),
//       internal: {
//         type: "Person",
//         content: JSON.stringify(person),
//         contentDigest: createContentDigest(person),
//       },
//     }
//     createNode(node)
//   })
// }

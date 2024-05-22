# Reform Gatsby Starter

Setup!

1. Clone using the template in GitHub
2. Update all existing packages with `npx npm-check-updates` (feel free to update the starter repository as well)
3. Enable package update checks in `.github/workflows/call-check-updates.yml`
4. Update `package.json` to include proper metadata for the new project
5. Complete TODO items in `gatsby-config.ts`
6. Add any typography to `src/styles/typography.css`, and configure a default text color/style in `src/components/Layout.css`
7. Add any text styles to `src/styles/text.ts`
8. Configure branch rules on github (you should export and import the starter's rule set)
9. Init Library submodule: `git submodule update --init --recursive` (if you enable automatic tasks, this will be done for you)
10. Configure the library config according to this project's needs
11. In repository settings, enable "Always suggest updating pull request branches", "Allow auto-merge", and "Automatically delete head branches"
12. Update the README.md to remove these instructions and add project-specific image and name below
13. Set up a Netlify build and link to contentful if available/part of project
14. Add .env variables to Netlify, Notion, and Github

<!-- Repository Cover -->
<img src="https://picsum.photos/1600/900" alt="Project Name Website Repository" width="100%" style="border-radius: 50px">
<br><br>

# Project Name
Built with Gatsby. Install with `pnpm install` and run with `pnpm start`

## Setup

1. Install nvm and Node.js
The preferred way to install node is with nvm. After installing nvm, run `nvm install` in this project to download and use the correct version of node for this project.

2. Install PNPM
The preferred way to install pnpm is with corepack. After you've installed node, you install pnpm with `corepack enable`. You should now be able to run `pnpm install` and `pnpm start`
Note that if you installed node from homebrew, you may need to install corepack separately.

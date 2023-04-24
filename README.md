# Reform Gatsby Starter

Setup:

1. Clone and setup git for new repo (make sure to remove the old remote if needed)
2. Update all existing packages with `npx npm-check-updates` (feel free to update the starter repository as well)
3. Enable package update checks in `.github/workflows/call-check-updates.yml`
4. Create a new file called `./github/dependabot.yml`
5. Update `package.json` to include proper metadata for the new project
6. Complete TODO items in `gatsby-config.ts`
7. Add any typography to `src/styles/typography.css`
8. Add any text styles to `src/styles/text.ts`
9. Configure branch protections
10. Init Library submodule: git submodule update --init --recursive

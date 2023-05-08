# Reform Gatsby Starter

Setup:

1. Clone and setup git for new repo (make sure to remove the old remote if needed)
2. Update all existing packages with `npx npm-check-updates` (feel free to update the starter repository as well)
3. Enable package update checks in `.github/workflows/call-check-updates.yml`
4. Update `package.json` to include proper metadata for the new project
5. Complete TODO items in `gatsby-config.ts`
6. Add any typography to `src/styles/typography.css`
7. Add any text styles to `src/styles/text.ts`
8. Configure branch protections
9. Init Library submodule: git submodule update --init --recursive
10. In repository settings, enable "Always suggest updating pull request branches", "Allow auto-merge", and "Automatically delete head branches"

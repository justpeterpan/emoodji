# emoodji 👋

## About the Project 

[live demo](https://emoooodji.netlify.app/)

![Website Screenshot](docs/screen.png)  
Simple webapp to track your mood throughout the week.  

### Built By

- MogliCodes [@github](https://github.com/MogliCodes) 
- justpeterpan [@github](https://github.com/justpeterpan) 

### Built With

- [Nuxt3](https://v3.nuxtjs.org/)
- [Supabase](https://supabase.com/)
- [Nuxt Supabase](https://supabase.nuxtjs.org/)
- [VueUse](https://vueuse.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Pinia](https://pinia.vuejs.org/)
- [TypeScript](https://typescript.nuxtjs.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Vue-ChartJS](https://vue-chartjs.org/)
- [Pnpm](https://pnpm.io/)
- [Node.js v18](https://nodejs.org/en/)
- [Netlify](https://www.netlify.com/)
- [Flaticons](https://www.flaticon.com/)
- [husky](https://typicode.github.io/husky/)
- blood, sweat & tears

## Getting Started

To get a local instance up and running follow these simple (or not, looking at you Node) steps.

### Requirements & Installation

- [Install Node.js v18 via n](https://github.com/tj/n) or [Install Node.js v18 via nvm](https://github.com/nvm-sh/nvm)
- [Install Pnpm](https://pnpm.io/installation)
- Clone the repo `git clone git@github.com:justpeterpan/emoodji.git`
- Install dependencies with `pnpm i --shamefully-hoist` (Even tho Nuxt3 documentation recommends installing dependencies with the `--shamefully-hoist` option it is [highly discouraged](https://pnpm.io/cli/install#--shamefully-hoist) by Pnpm itself)
- Install and configure husky with `pnpm run prepare`
- Finally start the dev server on http://localhost:3000 `pnpm dev`

## Contributing

Based on [conventionl commits](https://www.conventionalcommits.org/en/v1.0.0/)

1. Clone Project
1. Create .env
1. Create Feature Branch (`git checkout -b feature/name-of-feature-or-post`)
1. Commit changes
   - New Feature: `git commit -m 'feat: new-feature-description'`
   - Bugfix: `git commit -m 'fix: bugfix-description'`
   - Refactoring: `git commit -m 'refactor: component-or-sth-else-description'`
   - Update: `git commit -m 'chore: dependency-name-version'`
   - Documentation: `git commit -m 'docs: update documentation-description`'
1. Push to branch (`git push origin feature/name-of-feature-or-post`)
1. Create new pull request

# emoodji 👋

## About the Project (aka [Hackathon Checklist](https://www.madewithsupabase.com/launch-week-5))

[live demo](https://emoooodji.netlify.app/)

![Website Screenshot](docs/screen.png)  
Simple webapp to track your mood throughout the week.  

- Makes use of the magic link login auth functionality provided by [supabase](https://supabase.com/).
- Stores tracked moods in supabase and is secured by RLS + policies.
- Motivated by our day job and biweekly retrospectives, we aimed for a simple and easy to use app, to track our mood changes throughout our sprints - without any friction (looking at you unnecessary registrations & forgotten passwords). and a top notch DX by supabase made the challenge more than fun. 
- We've used the opportunity to familiarize ourselves with new technologies (vue3 & Nuxt3, coming from vue2 & Nuxt2)
- Started with [figma](https://www.figma.com/file/gtbyYsAGDegRKjoLdCQZmg/emoodji?node-id=0%3A1), ended up in voicechat fixing last bugs (more to come...)
- Future plans: fixing bugs, adding more features (launch week 5 gave us even more inspiration)

### Builty By

- MogliCodes [@github](https://github.com/MogliCodes) [@twitter](https://twitter.com/mogli_codes)
- justpeterpan [@github](https://github.com/justpeterpan) [lurking@twitter](https://twitter.com/illskratch)

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
- [Pnpm](https://pnpm.io/)
- [Node.js v18](https://nodejs.org/en/)
- [Netlify](https://www.netlify.com/)
- [Flaticons](https://www.flaticon.com/)
- blood, sweat & tears

## Getting Started

To get a local instance up and running follow these simple (or not, looking at you Node) steps.

### Requirements & Installation

- [Install Node.js v18 via n](https://github.com/tj/n) or [Install Node.js v18 via nvm](https://github.com/nvm-sh/nvm)
- [Install Pnpm](https://pnpm.io/installation)
- Clone the repo `git clone git@github.com:justpeterpan/emoodji.git`
- Install dependencies with `pnpm i --shamefully-hoist` (Even tho Nuxt3 documentation recommends installing dependencies with the `--shamefully-hoist` option it is [highly discouraged](https://pnpm.io/cli/install#--shamefully-hoist) by Pnpm itself)
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

## Rough Roadmap

- [ ] Implement auth via supabase
- [ ] Add log-in view
- [ ] Add navbar/menu
- [ ] Add moodpicker view
- [ ] Add user based picked moods overview
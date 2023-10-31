# Nayan's Portfolio

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/Nidhish-D-Nayak/nayan/tree/main)

Welcome to the Nayan's Portfolio! This README provides an in-depth exploration of our versatile Multipage Application (MPA).

## Table of Contents

- [About the Project](#about-the-project)
- [Folder Structure](#folder-structure)
- [Key Features](#key-features)
- [Seamless Integrations](#seamless-integrations)
- [Getting Started](#getting-started)
- [Commands](#commands)
- [Configuration](#configuration)
- [Deployment Made Easy](#deployment-made-easy)
- [Feedback and Suggestions](#feedback-and-suggestions)

## About the Project

This project is a fusion of portfolio and blog functionalities, complete with an intuitive admin page driven by Netlify CMS. Our project is meticulously fine-tuned for performance, leveraging server-side rendering (SSR) and cutting-edge image optimization through Sharp.

![preview](https://github.com/nidhish-nayak/nayan/assets/76598208/d4722638-4a1c-4d3a-8adb-e58556727207)

<p align="left">
  
  <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/nidhish-nayak/nayan" />
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/nidhish-nayak/nayan" />
  <img alt="" src="https://img.shields.io/github/repo-size/nidhish-nayak/nayan" />
  <img alt="GitHub Issues" src="https://img.shields.io/github/issues/nidhish-nayak/nayan" />
  <img alt="GitHub Closed Issues" src="https://img.shields.io/github/issues-closed/nidhish-nayak/nayan" />
  <img alt="GitHub Closed Pull Requests" src="https://img.shields.io/github/issues-pr-closed/nidhish-nayak/nayan" />
  <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/nidhish-nayak/nayan" />
  <img alt="GitHub Commit Activity (Year)" src="https://img.shields.io/github/commit-activity/y/nidhish-nayak/nayan" />

</p>

## Folder Structure

The project is structured with an eye for clarity and ease of use:

```
├── public/             # Public assets and HTML template
│   ├── admin/          # Netlify CMS configuration file
│   └── fonts/          # All fonts
│
├── src/
│   ├── assets/         # Optimized assets used in the application
│   ├── components/     # Reusable Preact and Astro components
│   ├── content/        # Blog & Project CMS Content with Zod types
│   ├── layouts/        # Reusable layouts for posts
│   ├── pages/          # Top-level application pages
│   └── styles/         # Global CSS styles
└── ...
```

- **public/**: Home to essential static files including `robots.txt`, `favicon.svg`, and the all-important `social-image.png`.
- **src/**: The heart of the application, boasting reusable components in the `components/` directory and a variety of layouts in `layouts/`.
- **astro.config.mjs**: The command center for Astro, empowering you to tailor the project to your unique requirements.
- **package.json**: Home to your project's dependencies and script definitions.
- **tsconfig.json**: A meticulously crafted TypeScript configuration, ensuring a seamless development experience.
- **tailwind.config.mjs**: Your canvas for configuring the potent Tailwind CSS framework.

## Key Features

The project boasts a dazzling array of features:

- **Multipage Application (MPA)**: The canvas for creating multiple pages, perfect for showcasing your diverse content.
- **Portfolio and Blog Functionalities**: A powerful platform for spotlighting your projects and effortlessly managing engaging blog posts.
- **Admin Page**: The integration of Netlify CMS ensures client-friendly content management is a breeze.
- **Server-Side Rendering (SSR)**: Harness the speed and efficiency of SSR, providing an exceptional user experience.
- **Image Optimization**: Say goodbye to lag with Sharp's image optimization, enhancing performance and visual appeal.
  <br>
- [x] type-safe markdown
- [x] super fast performance
- [x] responsive (mobile ~ desktops)
- [x] SEO-friendly
- [x] light & dark mode
- [x] draft posts
- [x] sitemap & rss feed

## Lighthouse Score

![Lighthouse-score](https://github.com/nidhish-nayak/nayan/assets/76598208/58502091-bac7-46a7-980f-8965ecad92d0)

## Seamless Integrations

We've harmonized various tools and libraries to make your development experience a symphony of efficiency:

- **Preact**: A nimble alternative to React, guaranteeing lightning-fast performance.
- **Sitemap**: Seamlessly generate a sitemap for top-notch SEO, enhancing your project's discoverability.
- **Tailwind CSS**: A utility-first CSS framework, transforming styling into an art form.
- **Prefetch**: Say hello to lightning-fast page loading, thanks to preloaded essential assets.
- **Markdown and MDX**: Embrace content creation with Markdown and MDX formats, a flexible and developer-friendly approach.
- **Astro Islands**: Optimize your project's performance through advanced code splitting.
- **Netlify CMS**: Simplify content updates with a user-friendly content management system designed to keep your project agile and responsive.

## Getting Started

You can run the project locally with the following steps:

1. Clone the repository: `git clone https://github.com/yourusername/your-astro-project.git`
2. Install dependencies: `pnpm install` (For faster and more efficient package management, we recommend using pnpm)
3. Start the development server: `pnpm run dev`
4. Access the project locally in your browser at `http://localhost:4321`

## Commands

All commands are run from the root of the project, from a terminal:

| Command            | Action                                       |
| :----------------- | :------------------------------------------- |
| `pnpm install`     | Installs dependencies                        |
| `pnpm run dev`     | Starts local dev server at `localhost:4321`  |
| `pnpm run build`   | Build your production site to `./dist/`      |
| `pnpm run preview` | Preview your build locally, before deploying |

## Configuration

You can customize and configure your project settings to match your vision. Add additional integrations or configurations as needed to create a project that's uniquely yours.

```js
export default defineConfig({
	site: "https://nayan-m.vercel.app",
	integrations: [mdx(), sitemap(), prefetch(), tailwind(), preact()],
});
```

## Deployment Made Easy

When you're ready to share your project with the world, consider deploying it on a hosting service that supports Astro, such as Netlify, Vercel, or your platform of choice. Ensure you configure the necessary environment variables and deployment settings for a smooth launch.

> **Note:** Netlify CMS will only work on netlify hosting. Due to this you might need to choose other CMS providers for hosting elsewhere.

## Feedback & Suggestions

If you have any questions, need further assistance, or want to discuss your vision for this project, feel free to contact me at nidhibelthangady@gmail.com.

Made with 🤍 by Nidhish Nayak.

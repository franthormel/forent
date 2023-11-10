# Forent 🏡

Apartment rental clone website.

[![Test](https://github.com/franthormel/forent/actions/workflows/test.yml/badge.svg)](https://github.com/franthormel/forent/actions/workflows/test.yml)

## Why this was created 👷‍♂️

Wanted to try all the technologies listed below.

## What technologies were used ⚙️

- [NextJS](https://nextjs.org/) - React Framework
- [NextAuth](https://next-auth.js.org/) - Authentication
- [Storybook](https://storybook.js.org/) - Design & Testing (a11y & visual)
- [Jest](https://jestjs.io/) - Testing (unit)
- [Prisma](https://www.prisma.io/) - Database ORM and design
  - [PostgreSQL](https://www.postgresql.org/) - Database (Prisma handles all the communication)
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Cypress](https://www.cypress.io/) - Testing (component & e2e)

> More might be added (as needed).

## What does it have 🥇

- Passwordless authentication
  - Email verification
  - Google OAuth

> More might be added (as decided).

## What each of the directories are for 📂

| Directory    | Purpose                                                          |
| ------------ | ---------------------------------------------------------------- |
| `.github`    | GitHub templates and workflow                                    |
| `.storybook` | Storybook config                                                 |
| `app`        | Application itself                                               |
| `components` | UI pieces                                                        |
| `lib`        | Functions                                                        |
| `prisma`     | DB schema and changes                                            |
| `stories`    | Design examples, accessibility tests and visual tests |
| `tests`      | Different test types: `unit`, `component`, and `e2e`.            |

## How quality is assured 🧪

> **Test all (as much as possible)**

*All* the lines and branches.

*As much as possible*, since some parts (like `component` and `e2e` tests) are better tested manually. 

This is possible when workflows are too complex for `e2e` tests that it makes more sense to test it manually in the browser or when live data is difficult to be provided when testing `component`s.

## How was the design created

The following sections describe the fonts and color palette.

### What fonts are displayed 🔤

| Category  | Font                                                                                     | Purpose |
| --------- | ---------------------------------------------------------------------------------------- | ------- |
| Primary   | [DM Sans](https://fonts.google.com/specimen/DM+Sans)                                     | Text    |
| Secondary | [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display)                   | Header  |
| Tertiary  | [Libre Baskerville](https://fonts.google.com/specimen/Libre+Baskerville) Bold 700 Italic | Logo    |

### What colors were chosen 🎨

| Category      | Color Value | Tailwind CSS Value |
| ------------- | ----------- | ------------------ |
| Primary       | #FBBF24     | `amber-400`        |
| Secondary     | #EA580C     | `orange-600`       |
| Tertiary      | #67E8F9     | `cyan-300`         |
| Text          | #1F2937     | `gray-800`         |
| Warning       | #DC2626     | `red-600`          |
| URL (Visited) | #2563EB     | `blue-600`         |
| URL (Active)  | #581C87     | `purple-900`       |

## Thank you 😻

1. [Krzysztof Kotkowicz](https://unsplash.com/@lancaster83?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) from [Unsplash](https://unsplash.com/photos/yellow-and-white-concrete-building-at-daytime-yBW0vUO82AA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)

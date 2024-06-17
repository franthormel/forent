# Forent 🏡

Apartment rental clone website.

[![Test](https://github.com/franthormel/forent/actions/workflows/test.yml/badge.svg)](https://github.com/franthormel/forent/actions/workflows/test.yml)

## Setup

### Requirements:

1. Node.js (preferably thel latest version)
2. PostgreSQL (preferably thel latest version also)

### Developer Environment:

Run the following commands:

1. Install packages `npm ci`
2. Seed database `npx prisma db seed`'
3. Run it `npm run dev`

### Deployment

Check [Next.js deployment documentation site](https://nextjs.org/docs/pages/building-your-application/deploying) for further details.

### Environment Variables

Provide the following values also:
- For developer environment, use a `.env` file
- For the Vercel environment, check [this guide](https://vercel.com/docs/projects/environment-variables).

```
# Check following guides for each variable

# https://www.prisma.io/docs/orm/reference/connection-urls
# https://www.prisma.io/dataguide/postgresql/short-guides/connection-uris
DATABASE_URL=

# https://next-auth.js.org/configuration/options#nextauth_secret
NEXTAUTH_SECRET=

# https://next-auth.js.org/configuration/options#nextauth_url
NEXTAUTH_URL=

# https://next-auth.js.org/providers/email
# https://next-auth.js.org/providers/email#smtp
EMAIL_SERVER_HOST=
EMAIL_SERVER_PORT=
EMAIL_SERVER_USER=
EMAIL_SERVER_PASSWORD=
EMAIL_FROM=

# https://next-auth.js.org/providers/google
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REFRESH_TOKEN=

# https://www.chromatic.com/docs/storybook/#set-up-chromatic-cli-for-storybook
CHROMATIC_PROJECT_TOKEN=

# The following variables can be further customized
# However, ensure that the changes integrate well

# Reverse geocoding
GEOCODE_URL_GEONAMES="http://api.3geonames.org/lat,lon.json"

# Listing image dimensions
LISTING_CARD_PHOTO_WIDTH=300
LISTING_CARD_PHOTO_HEIGHT=300

LISTING_COVER_PHOTO_WIDTH=800
LISTING_COVER_PHOTO_HEIGHT=600

LISTING_FULL_PHOTO_WIDTH=1600
LISTING_FULL_PHOTO_HEIGHT=900

# Listing min-max values
LISTING_PRICE_MIN=100
LISTING_PRICE_MAX=100_000_000

LISTING_DEPOSIT_MIN=0
LISTING_DEPOSIT_MAX=1_000_000

LISTING_DESC_MIN=16
LISTING_DESC_MAX=1024

LISTING_BEDS_MIN=1
LISTING_BEDS_MAX=750

LISTING_BATHS_MIN=1
LISTING_BATHS_MAX=250

LISTING_AREA_MIN=10
LISTING_AREA_MAX=1_000_000

LISTING_ADDRESS_LINE_MIN=1
LISTING_ADDRESS_LINE_MAX=128

LISTING_ADDRESS_CITY_MIN=1
LISTING_ADDRESS_CITY_MAX=64

LISTING_ADDRESS_STATE_MIN=1
LISTING_ADDRESS_STATE_MAX=64

LISTING_ADDRESS_ZIP_MIN=0
LISTING_ADDRESS_ZIP_MAX=64

LISTING_ADDRESS_LON_MIN =180
LISTING_ADDRESS_LON_MAX=180

LISTING_ADDRESS_LAT_MIN =90
LISTING_ADDRESS_LAT_MAX=90
```

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

| Directory    | Purpose                                               |
| ------------ | ----------------------------------------------------- |
| `.github`    | GitHub templates and workflow                         |
| `.storybook` | Storybook config                                      |
| `app`        | Application itself                                    |
| `cypress`    | Component and E2E tests                               |
| `components` | UI pieces                                             |
| `lib`        | Functions                                             |
| `prisma`     | DB schema and changes                                 |
| `stories`    | Design examples, accessibility tests and visual tests |
| `tests`      | Unit tests                                            |

## How quality is assured 🧪

> **Test all (as much as possible)**

1. Unit tests are for general & functional behavior [Jest]
2. Component tests are for evaluating the component's values (text) and display (existence and visibility in the webpage) [Cypress]
3. UI tests are for maintaining the component's design consitency [Storybook, Chromatic]
4. E2E tests are for user behavior [Cypress]

> It is better to test the component's UI in Storybook. Why?
> 1. In Cypress, you have to explicitly mention (eg.) the color or layout of the component
> 2. In Storybook w/ Chromatic, it automatically detects the changes and notifies for any changes.
>
> > Special cases might apply. Example, different layouts for different screen dimensions requring some components
> > to be hidden while others are visible.

*All* the lines and branches.

*As much as possible*, since some parts (like `component` and `e2e` tests) are better tested manually. 

This is possible when workflows are too complex for `e2e` tests that it makes more sense to test it manually in the browser or when live data is difficult to be provided when testing `component`s.

## What fonts are displayed 🔤

| Category  | Font                                                                                     | Purpose |
| --------- | ---------------------------------------------------------------------------------------- | ------- |
| Primary   | [DM Sans](https://fonts.google.com/specimen/DM+Sans)                                     | Text    |
| Secondary | [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display)                   | Header  |
| Tertiary  | [Libre Baskerville](https://fonts.google.com/specimen/Libre+Baskerville) Bold 700 Italic | Logo    |

# WARP Development frontend for Weather App

React typescript on NextJS.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before we get started, we're going to need to make sure we have a few things installed and available on our machine.

#### Node 20.11.0

#### NPM is the package manage useds

#### React 19.0.0

##### Other

See the installation guides available @ nodejs.org:

https://nodejs.org/en/download/package-manager/

#### NPM

```bash
npm install -g npm
```

### Installing

Below is a series of step by step instructions that tell you how to get a development env running.

Create a local clone of the repository.

```bash
git clone git@github.com:Yenzokuhle/warp-fe-yenzo.git
```

Enter the cloned repositories' directory.

```bash
cd /warp-fe-yenzo
```

Install all the projects dependencies

```bash
npm install
```

Create an `.env` file based on the below variables

Export the contents of the created `.env`s by saving new values in file.

```bash
OPEN_WEATHER_API_KEY="Insert API Key here"
API_URL="https://api.openweathermap.org/data/2.5/weather"
```

You will substitute the above with your own API KEY after you have successfully created a FREE account with `openweathermap`

Now you can run your app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can also access `API Routes` standalone on the broswer by typing:

```bash
http://localhost:3000/api/cityName/INSERT_CITY_NAME_HERE
```

```bash
http://localhost:3000/api/coords/LAT_HERE/LONG_HERE
```

Generate the build files for deployment

```bash
npm run build
```

---

## UNITS used in the repo for the Weather API

```bash
Celsius
```

## Design Decisions

1. We have a `DESKTOP` version which has a single screen split into 2 halves due to having enough screen real-estate for the exercise.

2. We have a `MOBILE` version which has 2 screens: [1] Search city and click `view more`. [2] Weather details page for city being viewed from the previous screen searched by its `coordinates`.

- [AdobeXD App design file](https://xd.adobe.com/view/23e94ee6-2c1c-4f62-a904-4fdb5368449c-76ba/) - Design link

## Bonus specific libraries used

1. [React Query from Tanstack](https://tanstack.com/query/latest) - Reasons here ...
2. [NextJS API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) - Reasons here ...

## Built With

The details of the tech stack that has been used:

- [NextJS](https://nextjs.org/) - The React Framework for the Web

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

- [TailwindCSS](https://tailwindcss.com/) - Style Framework
- [React Hook Form](https://www.react-hook-form.com/) - Input form handling

## Architecture

- [App router](https://nextjs.org/docs/app/) - App navigation - file-system based router that uses React's latest features.

---

Thank you for the opportunity

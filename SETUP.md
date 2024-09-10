## Requirement

1. Running PostgreSQL server

## Steps

1. Install packages `npm ci`
2. Build the application `npm build`
3. Start the server in production mode `npm start`

Alternatives are listed in the [official Next.js docs](https://nextjs.org/docs/app/building-your-application/deploying)

## Docker

Docker is not compatible with this project since Prisma, the database client, is encountering this error.

```
21.88 error: Environment variable not found: DATABASE_URL.
21.88   -->  schema.prisma:8
21.88    |
21.88  7 |   provider = "postgresql"
21.88  8 |   url      = env("DATABASE_URL")
21.88    |
```

I have tried the following yet the same error persists:

1. [`docker compose run -e`](https://docs.docker.com/compose/environment-variables/set-environment-variables/#set-environment-variables-with-docker-compose-run---env)
2. [`env_file`](https://docs.docker.com/compose/environment-variables/set-environment-variables/#use-the-env_file-attribute)
3. [`environment`](https://docs.docker.com/compose/environment-variables/set-environment-variables/#use-the-env_file-attribute)

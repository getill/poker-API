FROM oven/bun:1.3.3-slim AS builder

WORKDIR /usr/src/app

COPY package.json bun.lock ./

RUN apt update && apt install procps
RUN bun install

COPY . .

EXPOSE 3000

# RUN npx prisma generate

# RUN bun run build

CMD ["bun", "start:dev"]
# syntax=docker/dockerfile:1

ARG NODE_VERSION=23.6.0

# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine as base

# Set working directory for all build stages.
WORKDIR /usr/src/app

# Instalar dependências
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copiar os arquivos do projeto para dentro do contêiner
COPY . .

# Expor a porta do Vite
EXPOSE 3000

# Rodar o servidor de desenvolvimento do Vite
CMD ["yarn", "dev", "--host", "--port", "3000"]
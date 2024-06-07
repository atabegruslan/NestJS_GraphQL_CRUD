# Nest.js & GraphQL & CRUD & Auth

## Installation

```
npm i -g @nestjs/cli
nest new project-name
```

Run with hot-reload: `npm run start:dev`

## Setup GraphQL

`npm i @nestjs/graphql @nestjs/apollo @apollo/server graphql`

## With mock data

### Select all

![](/Illustrations/mock_data_select_all.png)

### Select all with relation

![](/Illustrations/mock_data_select_all_with_relation.png)

### Create

![](/Illustrations/mock_data_create_user.png)

![](/Illustrations/mock_data_create_relation.png)

![](/Illustrations/mock_data_create_result.png)

## Intro DB

`npm i @nestjs/typeorm typeorm mysql2`

`CREATE DATABASE nestjs-crud`

When you run `npm run start:dev`, the DB tables will be automatically made

![](/Illustrations/db_tables.png)

![](/Illustrations/users_table.png)

![](/Illustrations/user_settings_table.png)

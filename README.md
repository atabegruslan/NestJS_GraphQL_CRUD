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

Select one with relation

![](/Illustrations/mock_data_select_one_with_relation.png)

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

### Refactor to DB

![](/Illustrations/db_create_user.png)

![](/Illustrations/db_create_user_relation.png)

![](/Illustrations/db_select_all_with_relation.png)

![](/Illustrations/db_select_one_with_relation.png)

# Tutorials

- https://www.youtube.com/watch?v=CSfZmyzQAG8&list=PL_cUvD4qzbkw-phjGK2qq0nQiG6gw1cKK&index=3 (Very Good)
- Support: https://graphql.org/community/resources/official-channels
- https://stackoverflow.com/questions/66371656/difference-forroot-and-forfeature-nest-js

---

# Todo

- CRUD: https://github.com/devVinit/nestjs-graphql-crud
- Upload file: https://www.youtube.com/watch?v=-2pmmeUjkgs
- Upload file: https://medium.com/@raj.shrestha777/step-by-step-guide-to-uploading-multiples-files-with-graphql-in-nestjs-ecc4dfe42424
- Upload file: https://www.elbarryamine.com/blog/how-to-upload-files-with-nest-js-and-graphql
- Auth
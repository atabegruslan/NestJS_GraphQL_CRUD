# Nest.js & GraphQL & CRUD & Auth

## Installation

```
npm i -g @nestjs/cli
nest new project-name
```

Run with hot-reload: `npm run start:dev`

## Setup GraphQL

`npm i @nestjs/graphql @nestjs/apollo @apollo/server graphql`

https://github.com/atabegruslan/NestJS_CRUD/commit/87ec665a3cd2f65bf3f2196c8f24bbd57d0108cb

## With mock data

### Select all

When you run `npm run start:dev`, the GraphQL Schema file will be auto generated.

https://github.com/atabegruslan/NestJS_CRUD/commit/dfad9a3bd041f8d3f37151a28777b163de02c2e8

![](/Illustrations/mock_data_select_all.png)

### Select all with relation

https://github.com/atabegruslan/NestJS_CRUD/commit/9324c2517b14e3511a18ac3f8f1132c5f2066848

![](/Illustrations/mock_data_select_all_with_relation.png)

Select one with relation

![](/Illustrations/mock_data_select_one_with_relation.png)

### Create

https://github.com/atabegruslan/NestJS_CRUD/commit/2711deef76319c00364964581120db14cb5463d3

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

https://github.com/atabegruslan/NestJS_CRUD/commit/371d509ad641e7e896b13abd9cd38b5315002363

### Refactor to DB

https://github.com/atabegruslan/NestJS_CRUD/commit/45a29bd2b930295562544f60e476a9887ff37fd7

![](/Illustrations/db_create_user.png)

![](/Illustrations/db_create_user_relation.png)

![](/Illustrations/db_select_all_with_relation.png)

![](/Illustrations/db_select_one_with_relation.png)

### Complete CRUDs

https://github.com/atabegruslan/NestJS_GraphQL_CRUD/commit/113b65da2d4c840e896fd4d568dea25a1e5d77f8

![](/Illustrations/complete_crud_1.png)

![](/Illustrations/complete_crud_2.png)

![](/Illustrations/complete_crud_3.png)

![](/Illustrations/complete_crud_4.png)

![](/Illustrations/complete_crud_5.png)

![](/Illustrations/complete_crud_6.png)

# Tutorials

- https://www.youtube.com/watch?v=CSfZmyzQAG8&list=PL_cUvD4qzbkw-phjGK2qq0nQiG6gw1cKK&index=3 (Very Good)
- Support: https://graphql.org/community/resources/official-channels
- https://stackoverflow.com/questions/66371656/difference-forroot-and-forfeature-nest-js
- CRUD: https://github.com/devVinit/nestjs-graphql-crud

---

# Todo

- Upload file: https://www.youtube.com/watch?v=-2pmmeUjkgs
- Upload file: https://medium.com/@raj.shrestha777/step-by-step-guide-to-uploading-multiples-files-with-graphql-in-nestjs-ecc4dfe42424
- Upload file: https://www.elbarryamine.com/blog/how-to-upload-files-with-nest-js-and-graphql
- Auth: https://www.youtube.com/watch?v=EFDUvzJT_wI

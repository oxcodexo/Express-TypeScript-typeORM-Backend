import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mssql",
  host: "localhost",
  username: "sa",
  password: "123456",
  database: "dbtest",
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  options: {
    encrypt: false,
  },
  migrations: [],
  subscribers: [],
});

// import "reflect-metadata";
// import { DataSource } from "typeorm";
// import { User } from "./entity/User";

// export const AppDataSource = new DataSource({
//   type: "mssql",
//   host: process.env.DB_SERVER,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   // port: Number(process.env.DB_PORT),
//   database: process.env.DB_DATABASE,
//   synchronize: true,
//   logging: false,
//   entities: [User],
//   options: {
//     encrypt: false,
//   },
//   migrations: [],
//   subscribers: [],
// });

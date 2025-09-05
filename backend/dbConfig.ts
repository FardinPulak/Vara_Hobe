
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { User } from "src/user/user.entity";
import { MyProperty } from "src/my-property/my-property.entity";

export const pgConfig: PostgresConnectionOptions =
{
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "vara-hobe",
    synchronize: true,
    logging: true,
    entities: [User, MyProperty]
  
}
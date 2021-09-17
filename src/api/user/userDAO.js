import connectDb from "../../db/db";
import DbHelper from "../../db/db-helper";

const userSchema = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "password"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        email: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        password: {
          bsonType: "string",
          description: "must be a string and is required",
        },
      },
    },
  },
};



  const userDB = new DbHelper("user", userSchema, connectDb);

  export const createUser = async (data) => {
    const user = await userDB.create(data);
    return user;
  };
  //    const getUsers = async () => {

  //   }

  //   const getUser = async (id) => {
  //       const
  //   }

export const collectionName = "user";
export const userSchema = {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "email", "password"],
        properties: {
          name: {
            bsonType: "string",
            description: "must be a string",
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
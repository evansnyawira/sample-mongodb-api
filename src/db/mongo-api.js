import connectDb from "./db";
import { ObjectID } from "bson";
export const mongoApiWarapper = async () => {
  const { mdb } = await connectDb();

  const createOne = ({ collectionName, schema, data }) =>
    mdb.collection(collectionName, schema).insertOne(data);

  const findAll = ({ collectionName, pipeline }) =>
    mdb.collection(collectionName).aggregate(pipeline);

  const findOne = ({ collectionName, id }) =>
    mdb.collection(collectionName).findOne({ _id: ObjectID(id) });

  return {
    create: async (collectionName, schema, data) => {
      const results = await createOne({
        collectionName: collectionName,
        schema: schema,
        data: data,
      });
      return results;
    },
  };
};

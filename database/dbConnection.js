import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose
      .connect(process.env.MONGO_URI, {
        dbName: "MERNRESTAURANT",
      })
      .then(() => {
        console.log("Successfully connected to database!");
      })
      .catch((err) => {
        console.log(`Some error occured while connecting to the database! ${err}`);
      })
}
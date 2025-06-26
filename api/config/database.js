import mongoose from "mongoose";

if (!process.env.MONGO_URI || !process.env.MONGO_DB_NAME) {
  throw new Error(
    "MONGO_URI and MONGO_DB_NAME environment variables must be set"
  );
}

mongoose.connect(`${process.env.MONGO_URI}/${process.env.MONGO_DB_NAME}`);

mongoose.connection.on("open", () => {
  console.log("Database connection 🟢");
});

mongoose.connection.on("disconnected", () => {
  console.warn("Database disconnected 🟡");
});

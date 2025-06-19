import mongoose from "mongoose";

mongoose.connect(`${process.env.MONGO_URI}/tiendaDB`);

mongoose.connection.on("open", () => {
  console.log("Database connection 🟢");
});

mongoose.connection.on("disconnected", () => {
  console.warn("Database disconnected 🟡");
});

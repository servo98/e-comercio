import mongoose from "mongoose";

const databaseConnect = async () => {
  console.log("Entra a la connection", `${process.env.MONGO_URI}/testDB`);

  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error("Database connection failed:", error);
    console.error(error);
  }
};

const databaseClean = async () => {
  try {
    await mongoose.connection.db.dropDatabase();
  } catch (error) {
    console.error("Database clean failed:", error);
    console.error(error);
  }
};

const databaseDisconnect = async () => {
  try {
    await mongoose.connection.close();
  } catch (error) {
    console.error("Database disconnection failed:", error);
    console.error(error);
  }
};

export { databaseConnect, databaseClean, databaseDisconnect };

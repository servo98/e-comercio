import { Schema, model } from "mongoose";

const productSchema = new Schema({
  price: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photos: [
    {
      type: String,
    },
  ],
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default model("Product", productSchema);

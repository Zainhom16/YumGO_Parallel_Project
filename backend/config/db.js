import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://HazemZainhom:distributedProjectYunGo1@cluster0.9ny73h3.mongodb.net/foodDelivery"
    )
    .then(() => console.log("DB Connected"));
};

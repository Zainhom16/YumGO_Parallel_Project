import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import "dotenv/config";
import orderRouter from "./routes/orderRoute.js";

//**********APP CONFIG**********//
const app = express();
const port = 4000;

//**********MIDDLEWARE**********//
app.use(express.json());
app.use(cors());

//**********DATABASE CONNECTION**********//
connectDB();

//**********API ENDPOINTS**********//
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
});

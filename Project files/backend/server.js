import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import { addDoctor } from "./controllers/adminController.js";
import adminRouter from "./routes/adminRoute.js";

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//middlewires
app.use(express.json());
app.use(cors());

//api endpoints
app.use('/api/admin',adminRouter)

app.get("/", (req, res) => {
  res.send("API IS WORKING successfully");
});

app.listen(port, () => {
  console.log("server started on: ", port);
});

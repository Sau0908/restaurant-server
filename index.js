import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import reservationRoutes from "./routes/reservation.js";
import bodyParser from "body-parser";
import contactRoutes from "./routes/contact.js";

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("This is Opulenza API");
});

app.use("/api/reservation", reservationRoutes);
app.use("/api/contact", contactRoutes);

const PORT = 5000;
const DATABASE_URL =
  "mongodb+srv://saurabhkashyap982000:opulenza@cluster0.hsqcyaq.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));

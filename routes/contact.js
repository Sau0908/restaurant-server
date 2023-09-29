import express from "express";
import { getAllData, savingContactUs } from "../controllers/contactTable.js";

const router = express.Router();

router.get("/", getAllData);
router.post("/", savingContactUs);

export default router;

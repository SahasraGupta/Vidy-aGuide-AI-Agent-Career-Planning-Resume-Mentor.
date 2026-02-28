import express from "express";
import { analyzeResume } from "../services/ai.service.js";

const router = express.Router();

router.post("/", async (req, res) => {
    res.json({
        response: "Analysis Complete"
    });
});
export default router;
import express from "express";
import { generateCareerAdvice } from "../services/ai.service.js";

const router = express.Router();

router.post("/", async (req, res) => {
    const { skills, interests } = req.body;

    const response = await generateCareerAdvice(skills, interests);

    res.json({ response });
});

export default router;
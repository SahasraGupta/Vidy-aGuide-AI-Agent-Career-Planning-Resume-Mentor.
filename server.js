import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import careerRoute from "./routes/career.js";
import resumeRoute from "./routes/resume.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/career", careerRoute);
app.use("/resume", resumeRoute);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
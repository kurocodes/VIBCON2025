import "dotenv/config";
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Received a GET request");
  res.send("Welcome to the Vibcon Backend!");
});

app.post("/submit-abstract", async (req, res) => {
  try {
    const response = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "abstract", ...req.body }),
    });

    const data = await response.json();
    // console.log("Google Script parsed response:", data);

    res.json(data);
  } catch (err) {
    console.error("Error submitting abstract:", err);
    res.status(500).json({ status: "error", message: "Failed to submit" });
  }
});

app.post("/submit-feedback", async (req, res) => {
  try {
    const response = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "feedback", ...req.body }),
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Error submitting feedback:", err);
    res.status(500).json({ status: "error", message: "Failed to submit" });
  }
});


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

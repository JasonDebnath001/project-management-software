import e from "express";
import "dotenv/config";
import cors from "cors";
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "inngest/index.js"

const app = e();

app.use(e.json());
app.use(cors());
app.use(clerkMiddleware())

app.get("/", (req, res) => res.send("Server is live!"));
app.use("/api/inngest", serve({ client: inngest, functions }));

const Port = process.env.PORT || 5000;

app.listen(Port, () => console.log(`Server running on port ${Port}`));

import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: any) => {
  return res.json({ message: "Welcome to Express TypeScript testing." });
});


if (process.env.NODE_ENV !== "test") {
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
}

export default app
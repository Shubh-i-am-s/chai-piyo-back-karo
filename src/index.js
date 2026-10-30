import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" });

connectDB()
  .then(
    () => (
      app.on("error", (error) => {
        console.log("Server error", error);
      }),
      app.get("/", (req, res) => {
        res.send("Hello World");
      }),
      app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      })
    )
  ) //database was called but the server should also be started listening somewhere
  .catch((error) => console.log(" MONGODB Connection failed", error));

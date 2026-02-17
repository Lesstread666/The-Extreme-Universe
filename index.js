import express from "express";
import * as path from "path";
import "dotenv/config";
import { extremeObjects, cosmicEvents } from "./data/data.js";
// Routers
import routerHome from "./routers/routerHome.js";
import routerExtremeObjects from "./routers/routerExtremeObjects.js";
import routerCosmicEvents from "./routers/routerCosmicEvents.js";

console.log(extremeObjects);
console.log(cosmicEvents);

const app = express();
const port = process.env.PORT;
const __dirname = path.resolve();

console.log(process.env.PORT)

//View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

// Routs 
app.use("/home", routerHome);
app.use("/extreme-objects", routerExtremeObjects);
app.use("/cosmic-events", routerCosmicEvents);

// Redirect root to home
app.get("/", (req, res) => {
  res.redirect("/home");
});

// Start server
app.listen(port, () => console.log(`Listening on port ${port}`));

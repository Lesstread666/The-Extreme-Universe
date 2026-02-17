import express from "express";
import * as path from "path";
import { extremeObjects, cosmicEvents } from "../data/data.js";

const routerHome = express.Router();

/* Home */
routerHome.get("/", (req, res) => {
    res.render("pages/page",
        {
            pageTitle: "The Extreme Universe",
            activePage: "home",
            extremeObjects,
            cosmicEvents
        });
});

export default routerHome;

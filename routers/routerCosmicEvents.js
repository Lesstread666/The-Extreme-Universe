import express from "express";
import * as path from "path";
import { cosmicEvents } from "../data/data.js";
import { normalizeName } from "../scripts/normalizeName.js";

const routerCosmicEvents = express.Router();
const __dirname = path.resolve();

/* Main Page: /extreme-objects */
routerCosmicEvents.get("/", (req, res) => {
    res.render("pages/page", {
        pageTitle: cosmicEvents.title,
        activePage: "cosmic-events",
        mainData: cosmicEvents,
        subPage: null,
        message: null
    });
});

/* Subpages: /extreme-objects/:slug */
routerCosmicEvents.get("/:slug", (req, res) => {
    const slug = req.params.slug;
    const itemName = normalizeName(slug.replace(/-/g, " "));

    const selectedItem = cosmicEvents.items.find(
        item => normalizeName(item.name) === itemName
    );

    const message = selectedItem ? null : "Item not found";

    res.render("pages/page", {
        pageTitle: selectedItem ? selectedItem.name : cosmicEvents.title,
        activePage: "cosmic-events",
        mainData: cosmicEvents,
        subPage: selectedItem,
        message
    });
});
export default routerCosmicEvents;

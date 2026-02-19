import express from "express";
import { extremeObjects } from "../data/data.js";
import { normalizeName } from "../scripts/normalizeName.js";

const routerExtremeObjects = express.Router();  

/* Main Page: /extreme-objects */
routerExtremeObjects.get("/", (req, res) => {
    res.render("pages/page",
        {
            pageTitle: extremeObjects.title,
            activePage: "extreme-objects",
            mainData: extremeObjects,
            subPage: null,
            message: null
        });
});

/* Subpages: /extreme-objects/:slug */
routerExtremeObjects.get("/:slug", (req, res) => {
    const slug = req.params.slug;
    const itemName = normalizeName(slug.replace(/-/g, " "));

    const selectedItem = extremeObjects.items.find(
        item => normalizeName(item.name) === itemName
    );

    const message = selectedItem ? null : "Item not found";

    res.render("pages/page", {
        pageTitle: selectedItem ? selectedItem.name : extremeObjects.title,
        activePage: "extreme-objects",
        mainData: extremeObjects,
        subPage: selectedItem,
        message
    });
});
export default routerExtremeObjects;

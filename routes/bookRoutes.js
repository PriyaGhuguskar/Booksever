const express = require('express')
const router = express.Router();

const { getAllBootControl,
    createBookControl,
    updatebookcontrol,
    getBookDetailsController,
    deleteBookControl } = require("../controller/bookController")
// For all book on landing page
router.get("/all-book", getAllBootControl)

// for create Book
router.post("/create-book", createBookControl)

router.put("/update-book/:id", updatebookcontrol)

router.get("/get-bookdetails/:id", getBookDetailsController);

router.delete("/delete-book/:id", deleteBookControl)

module.exports = router;
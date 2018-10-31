const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/apiRoutes");

// API Routes
router.use("/api", apiRoutes);

// Default API route if no API routes are hit, send React file
router.route('*')
    .get(function (req, res) {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });

module.exports = router;
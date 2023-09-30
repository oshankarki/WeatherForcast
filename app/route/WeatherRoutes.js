const WeatherController = require("../controller/WeatherController");

const router = require("express").Router();

router.route("/weather").get(WeatherController.info);
module.exports = router;
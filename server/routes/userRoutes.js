const express = require("express");
const userController = require("../controllers/userController");
const { verifyUser } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.get("/pets/:customerId", userController.getPetsByCustomerId);
router.get("/petbyid/:petId", userController.getPetByPetId);
router.post("/add-pet", userController.addPetProfile);
router.post("/book-appointment", userController.bookAppointment);
router.post("/update-pet/:petId", userController.updatePetByPetId);
router.get("/vets", userController.getVets);
router.get("/grommers", userController.getGrommers);
router.get("/vetbyid/:vetId", userController.getVetByVetId);
router.get("/grommerbyid/:groomer_id", userController.getGrommerByGrommerId);
router.post("/verify-payment", userController.verifyPayment);

router.get("/", verifyUser, (req, res) => {
  return res.json({
    Status: "Success",
    name: req.name,
    mobile: req.mobile,
    customer_id: req.customer_id,
  });
});

module.exports = router;

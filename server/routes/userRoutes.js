const express = require("express");
const userController = require("../controllers/userController");
const { verifyUser } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);

router.post("/vetlogin", userController.vetlogin);
router.post("/grommerlogin", userController.grommerlogin);
router.get("/logout", userController.logout);
router.get("/pets/:customerId", userController.getPetsByCustomerId);
router.get("/petbyid/:petId", userController.getPetByPetId);
router.post("/add-pet", userController.addPetProfile);
router.post("/add-vet", userController.addVetProfile);
router.post("/book-appointment", userController.bookAppointment);
router.get("/appbycustomerid/:customerId", userController.getAppbyCustomerId);
router.get("/appbyvetid/:customerId", userController.getAppbyVetId);
router.get("/appbygromid/:customerId", userController.getAppbyGromId);
router.get("/vaccinebypetid/:petId", userController.getVaccinebyPetId);
router.post("/update-vet/:vetid", userController.updateVetByVetId);
router.post("/vetcount", userController.getVetsCount);
router.post("/usercount", userController.getUsersCount);
router.get("/vets", userController.getVets);
router.get("/users", userController.getUsers);
router.get("/grommers", userController.getGrommers);
router.get("/vetbyid/:vetId", userController.getVetByVetId);
router.get("/grommerbyid/:groomer_id", userController.getGrommerByGrommerId);
router.post("/update-status", userController.updateStatus);
router.post("/add-vaccine", userController.addVaccine);
router.post("/verify-payment", userController.verifyPayment);
router.get("/shop-all", userController.getAllShopItems);

router.get("/", verifyUser, (req, res) => {
  return res.json({
    Status: "Success",
    name: req.name,
    mobile: req.mobile,
    customer_id: req.customer_id,
  });
});

module.exports = router;

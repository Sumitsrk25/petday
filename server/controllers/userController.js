// controllers/userController.js

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const salt = 10;

function register(req, res) {
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error for hashing password" });

    userModel.registerUser(
      req.body.name,
      req.body.lname,
      req.body.email,
      req.body.mobile,
      // hash,  //If using Password in Bcrypt Hashing
      req.body.password,
      (err, result) => {
        if (err) return res.json({ Error: "Inserting data Error in server" });
        return res.json({ Status: "Success" });
      }
    );
  });
}

function login(req, res) {
  userModel.getUserByEmail(req.body.email, (err, data) => {
    if (err) return res.json({ Error: "Login Error" });

    if (data.length > 0) {
      // Compare plain passwords directly
      if (req.body.password === data[0].password) {
        const name = data[0].name;
        const mobile = data[0].mobile;
        const customer_id = data[0].customer_id;
        const token = jwt.sign(
          { name, mobile, customer_id }, // Ensure customer_id is included here
          "jwt-secret-key",
          {
            expiresIn: "1d",
          }
        );

        res.cookie("token", token);
        return res.json({ Status: "Success" });
      } else {
        return res.json({ Error: "Password not matched" });
      }
    } else {
      return res.json({ Error: "No Email Existed" });
    }
  });
}

function getPetsByCustomerId(req, res) {
  const customerId = req.params.customerId;

  if (!customerId || isNaN(customerId)) {
    return res.status(400).json({ Error: "Invalid customer ID" });
  }

  userModel.getPetsByCustomerId(customerId, (err, data) => {
    if (err) {
      console.error("Error fetching users:", err);
      return res.status(500).json({ Error: "Internal Server Error" });
    }
    if (data.length === 0) {
      return res
        .status(404)
        .json({ Message: "No users found for this customer ID" });
    }
    return res.status(200).json(data);
  });
}

function getPetByPetId(req, res) {
  const petId = req.params.petId;

  if (!petId || isNaN(petId)) {
    return res.status(400).json({ Error: "Invalid pet ID" });
  }

  userModel.getPetByPetId(petId, (err, data) => {
    if (err) {
      console.error("Error fetching users:", err);
      return res.status(500).json({ Error: "Internal Server Error" });
    }
    if (data.length === 0) {
      return res.status(404).json({ Message: "No pet found for this petId" });
    }
    return res.status(200).json(data);
  });
}

function getVets(req, res) {
  userModel.getVets((err, data) => {
    if (err) {
      console.error("Error fetching vets:", err);
      return res.status(500).json({ Error: "Internal Server Error" });
    }
    if (data.length === 0) {
      return res.status(404).json({ Message: "No vets found " });
    }
    return res.status(200).json(data);
  });
}

function getGrommers(req, res) {
  userModel.getGrommers((err, data) => {
    if (err) {
      console.error("Error fetching grommers:", err);
      return res.status(500).json({ Error: "Internal Server Error" });
    }
    if (data.length === 0) {
      return res.status(404).json({ Message: "No grommers found " });
    }
    return res.status(200).json(data);
  });
}

function getVetByVetId(req, res) {
  const vetId = req.params.vetId;

  if (!vetId || isNaN(vetId)) {
    return res.status(400).json({ Error: "Invalid Vet ID" });
  }

  userModel.getVetByVetId(vetId, (err, data) => {
    if (err) {
      console.error("Error fetching vet:", err);
      return res.status(500).json({ Error: "Internal Server Error" });
    }
    if (data.length === 0) {
      return res.status(404).json({ Message: "No vet found for this VetId" });
    }
    return res.status(200).json(data);
  });
}

function getGrommerByGrommerId(req, res) {
  const groomer_id = req.params.groomer_id;

  if (!groomer_id || isNaN(groomer_id)) {
    return res.status(400).json({ Error: "Invalid Grommer ID" });
  }

  userModel.getGrommerByGrommerId(groomer_id, (err, data) => {
    if (err) {
      console.error("Error fetching grommer:", err);
      return res.status(500).json({ Error: "Internal Server Error" });
    }
    if (data.length === 0) {
      return res
        .status(404)
        .json({ Message: "No Grommer found for this groomer_id" });
    }
    return res.status(200).json(data);
  });
}

function addPetProfile(req, res) {
  userModel.addPetProfile(
    req.body.customer_id,
    req.body.pet_type,
    req.body.name,
    req.body.lname,
    req.body.gender,
    req.body.age,

    (err, result) => {
      if (err) return res.json({ Error: "Inserting data Error in server" });
      return res.json({ Status: "Success" });
    }
  );
}

function bookAppointment(req, res) {
  userModel.bookAppointment(
    req.body.customer_id,
    req.body.pet_id,
    req.body.book_date,
    req.body.type,

    (err, result) => {
      if (err) return res.json({ Error: "Inserting data Error in server" });
      return res.json({ Status: "Success" });
    }
  );
}

function updatePetByPetId(req, res) {
  const petId = req.params.petId; // Correct parameter
  const { pet_type, name, lname, gender, age } = req.body;

  userModel.updatePetProfile(
    petId,
    pet_type,
    name,
    lname,
    gender,
    age,
    (err, result) => {
      if (err) {
        console.error("Error updating pet profile:", err);
        return res.status(500).json({ Error: "Error updating pet profile" });
      }
      res.json({ Status: "Success" });
    }
  );
}

// const addPetProfile = (req, res) => {
//   const { name, lname, gender, breed, age } = req.body;
//   const customerId = 1; // Example customer ID

//   console.log("Request Body:", req.body); // Debugging

//   userModel.addPetProfile(
//     customerId,
//     name,
//     lname,
//     gender,
//     breed,
//     age,
//     (err, result) => {
//       if (err) {
//         console.error("Database Error:", err);
//         return res.status(500).json({ message: "Failed to add pet profile." });
//       }
//       return res.status(200).json({ message: "Pet added successfully!" });
//     }
//   );
// };

function logout(req, res) {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
}
module.exports = {
  register,
  login,
  logout,
  getPetsByCustomerId,
  getPetByPetId,
  getVets,
  getGrommers,
  getVetByVetId,
  getGrommerByGrommerId,
  addPetProfile,
  updatePetByPetId,
  bookAppointment,
};

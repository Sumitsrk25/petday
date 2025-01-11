// controllers/userController.js

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const {
  validateWebhookSignature,
} = require("razorpay/dist/utils/razorpay-utils");
const { updateOrderStatus } = require("../models/userModel");

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
        console.log("Password not matched");

        return res.json({ Error: "Password not matched" });
      }
    } else {
      return res.json({ Error: "No Email Existed" });
    }
  });
}

function vetlogin(req, res) {
  userModel.getVetByEmail(req.body.email, (err, data) => {
    if (err) return res.json({ Error: "Login Error" });

    if (data.length > 0) {
      // Compare plain passwords directly
      if (req.body.password === data[0].password) {
        const name = data[0].firstName;
        const mobile = data[0].mobile;
        const customer_id = data[0].vetid;
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

function grommerlogin(req, res) {
  userModel.getGrommerByEmail(req.body.email, (err, data) => {
    if (err) return res.json({ Error: "Login Error" });

    if (data.length > 0) {
      // Compare plain passwords directly
      if (req.body.password === data[0].password) {
        const name = data[0].first_name;
        const mobile = data[0].mobile;
        const customer_id = data[0].vetid;
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

function getVetsCount(req, res) {
  userModel.getVetsCount((err, data) => {
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

function getUsersCount(req, res) {
  userModel.getUsersCount((err, data) => {
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

function getGrommersCount(req, res) {
  userModel.getGrommersCount((err, data) => {
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

function getUsers(req, res) {
  userModel.getUsers((err, data) => {
    if (err) {
      console.error("Error fetching users:", err);
      return res.status(500).json({ Error: "Internal Server Error" });
    }
    if (data.length === 0) {
      return res.status(404).json({ Message: "No users found " });
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

function getAppbyCustomerId(req, res) {
  const customer_id = req.params.customerId;

  if (!customer_id || isNaN(customer_id)) {
    return res.status(400).json({ Error: "Invalid customer_id" });
  }

  userModel.getAppbyCustomerId(customer_id, (err, data) => {
    if (err) {
      console.error("Error fetching customer_id:", err);
      return res.status(500).json({ Error: "Internal Server Error" });
    }
    if (data.length === 0) {
      return res
        .status(404)
        .json({ Message: "No customer found for this customer_id" });
    }
    return res.status(200).json(data);
  });
}

function getAppbyVetId(req, res) {
  const customer_id = req.params.customerId;

  if (!customer_id || isNaN(customer_id)) {
    return res.status(400).json({ Error: "Invalid customer_id" });
  }

  userModel.getAppbyCustomerId(customer_id, (err, data) => {
    if (err) {
      console.error("Error fetching customer_id:", err);
      return res.status(500).json({ Error: "Internal Server Error" });
    }
    if (data.length === 0) {
      return res
        .status(404)
        .json({ Message: "No customer found for this customer_id" });
    }
    return res.status(200).json(data);
  });
}

function getAppbyGromId(req, res) {
  const customer_id = req.params.customerId;

  if (!customer_id || isNaN(customer_id)) {
    return res.status(400).json({ Error: "Invalid customer_id" });
  }

  userModel.getAppbyGromId(customer_id, (err, data) => {
    if (err) {
      console.error("Error fetching customer_id:", err);
      return res.status(500).json({ Error: "Internal Server Error" });
    }
    if (data.length === 0) {
      return res
        .status(404)
        .json({ Message: "No customer found for this customer_id" });
    }
    return res.status(200).json(data);
  });
}

function getVaccinebyPetId(req, res) {
  const pet_id = req.params.petId;

  if (!pet_id || isNaN(pet_id)) {
    return res.status(400).json({ Error: "Invalid pet_id" });
  }

  userModel.getVaccinebyPetId(pet_id, (err, data) => {
    if (err) {
      console.error("Error fetching pet_id:", err);
      return res.status(500).json({ Error: "Internal Server Error" });
    }
    if (data.length === 0) {
      return res
        .status(404)
        .json({ Message: "No customer found for this pet_id" });
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

function addVetProfile(req, res) {
  const vetData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    mobile: req.body.mobile,
    email: req.body.email,
    password: req.body.password,
    location: req.body.location,
    postaladdress: req.body.postaladdress,
    pin: req.body.pin,
    city: req.body.city,
    state: req.body.state,
    gender: req.body.gender,
    bio: req.body.bio,
    gstno: req.body.gstno,
    medicalregno: req.body.medicalregno,
    workingdays: req.body.workingdays.join(","),
    workinghrs_frm: req.body.workinghrs_frm,
    workinghrs_to: req.body.workinghrs_to,
    speciality: req.body.speciality,
    clinicname: req.body.clinicname,
  };

  userModel.addVetProfile(vetData, (err, result) => {
    if (err) {
      return res.json({ Error: "Error adding vet profile" });
    }
    return res.json({ Status: "Success" });
  });
}

function addVaccine(req, res) {
  console.log("Request Body:", req.body);

  userModel.addVaccine(
    req.body.customer_id,
    req.body.pet_id,
    req.body.vaccine_name,

    (err, result) => {
      if (err) {
        console.error("Database Insertion Error:", err);
        return res.json({ Error: "Inserting data Error in server" });
      }
      console.log("Database Insertion Success:", result);
      return res.json({ Status: "Success" });
    }
  );
}

function bookAppointment(req, res) {
  console.log("Request Body:", req.body);
  const centername = req.body.clinicname || req.body.grooming_center_name;
  const vet_id = req.body.vet_id;

  if (!centername) {
    return res.json({
      Error: "Either clinicname or grooming_center_name is required",
    });
  }

  if (!vet_id) {
    return res.json({
      Error: "vet_id is required",
    });
  }

  userModel.bookAppointment(
    req.body.customer_id,
    req.body.pet_id,
    vet_id,
    req.body.book_date,
    req.body.type,
    centername,
    (err, result) => {
      if (err) return res.json({ Error: "Inserting data Error in server" });
      return res.json({ Status: "Success", result });
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

function updateVetByVetId(req, res) {
  const vetId = req.params.vetid; // Extract vetid from the URL
  const {
    firstName,
    lastName,
    email,
    mobile,
    password,
    location,
    postaladdress,
    pin,
    city,
    state,
    gender,
    bio,
    gstno,
    medicalregno,
    speciality,
    clinicname,
    workingdays,
    workinghrs_frm,
    workinghrs_to,
  } = req.body;

  // Call the update function from the user model
  userModel.updateVetProfile(
    vetId,
    firstName,
    lastName,
    email,
    mobile,
    password,
    location,
    postaladdress,
    pin,
    city,
    state,
    gender,
    bio,
    gstno,
    medicalregno,
    speciality,
    clinicname,
    workingdays,
    workinghrs_frm,
    workinghrs_to,
    (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        return res
          .status(500)
          .json({ error: new Error("Error updating vet profile").message });
      }

      // Send success response if no errors
      res.json({ Status: "Success" });
    }
  );
}

function updateStatus(req, res) {
  console.log("Request body received in updateStatus:", req.body);

  const { appointmentId, status } = req.body;

  if (!appointmentId || !status) {
    console.error("Missing appointmentId or status in request body.");
    return res.status(400).json({ Error: "Missing appointmentId or status" });
  }

  userModel.updateStatus(appointmentId, status, (err, result) => {
    if (err) {
      console.error("Error updating status in database:", err);
      return res.status(500).json({ Error: "Failed to update status" });
    }

    console.log("Database update result:", result);
    return res.json({ Status: "Success" });
  });
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

async function verifyPayment(req, res) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  //key_secert
  const secret = process.env.RZ_SECRET;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  try {
    const isValidSignature = validateWebhookSignature(
      body,
      razorpay_signature,
      secret
    );
    if (isValidSignature) {
      updateOrderStatus(
        razorpay_order_id,
        "paid",
        razorpay_payment_id,
        (err, result) => {
          if (err) {
            console.error("Error updating order status:", err);
            return res.status(500).json({
              status: "error",
              message: "Error updating order status",
            });
          }
          res.status(200).json({ status: "ok" });
          console.log("Payment verification successful");
        }
      );
    } else {
      res.status(400).json({ status: "verification_failed" });
      console.log("Payment verification failed");
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: "error", message: "Error verifying payment" });
  }
}

function logout(req, res) {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
}

module.exports = {
  register,
  login,
  vetlogin,
  grommerlogin,
  logout,
  getPetsByCustomerId,
  getPetByPetId,
  getVetsCount,
  getUsersCount,
  getGrommersCount,
  getVets,
  getUsers,
  getGrommers,
  getAppbyCustomerId,
  getAppbyVetId,
  getAppbyGromId,
  getVaccinebyPetId,
  getVetByVetId,
  getGrommerByGrommerId,
  addPetProfile,
  addVetProfile,
  addVaccine,
  updatePetByPetId,
  updateVetByVetId,
  bookAppointment,
  updateStatus,
  verifyPayment,
};

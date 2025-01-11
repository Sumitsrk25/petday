// models/userModel.js

const mysql = require("mysql2");

const db = mysql.createPool(process.env.DB_URI);

function registerUser(name, lname, email, mobile, password, callback) {
  const sql =
    "INSERT INTO customer (`name`, `lname`, `email`, `mobile`, `password`) VALUES ?";
  const values = [[name, lname, email, mobile, password]];

  db.query(sql, [values], callback);
}

// function registerUser(name, email, passwordHash, callback) {
//   const sql = "INSERT INTO customer (`name`, `email`, `password`) VALUES ?";
//   const values = [[name, email, passwordHash]];

//   db.query(sql, [values], callback);
// }
function getUserByEmail(email, callback) {
  const sql = "SELECT * FROM customer WHERE email = ?";
  db.query(sql, [email], callback);
}

function getVetByEmail(email, callback) {
  const sql = "SELECT * FROM vetdetails WHERE email = ?";
  db.query(sql, [email], callback);
}

function getGrommerByEmail(email, callback) {
  const sql = "SELECT * FROM groomer_details WHERE email = ?";
  db.query(sql, [email], callback);
}

function getPetsByCustomerId(customerId, callback) {
  const query = "SELECT * FROM pet_profile WHERE customer_id = ?";
  db.query(query, [customerId], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, results);
  });
}

function getPetByPetId(petId, callback) {
  const query = "SELECT * FROM pet_profile WHERE pet_id = ?";
  db.query(query, [petId], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, results[0]);
  });
}

function getVets(callback) {
  const query = "SELECT * FROM vetdetails";
  db.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, results);
  });
}

function getGrommers(callback) {
  const query = "SELECT * FROM groomer_details";
  db.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, results);
  });
}

function getVetByVetId(vetId, callback) {
  const query = "SELECT * FROM vetdetails WHERE vetid = ?";
  db.query(query, [vetId], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, results[0]);
  });
}

function getGrommerByGrommerId(groomer_id, callback) {
  const query = "SELECT * FROM groomer_details WHERE groomer_id = ?";
  db.query(query, [groomer_id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, results[0]);
  });
}

function getAppbyCustomerId(customer_id, callback) {
  const query =
    "SELECT * FROM `appointment` JOIN pet_profile ON appointment.pet_id = pet_profile.pet_id join vetdetails v on v.vetid = appointment.vetid WHERE appointment.customer_id = ?;";
  db.query(query, [customer_id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, results);
  });
}

function getAppbyVetId(customer_id, callback) {
  const query =
    "SELECT * FROM `appointment` JOIN pet_profile ON appointment.pet_id = pet_profile.pet_id join vetdetails v on v.vetid = appointment.vetid WHERE appointment.vetid = ?;";
  db.query(query, [customer_id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, results);
  });
}

function getAppbyGromId(customer_id, callback) {
  const query =
    "SELECT * FROM `appointment` JOIN pet_profile ON appointment.pet_id = pet_profile.pet_id join vetdetails v on v.vetid = appointment.vetid WHERE appointment.vetid = ?;";
  db.query(query, [customer_id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, results);
  });
}

function getVaccinebyPetId(pet_id, callback) {
  const query = "SELECT * FROM `vaccine_record` WHERE pet_id = ?;";
  db.query(query, [pet_id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, results);
  });
}

function addPetProfile(
  customer_id,
  pet_type,
  name,
  lname,
  gender,
  age,
  callback
) {
  const sql =
    "INSERT INTO pet_profile (`customer_id`,`pet_type`,`name`, `lname`,`gender`, `age`) VALUES ?";
  const values = [[customer_id, pet_type, name, lname, gender, age]];

  db.query(sql, [values], callback);
}

function addVetProfile(vetData, callback) {
  const sql = `
    INSERT INTO vetdetails 
    (firstName, lastName, mobile, email, password, location, postaladdress, pin, city, state, gender, bio, gstno, medicalregno, workingdays, workinghrs_frm, workinghrs_to, speciality, clinicname) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    vetData.firstName,
    vetData.lastName,
    vetData.mobile,
    vetData.email,
    vetData.password,
    vetData.location,
    vetData.postaladdress,
    vetData.pin,
    vetData.city,
    vetData.state,
    vetData.gender,
    vetData.bio,
    vetData.gstno,
    vetData.medicalregno,
    vetData.workingdays,
    vetData.workinghrs_frm,
    vetData.workinghrs_to,
    vetData.speciality,
    vetData.clinicname,
  ];

  db.query(sql, values, callback);
}

function bookAppointment(
  customer_id,
  pet_id,
  vet_id,
  book_date,
  type,
  clinicname,
  callback
) {
  const sql =
    "INSERT INTO appointment (`customer_id`,`pet_id`,`vetid`,`book_date`,`type`,`centername`) VALUES ?";
  const values = [[customer_id, pet_id, vet_id, book_date, type, clinicname]];
  db.query(sql, [values], callback);
}

function addVaccine(customer_id, pet_id, vaccine_name, callback) {
  const sql =
    "INSERT INTO vaccine_record (`customer_id`,`pet_id`,`vaccine_name`) VALUES ?";
  const values = [[customer_id, pet_id, vaccine_name]];
  db.query(sql, [values], callback);
}

function updatePetProfile(petId, pet_type, name, lname, gender, age, callback) {
  const sql =
    "UPDATE pet_profile SET pet_type = ?, name = ?, lname = ?, gender = ?, age = ? WHERE pet_id = ?";
  db.query(sql, [pet_type, name, lname, gender, age, petId], callback);
}

function updateVetProfile(
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
  callback
) {
  const sql = `
    UPDATE vetdetails SET 
      firstName = ?, lastName = ?, email = ?, mobile = ?, password = ?, location = ?, 
      postaladdress = ?, pin = ?, city = ?, state = ?, gender = ?, bio = ?, 
      gstno = ?, medicalregno = ?, speciality = ?, clinicname = ?, 
      workingdays = ?, workinghrs_frm = ?, workinghrs_to = ?
    WHERE vetid = ?
  `;

  db.query(
    sql,
    [
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
      vetId,
    ],
    (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        // Return the error correctly via callback
        return callback(new Error("Error executing query"), null); // Correctly return error using new Error
      }

      // On success, return the result
      callback(null, result);
    }
  );
}

function updateStatus(appointmentId, status, callback) {
  const sql = "UPDATE appointment SET status = ? WHERE aid = ?";
  console.log("Executing query:", sql, [status, appointmentId]);

  db.query(sql, [status, appointmentId], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return callback(err, null);
    }

    console.log("Query executed successfully, result:", result);
    callback(null, result);
  });
}

module.exports = {
  registerUser,
  getUserByEmail,
  getVetByEmail,
  getGrommerByEmail,
  getPetsByCustomerId,
  getPetByPetId,
  getVets,
  getGrommers,
  getAppbyCustomerId,
  getAppbyVetId,
  getAppbyGromId,
  getVetByVetId,
  getVaccinebyPetId,
  getGrommerByGrommerId,
  addPetProfile,
  addVetProfile,
  addVaccine,
  updatePetProfile,
  updateVetProfile,
  bookAppointment,
  updateStatus,
};

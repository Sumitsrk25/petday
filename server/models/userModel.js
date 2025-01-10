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

function bookAppointment(customer_id, pet_id, book_date, type, callback) {
  const sql =
    "INSERT INTO appointment (`customer_id`,`pet_id`,`book_date`,`type`) VALUES ?";
  const values = [[customer_id, pet_id, book_date, type]];

  db.query(sql, [values], callback);
}

function updatePetProfile(petId, pet_type, name, lname, gender, age, callback) {
  const sql =
    "UPDATE pet_profile SET pet_type = ?, name = ?, lname = ?, gender = ?, age = ? WHERE pet_id = ?";
  db.query(sql, [pet_type, name, lname, gender, age, petId], callback);
}

module.exports = {
  registerUser,
  getUserByEmail,
  getPetsByCustomerId,
  getPetByPetId,
  getVets,
  getGrommers,
  getVetByVetId,
  getGrommerByGrommerId,
  addPetProfile,
  updatePetProfile,
  bookAppointment,
};

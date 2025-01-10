// models/userModel.js

const mysql = require("mysql2");
const Razorpay = require('razorpay');
const { validateWebhookSignature } = require('razorpay/dist/utils/razorpay-utils');

const razorpay = new Razorpay({
  key_id: process.env.RZ_KEY,
  key_secret: process.env.RZ_SECRET,
});

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
  createOrder({ amt: 1 }, (err, order) => {
    if (err) {
      return callback(err, null);
    }

    const sql =
      "INSERT INTO appointment (`customer_id`,`pet_id`,`book_date`,`type`, `transaction_id`) VALUES ?";
    const values = [[customer_id, pet_id, book_date?.split?.("T")?.[0] || '', type, order[1].insertId]];

    db.query(sql, [values], (err, result) => callback(err, [...order, result]));
  });
}

async function createOrder(req, callback) {
  try {
    const { amt: amount } = req;

    const options = {
      amount: amount * 100, // Convert amount to paise
      currency: "INR",
      receipt: "receipt#1",
      notes: {},
    };

    const order = await razorpay.orders.create(options);

    const sql = "INSERT INTO order_transaction (rz_order_id, rz_amount, rz_status) VALUES (?, ?, ?)";
    const values = [order.id, order.amount, 'created'];

    db.query(sql, values, (err, result) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, [order, result]);
    });
  } catch (error) {
    callback(error, null);
  }
}

function updateOrderStatus(orderId, status, paymentId, callback) {
  const sql = "UPDATE order_transaction SET rz_status = ?, rz_payment_id = ? WHERE rz_order_id = ?";
  db.query(sql, [status, paymentId, orderId], callback);
}

function updatePetProfile(petId, pet_type, name, lname, gender, age, callback) {
  const sql =
    "UPDATE pet_profile SET pet_type = ?, name = ?, lname = ?, gender = ?, age = ? WHERE pet_id = ?";
  db.query(sql, [pet_type, name, lname, gender, age, petId], callback);
}

function verifyPayment() { }

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
  updateOrderStatus,
};
